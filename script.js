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
    document.getElementById('appendInIt').style.display = 'block';
    const item = content.meals[0];
    document.getElementById('detailThumb').src = `${item.strMealThumb}`
    document.getElementById('detailTitle').innerText =`${item.strMeal}`
    document.getElementById('li1').innerText = `${item.strIngredient1}`
    document.getElementById('li2').innerText = `${item.strIngredient2}`
    document.getElementById('li3').innerText = `${item.strIngredient3}`
    document.getElementById('li4').innerText = `${item.strIngredient4}`
    document.getElementById('li5').innerText = `${item.strIngredient5}`
    document.getElementById('li6').innerText = `${item.strIngredient6}`
    document.getElementById('li7').innerText = `${item.strIngredient7}`
}

