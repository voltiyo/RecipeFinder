import './App.css'
import getRecipies from "./gerrecipies";
function search(){
  let recipies = document.querySelectorAll(".recipe");
  let input = document.getElementById("ingredients").value;

  recipies.forEach(recipe => {
    let text = recipe.textContent;
    text = text.toLowerCase();
    input = input.toLowerCase();
    if (input.length > 0){
      if (text.includes(input)){
        return 0;
      }
      else{
        recipe.style.display = "none";
      }
    }
    else{
      recipe.style.display = "flex";
    }
  });
  
}


function App() {
  window.onload = getRecipies;

  return (
    <>
      <h1>Recipe Finder</h1>
      <input type="text" placeholder='Search for a recipe ...' id='ingredients' onInput={search}/>
      <div id='recipecont'>
        <ul id="recipeResults"></ul>
      </div>
    </>
  )
}

export default App
