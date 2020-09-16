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
easyHTTP.prototype.post = function (url, data, callback) {
    this.http.open('POST', url, true)
    // As we set our onload, in addition to that we set our content type. which is done in the http.header...
    this.http.setRequestHeader('Content-type', 'application/json');

    let self = this; // when in a different function the this key word pertains to that function. (arrow functions fix this my adding a lexical this.) A common way to fix this in ES5 is to set another variable, usally called 'self' or 'that' equal to this. so we can capture that this. in this scope. 
    this.http.onload = function () {
        
    callback(null, self.http.responseText); // The response text should be the new post that we added. We should know its a new post as it should have the id of 101.
        
    }



    this.http.send(JSON.stringify(data)) // when your sending data, this. is a regular javaScript object when we pass it in, SO we need to pass it through a function called JSON.stringify() and send it as a JSON string. 
}


// Make an HTTP PUT Request 

easyHTTP.prototype.put = function (url, data, callback) {
    this.http.open('PUT', url, true)
    // As we set our onload, in addition to that we set our content type. which is done in the http.header...
    this.http.setRequestHeader('Content-type', 'application/json');

    let self = this; // when in a different function the this key word pertains to that function. (arrow functions fix this my adding a lexical this.) A common way to fix this in ES5 is to set another variable, usally called 'self' or 'that' equal to this. so we can capture that this. in this scope. 
    this.http.onload = function () {
        
    callback(null, self.http.responseText); // The response text should be the new post that we added. We should know its a new post as it should have the id of 101.
        
    }



    this.http.send(JSON.stringify(data)) // when your sending data, this. is a regular javaScript object when we pass it in, SO we need to pass it through a function called JSON.stringify() and send it as a JSON string. 
}

// Make an HTTP DELETE Request 
easyHTTP.prototype.delete = function (url, callback) {
    this.http.open('DELETE', url, true); // This is asynchronous
    
    let self = this; // when in a different function the this key word pertains to that function. (arrow functions fix this my adding a lexical this.) A common way to fix this in ES5 is to set another variable, usally called 'self' or 'that' equal to this. so we can capture that this. in this scope. 
    this.http.onload = function () {
        if (self.http.status === 200) {
            callback(null, 'Post Deleted'); // The response will acutally be an empty object because we are deleting the post. 

            // We also send back an error if there is one, in addition to a response.null for the error is the first paremter thats passed back and then the response to be the second paremter. 
        } else {
            callback('Error:' + self.http.status)
        }
    }

    this.http.send();
}