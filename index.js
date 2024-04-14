document.addEventListener('DOMContentLoaded', function () {
	const itemsList = document.getElementById('items-list')
	const totalAmount = document.getElementById('total-amount')
	let total = 0

	function addToCart(itemName, price) {
		const item = document.createElement('div')
		item.classList.add('item')
		item.innerHTML = `<span>${itemName}</span> - <span>${price} zł</span>`
		itemsList.appendChild(item)
		total += price
		totalAmount.textContent = total.toFixed(2)
	}

})
