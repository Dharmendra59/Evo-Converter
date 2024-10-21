let browse = document.querySelector("#browse");
let browseInput = document.querySelector("#browse input");
let convert = document.querySelector("#convert");
let csvFile = document.querySelector("#csvFile");
let jsonFile = document.querySelector("#jsonFile");
let copy = document.querySelector("#copy");
let save = document.querySelector("#save");
let csvText = document.querySelector("#csvText");
let jsonText = document.querySelector("#jsonText");




browse.addEventListener("click", () => {

    csvFile.click();

});
convert.addEventListener("click", () => {
    jsonFile.click();
});
copy.addEventListener("click", () => {
    navigator.clipboard.writeText(jsonText.value)
    alert(" JSON Data Copied to clipboard");
});