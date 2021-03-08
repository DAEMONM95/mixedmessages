// Arrays of phrase words
let verbs, nouns, adjectives, adverbs, preposition;
nouns = ["bird", "clock", "boy", "plastic bag", "duck", "teacher", "woman", "professor", "hamster", "dog"];
verbs = ["kicked", "ran", "flew", "dodged", "sliced", "rolled", "died", "breathed", "slept", "killed"];
adjectives = ["beautiful", "lazy", "professional", "lovely", "dumb", "rough", "soft", "hot", "vibrating", "slimy"];
adverbs = ["slowly", "elegantly", "precisely", "quickly", "sadly", "humbly", "proudly", "shockingly", "calmly", "passionately"];
preposition = ["down", "into", "up", "on", "upon", "below", "above", "through", "across", "towards"];
// Loop will  iterate through each of these arrays in order to create a phrase - Random phrase selector
let randSel = (wordArray) => {
    let word = Math.floor(Math.random()*wordArray.length);
    return wordArray[word]
};

let generatedSentence = () => {
    //let sentence = "A "+ randSel(nouns) + " " + randSel(adverbs) + " " +  randSel(verbs);
    let sentence = `A ${randSel(nouns)} ${randSel(adverbs)} ${randSel(verbs)} a ${randSel(adjectives)} ${randSel(nouns)} ${randSel(preposition)} the ${randSel(nouns)}`
    console.log(sentence);
};

generatedSentence();