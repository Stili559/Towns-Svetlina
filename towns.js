$(document).ready(function() {
	$('#btnDelete').click(deleteTown)

	document.getElementById("btnAdd") .addEventListener("click", addTown);
});

function deleteTown() {
	let townName = $('#townName').val();
	$('#townName').val('');
	let removed = false;
	for (let option of $('#towns option')) {
		if (option.textContent == townName) {
			removed = true;
			option.remove();
		}
	}
	if (removed)
		$('#result').text(townName + " deleted.");
	else
		$('#result').text(townName + " not found.");
}

function addTown() {
	let townName = document.getElementById("townNameForAdd").value;
	if (townName != ""){
		document.getElementById("townNameForAdd").value = "";
		let option = document.createElement("option");
		option.textContent = townName;
		
		document.getElementById("towns").appendChild(option);
		showMessage(townName + " added.");
	}
}
		 
	function showMessage(msg) {
		let resultElement = document.getElementById("result");
		resultElement.textContent = msg;
		resultElement.style.display = "block";
		setTimeout(function () {
		resultElement.style.display = "none";
		}, 3000);
	}
			
	 
	