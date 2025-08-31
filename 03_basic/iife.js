// Immediately Invoked function Expression (IIFE)

(function chai(){
    console.log(`DB connected`)

})(); // here paraenthises (;) is important


((name) => {
    console.log(`DB connected Two ${name}`);
})(`Man Mohan Sharma`)
