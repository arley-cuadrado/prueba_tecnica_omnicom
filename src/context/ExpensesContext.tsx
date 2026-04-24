"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { v4 as uuid } from "uuid";

export type Expense = {
    id: string;
    description: string;
    category: string;
    date: string;
    amount: number;
};

export type ExpenseInput = Omit<Expense, "id">;

export type ExpensesContextValue = {
    expenses: Expense[];
    createExpense: (
        description: string,
        category: string,
        date: string,
        amount: number
    ) => void;
    deleteExpense: (id: string) => void;
    updateExpense: (id: string, updatedExpense: ExpenseInput) => void;
};

export const ExpensesContext = createContext<ExpensesContextValue>({
    expenses: [],
    createExpense: () => { },
    deleteExpense: () => { },
    updateExpense: () => { },
});

type ExpensesProviderProps = {
    children: ReactNode;
};

// Hook para expenses
export const useExpenses = () => {
    return useContext(ExpensesContext);
};

export function ExpensesProvider({ children }: ExpensesProviderProps) {
    // expense global window    
    const [expenses, setExpenses] = useState<Expense[]>(() => {
        if (typeof window === "undefined") {
            return [];
        }

        // localstorage
        const item = window.localStorage.getItem("expenses");
        if (!item) {
            return [];
        }

        const savedExpenses = JSON.parse(item) as Expense[];
        // console.log("LOCALSTORAGE ", savedExpenses);

        return savedExpenses;
    });

    // Crear nuevo gasto
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

    //Eliminar gasto
    const deleteExpense = (id: string): void => {
        setExpenses((currentExpenses) =>
            currentExpenses.filter((expense) => expense.id !== id)
        );
    };

    //Editar gasto
    const updateExpense = (id: string, updatedExpense: ExpenseInput): void => {
        setExpenses((currentExpenses) =>
            currentExpenses.map((expense) =>
                expense.id === id ? { ...expense, ...updatedExpense } : expense
            )
        );
    };

    useEffect(() => {
        if (typeof window === "undefined") {
            return;
        }

        window.localStorage.setItem("expenses", JSON.stringify(expenses));
    }, [expenses]);

    return (
        <ExpensesContext.Provider value={{
            expenses,
            createExpense,
            deleteExpense,
            updateExpense
        }}>
            {children}
        </ExpensesContext.Provider>
    );
}

export default ExpensesContext;
