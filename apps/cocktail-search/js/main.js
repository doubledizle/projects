//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

document.querySelector('button').addEventListener('click', getDrink)

function getDrink(){
  let drink = document.querySelector('input').value

  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
  .then(res => res.json())
  .then(data => {
    console.log(data.drinks[0])
    document.querySelector('h2').innerText = data.drinks[0].strDrink
    document.querySelector('img').src = data.drinks[0].strDrinkThumb
    if (data.drinks[0].strMeasure1) {document.getElementById('ingredients1').innerText = data.drinks[0].strMeasure1 + ` ` + data.drinks[0].strIngredient1}
    if (data.drinks[0].strMeasure2) {document.getElementById('ingredients2').innerText = data.drinks[0].strMeasure2 + ` ` + data.drinks[0].strIngredient2}
    if (data.drinks[0].strMeasure3) {document.getElementById('ingredients3').innerText = data.drinks[0].strMeasure3 + ` ` + data.drinks[0].strIngredient3}
    if (data.drinks[0].strMeasure4) {document.getElementById('ingredients4').innerText = data.drinks[0].strMeasure4 + ` ` + data.drinks[0].strIngredient4}
    if (data.drinks[0].strMeasure5) {document.getElementById('ingredients5').innerText = data.drinks[0].strMeasure5 + ` ` + data.drinks[0].strIngredient5}
    if (data.drinks[0].strMeasure6) {document.getElementById('ingredients6').innerText = data.drinks[0].strMeasure6 + ` ` + data.drinks[0].strIngredient6}
    if (data.drinks[0].strMeasure7) {document.getElementById('ingredients7').innerText = data.drinks[0].strMeasure7 + ` ` + data.drinks[0].strIngredient7}
    if (data.drinks[0].strMeasure8) {document.getElementById('ingredients8').innerText = data.drdrinks[0].strMeasure8 + ` ` + data.drinks[0].strIngredient8}
    if (data.drinks[0].strMeasure9) {document.getElementById('ingredients9').innerText = data.drinks[0].strMeasure9 + ` ` + data.drinks[0].strIngredient9}
    if (data.drinks[0].strMeasure10) {document.getElementById('ingredients10').innerText = data.drinks[0].strMeasure10 + ` ` + data.drinks[0].strIngredient10}
    if (data.drinks[0].strMeasure11) {document.getElementById('ingredients11').innerText = data.drinks[0].strMeasure11 + ` ` + data.drinks[0].strIngredient11}
    if (data.drinks[0].strMeasure12) {document.getElementById('ingredients12').innerText = data.drinks[0].strMeasure12 + ` ` + data.drinks[0].strIngredient12}
    if (data.drinks[0].strMeasure13) {document.getElementById('ingredients13').innerText = data.drinks[0].strMeasure13 + ` ` + data.drinks[0].strIngredient13}
    if (data.drinks[0].strMeasure14) {document.getElementById('ingredients14').innerText = data.drinks[0].strMeasure14 + ` ` + data.drinks[0].strIngredient14}
    if (data.drinks[0].strMeasure15) {document.getElementById('ingredients15').innerText = data.drinks[0].strMeasure15 + ` ` + data.drinks[0].strIngredient15}
    document.getElementById('instructions').innerText = data.drinks[0].strInstructions
  })
  .catch(err => {
    console.log(`error ${err}`)
  })
}