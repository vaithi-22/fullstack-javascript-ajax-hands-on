document.addEventListener("DOMContentLoaded", function(){


let url = "https://raw.githubusercontent.com/kunxin-chor/data-files-and-stuff/master/json-simple.json";

async function localData() {
    let response = await axios.get(url);
    console.log(response.data);


    let outputDiv = document.querySelector("#output");
    outputDiv.innerHTML = `
    <ul>
    <li>Name : ${response.data.Name}</li>
    <li>Mobil :${response.data.Mobile}</li>
    <li>Boolean :${response.data.Boolean ? "yes": "no"}</li>
    <li>Pets : ${response.data.Pets}</li>
    <li>Current Address : ${response.data.Address["current Address"]}</li>
    <li>Permanent Address : ${response.data.Address["Permanent address"]}</li>
    </ul>

    `
;

}

localData();
});