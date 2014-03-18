#pragma strict
//special score and lives variables
//accessible from other scripts
static var score:int=0;
static var lives:int=9;

var textStyle:GUISkin;


function OnGUI()
{
	GUI.skin = textStyle;
	//parameters: x, y, width, height
	GUI.Label(Rect(5,5,150,50),"Score: "+score);
	GUI.Label(Rect(160,5,150,50),"Lives: "+lives);
	
	//this is a test comment
}


function Start () {

}





function Update () {
	//mouse control of rocket ship
	transform.position.y = 
	Camera.main.ScreenToWorldPoint(Input.mousePosition).y;
	
	
}