// ES5 Object Oriented Library - we going to use prototypes insteand of class'

// We start of by making a constructor..
function easyHTTP() {
    this.http = new XMLHttpRequest();
}

// We are going to have four different prototype methods...

// Make an HTTP GET Request 
easyHTTP.prototype.get = function (url, callback) {
    this.http.open('GET', url, true); // This is asynchronous
    
    let self = this; // when in a different function the this key word pertains to that function. (arrow functions fix this my adding a lexical this.) A common way to fix this in ES5 is to set another variable, usally called 'self' or 'that' equal to this. so we can capture that this. in this scope. 
    this.http.onload = function () {
        if (self.http.status === 200) {
            callback(null, self.http.responseText); // We also send back an error if there is one, in addition to a response. null for the error is the first paremter thats passed back and then the response to be the second paremter. 
        } else {
            callback('Error:' + self.http.status)
        }
    }

    this.http.send();
}

// Make an HTTP POST Request 

// Make an HTTP PUT Request 

// Make an HTTP GET Request 