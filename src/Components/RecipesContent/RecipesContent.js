import React from 'react'
import"./RecipesContent.css"
import { FaSearch } from "react-icons/fa";

function RecipesContent() {
  return (
    <div>
        <section className='reci-background'>
          <div className='reci-titles'>
            <p className='reci-title'>
                Recipes
            </p>
            <p className="reci-lines">We’ve organized these recipes every way we could think of so you don't have to! <br /> Dietary restrictions, weeknight dinners, meal prep recipes, some of our most tried-<br/>and-true… no matter how you browse, we’re sure you’ll find just what you were <br/>looking for.</p>

          </div>
            

        </section>
        <section className='reci-search'>
        <input
          className="reci-searchtag"
          type="text"
          placeholder="Search by keyword"
        />
        <span className="reci-searchicon">
          <FaSearch />
        </span>
        </section>
    </div>
  )
}

export default RecipesContent