let prompt = require('prompt-sync')();

let weather = prompt('Enter the Weather type: ');

if(weather === "hot"){
    console.log("sandals");
}
else if(weather === "rain"){
    console.log("galoshes");
}
else if(weather === "snow"){
    console.log("boots");
}
else {
    console.log("shoes")
}

/* input: Get the weather type
   processing: select the weather type to find the match shoes
   output: "sadals", "galoshes", "boots" or "shoes"
*/