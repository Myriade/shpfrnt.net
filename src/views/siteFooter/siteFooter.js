import { data } from '../../globals/data.js';

// Get the list of urls
const urlArray = data.footerRandomLinks;

// Function to pick a random url from the list
function randomIndex () {
  const result = Math.floor(Math.random() * urlArray.length);
  return result;
}

// Execute tasks
export default function () {
  
  // Get the anchor element for "Corporate Responsability" link
  const anchorElem = document.getElementById('footerRandomAnchor');
  
  // Function to set a new url in the anchor link
  function setNewUrl () {
    const index = randomIndex()
    const randomUrl = urlArray[index];
    anchorElem.href = randomUrl;
  }
  
  // Set initial random url at page load
  setNewUrl();
  
  // Change for another random link at every click on the link
  anchorElem.addEventListener('click', function() {
    setTimeout(function() {
        setNewUrl()
    }, 0);
  });
}