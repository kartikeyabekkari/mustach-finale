noseX = 0
noseY = 0

function preload() {
    clown_nose = loadImage('https://i.postimg.cc/HxbCBTnp/fake-moustache-png-file.png')
}

function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video,0,0,300,300);
    image(clown_nose, noseX, noseY, 80, 35);

}

function take_snapshot() {
    save('myMustuche.png');
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results) {
    if(results.length > 0) {
        noseX = results[0].pose.nose.x-40;
        noseY = results[0].pose.nose.y+10;
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
}