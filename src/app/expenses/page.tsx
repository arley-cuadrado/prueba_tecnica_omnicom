"use client"

import { useRouter } from "next/navigation";
import { useExpenses } from "@/context/ExpensesContext";

export default function ExpensesPage() {

    const router = useRouter();
    const { expenses } = useExpenses();

    console.log("Prubea contexto...", expenses);

    return (
        <>
            <section>
                <header className="pb-8">
                    <h2 className="mt-2 text-2xl font-semibold text-black">Gastos</h2>
                    <p>Consulta, filtra y administra tus gastos.</p>
                </header>
                <aside>
                    <h2 className="pb-8">Gastos por categoría</h2>
                    {expenses.map((expense) => (
                        <div
                            onClick={() => router.push(`/edit/${expense.id}`)}
                            key={expense.id}
                            className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between rounded border border-gray-200 bg-white mb-4 p-4">
                            <div>
                                <h3 className="font-medium text-black">{expense.description}</h3>
                                <p className="mt-1 text-sm text-gray-600">
                                    {expense.category} · {expense.date}
                                </p>
                            </div>
                            <div className="flex flex-col">
                                <p className="text-lg font-semibold text-black">{expense.amount}</p>
                                <button>Delete</button>
                            </div>
                        </div>
                    ))
                    }
                </aside>
            </section>
        </>
    )
}






