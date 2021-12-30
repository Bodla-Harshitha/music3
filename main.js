song1="";
song2="";

leftHandWristX="";
leftHandWristY="";

rightHandWristX="";
rightHandWristY="";

function preload(){
    song1=loadSound("music.mp3");
    song2=loadSound("music2.mp3");
}

function setup(){
    canvas=createCanvas(600,500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("Model has loaded!")
}

function gotPoses(result){
    if(result.length > 0){

        console.log(result);

        leftHandWristX=result[0].pose.leftWrist.x;
    leftHandWristY=result[0].pose.leftWrist.y;
    console.log("leftHandWristX="+leftHandWristX);
    console.log("leftHandWristY="+leftHandWristY);

    rightHandWristX=result[0].pose.rightWrist.x;
    rightHandWristY=result[0].pose.rightWrist.y;
    console.log("rightHandWristX="+rightHandWristX);
    console.log("rightHandWristY="+rightHandWristY);
    }
}

function draw(){
    image(video,0,0,600,500);
}

function start(){
    song1.play();
    song2.play();
}