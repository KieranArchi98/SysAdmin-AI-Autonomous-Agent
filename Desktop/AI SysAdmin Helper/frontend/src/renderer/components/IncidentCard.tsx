
export const IncidentCard = ({ id, status }: any) => (
    <div className="p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
        <h4 className="font-bold text-zinc-900">Incident #{id}</h4>
        <span className="text-xs text-blue-500 font-bold uppercase">{status}</span>
    </div>
);
