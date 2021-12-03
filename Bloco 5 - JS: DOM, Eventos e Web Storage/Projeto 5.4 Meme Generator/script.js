let input = document.querySelector('#text-input');
let memeText = document.querySelector('#meme-text');

input.addEventListener('keyup' , function(){
    let textoInput = input.value;
    memeText.textContent = textoInput;
});