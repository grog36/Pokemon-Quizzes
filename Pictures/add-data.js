const fs = require("fs");


fs.readFile("./pokemon.json", "utf-8", function (err, data) {
    if (err) {
        throw err;
    }
    else {
        let POKEMON = JSON.parse(data);
        for (let mon in POKEMON) {
            let num = POKEMON[mon]["number"];
            if (num < 10) {
                POKEMON[mon]["picture"] = `./Pictures/00${num}.png`;
            }
            else if (num < 100) {
                POKEMON[mon]["picture"] = `./Pictures/0${num}.png`;
            }
            else {
                POKEMON[mon]["picture"] = `./Pictures/${num}.png`;
            }
        }
        let stringed = JSON.stringify(POKEMON, null, 4);
        fs.writeFile("output.json", stringed, "utf-8", (err) => {
            if (err) {
                throw err;
            }
            console.log("DONE");
        });
    }
})