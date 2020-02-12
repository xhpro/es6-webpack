{
    function f(x, y, z) {
        if (y == undefined) {
            y = 2;
        }
        if (z == undefined) {
            z = 3;
        }
        console.log(x + y + z);
    }
    f()
}
{
    function checkParameter() {
        throw new Error('can\'t be empty');
    }
    function f(x = checkParameter(), y = 2, z = 3) {
        console.log(x + y + z);
    }

    try {
        f();
    } catch (e) {

        console.log(e)
    } finally {
        console.log('111')
    }

}

{
    function f() {
        var a = Array.prototype.slice.call(arguments);
        var sum = 0;
        a.forEach(function (item) {
            sum += item * 1;
        })
        return sum;
    }
    console.log(f(1, 2, 3))
}
{
    function f(...a) {
        var sum = 0;
        a.forEach(item => {
            sum += item * 1;
        })
        return sum;
    }
    console.log(f(1,2,3))
}