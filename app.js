

const serviceName = "netflix"


function getLastLeter(){
    const lastChar = serviceName.match(/.(?!.{1})/g).toString()
    const firstChar = serviceName.match(/(?<!.{1})./g).toString()
    const vovel = serviceName[getVovel(serviceName)]
    const cons = serviceName.length - getVovel(serviceName) 

    console.log(lastChar)
    console.log(firstChar)
    console.log(vovel)
    console.log(lastChar, vovel, "password", cons, firstChar)
    
}

function getVovel(serviceName){
    let ndLetter = serviceName.match(/[aeiou]/g)
    return ndLetter === null ? 0 : ndLetter.length
}

function getCons(serviceName){
    let thLetter = serviceName.match(/[^aeiou]/g)
    return thLetter === null ? 0 : thLetter.length
}

