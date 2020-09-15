// Here we first instantiate...
const http = new easyHTTP;

// Get Posts    
http.get('https://jsonplaceholder.typicode.com/posts', function (error, info) { // you can literally call paremerter anything (info, posts, response it will be whatever this. is in library callback paremeter)
    
    if (error) {// Here we test for the error
        console.log(error);
    } else {
        console.log(info)
    }
    


});



 