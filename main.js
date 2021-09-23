canvas=document.getElementById("canvas2");
mustache="mustache.png"
ctx =canvas.getContext("2d");
function preload(){

}
function setup(){
    canvas=createCanvas(300,300);
    video=createCapture(VIDEO);
    canvas.center();
    video.hide();
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw(){
    image(video,0,0,300,300);
    
}
function snap(){
    save("screenshot.png");
}
function modelLoaded(){
    console.log("Posenet is initialized");
}
function gotPoses(results){
    
if (results.length>0) {
    console.log(results);
    console.log("nose x is "+results[0].pose.nose.x);
    console.log("nose y is "+results[0].pose.nose.y)
    ctx.drawImage(mustache, results[0].pose.nose.x, results[0].pose.nose.y, 50, 50);
}
else{
console.log("error")
}
}