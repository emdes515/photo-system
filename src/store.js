import { writable, derived } from 'svelte/store'

const cart = writable([])

const itemCount = derived(cart, ($cart) => $cart.length)

function addToCart(item) {
	cart.update((items) => {
		return [...items, item]
	})
}

function removeFromCart(item) {
	cart.update((items) => {
		return items.filter((i) => i.id !== item.id)
	})
}

function clearCart() {
	cart.set([])
}

export { cart, addToCart, removeFromCart, clearCart, itemCount }
