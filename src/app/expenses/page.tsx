"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useExpenses } from "@/context/ExpensesContext";

export default function ExpensesPage() {

    const router = useRouter();
    const { expenses } = useExpenses();
    const { deleteExpense } = useExpenses();

    console.log("Prubea contexto...", expenses);

    return (
        <>
            <section className="w-full max-w-5xl">
                <div className="flex flex-row justify-between">
                    <header className="pb-8">
                        <h2 className="mt-2 text-2xl font-semibold text-black">Gastos</h2>
                        <p>Consulta, filtra y administra tus gastos.</p>
                    </header>
                    <div><Link className="text-decoration-line: underline" href="/new">Agregar nuevo gasto</Link></div>
                </div>
                <aside>
                    <h2 className="pb-8">Gastos por categoría</h2>
                    {expenses.map((expense) => (
                        <div
                            key={expense.id}
                            className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between rounded border border-gray-200 bg-white mb-4 p-4">
                            <div>
                                <h3 className="font-medium text-black">{expense.description}</h3>
                                <p className="mt-1 text-sm text-gray-600">
                                    {expense.category} · {expense.date}
                                </p>
                                <div className="w-45 pt-4 flex flex-row justify-between">
                                    <button
                                        onClick={() => router.push(`/edit/${expense.id}`)}
                                        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-full"
                                    >Editar</button>

                                    <button
                                        onClick={() => { deleteExpense(expense.id) }}
                                        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-full"
                                    >Eliminar</button>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <p className="text-lg font-semibold text-black text-right pb-4">{expense.amount}</p>
                            </div>
                        </div>
                    ))
                    }
                </aside>
            </section>
        </>
    )
}






