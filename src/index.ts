// enum Leve{
//     leve1=1,
//     leve2,
//     leve3
// }

// function getLeve(l:Leve):Leve{
//     return l
// }

type Deck = Navel[];
type Navel = {
    master:Master,
    num:Num
}
enum Master{
    red='♥',
    black='♠',
    fang='♦',
    mei='♣'
}
enum Num{
    A='A',
    two='2',
    three='3',
    four='4',
    five='5',
    six='6',
    seven='7',
    eight='8',
    nine='9',
    ten='10',
    eleven='j',
    twelve='Q',
    thirteen='k'
}

function createDeck():Deck{
    let deck:Deck =[]
    for(let num of Object.values(Num)){
        for(let master of Object.values(Master)){
            deck.push({
                master,
                num
            })
        }
    }
    return deck
}
function printDeck(deck:Deck):string{
    let str = ''
    for(let it of deck){
        str += it.num +it.master +'\t'
    }
    return str
}
console.log(printDeck(createDeck()))