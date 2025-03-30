// Create a menu app as seen in this week’s video. What you create is up to you as long as it meets the following requirements:
// Use at least one array.
// Use at least two classes.
// Your menu should have the options to create, view, and delete elements.

// Class 
class GroceryItem{
    constructor(name,price){
        this.name = name;
        this.price = price;
    }
}

//Checkout Menu: add item, view cart & delete items
class Cart{
    //cart items array
    constructor(){
        this.cart = [];
    }

    // add items in cart
    addItem(){ 
        // prompt for name and price       
        let itemName = prompt("Enter item name");
        let itemPrice = prompt("Enter item price:");
        // push item into array
        this.cart.push(new GroceryItem(itemName, itemPrice));
    }

    // delete items in cart
    removeItem(){
        let itemIndex = prompt("Enter item index to REMOVE:");
        this.cart.splice(itemIndex, 1);
    }

    // see items in cart
    viewCart(){
        let cartList = "";
        for(let i = 0; i < this.cart.length; i++){
            console.log(this.cart[i]);
            cartList += `${i}) ${this.cart[i].name}: ${this.cart[i].price} \n`
        }
        alert(`Items in your cart: \n${cartList}\n`);

    }

    // go to checkout
    checkoutMenu(){
        return prompt(`
        Checkout Menu:
        0) Exit Menu
        1) Add Items
        2) Delete Items
        3) View Cart \n`)
    } 

    // start checkout menu
    start(){
        let selection = this.checkoutMenu();

        while (selection != 0){

            switch (selection){
                case "1": this.addItem();
                break;

                case "2": this.removeItem();
                break;

                case "3": this.viewCart();
                break;

                default: alert("!!!!!! Invalid selection. Choose from 0,1,2,3 only. !!!!!!");

            }


        selection = this.checkoutMenu();

        }

        alert("Exiting Checkout Menu. Goodbye!")
    }

}

// initiate and invoke method

// let item1 = new Cart('eggs', '8.99');
// console.log(item1);

let addCart = new Cart();
// addCart.addItem();
// addCart.addItem();
// addCart.viewCart();
// addCart.removeItem();
// addCart.viewCart();

// addCart.checkoutMenu();
addCart.start();

