import AnnonceForm from "../../components/AnnonceForm/AnnonceForm"

function Advertise() {

    return (
        <>
            <div>
                <h1>Opret ny annonce</h1>
                <p>
                    Her kan du oprette en ny annonce.
                    Du har mulighed for at slette dine annoncer igen under “min konto” siden
                </p>
                <AnnonceForm />
            </div>
        </>
    )
}
export default Advertise