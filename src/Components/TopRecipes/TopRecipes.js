import React from "react";
import "./TopRecipes.css";
import { LiaTrophySolid } from "react-icons/lia";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { recipeslist } from "./TopRecipesList";

function TopRecipes() {
  return (
  <div>
    <section className="top-background">
      <div className="top-titles">
        <div className="trophy">
          <LiaTrophySolid />
          <p className="top-title">TOP RATED RECIPES</p>
        </div>
      </div>
      <div className="top-lines">
        <p className="top-line1">
          Out of all the many recipes on Pinch of Yum, these are our shining
          stars - the{" "}
        </p>
        <p className="top-line2">
          recipes we come back to again and again (and again).
        </p>
      </div>
    </section>
    <section>
    <div className="total-recipes">
      {recipeslist.map((recipes)=>(
        <div className="recipe">
          <img
            className="recipe-image"
            src={recipes.image}
          />
          <div>
            <p className="recipe-caption">
             {recipes.caption}
            </p>

            <BsStarFill className="star" />
            <BsStarFill className="star" />
            <BsStarFill className="star" />
            <BsStarFill className="star" />
            <BsStarHalf className="star" />

            <p className="review">{recipes.review}</p>
          </div>
        </div>
        ))}

        
        
      </div>
      <hr />

    </section>
    </div>
  );
}

export default TopRecipes;
