var greeting = () => 1 + 1;
console.log(greeting());


//fat-arrow way
var greeting2 = (name) => {
    console.log('Hello again, my name is ' + name);
}
greeting2('Dirty Bob');



var battleToads = ['frogo', 'toadi', 'leonardo'];

var battleToadsSentence = battleToads.map((character) => {
    return character + ' is from BattleToads';
})
console.log('battleToadSentence', battleToadsSentence);