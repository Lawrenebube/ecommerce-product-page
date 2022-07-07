<template>
    <div class="description">
        <h3>SNEAKER COMPANY</h3>
        <h2>Fall Limited Edition Sneakers</h2>
        <p>These low-profile sneakers are your perfect causal wear companion.
             Featuring a durable rubber outer sole, they'll withstand everything the weather
             can offer
        </p>
             <CalculateComponent/>
    </div>
</template>
<script>
import CalculateComponent from '@/components/calculate.vue'

    export default {
        name:'SneakerDescription',
        components:{
            CalculateComponent
            }
        }
</script>
<style scoped>
    .description {
        margin-top: 30px;
        max-width: 400px;
        justify-content: center;
        text-align: left;
        font-weight: 400; 
    }
    h3 {
        font-size: 12px;
        color: hsl(26, 100%, 65%);
    }
    h2 {
        font-size: 30px;
        padding: 10px 0px 20px;
    }
    p {
        font-size: 16px;
         line-height: 1.6em;
    }
</style>