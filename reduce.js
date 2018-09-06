// var numbers = [10, 20, 30];
// var sum = 0;

// for (var i = 0; i < numbers.length; i++){
//   sum += numbers[i];
// }
// console.log('sum', sum);


//reduce method
// var numbers = [10, 20, 30];

// var sum = numbers.reduce(function(accumulator, currentValue){
//     return accumulator + currentValue;
// }, 0)
// console.log('sum', sum);


// var trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];

// var totalDistance = trips.reduce(function(accumulator, currentValue){
//     return accumulator + currentValue.distance;
// },0)
// console.log('totalDistance', totalDistance);


// var primaryColors = [
//     {color: 'red'},
//     {color: 'yellow'},
//     {color: 'blue'}
// ];

// var myColors =primaryColors.reduce(function(accum, curr){
//     accum.push(curr.color);
//     return accum;
// }, [])
// console.log('myColors', myColors);


var desks = [
    { type: 'sitting' },
    { type: 'standing' },
    { type: 'sitting' },
    { type: 'sitting' },
    { type: 'standing' }
  ];
  
  var deskTypes = desks.reduce(function(accum, curr){
      if(curr.type == 'sitting'){
          accum.sitting += 1;
          return accum;
      }else if(curr.type == 'standing'){
          accum.standing += 1;
          return accum;
      }
  }, { sitting: 0, standing: 0 });
console.log(deskTypes);