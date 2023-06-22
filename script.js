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

// STATE OF LOADING MESSAGE
let isLoading = false;

// BUTTONCLICK: API-CALL TO DISPLAY DOG IMAGE

function apiCall() {
  const dog = fetch(url)
    .then((res) => res.json())
    .then((data) => {
      dogImg.src = data.url;
    });
}

function getDog() {
  if (errorShown === true) {
    error.style.display = "none";
  }

  apiCall();

  while (!dogImg.complete) {
    loadingInfo.style.display = "block"; // Show loading message
  }
}

dogImg.onerror = function () {
  error.style.display = "block";
  errorShown = true;
};

/* random dog pictures API src:
https://random.dog/woof.json"}


public API list on github:
https://github.com/public-api-lists/public-api-lists
*/
