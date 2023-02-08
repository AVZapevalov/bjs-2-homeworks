//Задача № 1
function cachingDecoratorNew(func) {
  const cache = [];
  return function(...args) {
    const hash = md5(args);
    const objectInCache = cache.find(item => item.hash === hash);
    if (objectInCache) {
        console.log("Из кэша: " + objectInCache.value);
        return "Из кэша: " + objectInCache.value;
    }
    let value = func(...args);
    cache.push({hash, value});
    if (cache.length > 5) {
        cache.shift();
    }
    console.log("Вычисляем: " + value);
    return "Вычисляем: " + value;

  }  
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
  let timeoutId = null;
 
  function wrapper(...args) {

    if (timeoutId === null) {
      func(...args);
      wrapper.count++;
    }
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      wrapper.count++;
      func(...args);
    }, delay);

    wrapper.allCount++;
  }

  wrapper.allCount = 0;
  wrapper.count = 0;
  return wrapper;
}