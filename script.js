let browse = document.querySelector("#browse");
let csvInput = document.querySelector("#browse input");
let convert = document.querySelector("#convert");
let csvFile = document.querySelector("#csvFile");
let jsonFile = document.querySelector("#jsonFile");
let copy = document.querySelector("#copy");
let save = document.querySelector("#save");
let csvText = document.querySelector("#csvText");
let jsonText = document.querySelector("#jsonText");




browse.addEventListener("click", () => {
    csvFile.click();



    let file = csvFile.files[0];
    let reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => {
        csvText.value = reader.result;
    }
    reader.onerror = () => {
        alert("error");
    }



});
convert.addEventListener("click", () => {
    //jsonFile.click();
    if (csvInput || csvText.value ? true : false) {

        let csv = csvInput.value ? csvInput.value : csvText.value;
        let lines = csv.split("\n");
        let json = [];
        let headers = lines[0].split(",");
        for (let i = 1; i < lines.length; i++) {
            let obj = {};
            let currentline = lines[i].split(",");
            for (let j = 0; j < headers.length; j++) {
                obj[headers[j]] = currentline[j];
            }
            json.push(obj);
        }
        jsonText.value = JSON.stringify(json);
    }


});
copy.addEventListener("click", () => {
    navigator.clipboard.writeText(jsonText.value)
    alert(" JSON Data Copied to clipboard");
});
save.addEventListener("click", () => {
    if (!jsonText.value) {
        alert("No JSON data to save");
    } else {
        let blob = new Blob([jsonText.value], { type: "application/json" });
        let a = document.createElement("a");
        a.download = "data.json";
        a.href = window.URL.createObjectURL(blob);
        a.click();
    }
});