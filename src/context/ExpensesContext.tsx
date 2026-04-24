"use client"

import { createContext, useContext, useState, type ReactNode } from "react";
import { v4 as uuid } from "uuid";

export type Expense = {
    id: string;
    description: string;
    category: string;
    date: string;
    amount: number;
};

export type ExpensesContextValue = {
    expenses: Expense[];
    createExpense: (
        description: string,
        category: string,
        date: string,
        amount: number
    ) => void;
};

export const ExpensesContext = createContext<ExpensesContextValue>({
    expenses: [],
    createExpense: () => { },
});

type ExpensesProviderProps = {
    children: ReactNode;
};

// hook para expenses
export const useExpenses = () => {
    return useContext(ExpensesContext);
};

export function ExpensesProvider({ children }: ExpensesProviderProps) {
    const [expenses, setExpenses] = useState<Expense[]>([
        { id: "0", description: "Transporte diario", category: "Transporte", date: "21 de abr de 2026", amount: 7200 },
        { id: "1", description: "Mercado", category: "Compras", date: "20 de abr de 2026", amount: 185000 },
        { id: "2", description: "Internet", category: "Servicios", date: "18 de abr de 2026", amount: 95000 },
        { id: "3", description: "Consulta medica", category: "Salud", date: "15 de abr de 2026", amount: 80000 },
        { id: "4", description: "Cine", category: "Entretenimiento", date: "12 de abr de 2026", amount: 42000 }
    ]);

    const createExpense = (
        description: string,
        category: string,
        date: string,
        amount: number
    ): void => {
        setExpenses((currentExpenses) => [
            ...currentExpenses,
            {
                description,
                category,
                date,
                amount,
                id: uuid(),
            },
        ]);
    };



    return (
        <ExpensesContext.Provider value={{
            expenses,
            createExpense
        }}>
            {children}
        </ExpensesContext.Provider>
    );
}

export default ExpensesContext;
