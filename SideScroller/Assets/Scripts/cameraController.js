#pragma strict
var cameraspeed:int;



function Start () {

}

function Update () {
	transform.Translate(Vector3.right * cameraspeed * Time.deltaTime);
}