import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import usePagination from "../../hooks/usePagination";
import { Link } from "react-router";

import type { products } from "../../types/products";
import Card from "../../components/Card/Card";


function Products() {

    const { data: products, loading, error } = useFetch<products[]>('/api/products');

    const { currentPage, totalPages, paginatedItems, nextPage, previousPage } = usePagination(products ?? [], 9);

    useEffect(() => {
        try {
            if (products) {
                console.log(products);
            }
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    }, [products]);


    return (
        <>
            <div>
                <Card title="Products">
                    {loading && <p>Loading products...</p>}
                    {error && <p>Error loading products</p>}

                    {paginatedItems.map((product) => (
                        <Link
                            key={product.id}
                            to={`/products/${product.id}`}
                        >
                            <img src={product.image} alt={product.name} />
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                            <p>Price: {product.price}</p>
                        </Link>
                    ))}

                    {!loading && !error && products && (
                        <div>
                            <button onClick={previousPage} disabled={currentPage === 1}>
                                Forrige
                            </button>

                            <span>
                                Side {currentPage} af {totalPages}
                            </span>

                            <button
                                onClick={nextPage}
                                disabled={currentPage === totalPages}
                            >
                                Næste
                            </button>
                        </div>
                    )}
                </Card>
            </div>
        </>
    )
}
export default Products