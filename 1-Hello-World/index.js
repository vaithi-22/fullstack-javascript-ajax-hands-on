
// let url="https://4geeksacademy.github.io/exercise-assets/txt/hello.txt";

// axios.get(url).then( function (response) {
//     document.querySelector("#output").innerHTML=response.data;
// })

document.addEventListener("DOMContentLoaded", function(){
    const url = "https://4geeksacademy.github.io/exercise-assets/txt/hello.txt";

    async function loadData() {

        const response = await axios.get(url);
        const outputEl = document.querySelector("#output");
         outputEl.innerHTML=response.data;
    }
    loadData();
});
