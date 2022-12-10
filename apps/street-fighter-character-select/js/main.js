var myArray = ["Wrong", "Nope", "Try again", "Come on now.", "Are you just picking randomly?", "Have you ever even played this game?"];



const fighter = document.querySelectorAll('.fighter')

Array.from(fighter).forEach(element => element.addEventListener('click', checkFighter))


function checkFighter(click){

    var tryThis = myArray[Math.floor(random(1, 7))-1];

    function random(mn, mx) {
        return Math.random() * (mx - mn) + mn;
    }

    if(click.target.classList.contains('guile')){
		document.querySelector('#response').innerHTML = 'Guile?<br>CORRECT! Too easy...'
        document.querySelector('#response').style.color = 'red'
        document.querySelector('#winner').classList.add('block')
        document.querySelector('#winner').classList.remove('hidden')
	}

    else if (click.target.classList.contains('Ken')){
		document.querySelector('#response').innerHTML = `<p>Ken is second best, sorry. Try again.</p>`
        document.querySelector('#response').style.color = 'black'
        document.querySelector('#winner').classList.remove('block')
        document.querySelector('#winner').classList.add('hidden')
    }

    else if (click.target.classList.contains('ryu')){
		document.querySelector('#response').innerHTML = `<p>Ryu is wholesome, but not the best. Try again.</p>`
        document.querySelector('#response').style.color = 'black'
        document.querySelector('#winner').classList.remove('block')
        document.querySelector('#winner').classList.add('hidden')
    }

    else if (click.target.classList.contains('akuma')){
		document.querySelector('#response').innerHTML = `<p>Akuma? You tryhard.<br>No, try again.</p>`
        document.querySelector('#response').style.color = 'black'
        document.querySelector('#winner').classList.remove('block')
        document.querySelector('#winner').classList.add('hidden')
    }

    else if (click.target.classList.contains('mbison')){
		document.querySelector('#response').innerHTML = `Bruh`
        document.querySelector('#response').style.color = 'black'
        document.querySelector('#winner').classList.remove('block')
        document.querySelector('#winner').classList.add('hidden')
    }

    else if (click.target.classList.contains('dhalsim')){
		document.querySelector('#response').innerHTML = `YOGA FIRE!<br><br>But no..`
        document.querySelector('#response').style.color = 'black'
        document.querySelector('#winner').classList.remove('block')
        document.querySelector('#winner').classList.add('hidden')
    }

    else if (click.target.classList.contains('sagat')){
		document.querySelector('#response').innerHTML = `TIGER UPPERCUT!!<br><br>Nope, definitely not the BEST.`
        document.querySelector('#response').style.color = 'black'
        document.querySelector('#winner').classList.remove('block')
        document.querySelector('#winner').classList.add('hidden')
    }

    else if (click.target.classList.contains('dan')){
		document.querySelector('#response').innerHTML = `Dan... you picked Dan?<br><br>Seriously though.. Dan?<br><br>Dan...<br><br>But why??<br><br>We can't be friends, get outta here.`
        document.querySelector('#response').style.color = 'black'
        document.querySelector('#winner').classList.remove('block')
        document.querySelector('#winner').classList.add('hidden')
    }

    else if (click.target.classList.contains('blank')){
		document.querySelector('#response').innerText = "That's just blank space. What are you even doing?"
        document.querySelector('#response').style.color = 'black'
        document.querySelector('#winner').classList.remove('block')
        document.querySelector('#winner').classList.add('hidden')
    }

    else if (click.target.classList.contains('seth')){
		document.querySelector('#response').innerText = "Seth, seriously? No."
        document.querySelector('#response').style.color = 'black'
        document.querySelector('#winner').classList.remove('block')
        document.querySelector('#winner').classList.add('hidden')
    }

    else if (click.target.classList.contains('balrog')){
		document.querySelector('#response').innerHTML = `Did you know that Balrog was originally the one named M. Bison before they changed it? <br><br>M. Bison, a boxer?<br><br>Mike Bison??<br><br>Anyway, no.. you're wrong.`
        document.querySelector('#response').style.color = 'black'
        document.querySelector('#winner').classList.remove('block')
        document.querySelector('#winner').classList.add('hidden')
    }
    
    else{
    
		document.querySelector('#response').innerText = tryThis
        document.querySelector('#response').style.color = 'black'
        document.querySelector('#winner').classList.remove('block')
        document.querySelector('#winner').classList.add('hidden')
	}
}