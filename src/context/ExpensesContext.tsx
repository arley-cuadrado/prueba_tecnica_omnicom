"use client"

import { createContext, useContext, type ReactNode } from "react";

type Expense = any;

type ExpensesContextValue = {
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
    const context = useContext(ExpensesContext)
    return context
}

export function ExpensesProvider({ children }: ExpensesProviderProps) {
    const expenses: Expense[] = ['Uno', 'Dos', 3, 4, 5, 6, 7];

    return (
        <ExpensesContext.Provider value={{
            expenses
        }}>
            {children}
        </ExpensesContext.Provider>
    );
}

export default ExpensesContext;
