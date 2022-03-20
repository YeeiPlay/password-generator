const results = document.querySelector("#passwordBox"); 
const btn = document.querySelector("#btnGenerate");
const toggleUpper = document.querySelector("#upperCase"); 
const toggleLower = document.querySelector("#lowerCase"); 
const toggleSymbol = document.querySelector("#symbolToggle");

const numbers = [1,2,3,4,5,6,7,8,9,0];
const symbols = ["`","!", "#","$", "%", "&", "(", ")","-","_","{","[", "]","}", "?", "<", ">", "*", "^"];
const upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const lowerCase = ['a', 'b', 'c', 'd', 'e', 'f','g', 'h', 'i', 'j', 'k', 'l','m', 'n', 'o', 'p', 'q', 'r','s', 't', 'u', 'v', 'w', 'x','y', 'z'];

const slider = document.getElementById("sliderMain");
const output = document.getElementById("sliderOutValue");
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
  }

function userSelection () { 
    let options = [...numbers]

    if (toggleUpper.checked){
        options.push(...upperCase);
    }

    if (toggleLower.checked){
        options.push(...lowerCase);
    } 
    
    if (toggleSymbol.checked){
        options.push(...symbols);
    } 

    return options
}

function generateRandomIdx (arrayLength) {
    return Math.floor(Math.random() * arrayLength);
}

function generatePass () {
    let results = [];
    let optionsArray = userSelection()
    const userLength = slider.checked;
    for (let i = 0; i < slider.value; i++){
        const idx = generateRandomIdx(optionsArray.length);
        results.push(optionsArray[idx])
    }   
    return results.join("")
}

function printToDom () {
    results.innerHTML = generatePass()
}

btn.addEventListener("click", printToDom)








