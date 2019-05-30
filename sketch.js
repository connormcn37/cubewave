let angle = 0;
let w = 36;
let ma;
let maxD;

function setup(){
   createCanvas(600,600, WEBGL);
   ortho(-width/2,width/2,height/2,-height/2,0.1,100);
   ma = 1/atan(sqrt(2));
   maxD = dist(0,0,200,200);
}

function draw() {
   background(200);
   rotateX(-PI/4);
   rotateY(PI/4);
   
   let offset = 0;
   for (let z=0;z<height;z+=w){
      for (let x=0;x<width;x+=w){
         push();
         let d = dist(x,z,width/2,height/2);
         let offset = map(d,0,maxD,0,1)**5;
         let a = angle + offset;
         let h = floor(map(sin(a),-1,1,10,200));
         translate(x-width/2, 0, z-height/2);
         box(w-4, h, w-4);
         pop();
      }
   }
   angle-=PI/80;
}