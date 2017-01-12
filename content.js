document.addEventListener('mouseover', function(e){
	var srcElement = e.srcElement;

	var name = srcElement.nodeName;

	if (srcElement.innerHTML.startsWith("G£")) {

		var value = Number(srcElement.innerHTML.replace(/\s|£|G|,/g, ''));
		value = value / 100;
		value = value * 0.8672500000000001;

		value = value.toFixed(2);
		var valueText = '£ ' + value;
		srcElement.innerHTML = valueText;
	};
	
}, false);