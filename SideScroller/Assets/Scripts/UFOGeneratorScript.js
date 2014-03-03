#pragma strict
var ufo:Rigidbody;


//creates an instance of UFO at 
//a random position in x and y
function createUFO()
{
 //x,y,z position with 0 rotation
 //set the x position
 var xpos:int;
 xpos = transform.position.x + Random.Range(8,12);
 //set the y position
 var ypos:int;
 ypos = transform.position.y + Random.Range(-4.5,4.5);
 
 //create a ufo relative to the game object
 Instantiate(ufo,Vector3(xpos,ypos,0),Quaternion.identity);
}

function Start () {
 //parameter 1: wait 1.0 seconds
 //parameter 2: every 1.0 seconds
 InvokeRepeating("createUFO",1.0,1.0);
}

function Update () {

}