// console.log("hello world")
// function evenNum(){
//     var startNumber;
//     var lastNumber;
//     lastNumber=parseInt(form1.even.value);
//     startNumber =0;
//     for(startNumber;startNumber< lastNumber;startNumber=startNumber+2)
//     {
//         alert(startNumber)
//     }


// }
function evenNum(){
    var startNumber;
    var lastNumber;
    lastNumber= parseInt(form1.even.value);
    startNumber=0
    if(lastNumber==0){
       alert("enter a number")
    }
    for(startNumber;startNumber<lastNumber; startNumber=startNumber+2)
    {
        alert(startNumber)
    }
    


    
}