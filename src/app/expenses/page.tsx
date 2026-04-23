"use client"

import { useExpenses } from "@/context/ExpensesContext"

export default function ExpensesPage() {

    const { expenses } = useExpenses()

    console.log("Prubea contexto...", expenses)

    return (
        <>
            <header className="pb-8">
                <h2 className="mt-2 text-2xl font-semibold text-black">Gastos</h2>
                <p>Consulta, filtra y administra tus gastos.</p>
            </header>
        </>
    )
}
