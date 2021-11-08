export function Entry(title, body) {
  this.title = title;
  this.body = body;
}

Entry.prototype.numWords = function(){

  let numberOfWords = this.body.split(" ").length;

  return numberOfWords;
}

Entry.prototype.numVowels = function(){
  let lowercaseEntry = this.body.toLowerCase()
  let numberOfVowels = 0;
  let arrayOfWords = lowercaseEntry.split(" ");
  for(let i = 0; i < arrayOfWords.length; i++){
    for(let index = 0; index < arrayOfWords[i].length; index ++){
      if(arrayOfWords[i][index] === "a" || arrayOfWords[i][index] ===  "e" || arrayOfWords[i][index] === "i" || arrayOfWords[i][index] === "o" || arrayOfWords[i][index] === "u"){
        numberOfVowels += 1;
      }
    }
  }
  return numberOfVowels;
}

Entry.prototype.numConsonants = function(){
  let lowercaseEntry = this.body.toLowerCase()
  let numberOfConsonants = 0;
  let arrayOfWords = lowercaseEntry.split(" ");
  for(let i = 0; i < arrayOfWords.length; i++){
    for(let index = 0; index < arrayOfWords[i].length; index ++){
      if(arrayOfWords[i][index] != "a" && arrayOfWords[i][index] !=  "e" && arrayOfWords[i][index] != "i" && arrayOfWords[i][index] != "o" && arrayOfWords[i][index] != "u"){
        numberOfConsonants += 1;
      }
    }
  }
  return numberOfConsonants;
}

Entry.prototype.getTeaser = function(){
  let teaserSentance = "";
  let finalArrayOfWords = [];
  let arrayOfWords = this.body.split(" ");
  for(let i = 0; i < 8; i ++){
    if(!arrayOfWords[i].includes(".")){
      finalArrayOfWords.push(arrayOfWords[i]);
    }
    else{
      finalArrayOfWords.push(arrayOfWords[i]);
      teaserSentance = finalArrayOfWords.join(" ")
      return teaserSentance;
    }
  }
  teaserSentance = finalArrayOfWords.join(" ")
  return teaserSentance;
}