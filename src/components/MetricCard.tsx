"use client"

import { useEffect, useState } from "react";
import { useExpenses } from "@/context/ExpensesContext";

type MetricCardProps = {
    label: string;
    value: number | string;
};

export function MetricCard({ label, value }: MetricCardProps) {
    const { expenses } = useExpenses();

    // Hydration
    const [hasMounted, setHasMounted] = useState(false);
    useEffect(() => {
        queueMicrotask(() => {
            setHasMounted(true);
        });
    }, []);
    //-----------

    // Total gasto del mes
    const totalSpentThisMonth = expenses.reduce(
        (total, expense) => total + expense.amount,
        0
    );

    // Promedio gasto dia
    const averageDailyExpenses = totalSpentThisMonth / (expenses.length || 1);

    // Categoria mayor gasto
    const topCategory = [...expenses].sort((a, b) => b.amount - a.amount)[0]?.category || "Sin categoria";

    // Total transacciones
    const monthlyTransactions = expenses.length;

    const metricValue = label === "Total gastado este mes"
        ? totalSpentThisMonth
        : label === "Promedio diario de gastos"
            ? averageDailyExpenses
            : label === "Categoria con mayor gasto"
                ? topCategory
                : label === "Transacciones del mes"
                    ? monthlyTransactions
                    : value;

    //-----------
    const displayValue = hasMounted ? metricValue : value;


    return (
        <>
            <article className="rounded border border-gray-200 bg-white w-full p-4">
                <p className="text-sm text-gray-600">{label}</p>
                <p className="mt-2 text-2xl font-semibold text-black">{displayValue}</p>
            </article>
        </>
    );
}
