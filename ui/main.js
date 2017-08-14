// counter code
var button = document.getElementById('counter');

button.onclick = function () {
    // make a request
    var request = new XMLHttpRequest();
    
    // capture the request
    request.onreadystatechenge = function() {
        if (request.readyState === XMLHttpRequest.DONE) {
        
        if (request.status === 200) {
            var counter = request.responseText;
            var span = document.getElementById('count');
            span.innerHTML = counter.toString();
        }
        
    }
 };
   
  // Make the request
  request.open('GET', 'http://harishankar714.imad.hasura-app.io/counter', true);
  request.send(null);

    
};