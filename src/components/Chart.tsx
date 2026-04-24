"use client"

import { useExpenses } from "@/context/ExpensesContext";

export function Chart() {
    const { expenses } = useExpenses();

    const categoryTotals: Record<string, number> = {};

    expenses.forEach((expense) => {
        if (!categoryTotals[expense.category]) {
            categoryTotals[expense.category] = 0;
        }

        categoryTotals[expense.category] += expense.amount;
    });

    const chartData = Object.entries(categoryTotals).map(([category, value]) => {
        return { category, value };
    });

    const chartMaxValue = Math.max(...chartData.map((item) => item.value), 1);

    return (
        <>
            <section>
                <h2 className="pb-8">Gastos por categoría</h2>
                <div className="space-y-4 w-auto lg:w-100">
                    {chartData.map((item) => (
                        <div key={item.category}>
                            <div className="mb-1 flex justify-between gap-4 text-sm">
                                <span className="text-gray-700">{item.category}</span>
                                <span className="font-medium text-black">{item.value}</span>
                            </div>
                            <div className="h-3 rounded bg-gray-100">
                                <div
                                    className="h-3 rounded bg-gray-800 w-1"
                                    style={{ width: `${(item.value / chartMaxValue) * 100}%` }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
