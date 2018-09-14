import Vue from 'vue'
export default {
  state: {
    cartShops:[]
  },
  mutations:{
    /*商品添加进购物车*/
    ['ADD_TO_CART']( state, shop ){
      const _self = this;
      let cartShops = state.cartShops;

      /*没重复的店直接推进数组*/
      if(cartShops.every(cartShop => cartShop.shopID !== shop.shopID)) 
        cartShops.push( shop ); 

      /*否则迭代检测商品是否相同*/
      else {
        cartShops = cartShops.map( cartShop => {
            /*没有重复商品，直接推商品*/
            if(cartShop.products.every( cartProduct => (
              cartProduct.productID !== shop.products[0].productID) || (cartProduct.type !== shop.products[0].type)) )
              cartShop.products.push(shop.products[0]);

            /*同一店，重复商品则数目加一*/
            else cartShop.products.forEach( (cartProduct,cpi) => {
              if((cartProduct.productID === shop.products[0].productID) && (cartProduct.type === shop.products[0].type))
              cartShop.products[cpi].count += shop.products[0].count;
            })
          return cartShop;
        })
      }
      return cartShops;
    },

    ['CHANGE_CART_DATA'](state,{prop,val}) {
      Vue.set(state.cartShops,prop,val);
    },

    /*修改某商品状态*/
    ['CHANGE_CART_PRODUCT_DATA'](state,{shopIndex,productIndex,prop,val}){
      Vue.set(state.cartShops[shopIndex].products[productIndex],prop,val);
    }
  }
}
