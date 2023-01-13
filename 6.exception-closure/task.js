function parseCount(x) {
    if (Number.isNaN(Number.parseFloat(x))) {
      throw new Error("Невалидное значение");
    }
    return Number.parseFloat(x);
  }
  
  function validateCount(x) {
    try {
      return parseCount(x);
    } catch (error) {
      return error;
    } 
  }

  class Triangle {
    constructor(a, b, c) {
      if ((a < b + c) && (b < a + c) && (c < a + b)) {
        this.a = a;
        this.b = b;
        this.c = c;
      } else {
        throw new Error("Треугольник с такими сторонами не существует");
      }
    }
   
    get perimetr() {
        return this.a + this.b + this.c;
    }
    
    get area() {
        let p = this.perimetr / 2;
        return parseFloat((Math.sqrt(p * ((p - this.a) * (p - this.b) * (p - this.c)))).toFixed(3));
    }
}
  
  function getTriangle(a, b, c) {
    let newTriangle = new Triangle(a, b, c)
    try {
      
      return newTriangle;
    } catch(error) {
      return error;
      }
  }  
