const fetch = require("node-fetch");
const api_url = "https://api.quotable.io/random?minLength=60"	

module.exports = getData = async() =>{
    const weather = await fetch(
       api_url
    );
    let response = await weather.json();

return response.content.split(" ");
}   