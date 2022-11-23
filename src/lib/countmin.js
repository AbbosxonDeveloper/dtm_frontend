let res = JSON.parse(localStorage.getItem('time'))
let interval = setInterval(() => {
    localStorage.setItem('time', JSON.stringify(res))
    console.log(+res);
    res++
}, 1000)

console.clear(interval)