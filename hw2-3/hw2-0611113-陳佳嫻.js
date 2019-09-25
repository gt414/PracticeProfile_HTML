// make form
for (var i=0; i<6; i++) {

	if (i%2 == 0) {
		document.write('<div id="tableFloatLeft">');
	}else{
		document.write('<div id="tableFloatRight">');
	}
	document.write('<table>');
	document.write('<tr><th colspan="8">第 '+ (i+1) +' 張卡片  ')
	document.write('<input type="checkbox" id="checkbox' + (i) + '"></th></tr>')

	for (var j=0; j<32; j++) {
		// to binary
		var binary = j.toString(2);  
		// 補 0 到 6位                                     
		while (binary.length < 6) {									  
			binary = '0' + binary;
		}
		// make magic
		var binary = binary.slice(0, binary.length-i) + '1' + binary.slice(binary.length-i, binary.length)
		// to Integer
		var current = parseInt(binary, 2); 
		
		if (j%8 == 0) { document.write('<tr>') }
		document.write('<td>'+current+'</td>')
		if (j%8 == 7) { document.write('</tr>') }
	}
    document.write('</table></div>');
}

function submitButtonDidClicked() {
	var binary = '';
	for (var i=0; i<6; i++) {
		var isChecked = document.getElementById('checkbox' + (i)).checked;
		binary = isChecked == true ? '1' + binary : '0' + binary
	}

	let ans = parseInt(binary, 2); 
	let text = ans == 0 ? "你沒有勾選任何表格" : "你猜的數字是 " + ans;
	alert(text);
}