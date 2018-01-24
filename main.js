let gridHeight = $("#input-width");
let gridWidth = $("#input-height");
let table = $("#canvas");

function makeGrid() {
	let width = gridWidth.val();
	let height = gridHeight.val();
	
// ereases the previous table if there is one
	
	table.children().remove();
	
	for (let i = 0; i < width; i++) {
		table.append("<tr></tr>");
		
		for (let j = 0; j < height; j++) {
			console.log(table.children());
			table.children().append("<td></td>");
		}
	}
}

let submit = $("#submit-button");

submit.on("click", function (event) {
	event.preventDefault();
	makeGrid();
})

$("body").on("click", "td", function () {
	let color = $("#color-picker").val();
	$(this).add().css("background-color", color);
})
