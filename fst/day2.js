// let a = 10
// let b = 5
// let c = a + b
// console.log(`The sum of ${a} and b is ${b} is ${c}`)
let btn = document.getElementById("button1")
btn.addEventListener("click",()=>{
    var inp = parseInt(document.getElementById("textbox").value);
    let box = "";
   for(let i=1;i<=10;i++)
   {
     box += `${inp} x ${i} = ${inp*i}<br>`;
   }
   let output = document.getElementById("output");
   output.innerHTML = box;
})