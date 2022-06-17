const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const fighters = {
  'Ryu': {
    'firstGame': 'Street Fighter',
    'birthDate': 'July 21, 1964',
    'birthPlace': 'Japan',
    'fightingStyle': 'Ansatsuken',
  },
  'Ken': {
    'firstGame': 'Street Fighter',
    'birthDate': 'February 14, 1965',
    'birthPlace': 'USA',
    'fightingStyle': 'Ansatsuken',
  },
  'Chun Li': {
    'firstGame': 'Street Fighter II',
    'birthDate': 'March 1, 1968',
    'birthPlace': 'China',
    'fightingStyle': 'Chinese martial arts',
  },
  'E. Honda': {
    'firstGame': 'Street Fighter II',
    'birthDate': 'November 3, 1960',
    'birthPlace': 'Japan',
    'fightingStyle': 'Japanese sumo wrestling',
  },
  'Blanka': {
    'firstGame': 'Street Fighter II',
    'birthDate': 'February 12, 1966',
    'birthPlace': 'Brazil',
    'fightingStyle': 'Feral movement, electric attacks',
  },
  'Zangief': {
    'firstGame': 'Street Fighter II',
    'birthDate': 'June 1, 1956',
    'birthPlace': 'Russia',
    'fightingStyle': 'Mix of Russian and American pro wrestling',
  },
  'Guile': {
    'firstGame': 'Street Fighter II',
    'birthDate': 'December 23, 1960',
    'birthPlace': 'USA',
    'fightingStyle': 'Martial arts and professional wrestling',
  },
  'Dhalsim': {
    'firstGame': 'Street Fighter II',
    'birthDate': 'November 22, 1952',
    'birthPlace': 'India',
    'fightingStyle': 'Esoteric Yoga',
  },
  'Balrog': {
    'firstGame': 'Street Fighter II (unplayable boss)',
    'birthDate': 'September 4, 1968',
    'birthPlace': 'USA',
    'fightingStyle': 'Boxing',
  },
  'Vega': {
    'firstGame': 'Street Fighter II (unplayable boss)',
    'birthDate': 'January 27, 1967',
    'birthPlace': 'Spain',
    'fightingStyle': 'Spanish Ninjutsu',
  },
  'Sagat': {
    'firstGame': 'Street Fighter II (unplayable boss)',
    'birthDate': 'July 2, 1955',
    'birthPlace': 'Thailand',
    'fightingStyle': 'Muay Thai',
  },
  'M. Bison': {
    'firstGame': 'Street Fighter II (unplayable boss)',
    'birthDate': 'January 17',
    'birthPlace': 'Unknown',
    'fightingStyle': 'Psycho Power',
  },
  'Abel': {
    'firstGame': 'Street Fighter IV',
    'birthDate': 'November 5',
    'birthPlace': 'Raised in France (actual birthplace unknown)',
    'fightingStyle': 'Mixed martial arts based on Judo',
  },
  'C. Viper': {
    'firstGame': 'Street Fighter IV',
    'birthDate': 'July 18',
    'birthPlace': 'USA',
    'fightingStyle': 'Secret spy gadgets',
  },
  'Rufus': {
    'firstGame': 'Street Fighter IV',
    'birthDate': 'July 30',
    'birthPlace': 'USA',
    'fightingStyle': 'What he thinks are Karate and Kung Fu',
  },
  'El Fuerte': {
    'firstGame': 'Street Fighter IV',
    'birthDate': 'October 29',
    'birthPlace': 'Mexico',
    'fightingStyle': 'Lucha Libre',
  },
  'Seth': {
    'firstGame': 'Street Fighter IV',
    'birthDate': 'Unknown',
    'birthPlace': 'Unknown',
    'fightingStyle': 'Transcendent fighting style beyond human comprehension',
  },
  'Akuma': {
    'firstGame': 'Street Fighter II Turbo',
    'birthDate': 'Unknown',
    'birthPlace': 'Japan',
    'fightingStyle': 'Satsui no Hado, Ansatsuken',
  },
  'Gouken': {
    'firstGame': 'Street Fighter Alpha (unplayable boss)',
    'birthDate': 'Unknown',
    'birthPlace': 'Japan',
    'fightingStyle': 'Martial arts rooted in Ansatsuken',
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
.catch(error => console.error(error))