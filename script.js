//three variables logged to the console
var studentName="Amber";
var studentAge=22;
var isEnrolled=true;

console.log("studentName is:", studentName);
console.log("studentAge is:", studentAge);
console.log("isEnrolled is:", isEnrolled);

//string
console.log("String Example:");
studentName="Max";
studentAge=25;

let message=`Hello, my name is ${studentName} and I am ${studentAge} years old.`;

console.log(message); 

//number
console.log("Number Example:");
let studentGrade=77.86;

console.log('My current grade is:', studentGrade);

//boolean
console.log("Boolean Example:");
let pass=true;
let fail=false;
console.log(pass);
console.log(fail);

//array
console.log("Array Example:");
let fruits=['Apples', 'Oranges', 'Mangos'];
console.log(fruits);
console.log(studentName,"'s favourite fruit is:",fruits[0]);
console.log(studentName,"'s second favourite fruit is:",fruits[1]);
fruits.push('Bananas');
console.log(fruits);
console.log(studentName, "hates", fruits[3]);
console.log("So we will remove it from this list:",fruits);
fruits.pop();
console.log(fruits)

//object #1
console.log("Object Data Type Example 1:");
const dog=new Object();
dog.name="Bella";
dog.age=4;

console.log(dog.name);
console.log(dog.age);

//object #2
console.log("Object Data Type Example 2:");
let cat={
  firstName:"Bailey",
  lastName:"Forrest",
  age:14
};

console.log(cat.firstName);
console.log(cat.age)

//arithmetic operators
console.log("Arithmetic Operators Example:");
let x=2;
let y=3;
let z=6;

console.log(x*y); // multiplication
console.log(z/x); //division
console.log(z%y); //remainder

console.log(x+y); //addition
console.log(y-z); //subtraction

console.log("Initial value: ", x);

x+=3;
console.log("After += 3:", x);
x-=4;
console.log("After -= 4:", x);
x*=4;
console.log("After *= 4:", x);
x/=2;
console.log("After /= 2: ", x);
x%=2;
console.log("After %= 2: ", x);


//comparison operators
console.log("Comparison Operators Example:");
let a=2; 
let b=10;
console.log("8"==b);
console.log("2"==a);
console.log("2"===4);
console.log(a!=b);
console.log(a<b);
console.log(a>b);
console.log(a<=b);
console.log(a>=b);

//logical operators
console.log("Logical Operators Example:");
let yes=true;
let no=false;
console.log(yes&&no);
console.log(yes||no);
console.log(!yes);
console.log(!no);