let cart = {
	'228322': 2,
	'322228': 2,
};


document.onclick = event => {
	if (event.target.classList.contains('plus')) {
		plusFunction(event.target.dataset.id);
	}
	if (event.target.classList.contains('minus')) {
		minusFunction(event.target.dataset.id);
	}
}
//увеличение кол-во товара
const plusFunction = id => {
	cart[id]++;
	renderCart();
}

//уменьшение кол-во товара
const minusFunction = id => {
	if (cart[id]-1 == 0){
      	deleteFunction(id);
      	return true;
	}
	cart[id]--;
	renderCart();
}
//удаление товара
const deleteFunction = id => {
	delete cart[id];
	renderCart();
}

const renderCart = () => {
	console.log(cart);
}
renderCart();