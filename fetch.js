// Fetch API

fetch('JSON folder/Bass.json').then((response) => {
    return response.json()
}).then((data) => {
    console.log(data)
}).catch((err) => {
    console.log(err)
})