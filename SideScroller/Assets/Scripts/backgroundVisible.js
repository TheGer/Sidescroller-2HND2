#pragma strict

function Start () {

}

function Update () {

}


function OnBecameInvisible()
{
	//when the background leaves the screen, place the background on the horizontal
	//edge of the screen
	transform.position.x = Camera.main.ScreenToWorldPoint(Vector3(Screen.width,0,0)).x;
	
}
