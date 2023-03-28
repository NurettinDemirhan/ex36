const repeatHello = (callback) => {
    const a = setInterval(callback,1000)
    setTimeout(()=> {
        clearInterval(a);
    },5000)
}
const sayHello = () => console.log("hello")

repeatHello(sayHello)
