const getTodos = (resource) => {
        return new Promise((resolve, reject) => {
            const request = new XMLHttpRequest();
            request.addEventListener('readystatechange', () => {
                if(request.readyState === 4 && request.status === 200) {
                    const data = JSON.parse(request.responseText)
                    resolve(data)
                } else if(request.readyState === 4) {
                    reject('Error getting data')
                }
            })
        
            request.open('GET', resource)
            request.send()
        })   
}

getTodos('JSON folder/Basas.json').then(data => {
    console.log('Promise resolved:' ,data)
}).catch(err =>{
    console.log('Promise rejected:',err)
})













// Promise Example

// const getSomething = () => {
//     return new Promise((resolve, reject) => {
//         // resolve('Some Data')
//         reject('Error Data')
//     })
// }

// getSomething().then((data) => {
//     console.log(data)
// }, (err) => {
//     console.log(err)
// })

// getSomething().then(data => {
//     console.log(data)
// }).catch(err => {
//     console.log(err)
// })