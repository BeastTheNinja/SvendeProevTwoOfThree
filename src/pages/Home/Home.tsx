import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import PopularCategories from "../../components/PopularCategories/PopularCategories";
import bannerDonation from "../../assets/banner_image3.jpg";
import BannerDonation from "../../assets/banner_image2.jpg";
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

      <section>
        <div>
          <img src={bannerDonation} alt="Banner Donation" />
          <h2>Donatione til Dato</h2>
          <p>Sammen med dig har vi siden starten samlet</p>
          <p>452.231,50 kr</p>
          <h6>Tak fordi du handler brugt, med omtanke for klimaet</h6>
        </div>
        <div>
          <img src={BannerDonation} alt="Banner Donation" />
          <h2>Donatione i År</h2>
          <p>Sammen med dig har vi siden starten samlet</p>
          <p>112.452,75 kr</p>
          <h6>Tak fordi du handler brugt, med omtanke for klimaet</h6>
        </div>
      </section>
    </>
  );
}

export default Home;
