type MetricCardProps = {
    label: string;
    value: number;
}

export function MetricCard({ label, value }: MetricCardProps) {
    return (
        <>
            <article className="rounded border border-gray-200 bg-white p-4">
                <p className="text-sm text-gray-600">{label}</p>
                <p className="mt-2 text-2xl font-semibold text-black">{value}</p>
            </article>
        </>
    )
}