function setup() {
    video = createCapture(VIDEO)
    video.size(550, 500)

    canvas = createCanvas(555, 550)
    canvas.position(560, 160)

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on("pose", gotPose)
}

function draw() {
    background("#00307d")
}

function modelLoaded() {
    console.log("PoseNet is Intialized !")
}

function gotPose(result) {
    if (result > 0) {
        console.log(result)
    }
}