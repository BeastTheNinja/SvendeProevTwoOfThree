import { Link } from "react-router";
import Button from "../Button/Button";
import Input from "../Input/Input";

function Footer() {
  return (
    <footer>
      <section>
        <h1>Nyhedsbrev</h1>
        <p>Vil du være med på den grønne front? Tilmeld dig vores nyhedsbrev og få de seneste klima opdateringer direkte i din indbakke</p>
        <div>
          <Input placeholder="Indtast din e-mail" type="email" />
          <Button>Tilmeld</Button>
        </div>
      </section>
      <section>
        <h1>Kontakt</h1>
        <ul>
          <li>Redningen 32</li>
          <li>2210 Vinterby Øster</li>
          <li>+45 88229422</li>
          <li>dga@info.dk</li>
        </ul>
      </section>
      <section>
        <h1>FN's Verdensmål</h1>
        <p>Vi støtter på organisatorisk plan op om FN's verdensmål og har derfor besluttet at en del af overskuddet går direkte til verdensmål nr. 13; Klimahandling</p>
        <Link to='https://www.verdensmaalene.dk/de-17-verdensmaal'>Læs mere om verdensmålene her</Link>
      </section>
    </footer>
  );
}

export default Footer;
