import { data } from "../../data/data";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/products-services/PageHero";
import ServicesDetailed from "@/components/products-services/ServicesDetailed";
import Portfolio from "@/components/products-services/Portfolio";
import PortfolioStats from "@/components/products-services/PortfolioStats";
import PageCTA from "@/components/products-services/PageCTA";

export default function ProductsServicesPage() {
  return (
    <main>
      <Header data={data.header} />
      <PageHero data={data.productsServicesPage.hero} />
      <ServicesDetailed data={data.productsServicesPage.servicesDetailed} />
      <PortfolioStats data={data.productsServicesPage.portfolio.stats} />
      <Portfolio data={data.productsServicesPage.portfolio} />
      <PageCTA data={data.productsServicesPage.cta} />
      <Footer data={data.footer} />
    </main>
  );
}
