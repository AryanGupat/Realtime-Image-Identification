percentage="";
function preload()
{

}
function setup() 
{
    canvas=createCanvas(300, 300);
    canvas.position(550 , 300);
    video=createCapture(VIDEO)
    video.hide();
    classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/k_VeqXRxL/model.json', modelLoaded);
}
function draw()
{
image(video,0 , 0 , 300 , 300)
classifier.classify(video , gotResult);
}

function modelLoaded()
{
    console.error("DoseNotWriteAnythingModelLoaded");
}
function gotResult(error , result)
{
if (error)
{
    console.log(error);
}
else 
{
    console.log(result);
    percentage=(result[0].confidence.toFixed(2))*100;
    document.getElementById("Object_b").innerHTML="Object: " + result[0].label;
    document.getElementById("A_b").innerHTML="Accuracy: " + percentage + "%" ; 
}
}
