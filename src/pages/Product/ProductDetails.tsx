import { useParams } from "react-router";
import useFetch from "../../hooks/useFetch";
import type { products } from "../../types/products";
import { useEffect } from "react";
import Card from "../../components/Card/Card";


function ProductDetails() {
    const { id } = useParams<{ id: string }>();

    const {
        data: product,
        loading,
        error,
    } = useFetch<products>(
        `/api/products/${id}`
    );

    useEffect(() => {
        try {
            if (product) {
                console.log(product);
            }
        } catch (error) {
            console.error('Error fetching product:', error);
        }
    }, [product]);

    return (
        <div>
            <h1>Product Details</h1>
            {loading && <p>Loading product...</p>}
            {error && <p>Error loading product</p>}
            {product && (
                <Card title={product.name}>
                    <img src={product.image} alt={product.name} />
                    <p>{product.description}</p>
                    <p>Price: {product.price}</p>
                </Card>
            )}
        </div>
    );
}
export default ProductDetails;