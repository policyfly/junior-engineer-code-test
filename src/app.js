// select the element with the id #content
let content = $(".content")

// make the text red
content.style.color = 'red'

// now make it flash black
setInterval(function() {
    content.style.color = 'black'
}, 500)




function sum() {
    var s = 0
    for (var i = 0; i < arguments.length; i++) {
        s += arguments[i]
    }

    return s
}

function map(fn, args) {
    results = []
    for (var i = 0; i < args.length; i++) {
        results.push(fn.apply(this, args[i]))
    }

    return results
}

function reduce(fn, args) {
    result = args[0]

    for (var i = 1; i < args.length; i++) {
        result = fn(result, args[i])
    }

    return result
}

console.log(map(sum, [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]))

console.log(reduce(sum, [1, 2, 3, 4, 5, 6, 7, 8, 9]))