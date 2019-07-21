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
