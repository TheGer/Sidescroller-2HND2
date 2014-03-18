#pragma strict
//speed of the laser being fired
var laserSpeed:int;
//reference to the explosion which will be triggered when laser hits ufo
var explosion:Rigidbody;


function Start () {

}

//function that is triggered when laser hits the enemy
function OnTriggerEnter(other:Collider)
{
	//if the laser hits a UFO, we will do the following two things:
	//Destroy the laser
	//Destroy the UFO
	if (other.gameObject.tag == "alien")
	{
		//increase the score
		rocketshipController.score++;
		
		var remainder = 0;
		
		//calculate the remainder of division by ten
		remainder = rocketshipController.score % 10;
		//if the remainder is 0, the score can be divided by 10
		if (remainder == 0)
		{
			//increase lives by ten
			rocketshipController.health++;
		}
		
		//destroy the UFO
		Destroy(other.gameObject);
		//create an instance of the explosion
		Instantiate(explosion,transform.position,transform.rotation);
		//destroy the laser
		Destroy(this.gameObject);
	}

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