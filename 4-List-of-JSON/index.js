document.addEventListener("DOMContentLoaded", function () {

    const url = "https://raw.githubusercontent.com/kunxin-chor/data-files-and-stuff/master/users.json";

    async function loadData() {
        
        const reponse = await axios.get(url);
        console.log(reponse.data);
       const outputEl = document.querySelector("#output");
      outputEl.innerHTML = `
         <ul>
      <li> ${reponse.data.users[0].firstName} ${reponse.data.users[0].lastName} (${reponse.data.users[0].emailAddress})</li>
      <li>${reponse.data.users[1].firstName} ${reponse.data.users[1].lastName} (${reponse.data.users[1].emailAddress})</li>
      <li>${reponse.data.users[2].firstName} ${reponse.data.users[2].lastName} (${reponse.data.users[2].emailAddress})</li>
      <li>${reponse.data.users[3].firstName} ${reponse.data.users[3].lastName} (${reponse.data.users[3].emailAddress})</li>
      <li>${reponse.data.users[4].firstName} ${reponse.data.users[4].lastName} (${reponse.data.users[4].emailAddress})</li>
      
        </ul> `
    }




    loadData();
})