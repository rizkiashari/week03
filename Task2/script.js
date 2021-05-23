
// Sentence task 2
const searchText = document.getElementById("search-text");

searchText.addEventListener("click", () => {
  const inputText = (document.getElementById("text-input").value).toLowerCase(), sentenceSearch = (document.getElementById("input-search").value).toLowerCase();

  const paragrafInput = inputText.split(".");
  // console.log(sentenceSearch);
  // console.log(paragrafInput);

  if (sentenceSearch.length === 0 || inputText.length === 0){
    document.getElementById("output").innerText = "Sentence search invalid, input search again";
    document.getElementById("output").style.fontSize = '14px';
    document.getElementById("output").style.color = "red";
  }
  else {
    let result = paragrafInput.filter((sentence) => sentence.includes(sentenceSearch) 
    );
    // console.log(result);
    document.getElementById("output").innerText = result
    document.getElementById("output").style.color = "black";
    document.getElementById("output").style.fontSize = '14px';
  }
});