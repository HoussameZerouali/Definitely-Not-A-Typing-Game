const array = ["Hello","World","Cry",'river','dragon','bridge']

const wordToType = document.getElementById("word-display");
const wordTyped = document.getElementById("input-area");
let countdown = 10;

wordToType.value = array[Math.floor(Math.random(0) * array.length)]
wordToType.textContent = wordToType.value

wordTyped.addEventListener("input",()=> {
    if (wordTyped.value === wordToType.value) {
        console.log("good job")
        wordToType.value = array[Math.floor(Math.random(0) * array.length)]
        wordToType.textContent = wordToType.value
        wordTyped.value = "";
    }
})



    