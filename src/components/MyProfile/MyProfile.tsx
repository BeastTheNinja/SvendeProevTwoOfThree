import Input from "../Input/Input";
import Button from "../Button/Button";




function MyProfile() {

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Logik for at håndtere formularindsendelse
    }
    const handleDelete = () => {
        // Logik for at slette profilen
    }

    return (
        <>
            <div>
                <div>
                    <p>Jeg ønsker at modtage nyheder om klima-indsatsen, gode tilbud, ekslusive deals og lignende promoverings-mails fra den grønne avis og samarbejds-parnere?</p>
                    <Input type="checkbox" id="nyhedsbrev" name="nyhedsbrev" />
                </div>
                <div>
                    <p>Jeg ønsker at modtage notifikationer i form af emails når der sker en opdatering på en af mine annoncer eller jeg modtager en ny henvendelse?</p>
                    <Input type="checkbox" id="notifikationer" name="notifikationer" />
                </div>
                <form onSubmit={handleSubmit} >
                    <label htmlFor='Fornavn'>Fornavn</label>
                    <Input type='text' name='Fornavn' id='Fornavn' placeholder="Dit Fornavn" />
                    <label htmlFor='Efternavn'>Efternavn</label>
                    <Input type='text' name='Efternavn' id='Efternavn' placeholder="Dit Efternavn" />
                    <label htmlFor='Adresse'>Adresse</label>
                    <Input type='text' name='Adresse' id='Adresse' placeholder="Din Adresse" />
                    <label htmlFor='Postnummer'>Postnummer</label>
                    <Input type='text' name='Postnummer' id='Postnummer' placeholder="Dit Postnummer" />
                    <label htmlFor='telefonnummer'>Telefonnummer</label>
                    <Input type='text' name='telefonnummer' id='telefonnummer' placeholder="Dit Telefonnummer" />
                    <label htmlFor='email'>Email</label>
                    <Input type='text' name='email' id='email' placeholder="Din Email" />
                    <div>
                        <Button type="submit">Gem ændringer</Button>
                        <Button type="button" variant="danger" onClick={handleDelete}>Slet profil</Button>
                    </div>
                </form>
            </div>
        </>
    )
}
export default MyProfile;