#pragma strict
var explosion:Rigidbody;


function Start () {

}

function OnBecameInvisible()
{
	Destroy(this.gameObject);
}



function OnTriggerEnter(other:Collider)
{
	
	if (other.gameObject.tag == "rocket")
	{
		rocketshipController.health--;
		
		//create an explosion on the spaceship
		Instantiate(explosion,transform.position,transform.rotation);
		
		
		if (rocketshipController.health == 0)
		{
		
			Destroy(other.gameObject);
		}
		
	}

}



function Update () {
	//the enemy laser shooting towards the spaceship
	transform.Translate(Vector3.left * 5 * Time.deltaTime);
}