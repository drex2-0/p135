function setup()
{
    canvas=createCanvas(500,350);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(500,350);
    video.hide();
}
function start()
{
    objectdetector=ml5.objectDetector('cocossd', modelloaded);
    document.getElementById("status").innerHTML="status: Detecting Objects";
    objectname=document.getElementById("objectname").value;
}

function draw()
{
    image(video,0,0,500,350);
}