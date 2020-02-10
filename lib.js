
window.GreeterLib = {
version : 1,

settings : {
    greeting: "Hello, ",
    color: "blue",
},

getGreeting: function (name) {
    return this.settings.greeting + name;
},

greet: function (name) {
    console.log("greeter lib - version " +this.version);
    console.log(this.getGreeting(name));
}};