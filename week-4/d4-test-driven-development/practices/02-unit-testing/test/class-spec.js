const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function () {
  let apple;
  let banana;
  beforeEach(() => {
    apple = new Word ('apple');
    banana = new Word ('banana');
  })
  describe("Word constructor function", function () {
    it('should have a "word" property', function () {
      expect(banana).to.have.property('word')
      expect(apple).to.have.property('word');
    });

    it('should set the "word" property when a new word is created', function () {
      expect(banana.word).to.equal('banana');
      expect(apple.word).to.equal('apple');
    });
  });


  describe("removeVowels function", function () {
    it("should return a the word with all vowels removed", function () {
      expect(apple.removeVowels()).to.eql('ppl');
      expect(banana.removeVowels()).to.eql('bnn');

    });
  });

  describe("removeConsonants function", function () {
    it("should return the word with the consonants removed", function () {
      expect(banana.removeConsonants()).to.eql('aaa')
      expect(apple.removeConsonants()).to.eql('ae');
    });
  });

  describe("pigLatin function", function () {
    it("should return the word converted to pig latin", function () {
      expect(banana.pigLatin()).to.eql('ananabay');
      expect(apple.pigLatin()).to.eql('appleyay');
    });
  });
});
