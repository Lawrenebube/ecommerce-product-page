<template>
    <div class="calculate">
        <section>
            <p class="calculatedValue">$125.00
                 <span class="percent">50%</span>
            </p>
           
            <p class="realValue">$250.00</p>
            
        </section>
        <div class="buttons">
                <p class="number">
                    <img class="remove"
                    @click="removeFromCart" 
                    src="../assets/icon-minus.svg" alt="" >
                    <span>{{cart}}</span>
                   <img class="add"
                    @click="addToCart"
                    src="../assets/icon-plus.svg" alt="" >
                </p>
                <button class="cart">
                    <img class="cart-image" src="../assets/icon-cart.svg" alt="">
                    <span class="addcart"> Add to cart</span> 
                </button>
            </div>
    </div>
</template>
<script>
    export default {
        name:'CalculateComponent',
        data(){
            return{
                cart:0
            } 
        },
        methods:{
           addToCart(){
                this.cart ++
           },
           removeFromCart(){
            if(this.cart == 0){
                console.log(0)
            }
            else{
                this.cart --
            }

           } 
        }
    }
</script>
<style scoped>
    .calculate {
        font-weight: 700;
    }
    section {
      display: flex;
      flex-direction: column;
      margin-top: 10px;
    }
    .percent {
        font-size: 12px;
        color:hsl(26, 100%, 55%) ;
        background-color: hsl(25, 100%, 94%);
        width: 40px;
        margin-left: 13px;
        border-radius: 5px;
        text-align: center;
        justify-content: center;
        padding: 1px 5px;
    }
    .promo {
        text-decoration: line-through;
    }
    .realValue {
       font-weight: 400;
       color: hsl(220, 14%, 75%);
       margin-top: -25px;
    }
 .remove, .add {
    background-color:  hsl(223, 64%, 98%);
    font-size: 12px;
    margin-top: 7px;
 }
 .remove {
    height: 3px;
 }
 .add {
    height: 9px;
 }
 .buttons {
    display: flex;
    margin-top:20px;
 }
 .number {
    display: flex;
    background-color:  hsl(223, 64%, 98%);
    width: 100px;
    text-align: center;
    padding: 8px 10px;
    margin-right: 10px;
    justify-content: space-between;
    border-radius: 9px;
 }
 .cart {
    width: 200px;
    text-align: center; 
    justify-content: center;
    border-radius: 9px;
    color:  hsl(0, 0%, 100%);
    background-color:hsl(26, 100%, 55%) ;
    border: none;
    outline: none;
    font-weight: 700;
    font-size: 15px;
    padding: 8px 10px;
 }
 .cart-image {
   filter: brightness(1000);
   margin-right: 5px;
 }
</style>