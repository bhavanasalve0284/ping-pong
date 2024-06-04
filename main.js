noseX = ""
noseY = ""
GameStatus = "";

function startGame()
{
    GameStatus = "start";
    document.getElementById("status").innerHTML = "Game Is Loading";
}

function game(){
    console.log("noseX = " + noseX +" ,noseY = "+ noseY);
}


function preLoad() {
    world_start = loadSound("world_start.wav");
    setSprites();
    MarioAnimation();
}  

function setup() {
    canvas = createCanvas(1240,336);
    canvas.parent('canvas');

    nstializeInSetup(mario);

    video = createCapture(VIDEO);
    video.size(800,400);
    video.parent('game_console';)

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on['pose', gotposes];
}

function draw(){
    game()
    background("#D3D3D3");
    if(noseX < 300)
    {
marioX = marioX - 1;
    }
    if(noseX > 300)
    {
        marioX = marioX + 1;
    }
    if(noseY < 150)
    {
        marioY = marioY - 1;
    }

    image(img,marioX, marioY, 40,70);
}
function setup(){
    createCanvas(650, 400);
    video = createCapture(VIDEO);
    video.size(600,300);

    poseNet = ml5.poseNet(video, modelLoaded);
}
function modelLoaded() {
    console.log('MODEL Loaded');
    poseNet.on('pose', gotPose);
}
function gotPose(results)
{
    if(results.length > 0)
    {
       console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX +", noseY = " + noseY);
    }
}
    

