import React from "react";

import Footer from "../components/home/Footer";
import BackToTopButton from "../components/home/BackToTopButton";

import "../../../public/lib/owlcarousel/assets/owl.carousel.min.css";
import "../../../public/lib/animate/animate.min.css";
import Topbar from "@/app/components/home/Topbar";
import SiteNavbar from "@/app/components/home/SiteNavbar";

export default function RootLayout(
  { children }: Readonly<{ children: React.ReactNode; }>) {

  return (
    <>
      <Topbar/>

      <SiteNavbar/>

      <main role={"main"} className={"min-vh-100"}>
        {children}
      </main>


      <BackToTopButton/>
      <Footer/>
    </>
  );
}