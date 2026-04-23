"use client"

import { createContext, useContext, type ReactNode } from "react";

export type Expense = {
    id: number;
    description: string;
    category: string;
    date: string;
    amount: number;
};

export type ExpensesContextValue = {
    expenses: Expense[];
};

export const ExpensesContext = createContext<ExpensesContextValue>({
    expenses: [],
});

type ExpensesProviderProps = {
    children: ReactNode;
};

// hook para expenses
export const useExpenses = () => {
    return useContext(ExpensesContext);
};

export function ExpensesProvider({ children }: ExpensesProviderProps) {
    const expenses: Expense[] = [
        { id: 0, description: "Transporte diario", category: "Transporte", date: "21 de abr de 2026", amount: 7200 },
        { id: 1, description: "Mercado", category: "Compras", date: "20 de abr de 2026", amount: 185000 },
        { id: 2, description: "Internet", category: "Servicios", date: "18 de abr de 2026", amount: 95000 },
        { id: 3, description: "Consulta medica", category: "Salud", date: "15 de abr de 2026", amount: 80000 },
        { id: 4, description: "Cine", category: "Entretenimiento", date: "12 de abr de 2026", amount: 42000 }
    ];

    return (
        <ExpensesContext.Provider value={{
            expenses
        }}>
            {children}
        </ExpensesContext.Provider>
    );
}

export default ExpensesContext;
