/** @format */

// import logo from './logo.svg';
import "./App.css";
import { useEffect, useState } from "react";
import Recipe from "./Recipe";

const App = () => {
  const APP_ID = "YOUR_EDAMAM_APP_ID";
  const APP_KEY = "YOUR_EDAMAM_APP_KEY";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&to=30`
    );
    const data = await response.json();
    if (data.hits.length > 0) {
      setRecipes(data.hits);
      console.log(data.hits);
    }
  };

  const getSearch = (e) => {
    e.preventDefault();
    console.log(search);
    if (search !== "") {
      setQuery(search);
      setSearch("");
    }
  };

  // const updateSearch = e => {
  //   setSearch(e.target.value);
  // };

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={(input) => setSearch(input.target.value)}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>

      <div className="recipes">
        {recipes.map((recipe, index) => {
          return (
            <Recipe
              key={recipe.recipe.label + " " + index}
              title={recipe.recipe.label}
              calories={Math.round(recipe.recipe.calories)}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
            />
          );
        })}
      </div>

      <div className="end-spacer"></div>
    </div>
  );
};

export default App;
