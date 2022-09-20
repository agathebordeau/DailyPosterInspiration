function randomString() {

    var output = Math.floor(Math.random() * 32); 

    var source = 'media/ ' + output + '.jpg';

    document.getElementById("output").innerHTML = source

    document.getElementById("img").src = source;    
 } 