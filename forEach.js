// var color = ['blue', 'green', 'yellow'];

// //for loop
// for(var i = 0; i < color.length; i++) {
//     console.log('for loop', color[i]);
// }


// //forEach ES6 Array Method
// color.forEach(function(element){
//     console.log( 'forEach ' + element);
// });


// var number = [21, 8, 5, 10];
// var sum = 0;
// var product = 1;

// number.forEach(function(number){
//     sum = number + sum;
//     product = number * product;
// });
// console.log(sum);
// console.log(product);


// function handlePosts() {
//     var posts = [
//       { id: 23, title: 'Daily JS News' },
//       { id: 52, title: 'Code Refactor City' },
//       { id: 105, title: 'The Brightest Ruby' }
//     ];
    
//     // refactor code below
//     // for (var i = 0; i < posts.length; i++) {
//     //   console.log(posts[i])
//     // }
//     posts.forEach(function(post){
//         console.log(post);
//     });
// }
// console.log(handlePosts());


// var images = [
//     { height: 10, width: 30 },
//     { height: 20, width: 90 },
//     { height: 54, width: 32 }
//   ];
//   var areas = [];

// images.forEach(function(element){
//     areas.push(element.height * element.width);
// });
// console.log('areas:', areas);