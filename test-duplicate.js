/**
Comments and whitespace don't matter for duplicate detection
*/
function duplicateFunction(){

    for(var i = 0; i < 10; i++) {
        console.log("I'm a duplicate");
    }
    alert("I'm a duplicate")

    for(var i = 0; i < 10; i++) {
        console.log("I'm a duplicate");
    }

    // Whitespace doesn't matter for duplicate detection
    for(var i = 0; i < 10; i++) {console.log("I'm a duplicate");}
}
