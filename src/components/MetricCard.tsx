"use client"

import { useExpenses } from "@/context/ExpensesContext";

type MetricCardProps = {
    label: string;
    value: number;
};

export function MetricCard({ label, value }: MetricCardProps) {
    const { expenses } = useExpenses();

    // Total gasto del mes
    const totalSpentThisMonth = expenses.reduce(
        (total, expense) => total + expense.amount,
        0
    );
    const metricValue = label === "Total gastado este mes" ? totalSpentThisMonth : value;


    return (
        <>
            <article className="rounded border border-gray-200 bg-white p-4">
                <p className="text-sm text-gray-600">{label}</p>
                <p className="mt-2 text-2xl font-semibold text-black">{metricValue}</p>
            </article>
        </>
    );
}
