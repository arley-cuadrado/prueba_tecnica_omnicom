import NewFormPage from "../../new/page";

type EditPageProps = {
    params: Promise<{
        id: string;
    }>;
};

export default async function EditPage({ params }: EditPageProps) {
    const { id } = await params;

    return <NewFormPage expenseId={id} />;
}
