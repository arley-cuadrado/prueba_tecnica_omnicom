"use client"

import { useExpenses } from "@/context/ExpensesContext";

export default function ExpensesAside() {
    const { expenses } = useExpenses();

    return (
        <>
            <aside>
                <h2 className="pb-8">Gastos por categoría</h2>
                {expenses.map((expense) => (
                    <div key={expense.id} className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                            <h3 className="font-medium text-black">{expense.description}</h3>
                            <p className="mt-1 text-sm text-gray-600">
                                {expense.category} · {expense.date}
                            </p>
                        </div>
                        <p className="text-lg font-semibold text-black">{expense.amount}</p>
                    </div>
                ))
                }
            </aside>
        </>
    )
}
