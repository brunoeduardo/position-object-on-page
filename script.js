function getLocation() {
   	var element = document.getElementById("divMain");
    var yPosition = 0;
    var xPosition = 0;

 	
 	//loop to calculate
    while (element) {
        yPosition += (element.offsetTop - element.scrollTop);
        xPosition += (element.offsetLeft - element.scrollLeft);
 		//stop loop       
        element = element.offsetParent;
    }
    console.log(yPosition);
  	console.log(xPosition);
}
