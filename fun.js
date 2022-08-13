noseX = "";
noseY = "";
leftWristX = "";
rightWristX = "";
difference = "";
noseY = "";

function back() {
    window.location = "index.html";
}

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(650, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("PoseNET initialized!");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = leftWristX - rightWristX;
        console.log("noseX= " + noseX + " noseY= " + noseY + " leftWristX= " + leftWristX + " rightWristX= " + rightWristX + " difference= " + difference);
    }
}

function draw() {
    background("#f54242");
    text("Cloud Computing", noseX, noseY);
    textSize(difference);
}