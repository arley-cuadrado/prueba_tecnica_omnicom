"use client"

import { useExpenses } from "@/context/ExpensesContext";

export function Chart() {

    const charData = [
        { id: 0, category: 'Compras', value: 100.000, percent: 100 },
        { id: 1, category: 'Servicios', value: 90.000, percent: 90 },
        { id: 2, category: 'Salud', value: 40.000, percent: 40 },
        { id: 3, category: 'Entretenimiento', value: 25.000, percent: 25 },
    ]

    const chartMaxValue = 100;


    const expense = useExpenses();

    console.log('EXPENSESSS ', expense)

    return (
        <>
            <section>
                <h2 className="pb-8">Gastos por categoría</h2>
                <div className="space-y-4 w-100">
                    {charData.map((item) => (
                        <div key={item.id}>
                            <div className="mb-1 flex justify-between gap-4 text-sm">
                                <span className="text-gray-700">{item.category}</span>
                                <span className="font-medium text-black">{(item.value)}</span>
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
    )
}