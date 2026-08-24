import { TbMailExclamation } from "react-icons/tb";
import Logo from "../../assets/Logo.svg";
import Button from "../Button/Button";
import { MdOutlineAccountCircle } from "react-icons/md";
import { CiSquareInfo } from "react-icons/ci";
import styles from "./Navbar.module.scss";





function Navbar() {


  return (
    <nav className={styles.NavbarStyles}>
      <div>
        <img src={Logo} alt="Den grønne avis" />
      </div>
      <div>
        <option value='none' aria-placeholder="Kategori">hej</option>

        <Button >Opret annonce</Button>

        <TbMailExclamation size={40} color="grey" />

        <CiSquareInfo size={40} color="grey" />
        
        <MdOutlineAccountCircle size={40} color="grey" />
      </div>

    </nav>
  );
}

export default Navbar;
