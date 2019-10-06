if (a = b.functionCall()) {
    fun(1,2,3);
    console.log("foo")
    if (bla = foo.call()) {
        fun(1,2,3);
        console.log("foo")
    } else {
        console.log("bar")
    }
} else {
    console.log("bar")
}

function duplicateFunction(){
    for(var i = 0; i < 10; i++) {
        console.log("I'm a duplicate");
    }
    alert("I'm a duplicate")

    for(var i = 0; i < 10; i++) {
        console.log("I'm a duplicate");
    }

    for(var i = 0; i < 10; i++) {
        console.log("I'm a duplicate");
    }
}
