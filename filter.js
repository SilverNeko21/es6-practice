// var numbers = [1, 2, 3, 4, 5, 6, 7];

// var filteredNumbers = [];

// numbers.filter(function(element){
//     if(element >= 4){
//         filteredNumbers.push(element);
//     }
// });
// console.log(filteredNumbers);


// var produce = [
//     { name: 'apple', type: 'fruit'}, 
//     { name: 'cucumber', type: 'vegetable'},
//     { name: 'banana', type: 'fruit'},
//     { name: 'spinach', type: 'vegetable'}
//   ];
  
//   var filteredProducts = [];
  
//    for (var i = 0; i < produce.length; i++){
//      if (produce[i].type === 'fruit'){
//        filteredProducts.push(produce[i]);
//      }
    
//    }

//   produce.filter(function(food){
//     if(food.type === 'fruit'){
//         filteredProdcts.push(food);
//     }
//   });
  
//   console.log(filteredProducts);


// use filter and return numbers greater than 50
var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];
var numbersGreaterThan50 = [];

numbers.filter(function(element){
    if(element > 50){
        numbersGreaterThan50.push(element);
    }
});
console.log(numbersGreaterThan50);

// Filter the array of users, only returning users who have admin level access. Assign the result to the variable 'filteredUsers'.

var users = [
 { id: 1, admin: true },  
 { id: 2, admin: false },
 { id: 3, admin: false },
 { id: 4, admin: false },
 { id: 5, admin: true },
];

var filteredUsers = [];

users.filter(function(admins){
    if(admins.admin == true){
        filteredUsers.push(admins);
    }
});
console.log(filteredUsers);