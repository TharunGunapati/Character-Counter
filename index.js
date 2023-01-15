const textareaE1 = document.getElementById("textarea");
const totalCounterE1 = document.getElementById("total-charc");
const reaminCounterE1 =document.getElementById("reamin-charc");
textareaE1.addEventListener("keyup",()=>{
   // console.log("key is pressed");
   updateCounter()
})
function updateCounter(){
    totalCounterE1.innerText= textareaE1.value.length
    reaminCounterE1.innerText=textareaE1.getAttribute("maxLength")-textareaE1.value.length;
}
//reaminCounterE1 = textareaE1-totalCounterE1.innerText;