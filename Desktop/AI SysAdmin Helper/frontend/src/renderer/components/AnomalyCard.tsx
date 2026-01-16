
export const AnomalyCard = ({ title, severity }: any) => (
    <div className="p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
        <h4 className="font-bold text-zinc-900">{title}</h4>
        <span className="text-xs text-red-500 font-bold uppercase">{severity}</span>
    </div>
);
