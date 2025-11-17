import { data } from "../data/data";
import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChooseUs";
import Stats from "../components/Stats";
import About from "../components/About";
import Services from "../components/Services";
import Products from "../components/Products";
import CTA from "../components/CTA";
import Awards from "../components/Awards";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Hero data={data.hero} />
      <WhyChooseUs data={data.whyChooseUs} />
      <Stats data={data.stats} />
      <About data={data.about} />
      <Services data={data.services} />
      <Products data={data.products} />
      <CTA data={data.cta} />
      <Awards data={data.awards} />
      <Newsletter data={data.newsletter} />
      <Footer data={data.footer} />
    </main>
  );
}
