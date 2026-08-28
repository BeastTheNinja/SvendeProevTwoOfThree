import { Cookies } from "react-cookie";
import useFetch from "../../hooks/useFetch";
import type { products } from "../../types/products";
import type { User } from "../../types/user";

const cookies = new Cookies();

function MyAnnonce() {
    const user = cookies.get<User>("user");

    const {
        data: products,
        loading,
        error,
    } = useFetch<products[]>("/api/products");

    const myProducts = products?.filter(
        (product) => product.userId === user?.id
    );

    return (
        <section>
            <h1>Mine annoncer</h1>

            {loading && <p>Indlæser annoncer...</p>}
            {error && <p>Der opstod en fejl.</p>}

            {myProducts?.map((product) => (
                <article key={product.id}>
                    <img src={product.image} alt={product.name} />
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <p>{product.price} kr.</p>
                </article>
            ))}

            {!loading && myProducts?.length === 0 && (
                <p>Du har ingen annoncer endnu.</p>
            )}
        </section>
    );
}

export default MyAnnonce;