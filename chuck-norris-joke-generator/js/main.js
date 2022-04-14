//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const url = 'http://api.icndb.com/jokes/random?firstName=Chuck&lastName=Norris'

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.value.joke)
        document.querySelector('h2').innerHTML = data.value.joke
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

