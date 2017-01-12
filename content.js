var attributeName = 'data-original-value',
	currencies = {
		gbp: { 
			rate: 0.8672500000000001,
			symbol: '£ ',
			symbolFirst: true
		}
	}

document.addEventListener('mouseover', function(e){
	var srcElement = e.srcElement;
	if (srcElement.innerHTML.startsWith("G£")) {
		var originalValue = getValueFromString(srcElement.innerText);
		srcElement.setAttribute(attributeName, srcElement.innerText);

		var newValue = convertToCurrencyString(originalValue, 'gbp');
		srcElement.innerText = newValue;
	};
	
}, false);

document.addEventListener('mouseout', function(e){
	var srcElement = e.srcElement;
	if (srcElement.hasAttribute(attributeName)) {
		var originalValue = srcElement.getAttribute(attributeName);
		srcElement.innerText = originalValue;
	}

}, false);

function getValueFromString(value){
	var newValue = Number(value.replace(/\s|£|G|,/g, ''));
	return newValue;
}

function convertToCurrencyString(value, currencyCode){

	var newValue;
	if (currencyCode) {
		var currency = currencies[currencyCode];
		newValue = value / 100;
		newValue = newValue * currency.rate;
		newValue = newValue.toFixed(2);

		if (currency.symbolFirst) {
			newValue = currency.symbol + newValue;
		} else {
			newValue = newValue + currency.symbol;
		}
		
	}
	else {
		newValue = value;
	}

	return newValue;
}