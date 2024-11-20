class Sentence {
    data;
    constructor(givenData){
        this.data = givenData;
    }
    getWordCount() {
        if(this.data) {
            let wordsArray = this.data.split();
            return wordsArray.length;            
        }
        return 0;
    }
    hasLetter(letter){
        return this.data.includes(letter)
    }
    getLetterCount(letter){
        if(!this.hasLetter(letter)){
            return 0;
        }
        for(let i = 0; i < this.data.length; i++){
            if(this.data[i] === letter){
              count++;
            }
        }
        return count;
    }
    stats(){
        const obj = {};
        const words = this.data.split(' ');
        words.forEach( word => {
          if(obj[word] === undefined){
            obj[word]= 0;
          }
          obj[word]++;
        });
        return obj;
      }
}

let givenData = prompt("Enter a sentence")

const mySentence = new Sentence(givenData);
console.log(mySentence.getWordCount());
console.log(mySentence.hasLetter("z"));
console.log(mySentence.getLetterCount(""));
console.log(s1.stats());
