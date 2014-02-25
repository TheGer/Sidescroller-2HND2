#pragma strict
var laser:Rigidbody;

function Start () {

}

function Update () {
	//mouse control of rocket ship
	transform.position.y = 
	Camera.main.ScreenToWorldPoint(Input.mousePosition).y;

	//code which shoots laser on left mouse click
	if (Input.GetMouseButtonDown(0))
	{
	 //create a laser in the spaceship's position
	 Instantiate(laser,transform.position,Quaternion.identity);
	}
}