#pragma strict

function Start () {

}



function Update () {
	//the enemy laser shooting towards the spaceship
	transform.Translate(Vector3.left * 5 * Time.deltaTime);
}