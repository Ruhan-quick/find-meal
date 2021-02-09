const searchedItem = document.getElementById('inputItem').value;
const searchButton = document.getElementById('searchBtn');
searchButton.addEventListener('click', function () {
    const searchedItem = document.getElementById('inputItem').value;
    console.log('clicked');
    showItems(searchedItem);
});

const showItems = (searchedItem) => {

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchedItem}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data))
}



const displayMeals = (items) => {
    const itemsDiv = document.getElementById('item-container');

    console.log(items.meals.length)
    for (let i = 0; i < items.meals.length; i++) {
        const mealDiv = document.createElement('div');
        mealDiv.className = "itemInfoClass shadow bg-white";
        let item = items.meals[i];
        console.log(items.meals[i].strMeal);

        const itemInfo = `
            <div>
            <img class="imageControl" src="${items.meals[i].strMealThumb}" alt="">
            <h5 class="textControl p-2"> ${item.strMeal} </h5>
            </div>
        `

        mealDiv.innerHTML = itemInfo;
        itemsDiv.appendChild(mealDiv);

        mealDiv.addEventListener('click', function(){
            showItemDetails(item.strMeal);
        });

    }


}

const showItemDetails = (itemName) =>{
    
            const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${itemName}`
            fetch(url)
            .then(res => res.json())
            .then(data => showDetailCart(data))        
}

const showDetailCart = (content) =>{
    const detailsDiv = document.getElementById('appendInIt');
    const Ddiv = document.createElement('div');
    Ddiv.className = "showDetails shadow"
            Ddiv.innerHTML = `
            <div>
            <img class="dCartImageControl" src="${content.meals[0].strMealThumb}" alt="">
            </div>
            <div>
            <h3 class="dCartTextControl p-2 container">${content.meals[0].strMeal}</h3>
            </div>
            <div class="container">
            <h5>Ingredients:</h5>
            <ul id="ingredientsList">
            </ul>
            </div>
            `
            detailsDiv.appendChild(Ddiv);
            let item = content.meals[0];
            let ingredients = [item.strIngredient1, item.strIngredient2, item.strIngredient3, item.strIngredient4, item.strIngredient5, item.strIngredient6]

            for(let i=0;i<6;i++){
                

                const ul = document.getElementById('ingredientsList');
                const li = document.createElement('li');
                li.innerText = ingredients[i];
                console.log(ingredients[i]);
                ul.appendChild(li);
            }
           
}

