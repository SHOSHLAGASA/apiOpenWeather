let apiKey = "cf002751564a4c78f5f7ed479f1b9ba3";
//  getting the date to display on the page
 let name = document.querySelector("#name")
 let desc = document.querySelector("#desc")
 let tem = document.querySelector("#temp")
//  when the button listen to click and its empty the respond will be Please Enter A city if they click city the the API will get the date 
document
    .querySelector("#Search")
    .addEventListener("click", () => { 
    let cityName = document.querySelector("#city-Name").value;
    if (cityName === "") {
        alert("Please Enter A city");
    } else {
        const getDataByCity = async (city) => {
            const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
            return fetch(api)
        }
        getDataByCity(cityName)
        .then((response) => {
            return response.json();
         })
         .then((data) => { 
console.log(`data`, data)
             let nameValue = data["name"];
             let temp = data["main"]["temp"];
             let descValue = data["weather"][0]["description"];

             console.log(nameValue);
             console.log(temp);
             console.log(descValue);

             setResponseHtml(nameValue, temp, descValue)

             const setResponseHtml = (nameValue, temp, descValue) => {
                name.innerHTML = `Name: ${nameValue}`;
                tem.innerHTML = `Temp: ${temp}`;
                desc.innerHTML = `Description: ${descValue}`;
            }
         })
         .catch((error) => {
             console.log("Error: ", error);

         });
    }

});

