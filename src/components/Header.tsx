import Link from "next/link";

export function Header() {
    return (
        <>
            <header className="flex w-full max-w-3xl flex-row pt-4 pb-4 gap-10 justify-between">
                <div>
                    <Link href="/">
                        Expenses Omnicom
                    </Link>
                </div>
                <div className="flex flex-row gap-10">
                    <Link href="/expenses">
                        Gastos
                    </Link>
                    <nav>
                        <Link href="/dashboard">
                            Dashboard
                        </Link>
                    </nav>
                </div>
            </header>
        </>
    )
}