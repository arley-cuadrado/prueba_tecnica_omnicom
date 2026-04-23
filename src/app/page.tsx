import { MetricCard } from "@/components/MetricCard";
import { Chart } from "@/components/Chart";
import ExpensesAside from '../components/ExpensesAside';

export default function Home() {

  const metricCard = [
    { id: 0, label: 'Total gastado este mes', value: 1000 },
    { id: 1, label: 'Promedio diario de gastos', value: 2000 },
    { id: 2, label: 'Categoria con mayor gasto', value: 3000 },
    { id: 3, label: 'Transacciones del mes', value: 4000 }
  ]

  return (
    <>
      <header className="pb-8">
        <h2 className="mt-2 text-2xl font-semibold text-black">Dashboard</h2>
        <p>Resumen de gastos personales.</p>
      </header>
      <section className="flex flex-row gap-4">
        {
          metricCard.map((item) => (
            <MetricCard key={item.id} label={item.label} value={item.value} />
          ))
        }
      </section>
      <section className="flex flex-row gap-16 pt-8">
        <Chart />
        <ExpensesAside />
      </section>
    </>
  );
}



