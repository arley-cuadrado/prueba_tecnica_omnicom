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

type NewPageProps = {
    expenseId?: string;
};

export default function New({ expenseId }: NewPageProps) {
    const { createExpense, expenses, updateExpense } = useExpenses();
    const router = useRouter();

    const expense_categories = [
        { id: 0, value: 'comida', label: 'Comida' },
        { id: 1, value: 'entretenimiento', label: 'Entretenimiento' },
        { id: 2, value: 'salud', label: 'Salud' },
        { id: 3, value: 'compras', label: 'Compras' },
        { id: 4, value: 'servicios', label: 'Servicios' },
        { id: 5, value: 'otros', label: 'Otros' }
    ] as const;

    const currentExpense = expenseId
        ? expenses.find((item) => item.id === expenseId)
        : undefined;

    const [selected, setSelected] = useState<SelectedCategory>({
        name: "category",
        value: currentExpense?.category ?? expense_categories[0].value,
    });

    // Valores iniciales formulario
    const [expense, setExpense] = useState<ExpenseFormValue>({
        description: currentExpense?.description ?? "",
        monto: currentExpense ? String(currentExpense.amount) : "",
        fecha: currentExpense?.date ?? "",
        category: currentExpense?.category ?? expense_categories[0].value,
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
        const expenseData = {
            description: expense.description,
            category: expense.category,
            date: expense.fecha,
            amount: Number(expense.monto),
        };

        if (expenseId) {
            updateExpense(expenseId, expenseData);
        } else {
            createExpense(
                expense.description,
                expense.category,
                expense.fecha,
                Number(expense.monto)
            );
        }

        router.push("/expenses");
    };

    return (
        <><section className="w-full flex justify-center items-center">
            <form onSubmit={handleSubmit} className="w-100 flex flex-col">
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
                <div className="pt-8 pb-8 flex flex-row gap-16">
                    <button
                        type="submit"
                        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-full"
                    >Guardar
                    </button>
                    <button
                        type="button"
                        onClick={() => router.push("/expenses")}
                        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-full"
                    >Cancelar
                    </button>
                </div>
            </form>
        </section>
        </>
    )
}
