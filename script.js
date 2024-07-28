console.log('Mohit');


const url = 'http://api.weatherapi.com/v1';
const Api_key= 'b7b926c6fabd40a18e071654241607';
const Location = 'India'
const requrl = `${url}current.json?key=${Api_key}&q=${Location}`

fetch(requrl)
.then(response =>response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error))

let input = document.querySelector('.search_bar')
let search = document.querySelector('.search_icon');

search.addEventListener('click', ()=> {
    console.log('mohit');
    const input_text = input.textContent
    console.log(input.value);
})