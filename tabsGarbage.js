var tab1 = document.getElementsByTagName("li");

for(var x = 0;x<tab1.length;x++)
{
	tab1[x].onclick = change;
}

// tab1.addEventListener('click',change);



function change(event){

	var activeTabs = document.querySelectorAll(".active");

	// if(event.target.tagName === "LI")
	//   return 0;

	console.log(event.target.tagName);


	if(event.target.tagName==="A")
	{	
	for(var i=0; i<activeTabs.length;i++)
	{
		activeTabs[i].className = activeTabs[i].className.replace(" active","");
	}


	event.target.parentElement.className += ' active';

	
	var list = document.querySelectorAll("li");


	// for(var j=0;j<list.length;j++)
	// {
	// 	if(list[j].className==' active')
	// 		break;
	//  }                                                will be replaced by

	var j = [].indexOf.call(list, event.target.parentElement);


	// console.log(j);

	// var ninja = document.querySelectorAll(".ninja");
	  document.querySelectorAll(".ninja")[j].className +=' active';

	  

 //     } 
	// document.getElementById(event.target.href.split('#')[1]).className += ' active';

	// console.log(event.target.href.split('#')[1]);

			
	}	
	else if(event.target.tagName==="LI")
	{
			for(var i=0; i<activeTabs.length;i++)
			{
				activeTabs[i].className = activeTabs[i].className.replace(" active","");
			}
			event.target.className += ' active';
			var list = document.querySelectorAll("li");
			var j = [].indexOf.call(list, event.target);


			document.querySelectorAll(".ninja")[j].className +=' active';

	}
	