"use client"

import { useEffect, useState } from "react";
import { useExpenses } from "@/context/ExpensesContext";

export default function ExpensesAside() {
    const { expenses } = useExpenses();

    // Hydration
    const [hasMounted, setHasMounted] = useState(false);
    useEffect(() => {
        queueMicrotask(() => {
            setHasMounted(true);
        });
    }, []);
    //-----------

    //-----------
    const displayExpenses = hasMounted ? expenses : [];

    return (
        <>
            <aside className="w-full">
                <h2 className="pb-8">Gastos resientes</h2>
                {displayExpenses.map((expense) => (
                    <div key={expense.id} className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between rounded border border-gray-200 bg-white w-auto p-4 mb-4">
                        <div>
                            <h3 className="font-medium text-black">{expense.description}</h3>
                            <p className="mt-1 text-sm text-gray-600">
                                {expense.category} · {expense.date}
                            </p>
                        </div>
                        <p className="text-lg font-semibold text-black">
                            {Number.isNaN(expense.amount) ? "0" : String(expense.amount)}
                        </p>
                    </div>
                ))
                }
            </aside>
        </>
    )
}
