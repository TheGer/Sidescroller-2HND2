#pragma strict
//reference to the laser prefab
var laser:Rigidbody;


function Start () {

}

function Update () {

	//code which shoots laser on left mouse click
	if (Input.GetMouseButtonDown(0))
	{
	 //create a laser in the point of the spaceship's position
	 Instantiate(laser,transform.position,Quaternion.identity);
	}

}