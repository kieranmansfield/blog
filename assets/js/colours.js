

	// var printColours = colours.toString();
	//document.write(printColours);

	var RandColours = colours[Math.floor(Math.random() * colours.length)];
	//document.write(RandColours);

	document.addEventListener('DOMContentLoaded', () => {

	// if storage undefined, randcolours otherwise load from storage
	//  sessionStorage.setItem('colour', colour);



		if (sessionStorage.getItem("colour") == null) 
		{
		  myFunction(RandColours);
		} 
		else 
		{
		  myFunction(sessionStorage.getItem("colour"));
		} 


  

    })

    