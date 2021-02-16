enum Leve{
    leve1=1,
    leve2,
    leve3
}

function getLeve(l:Leve):Leve{
    return l
}
console.log(getLeve(Leve.leve3))