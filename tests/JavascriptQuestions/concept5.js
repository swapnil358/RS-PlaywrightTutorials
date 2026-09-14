//Call back function
//A call back function is function that is passed as an argument to another function
// - and is executed after some operation has been completed.
//Call back often used for asynchronous operations.

//It is  used to make this work synchronously

function fetchData(callback){
        //fetch data from server
    setTimeout(()=>{
        console.log("Data Fetched!")
        const data = "Sample Data"
        callback(data);
    },2000);
}

function processData(data){
    console.log("Processing:", data)
}

function modifyData(data) {
    console.log("Modifying:", data)

}

fetchData(processData)
fetchData(modifyData)
