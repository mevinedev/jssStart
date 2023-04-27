var x;
console.log(x);

if (x==undefined){
    console.log("x is undefined");
}

x=5
if (x==undefined){
    console.log("x is undefined");
}
else{
    console.log("x has been defined");
}

var string="hello";
string += " world";
//string = string+"world"concatenated
console.log(string + "!");

var x = 10;
if ( (null) || (console.log("Hello")) || x > 5 ) {
  console.log("Hello");
}
//here hello will be printed twice

//Strict equality operator (===) differs from regular equality operator (==) in that it checks if both values on its right and left are of the same type first. 
//If they are not, it doesn't try to coerce them to be the same value and just returns false.
/*Since we are using an OR operator, the 'if' statement will stop evaluating conditions after it encounters the very first clause that evaluates to true.
null is false, so we continueconsole.log("Hello"), prints "Hello" to the console and returns nothing, so it's 'undefined' and 'undefined' is false, so we continue
x > 5 is true, so we execute the body of the 'if' statement and print another "Hello". 
So, the answer is that "Hello" will be printed to the console 2 times. */




























