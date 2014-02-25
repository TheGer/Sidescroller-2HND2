#pragma strict
var laserSpeed:int;


function Start () {

}

function Update () {
	//move the laser FORWARD
	transform.Translate(Vector3.right *
		laserSpeed * Time.deltaTime);
}

function OnBecameInvisible()
{
	Destroy(this.gameObject);
}