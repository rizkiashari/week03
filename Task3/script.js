// Task 3
  // Week 1 => Looping
const loopingButton = document.getElementById("loop");
  
loopingButton.addEventListener("click", () => {
  const inputLoop = document.getElementById("input-loop").value;
  const multipleLoop = document.getElementById("selecting").value;

  let sequence = [];
  for (let i = 1; i <= inputLoop; i++){
    sequence.push(i);
  }
  
  const result = sequence.map((sequence) => {
    return sequence * multipleLoop;
  })
  // const result = (numbers) => {
  //    numbers.map(inputLoop => inputLoop*multipleLoop);

  document.getElementById("output-loop").innerText = result;

});

  // Week 1 => Counting Letter
const btnLetter = document.getElementById("letterBtn");

btnLetter.addEventListener("click", () => {
  const sentence = (document.getElementById("text-sentence").value).toLowerCase();
  
  const sentenceSplit = sentence.split("");
  let result = 0;
  sentenceSplit.map((sentence) => {
    
    const findLetter = (document.getElementById("find-letter").value).toLowerCase();
    if (findLetter === sentence) {
      result += 1;
    }
    return result;
  });

  document.getElementById("output-count").innerText = result;
})

  // Week 2 Prime Range
const primeBtn = document.getElementById("primeBtn");

primeBtn.addEventListener("click", () => {
  const rangeStart = document.getElementById("range-start").value;
  const rangeEnd = document.getElementById("range-end").value;

  let result = [];

  // Ubah ke HOF?
  for (let i = rangeStart; i <= rangeEnd; i++){
    if (i >= rangeStart) {
      result.push(i);
    }
  }
  // result.map(primeRange => {
  //   return primeRange;
  // });
  // console.log();

  // const coba = result.map((rangeStart, rangeEnd) => {
  //   if (rangeEnd >= rangeStart) {
  //     return rangeEnd;
  //   }
  // })

  // console.log(coba);

  document.getElementById("output-range").innerText = result.filter(function isPrime(num)
    {
      if(num < 2) return false;
    
      for (let k = 2; k < num; k++){
        if( num % k === 0){
          return false;
        }
      }
      return true;
    });
  })

  // Week 2 Remove Array based on Input
  const removeBtn = document.getElementById("removeBtn");
  
  removeBtn.addEventListener("click", () => {
    const num1 = (document.getElementById("concat-one").value).toString().split("");
    const num2  = (document.getElementById("concat-two").value).toString().split("");

    for (let i = 0; i <= num1.length - 1; i++){
      for (let a = 0; a <= num2.length - 1; a++){
          if (num1[i] == num2[a]){
            num1[i] = "q";
          }
      }
    }

    let sortingArr = num1.concat(num2).sort();

    let limit = sortingArr.toString().split("q").length - 1;
    sortingArr.splice(sortingArr.length - limit, limit);

    const sumArr = sortingArr.reduce((accumulator,currenValue)=> accumulator + currenValue)

    document.getElementById("output-concat").innerText = sumArr;
  });