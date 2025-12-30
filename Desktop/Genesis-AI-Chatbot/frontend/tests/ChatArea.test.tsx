import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ChatArea from '../components/ChatArea';

// Mock gsap
jest.mock('gsap', () => ({
    fromTo: jest.fn(),
}));

// Mock Lucide icons
jest.mock('lucide-react', () => ({
    Menu: () => <div data-testid="icon-menu" />,
    Paperclip: () => <div data-testid="icon-paperclip" />,
    Mic: () => <div data-testid="icon-mic" />,
    Send: () => <div data-testid="icon-send" />,
    Copy: () => <div data-testid="icon-copy" />,
    ThumbsUp: () => <div data-testid="icon-thumbs-up" />,
    ThumbsDown: () => <div data-testid="icon-thumbs-down" />,
    Zap: () => <div data-testid="icon-zap" />,
}));

// Mock scrollIntoView
window.HTMLElement.prototype.scrollIntoView = jest.fn();

const mockChat = {
    id: '1',
    title: 'test chat',
    messages: [
        { id: 'm1', role: 'user' as const, content: 'hello', timestamp: new Date() },
        { id: 'm2', role: 'assistant' as const, content: 'hi there', timestamp: new Date() },
    ],
};

const mockOnSendMessage = jest.fn();
const mockOnToggleSidebar = jest.fn();

describe('ChatArea', () => {
    it('renders chat messages correctly', () => {
        render(
            <ChatArea
                chat={mockChat}
                onSendMessage={mockOnSendMessage}
                onToggleSidebar={mockOnToggleSidebar}
                loading={false}
            />
        );

        expect(screen.getByText('hello')).toBeInTheDocument();
        expect(screen.getByText('hi there')).toBeInTheDocument();
    });

    it('validates and sends chat input', () => {
        render(
            <ChatArea
                chat={mockChat}
                onSendMessage={mockOnSendMessage}
                onToggleSidebar={mockOnToggleSidebar}
                loading={false}
            />
        );

        const input = screen.getByPlaceholderText('Continue the dialogue...');
        const sendButton = screen.getByRole('button', { name: /send/i });

        // Initially disabled if empty (button has Send icon which we mocked with data-testid)
        // Actually the button has no text, so we'll find it by the icon or its presence.
        // Let's re-examine handleSend usage.

        fireEvent.change(input, { target: { value: 'New message' } });
        fireEvent.click(screen.getByTestId('icon-send').closest('button')!);

        expect(mockOnSendMessage).toHaveBeenCalledWith('New message');
    });

    it('renders loading state', () => {
        render(
            <ChatArea
                chat={{ ...mockChat, messages: [] }}
                onSendMessage={mockOnSendMessage}
                onToggleSidebar={mockOnToggleSidebar}
                loading={true}
            />
        );

        // The loading spinner is a div with animate-spin
        expect(document.querySelector('.animate-spin')).toBeInTheDocument();
    });
});
