function getIndexToIns(arr, num) {
  arr.sort(function(a,b){return a - b});
  console.log(arr);

  for (var i = 0; i < arr.length; i++){
    if (num > arr[i] && num < arr [i +1]){
      console.log('yes');
      return (i + 1);
    }else if (num == arr[i]){
      console.log('yesyes');
      return i;
    }else if (num > arr[arr.length]){
      console.log('yesyesyes')
      return arr.length + 1;
    }
  }
  return 0;
  

}

getIndexToIns([2, 5, 10], 15);
