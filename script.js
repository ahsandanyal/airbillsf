const removeBtn = document.getElementById('remove');
const inputs = document.querySelectorAll('input');
function myPagePrint(){
    window.print();
}

removeBtn.addEventListener('click', ()=>{
 inputs.forEach(inp=> inp.value = '');
})