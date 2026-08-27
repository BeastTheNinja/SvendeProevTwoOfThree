import { TbMailExclamation } from "react-icons/tb";
import Logo from "../../assets/Logo.svg";
import Button from "../Button/Button";
import { MdOutlineAccountCircle } from "react-icons/md";
import { CiSquareInfo } from "react-icons/ci";
import styles from "./Navbar.module.scss";


import useFetch from "../../hooks/useFetch";
import { useEffect } from "react";


import type { category } from "../../types/category";
import { useNavigate } from "react-router";

import { useState } from "react";
import { logout } from "../../services/auth.service";



function Navbar() {
  const navigate = useNavigate();

  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const { data: categories, loading, error } = useFetch<category[]>('/api/categories');

  useEffect(() => {
    try {
      if (categories) {
        console.log(categories);
      }
    } catch (error) {
      console.error('Error fetching categories:', error);
    }

  }, [categories]);

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    event.preventDefault();

    const selectedCategorySlug = event.target.value;

    if (selectedCategorySlug === "all") {
      navigate("/products");
      return;
    }

    navigate(`/products/category/${selectedCategorySlug}`);

    console.log("Selected category:", selectedCategorySlug);
  };

  async function handleAccountClick() {
    const opening = !isAccountMenuOpen;
    setIsAccountMenuOpen(opening);
  }

  async function handleLogout() {
    logout();
    setLoggedIn(false);
    setIsAccountMenuOpen(false);
    navigate("/");
  }


  return (
    <nav className={styles.NavbarStyles}>
      <div>
        <img src={Logo} alt="Den grønne avis" onClick={() => navigate('/')} />
      </div>
      <div>
        <select onChange={handleCategoryChange} defaultValue="">
          {loading && <option>Loading categories...</option>}

          {error && <option>Error loading categories</option>}

          <option value='all'>Alle Produkter</option>
          {categories && categories.map((category) => (
            <option key={category.id} value={category.slug}>
              {category.name}
            </option>

          ))}
        </select>

        <Button onClick={() => navigate('/advertise')}>Opret Annonce</Button>

        <TbMailExclamation size={40} color="grey" />

        <CiSquareInfo size={40} color="grey" />

        <div className={styles.AccountMenu}>
          <Button
            type="button"
            className={styles.AccountButton}
            onClick={handleAccountClick}
            aria-label="Åbn kontomenu"
            aria-expanded={isAccountMenuOpen}
          >
            <MdOutlineAccountCircle size={40} color="grey" />
          </Button>

          {isAccountMenuOpen && (
            <div className={styles.AccountDropdown}>
              {!loggedIn ? (
                <>
                  <Button onClick={() => navigate("/login")}>
                    Log ind
                  </Button>

                  <Button onClick={() => navigate("/register")}>
                    Opret bruger
                  </Button>
                </>
              ) : (
                <>

                  <Button onClick={() => navigate("/profil")}>
                    Profil
                  </Button>

                  <Button onClick={handleLogout}>
                    Log ud
                  </Button>
                </>
              )}
            </div>
          )}
        </div>
      </div>

    </nav>
  );
}

export default Navbar;
