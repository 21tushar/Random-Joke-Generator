const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('joke-btn')

const generateJoke = () => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api.chucknorris.io/jokes/random');

    // readyState has 5 possible values 
    // - 0: request not initialized 
    // - 1: server connection established 
    // - 2: request received 
    // - 3: processing request 
    // - 4: request finished and response is ready

    xhr.onreadystatechange = function() {
        if(this.readyState === 4 && this.status === 200){
            jokeEl.innerHTML = JSON.parse(this.responseText).value;
        }
        else{
            jokeEl.innerHTML = 'Something went wrong (Not Funny)';
        }
    }
    xhr.send();
}

jokeBtn.addEventListener('click', generateJoke);
document.addEventListener('DOMContentLoaded', generateJoke);
