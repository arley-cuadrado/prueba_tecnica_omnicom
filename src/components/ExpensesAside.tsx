export default function ExpensesAside() {

    const expensesAside = [
        { id: 0, description: 'Transporte diario', category: 'Transporte', date: '21 de abr de 2026', amount: 7.200 },
        { id: 1, description: 'Mercado', category: 'Compras', date: '20 de abr de 2026', amount: 185.000 },
        { id: 2, description: 'Internet', category: 'Servicios', date: '18 de abr de 2026', amount: 95.000 },
        { id: 3, description: 'Consulta médica', category: 'Salud', date: '15 de abr de 2026', amount: 80.000 },
        { id: 4, description: 'Cine', category: 'Entretenimiento', date: '12 de abr de 2026', amount: 42.000 }
    ]

    return (
        <>
            <aside>
                <h2 className="pb-8">Gastos por categoría</h2>
                {expensesAside.map((expense, index) => (
                    <div key={index} className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                            <h3 className="font-medium text-black">{expense.description}</h3>
                            <p className="mt-1 text-sm text-gray-600">
                                {expense.category} · {expense.date} {/*{formatDate(expense.date)}*/}
                            </p>
                        </div>
                        <p className="text-lg font-semibold text-black">{expense.amount} {/* {formatCurrency(expense.amount)} */}</p>
                    </div>
                ))

                }
            </aside>
        </>
    )
}