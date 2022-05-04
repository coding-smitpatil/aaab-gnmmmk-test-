nosex=0;
nosey=0;
rightwristx=0;
leftwristx=0;
difference=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(500,500);
    canvas=createCanvas(500,500);
    canvas.position(570,100);
    posenet=ml5.poseNet(video,modelloaded);
    posenet.on("pose",getposes);
}

function modelloaded(){
    console.log("model is loaded");
}

function getposes(results){
    if(results.length>0){
        console.log(results);
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
        leftwristx=results[0].pose.leftWrist.x;
        rightwristx=results[0].pose.rightWrist.x;
        difference=floor(rightwristx-rightwristx);
    }
    
}

function draw(){
    background("lightblue");
    document.getElementById("squareside"),innerHTML=" side of the square will be " + difference;
    fill("limegreen");
    stroke("limegreen");
    square(nosex,nosey,difference);
}