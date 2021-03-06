let gridWidth = $("#input-width");
let gridHeight = $("#input-height");
let table = $("#canvas");

function makeGrid() {
	let width = gridWidth.val();
	let height = gridHeight.val();

// erases the previous table if there is one 	
	
	table.children().remove();
	
	for (let i = 0; i < width; i++) {
		table.append("<tr></tr>");
		
		for (let j = 0; j < height; j++) {
			table.children().last().append("<td></td>");
		}
	};

let sizeSq = $("#square-size").val();	

// changes the size of a square	
	
$("td").css("width", sizeSq);
$("tr").css("height", sizeSq);	

$("td").css("background-color", "white");

// welcome text

$("#paint-text").css("display", "block");
};


let submit = $("#submit-button");

submit.on("click", function(event) {
	event.preventDefault();
	makeGrid();
})

$("body").on("click", "td", function() {
	let color = $("#color-picker").val();
	$(this).add().css("background-color", color);
})


// clear the grid options

$("#eraser").on("click", function() {
	$("td").css("background-color", "white");
})

// change the background color

$("#set-bg").on("click", function() {
	let color = $("#color-picker").val();
	$("td").css("background-color", color)
})