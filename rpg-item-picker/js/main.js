//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const weapon = Math.floor(Math.random() * 25)
  const url = `http://rpg-api.com/weapons/${weapon}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('#weapon').innerText = `Weapon: ${data.name}`
        document.querySelector('img').src = data.imageUrl
        document.querySelector('#description').innerText = `Description: ${data.description}`
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

