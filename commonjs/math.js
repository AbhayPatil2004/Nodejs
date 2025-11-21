function sum( ...num ){
    return num.reduce( ( curr , acc ) => curr + acc )
}

// console.log( sum( 1 , 2 , 3 ))

function product( ...num ){
    return num.reduce( ( curr , acc ) => curr * acc )
}

module.exports = {
    sum ,product
}
// console.log( sum( 1 , 2 , 3 ))