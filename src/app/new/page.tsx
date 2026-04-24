"use client"

import { useState } from "react";
import { useExpenses } from "@/context/ExpensesContext";
import { useRouter } from "next/navigation";

type SelectedCategory = {
    name: string;
    value: string;
};

type ExpenseFormValue = {
    description: string;
    monto: string;
    fecha: string;
    category: string;
};

export default function New() {

    const { createExpense } = useExpenses()
    const router = useRouter()

    const expense_categories = [
        { id: 0, value: 'comida', label: 'Comida' },
        { id: 1, value: 'entretenimiento', label: 'Entretenimiento' },
        { id: 2, value: 'salud', label: 'Salud' },
        { id: 3, value: 'compras', label: 'Compras' },
        { id: 4, value: 'servicios', label: 'Servicios' },
        { id: 5, value: 'otros', label: 'Otros' }
    ] as const;

    const [selected, setSelected] = useState<SelectedCategory>({
        name: "category",
        value: expense_categories[0].value,
    });
    const [expense, setExpense] = useState<ExpenseFormValue>({
        description: "",
        monto: "",
        fecha: "",
        category: expense_categories[0].value,
    });

    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelected({ name: e.target.name, value: e.target.value });
        setExpense({
            ...expense,
            [e.target.name]: e.target.value,
        });
        console.log(e.target.name, e.target.value)
    };

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setExpense({
            ...expense,
            [name]: value,
        });

        console.log(e.target.name, e.target.value)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        createExpense(
            expense.description,
            expense.category,
            expense.fecha,
            Number(expense.monto)
        );
        console.log(expense)
        router.push('/')
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="pb-4">
                    <label htmlFor="">Descripción</label>
                    <input
                        onChange={handleInput}
                        value={expense.description}
                        name="description"
                        className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
                <div className="pb-4">
                    <label htmlFor="monto">Monto</label>
                    <input
                        id="monto"
                        type="number"
                        inputMode="decimal"
                        onChange={handleInput}
                        value={expense.monto}
                        name="monto"
                        className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
                <section className="pb-4">
                    <label htmlFor="">Categoría</label>
                    <select className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        name="category"
                        value={selected.value} onChange={handleSelect}>
                        {expense_categories.map((cat) => (
                            <option key={cat.id} value={cat.value}>{cat.label}</option>
                        ))}
                    </select>
                    <div><p>{selected.name}: {selected.value}</p></div>
                </section>
                <div className="pb-4">
                    <label htmlFor="">Fecha</label>
                    <input
                        onChange={handleInput}
                        name="fecha"
                        value={expense.fecha}
                        className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
                <button>Guardar</button>
            </form>
        </>
    )
}
