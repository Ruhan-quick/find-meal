const searchedItem = document.getElementById('inputItem').value;
const searchButton = document.getElementById('searchBtn');
searchButton.addEventListener('click',function() {
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



const displayMeals = (items) =>{
    const itemsDiv = document.getElementById('item-container');

    const mealDiv = document.createElement('div');
     mealDiv.className = "itemInfoClass";
    for(let i=0;i<items.meals.length;i++)
    {   let item = items.meals[i];
        console.log(items.meals[i].strMeal);

        let ingredients = [item.strIngredient1,item.strIngredient2,item.strIngredient3,item.strIngredient4,item.strIngredient5,item.strIngredient6]
        const itemInfo = `
            <div>
            <img class="imageControl" src="${items.meals[i].strMealThumb}" alt="">
            <h5 class="textControl"> ${item.strMeal} </h5>
            </div>
        `
        const imgurl =items.meals[i].strMealThumb;
        mealDiv.innerHTML = itemInfo;
        itemsDiv.appendChild(mealDiv);
        mealDiv.addEventListener('click', function(){
            showIngredients(ingredients,imgurl)
        })

        
    }

    const showIngredients = (itemName) =>{





        // const url2 = `https://www.themealdb.com/api/json/v1/1/search.php?s=${itemName}`
        // fetch(url2)
        // .then(res2 => res2.json())
        // .then(data2 => displayDetails(data2))
        // console.log('item clicked');
        // for(let i=0;i<ingredients.length;i++)
        // {
        //     console.log(ingredients[i]);
        // }
    }
     
    // const displayDetails = (items) =>{
    //     const mealDiv = document.createElement('div');
    //     const imageItem = `
    //     const imageItem = <img class="imageControl1" src="${items.meals[0].strMealThumb}" alt=""></img>
    //     <ul id="ingred">

    //     </ul>
    //     `
    //     document.getElementById('addImage').innerHTML = imageItem;
    //     for(let i=0;i<7;i++){
    //         const li =  document.createElement(li);
    //         li.innerHTML =  items.meals[0].strIngredient[i];
    //         document.getElementById('ingred').appendChild(li);
            
    //     }
        
        
    // }


}