const jokeEl=document.getElementById("joke");
const get_joke=document.getElementById("get_joke");
get_joke.addEventListener('click',generateJoke);
generateJoke();
async function generateJoke() {
    // call the api
    const jokeRes=await fetch('https://icanhazdadjoke.com/',{
        headers:{
            'Accept': 'application/json'
        }
    });
    const jok=await jokeRes.json();
    // set the new joke
    console.log(joke);

    jokeEl.innerHTML=jok.joke;
};