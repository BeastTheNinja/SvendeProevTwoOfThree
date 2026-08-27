import { Link, useParams } from "react-router";
import useFetch from "../../hooks/useFetch";
import type { category } from "../../types/category";

type CategoryNavigationProps = {
    activeCategoryId?: number;
};

function CategoryNavigation({
    activeCategoryId,
}: CategoryNavigationProps) {
    const { slug: activeSlug } = useParams<{ slug: string }>();

    const { data: categories, loading, error } =
        useFetch<category[]>("/api/categories");

    if (loading) return <p>Loading categories...</p>;
    if (error) return <p>Error loading categories</p>;

    return (
        <nav>
            <ul>
                {categories?.map((category) => {
                    const isActive =
                        category.id === activeCategoryId ||
                        category.slug === activeSlug;

                    return (
                        <li key={category.id}>
                            <Link
                                to={`/products/category/${category.slug}`}
                                style={{
                                    fontWeight: isActive ? "bold" : "normal",
                                }}
                            >
                                {category.name}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}

export default CategoryNavigation;