// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

//Javascript async await
//async - executes a function asynchronously & returns a promise
//await - waits for a promise to get settled

//1. The function runs asynchronously
//2. function returns a promise

let getCountryInfo = async function() {
  let response = awiat fetch('https://restcountries.com/v3.1/name/');
  let data = await response.json();
  console.log(data); 
}
console.log(getCountryInfo());
console.log('main thread executing');
