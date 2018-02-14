import { ShoppingCartItem } from "./shopping-cart-item";
import { Product } from "./product";



export class ShoppingCart{
    items: ShoppingCartItem[] = [];

     constructor(public itmesMap: {[productId:string]: ShoppingCartItem}){
         this.itmesMap = itmesMap || {};

        // for(let productId in itmesMap){
        //     let item = itmesMap[productId];
        //     let x = new ShoppingCartItem();
        //     Object.assign(x, item);
        //     x.$key = productId;
        //     this.items.push(x);
        // }
        for(let productId in itmesMap){
            let item = itmesMap[productId];
            this.items.push(new ShoppingCartItem({ ...item, $key: productId }));
        }

    }

    getQuanity(product: Product){
        let item = this.itmesMap[product.$key];
        return item ? item.quantity : 0;
      }


    get totalPrice(){
        let sum = 0;
        for(let productId in this.items){
            sum += this.items[productId].totalPrice;
        }
        return sum;
    }

    get totalItemsCount(){
        let count=0;
        for(let productId in this.itmesMap){
            count+= this.itmesMap[productId].quantity;
        }
        return count;
    }
}