img = "";
status = "";

function preLoad()
{
    img = loadImage('ar-condicionado.jpg');
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd, modelLoaded');
    document.getElementById("status").innerHTML = "Status: Detectando Objetos";
}

function modelLoaded()
{
    console.log("Modelo Carregado!");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult()
{
    if (error)
    {
        console.log(error);
    }
    console.log(results); 
}
