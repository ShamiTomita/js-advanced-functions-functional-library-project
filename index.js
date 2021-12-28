const arrayed = function (collection) {
  return collection instanceof Array
  ? collection.slice()
  : Object.values(collection);
};

const myEach = function (collection, callback) {
  const collectionValues = arrayed(collection);

   for (let i = 0; i < collectionValues.length; i++){
     callback(collectionValues[i]);
   }
   return collection;
};

const myMap = function(collection, callback){
  const collectionValues = arrayed(collection);
  const array = []
  for (let i = 0; i < collectionValues.length; i++){
    array.push(callback(collectionValues[i]));
  }
  return array
}

const myReduce = function(collection, callback, acc){
  let collectionValues = arrayed(collection);
  if (acc){
    for (let i = 0; i < collectionValues.length; i++){
    acc = callback(acc, collectionValues[i], collectionValues)
    }
    return acc
  } else {
    acc = collectionValues[0];
    for (let i = 1; i< collectionValues.length; i++){
      acc = callback(acc, collectionValues[i], collectionValues)
    }
    return acc;
  }
}

const myFind = function (collection, predicate){
  const collectionValues = arrayed(collection);
  for (let i = 0; i < collectionValues.length; i++){
    if (predicate(collectionValues[i])) return collectionValues[i];
  }
  return undefined
};

const myFilter = function (collection, predicate){
  const collectionValues = arrayed(collection);
  let array = []
  for (let i = 0; i < collectionValues.length; i++){
    if (predicate(collectionValues[i])){
      array.push(collectionValues[i])
    }
  }
  return array
};

const mySize = function(collection){
  const collectionValues = arrayed(collection)
  let size = collectionValues.length
  return size
}

const myFirst = function(array, n){
  let number
  if(n){
    number = array.slice(0, n)
  }else{
    number = array.slice(0, 1)
    number = number[0]
  }
  return number
}

const myLast = function(array, n){
  let number
  if(n){
    number = array.slice(array.length-n, array.length)
  }else{
    number = array.slice(-1)
    number = number[0]
  }
  return number
}

const myKeys = function(object){
  const keys = []
  for (let key in object){
    keys.push(key)
  }
  return keys
}

const myValues = function(object){
  const values = []
  for (let value in object){
    values.push(object[value])
  }
  return values
}
