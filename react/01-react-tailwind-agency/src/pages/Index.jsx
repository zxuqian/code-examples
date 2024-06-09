import React from "react";
import Clients from "../widgets/Clients";
import Contact from "../widgets/Contact";
import Footer from "../widgets/Footer";
import Header from "../widgets/Header";
import Hero from "../widgets/Hero";
import HowItWorks from "../widgets/HowItWorks";
import Solutions from "../widgets/Solutions";

function Index() {
  return (
    <div className="container mx-auto p-4">
      <Header />
      <main className="mt-20">
        <Hero />
        <section className="md:p-20">
          <Solutions />
        </section>
        <section className="mt-20">
          <HowItWorks />
        </section>
        <section className="mt-20 md:w-3/5 mx-auto">
          <Clients />
        </section>
        <section className="mt-20">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Index;
