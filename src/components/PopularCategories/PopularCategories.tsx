import { Link } from "react-router";
import useFetch from "../../hooks/useFetch";
import type { category } from "../../types/category";
import type { products } from "../../types/products";

const popularCategorySlugs = [
    "elektronik",
    "hobby",
    "have-og-byg",
    "toj-og-mode",
    "cykler",
    "camping",
];

function PopularCategories() {
    const { data: categories, loading: categoriesLoading, error: categoriesError } =
        useFetch<category[]>("/api/categories");

    const { data: products, loading: productsLoading, error: productsError } =
        useFetch<products[]>("/api/products");

    if (categoriesLoading || productsLoading) {
        return <p>Loading categories...</p>;
    }

    if (categoriesError || productsError) {
        return <p>Error loading categories</p>;
    }

    const selectedCategories = categories?.filter((category) =>
        popularCategorySlugs.includes(category.slug)
    );

    return (
        <section>
            <h2>Populære kategorier</h2>

            {selectedCategories?.map((category) => {
                const categoryProduct = products?.find(
                    (product) => product.categoryId === category.id
                );

                return (
                    <Link
                        key={category.id}
                        to={`/products/category/${category.slug}`}
                    >
                        {categoryProduct && (
                            <img
                                src={categoryProduct.image}
                                alt={category.name}
                            />
                        )}

                        <h3>{category.name}</h3>
                    </Link>
                );
            })}
        </section>
    );
}

export default PopularCategories;