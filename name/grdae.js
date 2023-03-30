// console.log("hello world")
// function checkResult()
// {
//     var strGrade;
//     strGrade = form2.txtGrade.value;
//     if (strGrade =="100"){
//         alert("outstanding")
//     }
//     else if(strGrade =="70")
//     {
//         alert("excellent")
//     }
//     else if(strGrade =="60")
//     {
//         alert("VERY_GOOD")
//     }
//     else if(strGrade =="60")
//     {
//         alert("GOOD")
//     }
//     else if(strGrade =="40")
//     {
//         alert("AVERAGE")
//     }
//     else if(strGrade =="30")
//     {
//         alert("FAIL")
//     }
//     else if(strGrade =="20")
//     {
//         alert("FAIL")
//     }
//     else if(strGrade =="10")
//     {
//         alert("FAIL")
//     }
//     else if(strGrade =="a")
//     {
//         alert("use only capital letters of each words eg.A ,VG")
//     }

//     else if(strGrade =="vg")
//     {
//         alert("use only capital letters of each words eg.A ,VG")
//     }

//     else if(strGrade =="g")
//     {
//         alert("use only capital letters of each words eg.A ,VG")
//     }

//     else if(strGrade =="vg")
//     {
//         alert("use only capital letters of each words eg.A ,VG")
//     }
//     else if(strGrade =="f")
//     {
//         alert("use only capital letters of each words eg.A ,VG")
//     }
// }
function checkResult(){
    var strGrade
    strGrade = form2.txtGrade.value
    if (strGrade >="40"){
        alert("passs")
}
else if(strGrade <="39.9"){
    alert("fail")
}
}