import { useState, useEffect } from 'react';

export function useFetch(url: string) {
    const [data] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch logic placeholder
        setLoading(false);
    }, [url]);

    return { data, loading };
}
