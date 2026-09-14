//promise - status - Pending, resolved, rejected
//it is also used to synchronously execute the program

function fetchData(callback) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Data Fetched!")
            const data = "Sample Data"
            resolve(data)

        }, 2000);
    })
}


fetchData().then(function (data){
    console.log("Processing:"+ data)
})


//Other way is using async await - to used synchronous operation    
console.log("//Other way is using async await")
const data = await fetchData();
console.log("Processing: "+ data)