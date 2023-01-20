difference =0;
rightWristX=0;
leftWristX=0;

function setup() {
    video = createCapture(VIDEO);
   video.size(550,500);
   
   canvas = createCanvas(550,550);
   canvas.position(560,150);
   
   poseNet = ml5.poseNet(video,modelLoaded);
   poseNet.on('pose',gotPoses);
   }
   function draw() {
       background('#969A97');
       textSize(difference)
       fill("cyan")
       text("Samanwita Raj",50,250) 
   }
   
   function modelLoaded(){
       console.log('poseNet Is Initialized!');
   }
   
   function gotPoses(results)
   {
       if(results.length > 0) {
   console.log(results);

   leftWristX = results[0].pose.leftWrist.x;
   rightWristX = results[0].pose.rightWrist.x;
   difference = floor(leftWristX - rightWristX);
       }
   }