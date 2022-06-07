objects=[];
status="";

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

function modelloaded()
{
    console.log("Model is Loaded");
    status=true;
}

function gotresults(error,results)
{
    if(error)
    {
        console.log(error);
    }
    console.log(results);
    objects=results;
}

function draw()
{
    image(video,0,0,500,350);
    if(status!="")
    {
        objectdetector.detect(video,gotresults);
        for(i=0;i<objects.length;i++)
        {
            document.getElementById("status").innerHTML="status:objects detected";
            fill("#ff0000");
            percent=floor(objects[i].confidence*100);
            text(objects[i].label+" "+percent+"%",objects[i].x+15,objects[i].y+15);
            noFill();
            stroke("#ff0000");
            rect(objects[i].x,objects[i].y, objects[i].width, objects[i].height);

            if(objects[i].label==objectname)
            {
                
                objectdetector.detect(gotresults);
                document.getElementById("status").innerHTML=objectname+" found";
            }
            else
            {
                document.getElementById("status").innerHTML=objectname+" not found";
            }
        }
    }
}