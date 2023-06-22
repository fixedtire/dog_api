const dogImg = document.getElementById("dog-pic");

const url = "https://random.dog/woof.json";

const info = document.getElementById("info");

let showInfo = false;

function getDog() {
  const dog = fetch(url)
    .then((res) => res.json())
    .then((data) => {
      dogImg.src = data.url;
    });
}

dogImg.onerror = function () {
  info.style.display = "block";
  showInfo = true;
};

/* random dog pictures API src:
https://random.dog/woof.json"}


public API list on github:
https://github.com/public-api-lists/public-api-lists
*/
