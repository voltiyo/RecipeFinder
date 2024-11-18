export default async function getRecipes() {
    let ingredient = document.getElementById('ingredients').value;
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
    let recipiesResult = document.getElementById("recipeResults")
    try {
        await fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.meals !== null){
                data.meals.forEach(element => {
                    let html = `<li onclick='window.open("https://www.google.com/search?q=${element.strMeal}")' class="recipe">`
                    html += `<img src=${element.strMealThumb}>`
                    html += `<h4>${element.strMeal}</h4>`
                    html += "</li>";
                    recipiesResult.innerHTML += html;
                });
            }
        })

    } catch (error) {
        console.error('Error fetching data from API', error);
    }
}