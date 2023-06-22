// ASSIGNING THE DOG IMAGE TO A VARIABLE
const dogImg = document.getElementById("dog-pic");

// URL OF THE PUBLIC-API
const url = "https://random.dog/woof.json";

// ERROR MESSAGE IF API CAN'T PROVIDE THE IMAGE
const error = document.getElementById("error");

// STATE OF ERROR MESSAGE
let errorShown = false;

// INFO THAT IMAGE IS LOADING
const loadingInfo = document.getElementById("loading");

// FUNCTION FOR SHOWING 'LOADING'
function showLoading() {
  loadingInfo.style.display = "block";
}

// FUNCTION FOR HIDING 'LOADING'
function hideLoading() {
  loadingInfo.style.display = "none";
}

// SETTING UP FUNCTION FOR API-CALL
async function apiCall() {
  try {
    showLoading();
    const response = await fetch(url);
    const data = await response.json();

    // Update the UI with the fetched data
    dogImg.src = data.url;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// ONCLICK BUTTON FUNCTION TO DISPLAY DOG IMAGE
function getDog() {
  // hides previous Error-Message if occured
  if (errorShown === true) {
    error.style.display = "none";
  }
  // api-call
  apiCall();

  // checking if image is loaded and hides Loading Message if so
  setTimeout(() => {
    if (dogImg.naturalWidth > 0 && dogImg.naturalHeight !== 0) {
      hideLoading();
    }
  }, 1500);

  // another checking if images take longer to load
  setTimeout(() => {
    if (dogImg.naturalWidth > 0 && dogImg.naturalHeight !== 0) {
      hideLoading();
    }
  }, 4000);
}

// SHOWS ERROR IF IMAGE COULD NOT LOAD

dogImg.onerror = function () {
  error.style.display = "block";
  errorShown = true;
  hideLoading();
};

/* random dog pictures API src:
https://random.dog/woof.json"}

public API list on github:
https://github.com/public-api-lists/public-api-lists
*/
