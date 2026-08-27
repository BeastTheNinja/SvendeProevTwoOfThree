import { Link } from "react-router";
import useFetch from "../../hooks/useFetch";
import type { products } from "../../types/products";

function FeaturedProducts() {
    const { data: products, loading, error } =
        useFetch<products[]>("/api/products");

    if (loading) return <p>Loading products...</p>;
    if (error) return <p>Error loading products</p>;

    return (
        <section>
            <h2>Udvalgte produkter</h2>

            {products?.slice(0, 4).map((product) => (
                <Link key={product.id} to={`/products/${product.slug}`}>
                    <img src={product.image} alt={product.name} />
                    <h3>{product.name}</h3>
                </Link>
            ))}
        </section>
    );
}

export default FeaturedProducts;