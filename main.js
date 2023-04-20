noseX = 0;
noseY = 0;
difference = 0;
rightwristX = 0;
letfwristX = 0;

function setup()
{
    video = createcapture(VIDEO);
    video.size(550, 550 );
    canvas = createcanvas(550, 550 );
    canvas.position(560, 150);
    poseNet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotposes);
}

function modelLoaded()
{
    console.log('poseNet is initialized');
}

function draw()
{
    background('#FFFFFF');
    document.getElementById("square_side").innerHTML = "width and height of the square will be = " + difference + "px";
    fill('#FFC0CB');
    stroke('#FF0000');
    square(noseX, noseY, difference);
}