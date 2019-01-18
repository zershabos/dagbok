$(document).ready(function () {
	$("#clickbtn").click(function(){
		var address     = document.getElementById("address").value;
		var date        = document.getElementById("date").value;
		var description = document.getElementById("description").value;
		var newItem = {"address":address,"date":date,"description":description};
		var oldItems = JSON.parse(localStorage.getItem('itemsArray')) || [];
		oldItems.push(newItem);
		localStorage.setItem('itemsArray', JSON.stringify(oldItems));
		var displaydata = JSON.parse(localStorage.getItem('itemsArray'));
		$(".displaydata").empty();
		updatedata(displaydata);
		return false;
	});

	if(localStorage['itemsArray'])
	{
		var displaydata = JSON.parse(localStorage.getItem('itemsArray'));
		updatedata(displaydata);
	}
})

function updatedata(displaydata)
{
	for(obj in displaydata)
	{
		var newdiv    =  document.createElement("div");
		newdiv.className = "box";
		var p_address =  document.createElement("p");
		var p_date    =  document.createElement("p");
		var p_descrip =  document.createElement("p");
		p_address.innerHTML = displaydata[obj].address;
		p_date.innerHTML    = displaydata[obj].date;
		p_descrip.innerHTML = displaydata[obj].description;
		$(".displaydata").append(newdiv);
		$(newdiv).append(p_address);
		$(newdiv).append(p_date);
		$(newdiv).append(p_descrip);
		//console.log(displaydata[obj]);
	}
}