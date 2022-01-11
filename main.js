var speechRecognition = window.webkitSpeechRecognition;
var Recognition = new SpeechRecognition;

function Start(){

    document.getElementById("textarea").innerHTML = "";
    Recognition.Start();

}

Recognition.onresult = function(event){

    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("textarea").innerHTML = content;
    console.log(content);
    if (content == "take my selfie"){
        console.log("taking selfie.....");
        speak();
    }

};