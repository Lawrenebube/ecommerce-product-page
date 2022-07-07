<template>
    <div class="images">
        <div >
            <img class="main-image" src="../assets/image-product-1.jpg" alt="">
        </div>
        <div >
            <img class="thumbnail" src="../assets/image-product-1-thumbnail.jpg" alt="" >
            <img class="thumbnail" src="../assets/image-product-2-thumbnail.jpg" alt="" >
            <img class="thumbnail" src="../assets/image-product-3-thumbnail.jpg" alt="" >
            <img class="thumbnail" src="../assets/image-product-4-thumbnail.jpg" alt="">
        </div>
    </div>
</template>
<script>
export default {
    name:'ImageComponent'
}
</script>
<style scoped>
.images {
    justify-content: left;
    text-align: left;
    margin-left:200px;
    margin-top: 20px;
}
.main-image{
    height: 330px;
    border-radius: 10px;
}
.thumbnail{
    height: 68px;
    border-radius: 10px;
    margin: 10px 15px 10px 0px;
}
.thumbnail:hover {
    border: 2px solid hsl(26, 100%, 55%);
}
</style>