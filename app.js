// // Here we first instantiate...
// const http = new easyHTTP;

// // Get Posts    
// http.get('https://jsonplaceholder.typicode.com/posts', function (error, posts) { // you can literally call paremerter anything (info, posts, response it will be whatever this. is in library callback paremeter)
    
//     if (error) {// Here we test for the error
//         console.log(error);
//     } else {
//         console.log(posts)
//     }
    


// });


// // Here we first instantiate...
// const http = new easyHTTP;

// // Get Single Posts    
// http.get('https://jsonplaceholder.typicode.com/posts/1', function (error, post) { // you can literally call paremerter anything (info, posts, response it will be whatever this. is in library callback paremeter)
    
//     if (error) {// Here we test for the error
//         console.log(error);
//     } else {
//         console.log(post)
//     }
    


// });

////////////////////////////////////////////////////////////////////

// POST REQUEST

// Here we first instantiate...
const http = new easyHTTP;

// Create Data 
const data = {
    title: 'Custom Post',
    body: 'This is a custom post'
};

// Create Post
// http.post('https://jsonplaceholder.typicode.com/posts', data, function (error, post) {
//         if (error) {// Here we test for the error
//         console.log(error);
//     } else {
//         console.log(post) // The RestAPi we used added an ID from their backend...see console.
//     }

// });

// Update Post
// http.put('https://jsonplaceholder.typicode.com/posts/5', data, function (error, post) {
//     if (error) {// Here we test for the error
//         console.log(error);
//     } else {
//         console.log(post) // The RestAPi we used added an ID from their backend...see console.
//     }
// })

// Delete Post
http.delete('https://jsonplaceholder.typicode.com/posts/1', function (error, response) { // you can literally call paremerter anything (info, posts, response it will be whatever this. is in library callback paremeter)
    
    if (error) {// Here we test for the error
        console.log(error);
    } else {
        console.log(response)
    }
    


});




 