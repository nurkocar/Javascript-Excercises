function oddOrEven(array) {
    if (!array.length) return 'even';
    let sum = array.reduce(function(a, b){
       return a+b;
     });
     return sum % 2 ? 'odd' : 'even';
  }