$(document).ready(function() {
    // execute getPosts function below
    getPosts();

    function getPosts() {
        // perform AJAX request against a given URL
        $.ajax({
            url: "http://localhost:3000/posts",
            type: "GET",
            // function to call when request executes successfully
            // this function sets the text of the element with id of 'myText'
            // to be the title on the data object returned from the server
            success: function(data) { $('#myText').text(data.title); }
        });
    }
});
