Array.prototype.myFilter = function myFilter(callback, thisArg) {
  let filteredArray = this.reduce((newArray, element, index) => {
    if (arguments.length > 1) {
      if (callback.call(thisArg, element, this, index)) newArray.push(element);
    }
    if (callback.call(this, element, this, index)) newArray.push(element);
    return newArray;
  }, []);

  return filteredArray;
};

const createDebounceFunction = (callback, delay) => {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => callback(...args), delay);
  };
};
