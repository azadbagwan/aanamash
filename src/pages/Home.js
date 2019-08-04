import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";

import {Link} from "react-router-dom";
import ServicesHome from "../components/ServicesHome"
export default function Home() {
  return (
  <>
  <Hero hero="defaultHero" >
    <Banner title="Book an appointment" subtitle="description of the service">
      <Link to="/services" className=" btn-primary">
        Our services
        </Link>
      </Banner>
  </Hero>
  <ServicesHome></ServicesHome>
  </>);
}