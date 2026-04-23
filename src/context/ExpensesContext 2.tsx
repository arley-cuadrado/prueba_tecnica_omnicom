import { createContext } from "react";

const ExpenseContext = createContext()

const ExpenseProvider = ({ children: any }) => {
    return (
        <ExpenseContext.Provider>
            {children}
        </ExpenseContext.Provider>
    )
}