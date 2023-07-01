const filterOutOdds = (...nums) => nums.filter(val => val % 2 === 0);

const FindMin = (...nums) => Math.min(...nums)
findMin(1,4,12,-3)
findMin(1,-1) 
findMin(3,1) 

const mergeObjects = (obj1, obj2) => ({...obj1,...obj2})
mergeObjects({a:1, b:2}, {c:3, d:4})

const doubleAndReturnArgs = (arr,...args) => [...arr,...args.map(val => val * 2)]
doubleAndReturnArgs([1,2,3],4,4) 
doubleAndReturnArgs([2],10,4) 

const removeRandom = items => {
    let idx = Math.floor(Math.random() * items.length);
    return [...items.slice(0, idx), ...items.slice(idx + 1)];
  }

  const combineArr = (arr1, arr2) => {
    return [...arr1,...arr2];
  }

  const addKeyVal = (obj, key, val) => {
    let newObj = { ...obj }
    newObj[key] = val;
    return newObj
};

const removeKey = (obj, key) => {
    let newObj = { ...obj }
    delete newObj[key]
    return newObj
};

const combine = (obj1, obj2) => {
    return { ...obj1, ...obj2 };
  }

  const update = (obj, key, val) => {
    let newObj = { ...obj }
    newObj[key] = val;
    return newObj
};
  