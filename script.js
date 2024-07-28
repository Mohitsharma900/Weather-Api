let input = document.querySelector('.search_bar')

const url = 'http://api.weatherapi.com/v1';
const Api_key= '';





let search = document.querySelector('.search_icon');

search.addEventListener('click', (event)=> {
    let myLocation = `${input.value}`
    console.log(myLocation);
    const requrl = `${url}/current.json?key=b7b926c6fabd40a18e071654241607&q=${myLocation}`
    fetch(requrl)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
})