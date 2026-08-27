import { useParams } from "react-router";
import useFetch from "../../hooks/useFetch";
import type { products } from "../../types/products";

function ProductCategory() {
    const { slug } = useParams<{ slug: string }>();

    const {
        data: products,
        loading,
        error,
    } = useFetch<products[]>(
        `/api/products/category/${slug}`
    );

    if (loading) {
        return <p>Loading products...</p>;
    }

    if (error) {
        return <p>Error loading products</p>;
    }

    return (
        <section>
            <h1>Produkter i kategorien</h1>

            {products?.map((product) => (
                <div key={product.slug}>
                    <img src={product.image} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <p>Price: {product.price}</p>
                </div>
            ))}
        </section>
    );
}

export default ProductCategory;