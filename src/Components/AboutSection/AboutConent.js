import React from "react";
import "./AboutConent.css";

function AboutConent() {
  return (
    
      <div className="abt-background">
        <div className="abt-image">
          <img className="abt-img"
            src="https://pinchofyum.com/wp-content/assets/images/about/lindsay-hero.jpg"
            alt=""
            style={{
              height: "35rem",
              width: "30rem",
            }}
          />
        </div>
        <div className="abt-lines">
          <p className="abt-me">About Me</p>
          <div className="abt-names">
          <p className="abt-line1">HI,MY NAME IS </p> <p className="abt-name"> LINDSAY!</p></div>
          <p className="abt-line2">
            And Sprinkle of Flavor is my little corner of the internet! <br/>
            I'm the voice, author, and creator behind Sprinkle of flavor. What started
            as a casual hobby over 10 years ago in 2010 while I was working as a
            fourth grade teacher has now grown into a full-blown business (!!)
            that reaches millions of people with fun recipes each month, with
            content that has been featured on The Kitchn, CNN, Refinery29, Brit
            + Co, POPSUGAR, Huffington Post, The Everymom, PureWow, and more.{" "}
            <br/>I live in Saint Paul, MN with my husband Bjork and our dog
            Sage. My favorite things in life are a big plate of pad Thai, sunny
            days, and going to the dog park.
          </p>
        </div>
      </div>
    
  );
}

export default AboutConent;
