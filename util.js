
class Grid {

	constructor(row_count, column_count, cell_size) {

		this.row_count = row_count;
		this.column_count = column_count;
		this.cell_size = cell_size;

		this.cells = [];

		for(var x=0; x<this.row_count; x++) {
			var row = [];
			for(var y=0; y<this.column_count; y++) {
				row.push(new Cell(x, y, cell_size))
			}
			this.cells.push(row);
		}
	}

	update(mouse, ctx) {
		for(var x=0; x<this.row_count; x++) {
			for(var y=0; y<this.column_count; y++) {
				var c = this.cells[x][y];
				
				if ((c.x <= mouse.x) && (mouse.x < c.x+c.size) && 
					(c.y <= mouse.y) && (mouse.y < c.y+c.size)) {	
					c.onHover();
					displayCellIndex(x, y)

					if(mouse.isClicked)
						c.onClick(swatch.color);
				}
				else c.onUnhover();

				c.draw(ctx)
			}
		}
	}

	export() {
		let arr = [];
		for(var x=0; x<this.row_count; x++) {
			for(var y=0; y<this.column_count; y++) {
				arr.push(this.cells[x][y].color);
			}
		}
		return JSON.stringify(arr);
	}

	import(data) {
		for(var x=0; x<this.row_count; x++) {
			for(var y=0; y<this.column_count; y++) {
				this.cells[x][y].color = data[x*this.row_count+y]
			}
		}
	}
}


class Cell {

	constructor(x_index, y_index, size) {
		this.padding = 1;
		this.size = size;
		this.x = x_index * this.size;
		this.y = y_index * this.size;
		this.color = "#ffffff"; // default is white
		this.isHovered = false;
	}

	onHover() { this.isHovered = true; }
	onUnhover () { this.isHovered = false; }
	onClick(color) { this.color = color; }

	draw(ctx) {
		ctx.fillStyle = this.color;
		ctx.fillRect(this.x+this.padding, 
			this.y+this.padding, 
			this.size-this.padding*2, 
			this.size-this.padding*2);

		if (this.isHovered) {
			ctx.strokeStyle = "#00f";
			ctx.strokeRect(this.x, this.y, this.size, this.size);
		}
	}

}

class Swatch {
	constructor(color_array) {
		this.colors = ["#ffffff", ...color_array];
		this.color = color_array[0];
	}

	setSwatchView() {
		var l = document.getElementsByClassName("swatch-color");
		for(let i=0; i<l.length; i++) {
			l[i].style.background = this.colors[i];
			
			// Select color event
			l[i].addEventListener("click", (e) => {
				this.color = this.colors[i];
			});

			// Change color event
			l[i].addEventListener("contextmenu", (e) => {
				e.preventDefault();
				let _color = window
					.prompt("Enter color hex code (e.g. #fcba03):");
				
				if( !(/^#[0-9A-Fa-f]{6}$/i.test(_color) || 
					/^#[0-9A-Fa-f]{3}$/i.test(_color)) ) {
					window.alert("Invalid hex code given.")
				}
				else {
					this.colors[i] = _color;
					this.color = this.colors[i];
					l[i].style.background = this.colors[i];
				}

			})
		}
	}
}
