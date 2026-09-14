//var is  function scoped or globally-scoped and can be re-declared and updated

function varExample(){
    var x=1;
    if (true) {
        var x=2;
        console.log(x)
    }
    console.log(x)
}

//varExample()


//'let' is block-scoped and can be updated but not re-declared within same scope

function varExample2(){
    let x=1;

    if (true) {
        let x=2;
        y=3;                //here it consider y is var

        console.log(x)
    }
    console.log(y)
    console.log(x)
}
//varExample2()


//'const' is block-scoped and can not be updated or re-declared

function varExample3(){
    const x=3;

    if (true) {
        const x=2;
        console.log(x);
    }
    // x=3
    // console.log(x);
}

varExample3()