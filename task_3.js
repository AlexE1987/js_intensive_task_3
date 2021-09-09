Array.prototype.myFilter = function myFilter(callback, thisArg) {
  if (this == null) throw new Error('Invalid data');
  if (typeof callback !== 'function') throw new Error('Callback is not a function');

  let arrayContext = this;
  let argsContainer = Object(this);

  if (arguments.length > 1) arrayContext = thisArg;

  let filteredArray = this.reduce((newArray, element, index, argsContainer) => {
    if (index in argsContainer) {
      if (callback.call(arrayContext, element, argsContainer, index)) newArray.push(element);
      return newArray;
    }
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
