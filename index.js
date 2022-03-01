let apiKey = "cf002751564a4c78f5f7ed479f1b9ba3";
// getting the button form the page
 let button = document.querySelector("#Search");
//  getting the date to display on the page
 let name = document.querySelector("#name")
 let desc = document.querySelector("#desc")
 let tem = document.querySelector("#temp")
//  when the button listen to click and its empty the respond will be Please Enter A city if they click city the the API will get the date 
 button.addEventListener("click", () => {
    let cityName = document.querySelector("#city-Name").value;
    if (cityName === "") {
        alert("Please Enter A city");
    } else {
        const api = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
        console.log(api);
        fetch(api)
        .then((response) => {
            return response.json();
         })
         .then((data) => {
             let nameValue = data["name"];
             let temp = data["main"]["temp"];
             let descValue = data["weather"][0]["description"];

             console.log(nameValue);
             console.log(temp);
             console.log(descValue);

             name.innerHTML = `Name: ${nameValue}`;
				tem.innerHTML = `Temp: ${temp}`;
				desc.innerHTML = `Description: ${descValue}`;

         })
         .catch((error) => {
             console.log("Error: ", error);

         });
    }

});
