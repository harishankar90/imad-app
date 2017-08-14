// counter code
var button = document.getElementById('counter');

button.onclick = function () {
    // make a request
    var request = new XMLHttpRequest();
    
    // capture the request
    request.onreadystatechenge = function() {
        if (request.readyState === XMLHttpRequest.DONE) {
        
        if (request.status === 200) {
         var names = request.responseText;
         names = JSON.parse(names);
    var list = '';
    for(var i=0; i< names.length; i++){
     list += '<li>' + names[i] + '</li>' ;
     
    }
    var ul = document.getElementById('namelist');
    ul.innerHTML = list;  
        }
        
    }
 };
   
  // Make the request
  request.open('GET', 'http://harishankar714.imad.hasura-app.io/submit-name?name=' + name, true);
  request.send(null);

    
};

var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');

submit.onclick = function () {
    
    
    var names = ['name1','name2','name3','name4' ];
    var list = '';
    for(var i=0; i< names.length; i++){
     list += '<li>' + names[i] + '</li>' ;
     
    }
    var ul = document.getElementById('namelist');
    ul.innerHTML = list;
    
        
    

};