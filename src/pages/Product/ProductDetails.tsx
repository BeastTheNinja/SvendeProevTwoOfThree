import { useParams } from "react-router";
import useFetch from "../../hooks/useFetch";
import type { products } from "../../types/products";
import { useEffect } from "react";
import Card from "../../components/Card/Card";


function ProductDetails() {
    const { slug } = useParams<{ slug: string }>();

    const {
        data: products,
        loading,
        error,
    } = useFetch<products>(
        `/api/products/${slug}`
    );

    useEffect(() => {
        try {
            if (products) {
                console.log(products);
            }
        } catch (error) {
            console.error('Error fetching product:', error);
        }
    }, [products]);

    return (
        <div>
            <h1>Product Details</h1>
            {loading && <p>Loading product...</p>}
            {error && <p>Error loading product</p>}
            {products && (
                <Card title={products.name} key={products.id}>
                    <img src={products.image} alt={products.name} />
                    <p>{products.description}</p>
                    <p>Price: {products.price}</p>
                </Card>
            )}
        </div>
    );
}
export default ProductDetails;