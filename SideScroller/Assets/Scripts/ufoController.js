#pragma strict

function OnTriggerEnter(other:Collider)
{
	if(other.gameObject.tag=="rocket")
	{
		rocketshipController.lives--;
		//destroy this UFO
		Destroy(this.gameObject);
		//once the lives are set to 0
		if (rocketshipController.lives == 0)
		{
			Destroy(other.gameObject);
		}
	}
}


function Start () {

}

function Update () {

}