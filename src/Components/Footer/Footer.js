import React from "react";
import "./Footer.css";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";

 
function Footer() {
  return (
    <div className="footer">
      <div className="social-media-logo">
        <div className="social-media">
          <BsInstagram />
          <BsFacebook />
          <AiFillTwitterCircle />
          <IoLogoWhatsapp />
        </div>
        <div>
          <p className="logo">Sprinkle of Flavor</p>
          <p className="copyright">
            © 2023 Sprinkle of flavor. All Rights Reserved. publisher.
          </p>
        </div>
      </div>
      <div className="sign-up">
        <div>
          <p className="first-text">signup</p>{" "}
          <p className="second-text">FOR E-MAIL UPDATES</p>
        </div>

        <p className="third-text">
          Get a Free eCookbook with our top 25 recipes.
        </p>
        <div className="input-fields">
          <input className="input-name" placeholder="First Name" type="text" />
          <input className="input-mail" placeholder="E-mail" type="text" />
        </div>
        <button className="go-button">GO</button>
      </div>
    </div>
  );
}

export default Footer;