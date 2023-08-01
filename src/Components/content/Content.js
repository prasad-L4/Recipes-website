import React from "react";
import "./Content.css";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { lists } from "./ContentList";
import {roundLists} from'./ContentList'
function Content() {
  const navigate = useNavigate();
  return (
    <div className="over">
      <div className="main">
      {lists.map((list) => (
        <section className="content">
          <div className="pictures">
            <figure className="main-image">
              <img
                className="vegimage"
                src={list.image}
                alt=""
                style={{ width: "270px", height: "370px" }}
              ></img>
              <figcaption className="veg_title">{list.title}</figcaption>
            </figure>
          </div>
        </section>
      ))}
      </div>
      <div className="round">
        {
          roundLists.map((roundlist)=>(
            <figure className="main-round">
            <img
              className="round-nonveg"
              src={roundlist.image}
              alt=""
              style={{ width: "8rem", height: "8rem" }}
            />
            <figcaption className="round-non-title">{roundlist.title}</figcaption>
          </figure>

          ))
        }
        </div>
     

      <section className="search">
        <input
          className="search-tag"
          type="text"
          placeholder="Search our recipes"
        />
        <span className="search-icon">
          <FaSearch />
        </span>
      </section>
      <div className="recipes-btn">
        <button
          className="allrecipes"
          onClick={() => {
            navigate("/recipes");
          }}
        >
          + view ALL RECIPES
        </button>
      </div>
    </div>
  );
}

export default Content;
