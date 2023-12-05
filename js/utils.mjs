

// Wrapper for querySelector...returns matching element
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}

// Retrieve data from localstorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

// Save data to local storage
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

// Set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener("click", callback);
}

// Get a URL parameter value
export function getParam(parameter) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get(parameter);
}

// Render a list of items using a template function
export function renderListWithTemplate(templateFn, parentElement, list, position = "afterbegin", clear = true) {
  if (clear) {
    parentElement.innerHTML = "";
  }
  console.log(list);
  // const HTMLselector = document.querySelector(parentElement);
  let template = list.map(templateFn);
  parentElement.insertAdjacentHTML(position, template.join(""));
}

// Load a template from a given path
export function loadTemplate(path) {
  return async function () {
    const res = await fetch(path);
    if (res.ok) {
      const html = await res.text();
      return html;
    }
  } 
}

// Load header and footer templates
export async function loadHeaderFooter() {
  let headerTag = document.getElementById("header");
  let footerTag = document.getElementById("footer");

  const headerTemplateFn = loadTemplate("/partials/header.html");
  const footerTemplateFn = loadTemplate("/partials/footer.html");
  
  headerTag.innerHTML = await headerTemplateFn();
  footerTag.innerHTML = await footerTemplateFn();
}

// Function to handle recipe list sorting (you can define sorting logic as per your requirement)
export function sortRecipes(list, compareFunction) {
  return list.sort(compareFunction);
}

// Function to handle recipe search and filter
export function searchRecipes(searchTerm, recipesList) {
  return recipesList.filter(recipe => recipe.title.toLowerCase().includes(searchTerm.toLowerCase()));
}

// Utility function to convert string to title case
function toTitleCase(str) {
  return str.replace(/\b\w/g, function (match) {
    return match.toUpperCase();
  });
}

// Alert message functionality
export function alertMessage(message, scroll = true) {
  // Implementation of alert message functionality
}

// Search bar functionality
export function searchBar(callback) {
  const userSearch = qs('#searchBar');
  const searchForm = document.forms.searchForm;
  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const searchTerm = toTitleCase(userSearch.value);
    callback(searchTerm);
  });
}
