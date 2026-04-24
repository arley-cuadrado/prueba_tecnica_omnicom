This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

-----------------------------------
## Potencial integración de AI
-----------------------------------

Agregaría AI como una capa complementaria, ya que es saludable separarla formando una arquitectura independiente, simple pero coherente, evitando usarla como reemplazo de la lógica principal. Su uso sería fundamentalmente para analizar gastos y generar recomendaciones como agente financiero.

1- El flujo sería algo simple: Primero, el usuario da click en el botón “Analizar gastos”, el frontend recorre y resume los datos importantes (gastos, categorías, promedios-montos y fechas), una vez terminado, los envía a una API que llama al modelo y devuelve las sugerencias.

2- A nivel de arquitectura, mantendría el manejo de gastos (ExpensesContext) separado, esto aislará la AI en un servicio backend, y el frontend solo consume esa funcionalidad cuando se necesita.

3- La app no es grande por lo que empezaría con una sola llamada al modelo con flujo simple. Si escala podría considerar crear steps pasos del tipo: 
análisis => detección de patrones => recomendaciones. 

Consideraría loading, manejo claro de errores y evitar llamadas automáticas para no afectar la latencia ni la experiencia. Siempre es importante que el cliente o usuario final sea quien ejecute la acción y no un agente automatizando el lanzamiento de su propia API.