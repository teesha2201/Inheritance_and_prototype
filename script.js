/*que 1 and que 2*/
function Parent(name) {
    this.name = name;
  }
  
  Parent.prototype.greet = function () {
    console.log(`Hello, I am ${this.name}.`);
  };
  
  function Child(name, age) {
    Parent.call(this, name); // Call the Parent constructor to set the name property
    this.age = age;
  }
  
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
  
  Child.prototype.introduce = function () {
    console.log(`Hello, I am ${this.name} and I am ${this.age} years old.`);
  };
  
  const parent = new Parent("John");
  const child = new Child("Alice", 5);
  
  parent.greet(); 
  child.greet(); 
  child.introduce(); 
  
 /*que 3 */
            
Array.prototype.sum = function () {
  
    return this.reduce((acc, curr) => acc + curr, 0);
  };
  
  const array1 = [1, 2, 3, 4, 5];
  const array2 = [10, 20, 30];
  const array3 = [100, 200, 300, 400];
  
  const sum1 = array1.sum();
  const sum2 = array2.sum();
  const sum3 = array3.sum();
  
  console.log("Sum of array1:", sum1);  
  console.log("Sum of array2:", sum2); 
  console.log("Sum of array3:", sum3);  

/* que 4 */  
function Parent() {
    this.parentProperty = 'I am a parent property';
  }
  
  Parent.prototype.parentMethod = function () {
    console.log('This is a parent method');
  };
  
 
  function Child() {
    this.childProperty = 'I am a child property';
  }
  
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
  Child.prototype.childMethod = function () {
    console.log('This is a child method');
  };
  
  const childObj = new Child();
  
  const allPropertyNames = getAllPropertyNames(childObj);
  console.log(allPropertyNames);
