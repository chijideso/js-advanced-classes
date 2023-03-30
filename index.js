console.log("Hello world");
// var firstName = "chijioke";
// console.log(firstName)
var firstName;
var age;
age = 10;
firstName = "Desmond";
console.log("my name is " +firstName + " and i am "+age +"  years old" );

var a;
var b = 2;
var result = 0;

function func1()
{
    var b = 10;
    result = b+a
    console.log("the result of my func1 :"+ result  );

}
function func2()
{
    result = a+b;
    console.log("the result of my func2 :" +result  )
}
function calculate()
{
    a=parseInt(form1.txtNum.value);
    func1();
    func2();
}