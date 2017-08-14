// counter code
var button = document.getElementById('counter');
var counter = 0;
button.onclick = function () {
    // make a request
    var request = XMLHttpRequest();
    
    // capture the request
    request.onreadystatechenge = function() {
        if (request.readyState === XMLHttpRequest.DONE){
        
        if (request.status === 200) {
            var counter = request.responseText;
        }
        
    }
 };
   
  // Make the request
  request.open('GET', 'http://harishankar714.imad.hasura.io', true);
  request.send(null);

    
};