/**
 * File contains the code to update the pokemon.json file
 */


//Libraries
const fs = require("fs");

//Pokemon json object
let POKEMON = {};

//Define pokemon types
const NORMAL = "Normal";
const FIRE = "Fire";
const WATER = "Water";
const GRASS = "Grass";
const ELECTRIC = "Electric";
const ICE = "Ice";
const FIGHTING = "Fighting";
const POISON = "Poison";
const GROUND = "Ground";
const FLYING = "Flying";
const PSYCHIC = "Psychic";
const BUG = "Bug";
const ROCK = "Rock";
const GHOST = "Ghost";
const DRAGON = "Dragon";
const DARK = "Dark";
const STEEL = "Steel";

//Updates the json data
add_gen1();
add_gen2();
add_gen3();
add_pictures();

//Outputs new json data to new json file
let stringed = JSON.stringify(POKEMON, null, 4);
fs.writeFile("pokemon.json", stringed, "utf-8", (err) => {
    if (err) {
        throw err;
    }
    console.log("DONE");
});



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

function add_gen1() {
    ap("Bulbasaur", 1, GRASS, POISON);
    ap("Ivysaur", 2, GRASS, POISON);
    ap("Venusaur", 3, GRASS, POISON);
    ap("Charmander", 4, FIRE);
    ap("Charmeleon", 5, FIRE);
    ap("Charizard", 6, FIRE, FLYING);
    ap("Squirtle", 7, WATER);
    ap("Wartortle", 8, WATER);
    ap("Blastoise", 9, WATER);
    ap("Caterpie", 10, BUG);
    ap("Metapod", 11, BUG);
    ap("Butterfree", 12, BUG, FLYING);
    ap("Weedle", 13, BUG, POISON);
    ap("Kakuna", 14, BUG, POISON);
    ap("Beedrill", 15, BUG, POISON);
    ap("Pidgey", 16, NORMAL, FLYING);
    ap("Pidgeotto", 17, NORMAL, FLYING);
    ap("Pidgeot", 18, NORMAL, FLYING);
    ap("Rattata", 19, NORMAL);
    ap("Raticate", 20, NORMAL);
    ap("Spearow", 21, NORMAL, FLYING);
    ap("Fearow", 22, NORMAL, FLYING);
    ap("Ekans", 23, POISON);
    ap("Arbok", 24, POISON);
    ap("Pikachu", 25, ELECTRIC);
    ap("Raichu", 26, ELECTRIC);
    ap("Sandshrew", 27, GROUND);
    ap("Sandslash", 28, GROUND);
    ap("Nidoran(f)", 29, POISON);
    ap("Nidorina", 30, POISON);
    ap("Nidoqueen", 31, POISON, GROUND);
    ap("Nidoran(m)", 32, POISON);
    ap("Nidorino", 33, POISON);
    ap("Nidoking", 34, POISON, GROUND);
    ap("Clefairy", 35, NORMAL);
    ap("Clefable", 36, NORMAL);
    ap("Vulpix", 37, FIRE);
    ap("Ninetales", 38, FIRE);
    ap("Jigglypuff", 39, NORMAL);
    ap("Wigglytuff", 40, NORMAL);
    ap("Zubat", 41, POISON, FLYING);
    ap("Golbat", 42, POISON, FLYING);
    ap("Oddish", 43, GRASS, POISON);
    ap("Gloom", 44, GRASS, POISON);
    ap("Vileplume", 45, GRASS, POISON);
    ap("Paras", 46, BUG, GRASS);
    ap("Parasect", 47, BUG, GRASS);
    ap("Venonat", 48, BUG, POISON);
    ap("Venomoth", 49, BUG, POISON);
    ap("Diglett", 50, GROUND);
    ap("Dugtrio", 51, GROUND);
    ap("Meowth", 52, NORMAL);
    ap("Persian", 53, NORMAL);
    ap("Psyduck", 54, WATER);
    ap("Golduck", 55, WATER);
    ap("Mankey", 56, FIGHTING);
    ap("Primeape", 57, FIGHTING);
    ap("Growlithe", 58, FIRE);
    ap("Arcanine", 59, FIRE);
    ap("Poliwag", 60, WATER);
    ap("Poliwhirl", 61, WATER);
    ap("Poliwrath", 62, WATER, FIGHTING);
    ap("Abra", 63, PSYCHIC);
    ap("Kadabra", 64, PSYCHIC);
    ap("Alakazam", 65, PSYCHIC);
    ap("Machop", 66, FIGHTING);
    ap("Machoke", 67, FIGHTING);
    ap("Machamp", 68, FIGHTING);
    ap("Bellsprout", 69, GRASS, POISON);
    ap("Weepinbell", 70, GRASS, POISON);
    ap("Victreebel", 71, GRASS, POISON);
    ap("Tentacool", 72, WATER, POISON);
    ap("Tentacruel", 73, WATER, POISON);
    ap("Geodude", 74, ROCK, GROUND);
    ap("Graveler", 75, ROCK, GROUND);
    ap("Golem", 76, ROCK, GROUND);
    ap("Ponyta", 77, FIRE);
    ap("Rapidash", 78, FIRE);
    ap("Slowpoke", 79, WATER, PSYCHIC);
    ap("Slowbro", 80, WATER, PSYCHIC);
    ap("Magnemite", 81, ELECTRIC, STEEL);
    ap("Magneton", 82, ELECTRIC, STEEL);
    ap("Farfetch'd", 83, NORMAL, FLYING);
    ap("Doduo", 84, NORMAL, FLYING);
    ap("Dodrio", 85, NORMAL, FLYING);
    ap("Seel", 86, WATER);
    ap("Dewgong", 87, WATER, ICE);
    ap("Grimer", 88, POISON);
    ap("Muk", 89, POISON);
    ap("Shellder", 90, WATER);
    ap("Cloyster", 91, WATER, ICE);
    ap("Gastly", 92, GHOST, POISON);
    ap("Haunter", 93, GHOST, POISON);
    ap("Gengar", 94, GHOST, POISON);
    ap("Onix", 95, ROCK, GROUND);
    ap("Drowzee", 96, PSYCHIC);
    ap("Hypno", 97, PSYCHIC);
    ap("Krabby", 98, WATER);
    ap("Kingler", 99, WATER);
    ap("Voltorb", 100, ELECTRIC);
    ap("Electrode", 101, ELECTRIC);
    ap("Exeggcute", 102, GRASS, PSYCHIC);
    ap("Cubone", 104, GROUND);
    ap("Marowak", 105, GROUND);
    ap("Hitmonlee", 106, FIGHTING);
    ap("Hitmonchan", 107, FIGHTING);
    ap("Lickitung", 108, NORMAL);
    ap("Koffing", 109, POISON);
    ap("Weezing", 110, POISON);
    ap("Rhyhorn", 111, GROUND, ROCK);
    ap("Rhdyon", 112, GROUND, ROCK);
    ap("Chansey", 113, NORMAL);
    ap("Tangela", 114, GRASS);
    ap("Kangaskhan", 115, NORMAL);
    ap("Horsea", 116, WATER);
    ap("Seadra", 117, WATER);
    ap("Goldeen", 118, WATER);
    ap("Seaking", 119, WATER);
    ap("Staryu", 120, WATER);
    ap("Starmie", 121, WATER, PSYCHIC);
    ap("Mr.Mime", 122, PSYCHIC);
    ap("Scyther", 123, BUG, FLYING);
    ap("Jynx", 124, ICE, PSYCHIC);
    ap("Electabuzz", 125, ELECTRIC);
    ap("Magmar", 126, FIRE);
    ap("Pinsir", 127, BUG);
    ap("Tauros", 128, NORMAL);
    ap("Magikarp", 129, WATER);
    ap("Gyarados", 130, WATER, FLYING);
    ap("Lapras", 131, WATER, ICE);
    ap("Ditto", 132, NORMAL);
    ap("Eevee", 133, NORMAL);
    ap("Vaporeon", 134, WATER);
    ap("Jolteon", 135, ELECTRIC);
    ap("Flareon", 136, FIRE);
    ap("Porygon", 137, NORMAL);
    ap("Omanyte", 138, ROCK, WATER);
    ap("Omastar", 139, ROCK, WATER);
    ap("Kabuto", 140, ROCK, WATER);
    ap("Kabutops", 141, ROCK, WATER);
    ap("Aerodactyl", 142, ROCK, FLYING);
    ap("Snorlax", 143, NORMAL);
    ap("Articuno", 144, ICE, FLYING);
    ap("Zapdos", 145, ELECTRIC, FLYING);
    ap("Moltres", 146, FIRE, FLYING);
    ap("Dratini", 147, DRAGON);
    ap("Dragonair", 148, DRAGON);
    ap("Dragonite", 149, DRAGON, FLYING);
    ap("Mewtwo", 150, PSYCHIC);
    ap("Mew", 151, PSYCHIC);
}

function add_gen2() {
    ap("Chikorita", 152, GRASS);
    ap("Bayleef", 153, GRASS);
    ap("Meganium", 154, GRASS);
    ap("Cyndaquil", 155, FIRE);
    ap("Quilava", 156, FIRE);
    ap("Typhlosion", 157, FIRE);
    ap("Totodile", 158, WATER);
    ap("Croconaw", 159, WATER);
    ap("Feraligatr", 160, WATER);
    ap("Sentret", 161, NORMAL);
    ap("Furret", 162, NORMAL);
    ap("Hoothoot", 163, NORMAL, FLYING);
    ap("Noctowl", 164, NORMAL, FLYING);
    ap("Ledyba", 165, BUG, FLYING);
    ap("Ledian", 166, BUG, FLYING);
    ap("Spinarak", 167, BUG, POISON);
    ap("Ariados", 168, BUG, POISON);
    ap("Crobat", 169, POISON, FLYING);
    ap("Chinchou", 170, WATER, ELECTRIC);
    ap("Lantern", 171, WATER, ELECTRIC);
    ap("Pichu", 172, ELECTRIC);
    ap("Cleffa", 173, NORMAL);
    ap("Igglybuff", 174, NORMAL);
    ap("Togepi", 175, NORMAL);
    ap("Togetic", 176, NORMAL, FLYING);
    ap("Natu", 177, PSYCHIC, FLYING);
    ap("Xatu", 178, PSYCHIC, FLYING);
    ap("Mareep", 179, ELECTRIC);
    ap("Flaafy", 180, ELECTRIC);
    ap("Ampharos", 181, ELECTRIC);
    ap("Bellossom", 182, GRASS);
    ap("Marill", 183, WATER);
    ap("Azumarill", 184, WATER);
    ap("Sudowoodo", 185, ROCK);
    ap("Politoed", 186, WATER);
    ap("Hoppip", 187, GRASS, FLYING);
    ap("Skiploom", 188, GRASS, FLYING);
    ap("Jumpluff", 189, GRASS, FLYING);
    ap("Aipom", 190, NORMAL);
    ap("Sunkern", 191, GRASS);
    ap("Sunflora", 192, GRASS);
    ap("Yanma", 193, BUG, FLYING);
    ap("Wooper", 194, WATER, GROUND);
    ap("Quagsire", 195, WATER, GROUND);
    ap("Espeon", 196, PSYCHIC);
    ap("Umbreon", 197, DARK);
    ap("Murkrow", 198, DARK, FLYING);
    ap("Slowking", 199, WATER, PSYCHIC);
    ap("Misdreavus", 200, GHOST);
    ap("Unown", 201, PSYCHIC);
    ap("Wobbuffet", 202, PSYCHIC);
    ap("Girafarig", 203, NORMAL, PSYCHIC);
    ap("Pineco", 204, BUG);
    ap("Forretress", 205, BUG, STEEL);
    ap("Dunsparce", 206, NORMAL);
    ap("Gligar", 207, GROUND, FLYING);
    ap("Steelix", 208, STEEL, GROUND);
    ap("Snubbull", 209, NORMAL);
    ap("Granbull", 210, NORMAL);
    ap("Qwilfish", 211, WATER, POISON);
    ap("Scizor", 212, BUG, STEEL);
    ap("Shuckle", 213, BUG, ROCK);
    ap("Heracross", 214, BUG, FIGHTING);
    ap("Sneasel", 215, DARK, ICE);
    ap("Teddiursa", 216, NORMAL);
    ap("Ursaring", 217, NORMAL);
    ap("Slugma", 218, FIRE);
    ap("Magcargo", 219, FIRE, ROCK);
    ap("Swinub", 220, ICE, GROUND);
    ap("Piloswine", 221, ICE, GROUND);
    ap("Corsola", 222, WATER, ROCK);
    ap("Remoraid", 223, WATER);
    ap("Octillery", 224, WATER);
    ap("Delibird", 225, ICE, FLYING);
    ap("Mantine", 226, WATER, FLYING);
    ap("Skarmory", 227, STEEL, FLYING);
    ap("Houndour", 228, DARK, FIRE);
    ap("Houndoom", 229, DARK, FIRE);
    ap("Kingdra", 230, WATER, DRAGON);
    ap("Phanpy", 231, GROUND);
    ap("Donphan", 232, GROUND);
    ap("Porygon2", 233, NORMAL);
    ap("Stantler", 234, NORMAL);
    ap("Smeargle", 235, NORMAL);
    ap("Tyrogue", 236, FIGHTING);
    ap("Hitmontop", 237, FIGHTING);
    ap("Smoochum", 238, ICE, PSYCHIC);
    ap("Elekid", 239, ELECTRIC);
    ap("Magby", 240, FIRE);
    ap("Miltank", 241, NORMAL);
    ap("Blissey", 242, NORMAL);
    ap("Raikou", 243, ELECTRIC);
    ap("Entei", 244, FIRE);
    ap("Suicune", 245, WATER);
    ap("Larvitar", 246, ROCK, GROUND);
    ap("Pupitar", 247, ROCK, GROUND);
    ap("Tyranitar", 248, ROCK, DARK);
    ap("Lugia", 249, PSYCHIC, FLYING);
    ap("Ho-oh", 250, FIRE, FLYING);
    ap("Celebi", 251, PSYCHIC, GRASS);
}

function add_gen3() {
    ap("Treecko", 252, GRASS);
    ap("Grovyle", 253, GRASS);
    ap("Sceptile", 254, GRASS);
    ap("Torchic", 255, FIRE);
    ap("Combusken", 256, FIRE, FIGHTING);
    ap("Blaziken", 257, FIRE, FIGHTING);
    ap("Mudkip", 258, WATER);
    ap("Marshtomp", 259, WATER, GROUND);
    ap("Swampert", 260, WATER, GROUND);
    ap("Poochyena", 261, DARK);
    ap("Mightyena", 262, DARK);
    ap("Zigzagoon", 263, NORMAL);
    ap("Linoone", 264, NORMAL);
    ap("Wurmple", 265, BUG);
    ap("Silcoon", 266, BUG);
    ap("Beautifly", 267, BUG, FLYING);
    ap("Cascoon", 268, BUG);
    ap("Dustox", 269, BUG, POISON);
    ap("Lotad", 270, WATER, GRASS);
    ap("Lombre", 271, WATER, GRASS);
    ap("Ludicolo", 272, WATER, GRASS);
    ap("Seedot", 273, GRASS);
    ap("Nuzleaf", 274, GRASS, DARK);
    ap("Shiftry", 275, GRASS, DARK);
    ap("Taillow", 276, NORMAL, FLYING);
    ap("Swellow", 277, NORMAL, FLYING);
    ap("Wingull", 278, WATER, FLYING);
    ap("Pelipper", 279, WATER, FLYING);
    ap("Ralts", 280, PSYCHIC);
    ap("Kirlia", 281, PSYCHIC);
    ap("Gardevoir", 282, PSYCHIC);
    ap("Surskit", 283, BUG, WATER);
    ap("Masquerain", 284, BUG, FLYING);
    ap("Shroomish", 285, GRASS);
    ap("Breloom", 286, GRASS, FIGHTING);
    ap("Slakoth", 287, NORMAL);
    ap("Vigoroth", 288, NORMAL);
    ap("Slaking", 289, NORMAL);
    ap("Nincada", 290, BUG, GROUND);
    ap("Ninjask", 291, BUG, FLYING);
    ap("Shedinja", 292, BUG, GHOST);
    ap("Whismur", 293, NORMAL);
    ap("Loudred", 294, NORMAL);
    ap("Exploud", 295, NORMAL);
    ap("Makuhita", 296, FIGHTING);
    ap("Hariyama", 297, FIGHTING);
    ap("Azurill", 298, NORMAL);
    ap("Nosepass", 299, ROCK);
    ap("Skitty", 300, NORMAL);
    ap("Delcatty", 301, NORMAL);
    ap("Sableye", 302, DARK, GHOST);
    ap("Mawile", 303, STEEL);
    ap("Aron", 304, STEEL, ROCK);
    ap("Lairon", 305, STEEL, ROCK);
    ap("Aggron", 306, STEEL, ROCK);
    ap("Meditite", 307, FIGHTING, PSYCHIC);
    ap("Medicham", 308, FIGHTING, PSYCHIC);
    ap("Electrike", 309, ELECTRIC);
    ap("Manectric", 310, ELECTRIC);
}