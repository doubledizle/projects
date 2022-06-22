const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const fighters = {
  'ryu': {
    'name': 'Ryu',
    'firstGame': 'Street Fighter',
    'birthDate': 'July 21',
    'birthPlace': 'Japan',
    'fightingStyle': 'Ansatsuken',
  },
  'ken': {
    'name': 'Ken',
    'firstGame': 'Street Fighter',
    'birthDate': 'February 14',
    'birthPlace': 'USA',
    'fightingStyle': 'Ansatsuken',
  },
  'chun li': {
    'name': 'Chun Li',
    'firstGame': 'Street Fighter II',
    'birthDate': 'March 1',
    'birthPlace': 'China',
    'fightingStyle': 'Chinese martial arts',
  },
  'e. honda': {
    'name': 'E. Honda',
    'firstGame': 'Street Fighter II',
    'birthDate': 'November 3',
    'birthPlace': 'Japan',
    'fightingStyle': 'Japanese sumo wrestling',
  },
  'e honda': {
    'name': 'E. Honda',
    'firstGame': 'Street Fighter II',
    'birthDate': 'November 3',
    'birthPlace': 'Japan',
    'fightingStyle': 'Japanese sumo wrestling',
  },
  'blanka': {
    'name': 'Blanka',
    'firstGame': 'Street Fighter II',
    'birthDate': 'February 12',
    'birthPlace': 'Brazil',
    'fightingStyle': 'Feral movement, electric attacks',
  },
  'zangief': {
    'name': 'Zangief',
    'firstGame': 'Street Fighter II',
    'birthDate': 'June 1',
    'birthPlace': 'Russia',
    'fightingStyle': 'Mix of Russian and American pro wrestling',
  },
  'guile': {
    'name': 'Guile',
    'firstGame': 'Street Fighter II',
    'birthDate': 'December 23',
    'birthPlace': 'USA',
    'fightingStyle': 'Martial arts and professional wrestling',
  },
  'dhalsim': {
    'name': 'Dhalsim',
    'firstGame': 'Street Fighter II',
    'birthDate': 'November 22, 1952',
    'birthPlace': 'India',
    'fightingStyle': 'Esoteri',
  },
  'balrog': {
    'name': 'Balrog',
    'firstGame': 'Street Fighter II (unplayable boss)',
    'birthDate': 'September 4',
    'birthPlace': 'USA',
    'fightingStyle': 'Boxing',
  },
  'vega': {
    'name': 'Vega',
    'firstGame': 'Street Fighter II (unplayable boss)',
    'birthDate': 'January 27',
    'birthPlace': 'Spain',
    'fightingStyle': 'Spanish Ninjutsu',
  },
  'sagat': {
    'name': 'Sagat',
    'firstGame': 'Street Fighter II (unplayable boss)',
    'birthDate': 'July 2',
    'birthPlace': 'Thailand',
    'fightingStyle': 'Muay Thai',
  },
  'm. bison': {
    'name': 'M. Bison',
    'firstGame': 'Street Fighter II (unplayable boss)',
    'birthDate': 'January 17',
    'birthPlace': 'Unknown',
    'fightingStyle': 'Psycho Power',
  },
  'abel': {
    'name': 'Abel',
    'firstGame': 'Street Fighter IV',
    'birthDate': 'November 5',
    'birthPlace': 'Raised in France (actual birthplace unknown)',
    'fightingStyle': 'Mixed martial arts based on Judo',
  },
  'c. viper': {
    'name': 'C. Viper',
    'firstGame': 'Street Fighter IV',
    'birthDate': 'July 18',
    'birthPlace': 'USA',
    'fightingStyle': 'Secret spy gadgets',
  },
  'rufus': {
    'name': 'Rufus',
    'firstGame': 'Street Fighter IV',
    'birthDate': 'July 30',
    'birthPlace': 'USA',
    'fightingStyle': 'What he thinks are Karate and Kung Fu',
  },
  'el fuerte': {
    'name': 'El Fuerte',
    'firstGame': 'Street Fighter IV',
    'birthDate': 'October 29',
    'birthPlace': 'Mexico',
    'fightingStyle': 'Lucha Libre',
  },
  'seth': {
    'name': 'Seth',
    'firstGame': 'Street Fighter IV',
    'birthDate': 'Unknown',
    'birthPlace': 'Unknown',
    'fightingStyle': 'Transcendent fighting style beyond human comprehension',
  },
  'akuma': {
    'name': 'Akuma',
    'firstGame': 'Street Fighter II Turbo',
    'birthDate': 'Unknown',
    'birthPlace': 'Japan',
    'fightingStyle': 'Satsui no Hado, Ansatsuken',
  },
  'gouken': {
    'name': 'Gouken',
    'firstGame': 'Street Fighter Alpha (unplayable boss)',
    'birthDate': 'Unknown',
    'birthPlace': 'Japan',
    'fightingStyle': 'Martial arts rooted in Ansatsuken',
  },
  'unknown': {
    'name': 'Unknown',
  },
}

app.get('/', (req, res)=>{
  res.sendFile(__dirname + '/index.html')
})

app.get('/api/:fighterName', (req, res) =>{
  const fightersName = req.params.fighterName.toLowerCase()
  if (fighters[fightersName]) {
    res.json(fighters[fightersName])
  }else {
    res.json(fighters['unknown'])
  }
})

app.listen(process.env.PORT || PORT, ()=>{
  console.log(`The server is now running on port ${PORT}`)
})
