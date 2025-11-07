document.addEventListener("DOMContentLoaded", function () {
   const url = "https://raw.githubusercontent.com/kunxin-chor/data-files-and-stuff/master/sample-json-2.json";

   // const outputBtn= document.querySelector("#outputBtn");
   // outputBtn.addEventListener("click", function(){


   async function loadData() {

      const response = await axios.get(url);
      console.log(response.data);
      const outputEl = document.querySelector("#output");
      outputEl.innerHTML = `
         <ul>
      <li>First Name:${response.data.firstName}</li>
       <li>Last Name: ${response.data.lastName}</li>
  <li>Street Address: ${response.data.address.streetAddress}</li>
  <li>City: ${response.data.address.city}</li>
  <li>State: ${response.data.address.state}</li>
  <li>Postal Code: ${response.data.address.postalCode}</li>
  <li>Phone Number: ${response.data.phoneNumbers[0].number}</li>
      
        </ul> `
   }
   loadData();

});




