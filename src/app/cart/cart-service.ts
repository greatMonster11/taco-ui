import { CartItem } from './cart-item'

export class CartService {
    items$: CartItem[] = []

    constructor() {
        this.items$ = []
    }

    addToCart(taco: any) {
        this.items$.push(new CartItem(taco))
    }

    getItemsInCart() {
        return this.items$
    }

    getCartTotal() {
        let total = 0
        this.items$.forEach(item => {
            total += item.lineTotal
        })
    }

    emptyCart() {
        this.item$ = []
    }
}
