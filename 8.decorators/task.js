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
    let isThrottled = false;

    function wrapper () {
    wrapper.count += 1;
    return function(...args) {
      wrapper.allCount += 1;
      
      if (isThrottled) {
        return;
      }
      const result = func(...args);
      isThrottled = true;
      setTimeout(() => isThrottled = false, delay)
      return result;
    }
    
    wrapper.count = 0;
    wrapper.allCount = 0; 
    return wrapper;  
    }
    

}
