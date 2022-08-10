/* eslint-env browser */
// main.js

const likeBtn = document.querySelectorAll('.fa-arrow-up')

Array.from(likeBtn).forEach((element)=>{
  element.addEventListener('click', addLike)
})

async function addLike(){
  const itemText = this.parentNode.childNodes[1].innerText
  try{
      const response = await fetch('addLike', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
              'itemFromJS': itemText
          })
        })
      const data = await response.json()
      console.log(data)
      location.reload()

  }catch(err){
      console.log(err)
  }
}