var tab1 = document.getElementsByTagName("li");

	// var j = [].indexOf.call(list, event.target.parentElement);


for(var x = 0;x<tab1.length;x++)
{
	tab1[x].onclick = change;
	
}

//querySelectorAll doesnt work with closest()-Starting with the Element itself, 
//the closest() method traverses parents (heading toward the document root) of the Element until it finds a node that matches the provided selectorString.

function change(event){
	var tabs=event.currentTarget.closest(".Tab-wrapper");
	tabs.className += ' active-tab';
	//	console.log(tabs);

	var activeLists = document.querySelectorAll(".active-tab .active");
	console.log(activeLists);

	// var activeTabs = document.querySelectorAll(".active");
    
	for(let i =0;i<activeLists.length;i++)
	{
		activeLists[i].className = activeLists[i].className.replace(" active","");

		// // console.log(activeTabs[i].closest("ul"));   gives the index
		// if(activeTabs[i].closest(".active-tab"))
		//    activeTabs[i].className = activeTabs[i].className.replace(" active","");	  	
	}
	// console.log(activeLists);
	// for(var i=0; i<activeTabs.length;i++)
	// {
	// 	activeLists[i].className = activeLists[i].className.replace(" .active","");
	// }

	var list = document.querySelectorAll(".active-tab li");
	// console.log(list);

	var j = [].indexOf.call(list, event.currentTarget);
	// console.log(j);
	document.querySelectorAll(".active-tab .ninja")[j].className +=' active';

	tabs.className = tabs.className.replace(" active-tab","");
}	
	// event.currentTarget.className += ' active';
	// var list = document.querySelectorAll("li").closest(" .currentTab");
	// var j = [].indexOf.call(list, event.currentTarget);
	// var ninja = document.querySelectorAll(".ninja").closest(" .currentTab");
	// document.querySelectorAll(".ninja")[j].className +=' active';