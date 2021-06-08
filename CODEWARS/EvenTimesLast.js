function evenLast(numbers) {
    if (!numbers.length) return 0;
    let sum = 0;
    for (i = 0; i < numbers.length; i += 2){
      sum += numbers[i];
    }
    return sum * numbers[numbers.length - 1];
  }