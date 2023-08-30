// const groceryList = Object.freeze([
//     { "item": "carrots",           "haveIngredient": false },
//     { "item": "onions",            "haveIngredient": true  },
//     { "item": "celery",            "haveIngredient": false },
//     { "item": "cremini mushrooms", "haveIngredient": false },
//     { "item": "butter",            "haveIngredient": true  }
//   ]);



// const needThyme = [ ...groceryList, { "item": "thyme", "haveIngredient": false } ];

// const gotTheThyme = [ ...needThyme.slice(0, 5), { ...needThyme[5], "haveIngredient": true } ];

// console.log(needThyme);


// console.log(go);



const items = Object.freeze(["carrots", "onions", "celery", "mushrooms", "butter", "thyme"]);
 // this will throw an error 

const sortedItems = [...items].sort();


console.log(sortedItems);