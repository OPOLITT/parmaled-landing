import { Header } from "./components/Header/Header";
import { WelcomeBlock } from "./components/WelcomeBlock/WelcomeBlock";
import { AboutCompany } from "./components/AboutCompany/AboutCompany";
import { Contacts } from "./components/Contacts/Contacts";
import { CategoriesList } from "./components/CategoriesList/CategoriesList";
import { Catalog } from "./components/Catalog/Catalog";

export default function Home() {
  return (
    <div>
      <main>
        <Header />
        <section id="welcome">
          <WelcomeBlock />
        </section>
        <section id="catalog">
          <Catalog />
        </section>
        <CategoriesList />
        <section id="about">
          <AboutCompany />
        </section>
        <section id="contacts">
          <Contacts />
        </section>
      </main>
    </div>
  );
}
