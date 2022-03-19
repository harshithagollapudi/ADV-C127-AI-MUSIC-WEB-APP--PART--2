Peter_pan_song="";
Harry_potter_theme_song="";

function setup(){
    canvas = createCanvas(600, 530);
    canvas.center();

   video = createCapture(VIDEO);
   video.hide();
}

function draw(){
    Image(video,0,600,530);
}

function preload(){
    Peter_pan_song = loadSound("music2.mp3");
    Harry_potter_theme_song = loadSound("music.mp3");
}