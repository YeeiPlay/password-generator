const results = document.querySelector("#passwordBox"); 
const btn = document.querySelector("#btnGenerate");
const toggleUpper = document.querySelector("#upperCase"); 
const toggleLower = document.querySelector("#lowerCase"); 
const toggleSymbol = document.querySelector("#symbolToggle");
const charLength = document.querySelector("#charLength");


const numbers = [1,2,3,4,5,6,7,8,9,0];
const symbols = ["$","#","!","%","@"];
const upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const lowerCase = ['a', 'b', 'c', 'd', 'e', 'f','g', 'h', 'i', 'j', 'k', 'l','m', 'n', 'o', 'p', 'q', 'r','s', 't', 'u', 'v', 'w', 'x','y', 'z'];

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
    const userLength = charLength.checked ? 20: 10; 
    for (let i = 0; i < userLength; i++){
        const idx = generateRandomIdx(optionsArray.length);
        results.push(optionsArray[idx])
    }   
    return results.join("")
}

function printToDom () {
    results.innerHTML = generatePass()
}

btn.addEventListener("click", printToDom)








