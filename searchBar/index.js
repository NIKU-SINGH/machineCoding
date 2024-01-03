const searchBarContainer = document.querySelector(".searchBarContainer");
const searchFeild = document.querySelector(".searchFeild");
const searchResult = document.querySelector(".searchResultContainer");
const list = document.getElementById("list");

let result = ["a", "b", "c", "d", "e"];
let timer;

const emptyNode = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};

searchFeild.addEventListener("input", (e) => {
  const search = e.target.value;

  clearTimeout(timer);
  timer = setTimeout(async () => {
    try {
      const res = await getSuggestions(search);
      result = res;
      displayResult(result);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }, 300);
});

function displayResult(result) {
  emptyNode(list);

  const DIV = document.createElement("div");

  result.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    list.appendChild(listItem);
  });
}

// ================================= Mock Server Start =============================
var FAILURE_COEFF = 10;
var MAX_SERVER_LATENCY = 200;

function getRandomBool(n) {
  var maxRandomCoeff = 1000;
  if (n > maxRandomCoeff) n = maxRandomCoeff;
  return Math.floor(Math.random() * maxRandomCoeff) % n === 0;
}

function getSuggestions(text) {
  var pre = "pre";
  var post = "post";
  var results = [];
  if (getRandomBool(2)) {
    results.push(pre + text);
  }
  if (getRandomBool(2)) {
    results.push(text);
  }
  if (getRandomBool(2)) {
    results.push(text + post);
  }
  if (getRandomBool(2)) {
    results.push(pre + text + post);
  }
  return new Promise((resolve, reject) => {
    var randomTimeout = Math.random() * MAX_SERVER_LATENCY;
    setTimeout(() => {
      if (getRandomBool(FAILURE_COEFF)) {
        reject();
      } else {
        resolve(results);
      }
    }, randomTimeout);
  });
}
// ================================= Mock Server End =============================
