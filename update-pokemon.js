//Allows the addition of pokemon to the .json file



const fs = require("fs");
let POKEMON = {};

fs.readFile("./pokemon.json", "utf-8", function (err, data) {
    if (err) {
        throw err;
    }
    else {
        //Grabs the current JSON data
        POKEMON = JSON.parse(data);

        //Updates the json data
        add_pokemon();
        add_pictures();

        //Outputs new json data to new json file
        let stringed = JSON.stringify(POKEMON, null, 4);
        fs.writeFile("new-pokemon.json", stringed, "utf-8", (err) => {
            if (err) {
                throw err;
            }
            console.log("DONE");
        });
    }
})


function add_pictures() {
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
}

function ap(name, number, type1, type2) {
    POKEMON[name] = {
        "number": number,
        "types": [type1]
    }

    if (type2 != null) {
        POKEMON[name]["types"].push(type2);
    }
}

function add_pokemon() {
    ap("Chikorita", 152, "Grass");
    ap("Bayleef", 153, "Grass");
    ap("Meganium", 154, "Grass");
    ap("Cyndaquil", 155, "Fire");
    ap("Quilava", 156, "Fire");
    ap("Typhlosion", 157, "Fire");
    ap("Totodile", 158, "Water");
    ap("Croconaw", 159, "Water");
    ap("Feraligatr", 160, "Water");
    ap("Sentret", 161, "Normal");
    ap("Furret", 162, "Normal");
    ap("Hoothoot", 163, "Normal", "Flying");
    ap("Noctowl", 164, "Normal", "Flying");
    ap("Ledyba", 165, "Bug", "Flying");
    ap("Ledian", 166, "Bug", "Flying");
    ap("Spinarak", 167, "Bug", "Poison");
    ap("Ariados", 168, "Bug", "Poison");
    ap("Crobat", 169, "Poison", "Flying");
    ap("Chinchou", 170, "Water", "Electric");
    ap("Lantern", 171, "Water", "Electric");
    ap("Pichu", 172, "Electric");
    ap("Cleffa", 173, "Normal");
    ap("Igglybuff", 174, "Normal");
    ap("Togepi", 175, "Normal");
    ap("Togetic", 176, "Normal", "Flying");
    ap("Natu", 177, "Psychic", "Flying");
    ap("Xatu", 178, "Psychic", "Flying");
    ap("Mareep", 179, "Electric");
    ap("Flaafy", 180, "Electric");
    ap("Ampharos", 181, "Electric");
    ap("Bellossom", 182, "Grass");
    ap("Marill", 183, "Water");
    ap("Azumarill", 184, "Water");
    ap("Sudowoodo", 185, "Rock");
    ap("Politoed", 186, "Water");
    ap("Hoppip", 187, "Grass", "Flying");
    ap("Skiploom", 188, "Grass", "Flying");
    ap("Jumpluff", 189, "Grass", "Flying");
    ap("Aipom", 190, "Normal");
    ap("Sunkern", 191, "Grass");
    ap("Sunflora", 192, "Grass");
    ap("Yanma", 193, "Bug", "Flying");
    ap("Wooper", 194, "Water", "Ground");
    ap("Quagsire", 195, "Water", "Ground");
    ap("Espeon", 196, "Psychic");
    ap("Umbreon", 197, "Dark");
    ap("Murkrow", 198, "Dark", "Flying");
    ap("Slowking", 199, "Water", "Psychic");
    ap("Misdreavus", 200, "Ghost");
    ap("Unown", 201, "Psychic");
    ap("Wobbuffet", 202, "Psychic");
    ap("Girafarig", 203, "Normal", "Psychic");
    ap("Pineco", 204, "Bug");
    ap("Forretress", 205, "Bug", "Steel");
    ap("Dunsparce", 206, "Normal");
    ap("Gligar", 207, "Ground", "Flying");
    ap("Steelix", 208, "Steel", "Ground");
    ap("Snubbull", 209, "Normal");
    ap("Granbull", 210, "Normal");
    ap("Qwilfish", 211, "Water", "Poison");
    ap("Scizor", 212, "Bug", "Steel");
    ap("Shuckle", 213, "Bug", "Rock");
    ap("Heracross", 214, "Bug", "Fighting");
    ap("Sneasel", 215, "Dark", "Ice");
    ap("Teddiursa", 216, "Normal");
    ap("Ursaring", 217, "Normal");
    ap("Slugma", 218, "Fire");
    ap("Magcargo", 219, "Fire", "Rock");
    ap("Swinub", 220, "Ice", "Ground");
    ap("Piloswine", 221, "Ice", "Ground");
    ap("Corsola", 222, "Water", "Rock");
    ap("Remoraid", 223, "Water");
    ap("Octillery", 224, "Water");
    ap("Delibird", 225, "Ice", "Flying");
    ap("Mantine", 226, "Water", "Flying");
    ap("Skarmory", 227, "Steel", "Flying");
    ap("Houndour", 228, "Dark", "Fire");
    ap("Houndoom", 229, "Dark", "Fire");
    ap("Kingdra", 230, "Water", "Dragon");
    ap("Phanpy", 231, "Ground");
    ap("Donphan", 232, "Ground");
    ap("Porygon2", 233, "Normal");
    ap("Stantler", 234, "Normal");
    ap("Smeargle", 235, "Normal");
    ap("Tyrogue", 236, "Fighting");
    ap("Hitmontop", 237, "Fighting");
    ap("Smoochum", 238, "Ice", "Psychic");
    ap("Elekid", 239, "Electric");
    ap("Magby", 240, "Fire");
    ap("Miltank", 241, "Normal");
    ap("Blissey", 242, "Normal");
    ap("Raikou", 243, "Electric");
    ap("Entei", 244, "Fire");
    ap("Suicune", 245, "Water");
    ap("Larvitar", 246, "Rock", "Ground");
    ap("Pupitar", 247, "Rock", "Ground");
    ap("Tyranitar", 248, "Rock", "Dark");
    ap("Lugia", 249, "Psychic", "Flying");
    ap("Ho-oh", 250, "Fire", "Flying");
    ap("Celebi", 251, "Psychic", "Grass");
}