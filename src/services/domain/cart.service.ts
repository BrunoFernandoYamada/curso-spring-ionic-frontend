import { Injectable } from "@angular/core";
import { Cart } from "../../models/cart";
import { ProdutoDTO } from "../../models/produto.dto";
import { StorageService } from "../storage.service";

@Injectable()
export class CartService{

    constructor(public storageServe : StorageService){

    }

    createOrClearCart() : Cart {
        let cart: Cart = {items: []};
        this.storageServe.setCart(cart);
        return cart;
    }

    getCart() : Cart {
        let cart = this.storageServe.getCart();
        if(cart == null){
            cart = this.createOrClearCart();
        }
        return cart;
    }

    addProduto(produto : ProdutoDTO) : Cart{
        let cart = this.getCart();
        let position = cart.items.findIndex(x => x.produto.id == produto.id);
        if(position == -1){
            cart.items.push({quantidade : 1, produto: produto });
        }
        this.storageServe.setCart(cart);
        return cart;
    }

}