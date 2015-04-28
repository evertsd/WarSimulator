var leftSide = [];
var rightSide = [];
var fullSide = [2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14];

var fillSide = function(array) {
	var fullClone = fullSide.slice(0),
		  tempArray = [],
      fullCount = fullClone.length,
      index, value;

  while(tempArray.length < fullCount) {
    index = parseInt(Math.random() * fullClone.length);
    value = fullClone[index];
    fullClone = fullClone.slice(0, index).concat(fullClone.slice(index + 1, fullClone.length));
    tempArray.push(value);
  }

  console.log(tempArray);
  array = tempArray;
  return tempArray;
}

var avgDifference = function(diffArray) {
  var gin, diff = 0;

  for(var gin = 0; gin < (diffArray.length - 1); gin++) {
    diff += Math.abs(diffArray[gin + 1] - diffArray[gin]);
  }

  return (diff / (diffArray.length - 1));
}

var safeMax = function(left, right) {
  var max;

  if(left === undefined) {
    max = 'right';
  } else if(right === undefined) {
    max = 'left';
  } else {
    max = Math.max(left, right);
    max = (max === left ? 'left' : 'right');
  }

  return max;
}

var war = function(arrays) {
  var leftArray = arrays[0],
      rightArray = arrays[1],
      maxSize = Math.max(leftArray.length, rightArray.length),
      left, right, winner, otherBottom, otherTop,
      leftWinnings = [],
      rightWinnings = [];

  for(var gin = 0; gin < maxSize; gin++) {
    left = leftArray[gin];
    right = rightArray[gin];
    winner = safeMax(left, right);
    
    if(winner === 'left') {
      otherBottom = rightWinnings[leftWinnings.length];
      otherTop = rightWinnings[leftWinnings.length + 1];

      leftWinnings = pushArray(leftWinnings, left, right, safeMinDifference(left, right, otherBottom, otherTop));
    } else {
      otherBottom = leftWinnings[rightWinnings.length];
      otherTop = leftWinnings[rightWinnings.length + 1];

      rightWinnings = pushArray(rightWinnings, left, right, safeMinDifference(left, right, otherBottom, otherTop));
    }
  }

  console.log(avgDifference(leftWinnings));
  console.log(avgDifference(rightWinnings));

  return [leftWinnings, rightWinnings];
}

var pushArray = function(array, left, right, order) {
  var temp = array;

  if(order === 'left') {
    left !== undefined && temp.push(left);
    right !== undefined && temp.push(right);
  } else {
    right !== undefined && temp.push(right);
    left !== undefined && temp.push(left);
  }

  return temp;
}

var safeMinDifference = function(left, right, bottom, top) {
  var leftBottomDistance = distance(left, bottom) + distance(right, top),
      rightBottomDistance = distance(right, bottom) + distance(left, top);

  if(leftBottomDistance < rightBottomDistance) {
    return 'left';
  } else {
    return 'right';
  }
}

var distance = function(item, compared) {
  if(item === undefined || compared === undefined) {
    return 13;
  }

  return Math.abs(compared - item);
}

var warHelper = function() {
  var arrays = [],
      min = 26,
      count = 0;
  arrays.push(fillSide());
  arrays.push(fillSide());

  while(min > 10 && count < 100) {
    arrays = war(arrays);
    console.log('[' + arrays[0] + ']');
    console.log('[' + arrays[1] + ']')
    count++;
    min = Math.min(arrays[0].length, arrays[1].length);
  }
  console.log(count + ' iterations');
}

