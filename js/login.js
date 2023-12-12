import { getParam, loadHeaderFooter } from "./utils.mjs";
import { fetchRegistrationInfo } from "../js/registration.mjs";


loadHeaderFooter();

const receive = getParam("redirect");

let formtag = document.querySelector("#login-form");
formtag.addEventListener("submit",(e) => {
    e.preventDefault();
    console.log('this works');
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    login({email, password}, receive) ;
})

const userId = 1; 
fetchRegistrationInfo(userId)
    .then((registrationInfo) => {
        console.log('Registration information:', registrationInfo);
       
    })
    .catch((error) => {
        // Handle errors
        console.error('Error:', error);
    });