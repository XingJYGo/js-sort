function sort(ele) {
	var tbody = document.querySelector(ele).tBodies[0];
	var th = document.querySelector(ele).tHead.rows[0].cells;
	var td = tbody.rows;
	for(var i = 0; i < th.length; i++) {
		th[i].flag = 1;
		th[i].onclick = function() {
			sort(this.getAttribute('data-type'), this.flag, this.cellIndex);
			this.flag = -this.flag;
		};
	};

	function sort(str, flag, n) {
		var arr = [];
		for(var i = 0; i < td.length; i++) {
			arr.push(td[i]);
		};
		arr.sort(function(a, b) {
			return method(str, a.cells[n].innerText, b.cells[n].innerText) * flag;
		});
		for(var i = 0; i < arr.length; i++) {
			tbody.appendChild(arr[i]);
		};
	};

	function method(str, a, b) {
		switch(str) {
			case 'num':
				return a - b;
				break;
			case 'string':
				return a.localeCompare(b, "zh"); //chrome
				break;
			default:
				return new Date(a.split('-').join('/')).getTime() - new Date(b.split('-').join('/')).getTime();
		};
	};
}