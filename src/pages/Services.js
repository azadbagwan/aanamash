import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import {Link} from "react-router-dom"
export default function Services() {
  return (
    <div className="div-centered">
      <Hero hero="servicesHero">
      <Banner title="Services" subtitle="We give you the best you deserve!">
      <Link to="/services" className=" btn-primary">
        Our services
        </Link>
      </Banner>
      </Hero>
      <article>
        <h3>HAIR FOR MEN'S</h3>
        <ul>
          <li>
            <h4>HAIR CUT FOR UNDERGRADUATES</h4>
            <div> ₹150.00 </div>
          </li>
          <li>
            <h4>HAIR CUT</h4>
            <div> ₹300.00 </div>
          </li>
          <li>
            <h4>HAIR WASH WITH CONDITIONER</h4>
            <div> ₹100.00 </div>
          </li>
          <li>
            <h4>HAIRSTYLE</h4>
            <div> ₹100.00 </div>
          </li>
          <li>
            <h4>SHAVE</h4>
            <div> ₹100.00 </div>
          </li>
          <li>
            <h4>BEARD TRIM</h4>
            <div> ₹100.00 </div>
          </li>
          <li>
            <h4>BEARD CRAFTING</h4>
            <div> ₹150.00 </div>
          </li>
          <li />
          <li />
        </ul>
      </article>
      <article>
        <h3>HAIR COLOURS</h3>
        <ul>
          <li>
            <h4>COLOUR STREAK (PER STEAK)</h4>
            <div> ₹200.00 </div>
          </li>
          <li>
            <h4>GLOBAL COLOUR</h4>
            <div> ₹800.00 </div>
          </li>
          <li>
            <h4>PRE-LIGHTNING</h4>
            <div> ₹700.00 </div>
          </li>
          <li>
            <h4>SIDE LOCK MUSTACHE</h4>
            <div> ₹600.00 </div>
          </li>
          <li>
            <h4>BEARD COLOUR</h4>
            <div> ₹500.00 </div>
          </li>
          <li />
        </ul>
      </article>
      <article>
        <h3>SPECIAL SERVICE FOR HAIR</h3>
        <ul>
          <li>
            <h4>HAIR SPA</h4>
            <div> ₹700.00 </div>
            <div>
              {" "}
              Long Hair will be charged as per the rate card for women.{" "}
            </div>
          </li>
          <li>
            <h4>HEAD MASSAGE</h4>
            <div> ₹450.00 </div>
            <div> Massage oil, Olive oil, Coconut oil, Figaro oil. </div>
          </li>
          <li>
            <h4>HEAD MASSAGE WITH HAIR WASH</h4>
            <div> ₹500.00 </div>
          </li>
          <li>
            <h4>NOTE</h4>
            <div>
              {" "}
              1. INOA organic colour is 10% Extra to material Colour 2. Long
              Hair will be charged as per rate card for women{" "}
            </div>
          </li>
        </ul>
      </article>
    </div>
  );
}
