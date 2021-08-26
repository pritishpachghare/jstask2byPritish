const recipesArray = [
    {
        meal: "pancakes",
        ingredients: ["eggs", "flour", "milk", "butter"],
        time: "0.5 hour",
    },
    {
        meal: "tomato soup",
        ingredients: ["eggs", "flour", "milk", "butter"],
        time: "1.5 hour",
    },
    {
        meal: "eggs with salad",
        ingredients: ["eggs", "flour", "milk", "butter"],
        time: "1 hour",
    },
    {
        meal: "cake",
        ingredients: ["eggs", "flour", "milk", "butter"],
        time: "2 hour",
    },
    {
        meal: "soup",
        ingredients: ["tomato", "flour", "milk", "butter"],
        time: "1 hour",
    },
];

let recepe = prompt("Recepe name");

for (let i = 0; i <= recipesArray.length; i++) {
    let recp = recipesArray[i];
    if (recp.meal.toLowerCase() === recepe.toLowerCase()) {
        console.log(` Recepe: ${recp.meal} takes ${recp.time}  and ingredients required are : ${recp.ingredients}`);
        break;
    }

    if (recp.meal === recipesArray[recipesArray.length - 1].meal) {
        console.log('Recepe: Sorry recepe is not in the list');
    }
}

