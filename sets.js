window.onload = function() {

    //Eliminate duplicates

    var food = ['Biriyani', 'Samosa', 'Pizza', 'Paneer', 'Tofu', 'Tofu', 'Noodles']
console.log(food)

//Remove duplicates
    var refinedFood = new Set(food)

    console.log(refinedFood)

    //spread operator and redo as an array
    food =[...refinedFood]
    console.log(food)


}