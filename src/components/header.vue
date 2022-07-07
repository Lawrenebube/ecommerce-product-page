<template>
<div id="header">
    <div class="links">
      <img class="logo" alt="" src="../assets/logo.svg">
      <nav>
        <router-link to="/collection" class="nav-link">Collections</router-link> 
        <router-link to="/men" class="nav-link">Men</router-link>
        <router-link to="/women" class="nav-link">Women</router-link>
        <router-link to="/about" class="nav-link">About</router-link>
        <router-link to="/contact" class="nav-link">Contact</router-link>
        <router-view/>
      </nav>
     
    </div>
    
    <div class="profile">
      <img class="cart" src="../assets/icon-cart.svg" alt="" >
      <img class="pic" src="../assets/image-avatar.png" alt="">
    </div>   
</div>
</template>
<script>

export default {
  name: 'HeaderNav',
}
</script>
<style scoped>
#header{
  display: grid;
  grid-template-columns: 1fr 1fr ;
  justify-content: space-between;
  margin: 25px 100px ;
  padding-bottom: 20px;
  /* border-bottom: 1px solid hsl(223, 64%, 98%); */
   border-bottom: 2px solid red;
}
.logo {
  height: 15px;
}
.links {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
nav {
  display: grid;
  grid-template-columns: repeat(5,1fr);
  gap: 2em;
  margin-left: 70px;
  margin-right: 280px;
}
.nav-link {  
  color: hsl(219, 9%, 45%);
}
.profile {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3em;
  justify-content:space-between;
  width: 100px;
 }
.pic{
  height: 25px;
  margin-top: -3px;
}
</style>