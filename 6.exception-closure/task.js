function parseCount(x) {
    let parseX = Number.parseFloat(x)
    if (Number.isNaN(parseX)) {
      throw new Error("Невалидное значение");
    }
    return parseX;
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
   
    get perimeter() {
        return this.a + this.b + this.c;
    }
    
    get area() {
        let p = this.perimeter / 2;
        return parseFloat((Math.sqrt(p * ((p - this.a) * (p - this.b) * (p - this.c)))).toFixed(3));
    }
}
  
  function getTriangle(a, b, c) {
    try {
      let newTriangle = new Triangle(a, b, c)
      return newTriangle;
    } catch(error) {
        return {
            get perimeter() {
                return "Ошибка! Треугольник не существует"
            },
            get area() {
                return "Ошибка! Треугольник не существует"
            }
        };
      }
  }  
