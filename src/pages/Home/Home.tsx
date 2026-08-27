import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import PopularCategories from "../../components/PopularCategories/PopularCategories";

function Home() {


  return (
    <>


      <section>
        <h2>Featured Products</h2>
        <FeaturedProducts />
      </section>

      <section>
        <h2>Den Grønne Avis</h2>
        <p>
          Vi går forest i kampen om klimaet ved at give 2 kr. til
          klima-venlige formål, hver gang du handler brugt på Den Grønne Avis
        </p>
      </section>


      <section>
        <h2>Popular Categories</h2>
        <PopularCategories />
      </section>
    </>
  );
}

export default Home;
