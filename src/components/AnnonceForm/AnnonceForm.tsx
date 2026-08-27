import { useState } from "react";
import Input from "../Input/Input";
import api from "../../services/api";

function AnnonceForm() {
    const [name, setName] = useState("");
    const [categoryId, setCategoryId] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [price, setPrice] = useState("");

    const [message, setMessage] = useState("");

    async function handleSubmit(
        event: React.FormEvent<HTMLFormElement>
    ) {
        event.preventDefault();
        setMessage("");

        try {
            const product = await api("/api/products", {
                method: "POST",
                body: JSON.stringify({
                    name,
                    categoryId: Number(categoryId),
                    description,
                    image,
                    price,
                }),
            });

            console.log("Created product:", product);
            setMessage("Annoncen er oprettet.");

            setName("");
            setCategoryId("");
            setDescription("");
            setImage("");
            setPrice("");
        } catch (error) {
            console.error("Error creating product:", error);
            setMessage("Annoncen kunne ikke oprettes.");
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <Input
                type="text"
                name="name"
                value={name}
                placeholder="Titel på dit produkt"
                onChange={(event) => setName(event.target.value)}
                required
            />

            <Input
                type="number"
                name="categoryId"
                value={categoryId}
                placeholder="Kategori ID"
                onChange={(event) => setCategoryId(event.target.value)}
                required
            />

            <textarea
                name="description"
                value={description}
                placeholder="Skriv din annonce her"
                onChange={(event) => setDescription(event.target.value)}
                required
            />

            <Input
                type="url"
                name="image"
                value={image}
                placeholder="URL til billede"
                onChange={(event) => setImage(event.target.value)}
                required
            />

            <Input
                type="number"
                name="price"
                value={price}
                placeholder="Pris"
                onChange={(event) => setPrice(event.target.value)}
                required
            />

            <button type="submit">Opret annonce</button>

            {message && <p>{message}</p>}
        </form>
    );
}

export default AnnonceForm;