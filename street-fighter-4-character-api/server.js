const express = require("express")
const app = express()
const cors = require("cors")
const PORT = 8000

app.use(cors())

const fighters = {
  "ryu": {
    "name": "ryu",
    "charName": "Ryu",
    "firstGame": "Street Fighter",
    "birthDate": "July 21",
    "birthPlace": "Japan",
    "fightingStyle": "Ansatsuken",
    "likes": 0
  },
  "ken": {
    "name": "ken",
    "charName": "Ken",
    "firstGame": "Street Fighter",
    "birthDate": "February 14",
    "birthPlace": "USA",
    "fightingStyle": "Ansatsuken",
    "likes": 0
  },
  "chun li": {
    "name": "chun li",
    "charName": "Chun Li",
    "firstGame": "Street Fighter II",
    "birthDate": "March 1",
    "birthPlace": "China",
    "fightingStyle": "Chinese martial arts",
    "likes": 0
  },
  "e. honda": {
    "name": "e. honda",
    "charName": "E. Honda",
    "firstGame": "Street Fighter II",
    "birthDate": "November 3",
    "birthPlace": "Japan",
    "fightingStyle": "Japanese sumo wrestling",
    "likes": 0
  },
  "blanka": {
    "name": "blanka",
    "charName": "Blanka",
    "firstGame": "Street Fighter II",
    "birthDate": "February 12",
    "birthPlace": "Brazil",
    "fightingStyle": "Feral movement, electric attacks",
    "likes": 0
  },
  "zangief": {
    "name": "zangief",
    "charName": "Zangief",
    "firstGame": "Street Fighter II",
    "birthDate": "June 1",
    "birthPlace": "Russia",
    "fightingStyle": "Mix of Russian and American pro wrestling",
    "likes": 0
  },
  "guile": {
    "name": "guile",
    "charName": "Guile",
    "firstGame": "Street Fighter II",
    "birthDate": "December 23",
    "birthPlace": "USA",
    "fightingStyle": "Martial arts and professional wrestling",
    "likes": 0
  },
  "dhalsim": {
    "name": "dhalsim",
    "charName": "Dhalsim",
    "firstGame": "Street Fighter II",
    "birthDate": "November 22, 1952",
    "birthPlace": "India",
    "fightingStyle": "Esoteri",
    "likes": 0
  },
  "balrog": {
    "name": "balrog",
    "charName": "Balrog",
    "firstGame": "Street Fighter II (unplayable boss)",
    "birthDate": "September 4",
    "birthPlace": "USA",
    "fightingStyle": "Boxing",
    "likes": 0
  },
  "vega": {
    "name": "vega",
    "charName": "Vega",
    "firstGame": "Street Fighter II (unplayable boss)",
    "birthDate": "January 27",
    "birthPlace": "Spain",
    "fightingStyle": "Spanish Ninjutsu",
    "likes": 0
  },
  "sagat": {
    "name": "sagat",
    "charName": "Sagat",
    "firstGame": "Street Fighter II (unplayable boss)",
    "birthDate": "July 2",
    "birthPlace": "Thailand",
    "fightingStyle": "Muay Thai",
    "likes": 0
  },
  "m. bison": {
    "name": "m. bison",
    "charName": "M. Bison",
    "firstGame": "Street Fighter II (unplayable boss)",
    "birthDate": "January 17",
    "birthPlace": "Unknown",
    "fightingStyle": "Psycho Power",
    "likes": 0
  },
  "abel": {
    "name": "abel",
    "charName": "Abel",
    "firstGame": "Street Fighter IV",
    "birthDate": "November 5",
    "birthPlace": "Raised in France (actual birthplace unknown)",
    "fightingStyle": "Mixed martial arts based on Judo",
    "likes": 0
  },
  "c. viper": {
    "name": "c. viper",
    "charName": "C. Viper",
    "firstGame": "Street Fighter IV",
    "birthDate": "July 18",
    "birthPlace": "USA",
    "fightingStyle": "Secret spy gadgets",
    "likes": 0
  },
  "rufus": {
    "name": "rufus",
    "charName": "Rufus",
    "firstGame": "Street Fighter IV",
    "birthDate": "July 30",
    "birthPlace": "USA",
    "fightingStyle": "What he thinks are Karate and Kung Fu",
    "likes": 0
  },
  "el fuerte": {
    "name": "el fuerte",
    "charName": "El Fuerte",
    "firstGame": "Street Fighter IV",
    "birthDate": "October 29",
    "birthPlace": "Mexico",
    "fightingStyle": "Lucha Libre",
    "likes": 0
  },
  "seth": {
    "name": "seth",
    "charName": "Seth",
    "firstGame": "Street Fighter IV",
    "birthDate": "Unknown",
    "birthPlace": "Unknown",
    "fightingStyle": "Transcendent fighting style beyond human comprehension",
    "likes": 0
  },
  "akuma": {
    "name": "akuma",
    "charName": "Akuma",
    "firstGame": "Street Fighter II Turbo",
    "birthDate": "Unknown",
    "birthPlace": "Japan",
    "fightingStyle": "Satsui no Hado, Ansatsuken",
    "likes": 0
  },
  "gouken": {
    "name": "gouken",
    "charName": "Gouken",
    "firstGame": "Street Fighter Alpha (unplayable boss)",
    "birthDate": "Unknown",
    "birthPlace": "Japan",
    "fightingStyle": "Martial arts rooted in Ansatsuken",
    "likes": 0
  },
  "unknown": {
    "name": "unknown",
    "charName": "Unknown",
  },
}

app.get("/", (req, res)=>{
  res.sendFile(__dirname + "/index.html")
})

app.get("/api/:fighterName", (req, res) =>{
  const fightersName = req.params.fighterName.toLowerCase()
  if (fighters[fightersName]) {
    res.json(fighters[fightersName])
  }else {
    res.json(fighters["unknown"])
  }
})

app.listen(process.env.PORT || PORT, ()=>{
  console.log(`The server is now running on port ${PORT}`)
})
