var x = 0;
var spaceData;

var foto;
var foto1;

var song;

function preload() {
  foto = loadImage("guillermo-ferla-Oze6U2m1oYU-unsplash.jpg");
  foto1 = loadImage("5f492fa368ecc70004ae70e6.png");
  song = loadSound("wwm.mp3");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  foto.resize(width, height);
  loadJSON("http://api.open-notify.org/astros.json", gotData,'json');
  image(foto, 0, 0);
  // textFont();
  // textSize(ts);
  button = createButton("toggle");
  button.mousePressed(toggleSong);
  song.play();

}

function gotData(data){
  spaceData = data;
}

function toggleSong() {
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }
}

function draw() {
  // background(0);
  if(spaceData){
    randomSeed(4);
    for(var i = 0; i<spaceData.number;i++){
      // fill(255);
      image(foto1, random(windowWidth), random(windowHeight),120,120);
      // println(random(spaceData.name));
      // var as = spaceData.people[i].name[1];
      // createP(as);

      // ellipse(random(width),random(height),16,16)

  }
}
  // stroke(255);
  // line(x,0,x,height);
  // x = x+1;
  // if (x>width){
  //   x=0;
  // }
}
