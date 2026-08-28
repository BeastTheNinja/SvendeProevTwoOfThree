import useFetch from "../../hooks/useFetch";
import type { Comment } from "../../types/comment";
import api from "../../services/api";
import Button from "../Button/Button";

type ContactSalesProps = {
    productId: number;
};


function ContactSales({ productId }: ContactSalesProps) {
    const { data: comments, loading, error, refetch } =
        useFetch<Comment[]>(`/api/comments/${productId}`);

    const handleSubmit = async (
        event: React.SubmitEvent<HTMLFormElement>
    ) => {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);
        const comment = formData.get("comment") as string;

        try {
            await api("/api/comments", {
                method: "POST",
                body: JSON.stringify({
                    comment,
                    productId,
                }),
            });

            form.reset();
            await refetch();
        } catch (error) {
            console.error("Kunne ikke oprette kommentar", error);
        }
    };

    const handleDelete = async (id: number) => {
        try {
            await api(`/api/comments/${id}`, {
                method: "DELETE",
            });

            await refetch();
        } catch (error) {
            console.error("Kunne ikke slette kommentar", error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="comment">Kontakt sælger</label>

                <textarea
                    id="comment"
                    name="comment"
                    rows={5}
                    cols={50}
                    minLength={10}
                    maxLength={500}
                    placeholder="Skriv din besked her..."
                    required
                />
                <button type="submit">Send</button>
            </form>

            {loading && <p>Indlæser kommentarer...</p>}
            {error && <p>Der opstod en fejl.</p>}

            {comments?.map((item) => (
                <div key={item.id}>
                    <p>{item.comment}</p>
                    <small>
                        {item.user.firstname} {item.user.lastname}
                    </small>

                    <Button onClick={() => handleDelete(item.id)}>
                        Slet kommentar
                    </Button>
                </div>
            ))}

        </div>
    );
}
export default ContactSales;