#pragma strict
var cameraspeed:int;



function Start () {

}

function Update () {
	//this script moves the camera forward at a set speed. 
	transform.Translate(Vector3.right * cameraspeed * Time.deltaTime);
}