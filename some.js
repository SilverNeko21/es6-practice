// var array = [1, 30, 39, 29, 10, 13];

// var getNumGreaterThanOne = array.some(function(element){
//     return element > 1;
// });
// console.log(getNumGreaterThanOne);


// given the array, return true if some of the numbers are even

// var array = [1, 2, 3, 4, 5];

// var returnTrue = array.some(function(numbers){
//         return numbers % 2 == 0;
// });
// console.log(returnTrue);


//Given an array of network objects representing network request, assign the boolean 'true' to the variable 'inProgress' if any network request has 'status' of 'pending'.

var requests = [
    { url: '/photos', status: 'complete' },
    { url: '/albums', status: 'pending' },
    { url: '/users', status: 'failed' }
  ];
  
  var inProgress = requests.some(function(progress){
    return progress.status === 'pending';
  });
  console.log(inProgress);