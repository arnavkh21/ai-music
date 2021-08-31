song = "";
song2 = "";
leftWristX = 0;
leftWristY= 0;
rightWristY= 0;
rightWristX=0;
function preload(){
    song = loadSound("music.mp3");
    song2= loadSound("song 2.mp3");
}

function play(){
    if(song2.isPlaying()){
        song2.stop();
    }else{
        song.play();
        song.setVolume(1);
        song.rate(1);
    }
    
    
}
function play2(){
    if(song.isPlaying()){
        song.stop();
    }else{
        song2.play();
        song2.setVolume(1);
        song2.rate(1);
    }
}

function setup(){
canvas = createCanvas(600,500);
canvas.center();

video = createCapture(VIDEO);
video.hide();

poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function draw(){
    image(video,0,0,600,500) 
fill("#d1a000");
stroke("#d1a000");

if(scoreRightWrist > 0.2 ){

play();


circle(rightWristX,rightWristY,20);


}

if(scoreLeftWrist > 0.2 ){

    play2();
    
    
    circle(leftWristX,leftWristY,20);
    
    
    }











   
}

function modelLoaded(){
    console.log('PoseNet is inintiallizedd');
}




