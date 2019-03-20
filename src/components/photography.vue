<template>
  <div id="photo">
    <div class="images">
      <img class="pic pic1" src="../assets/images/1.jpg">
      <img class="pic pic2" src="../assets/images/2.jpg">
      <img class="pic pic3" src="../assets/images/3.jpg">
      <img class="pic pic4" src="../assets/images/4.jpg">
      <img class="pic pic5" src="../assets/images/5.jpg">
      <img class="pic pic6" src="../assets/images/6.jpg">
      <img class="pic pic7" src="../assets/images/7.jpg">
      <img class="pic pic8" src="../assets/images/8.jpg">
      <img class="pic pic9" src="../assets/images/9.jpg">
    </div>
  </div>
</template>
<script>
export default {
  name: ""
};
</script>
<style scoped>
#photo{
    max-width: 1200px;
    margin: 0 auto;
}
.images {
  width: 960px;
  margin: 60px 60px 10px 40px;
  position: absolute;
}

.pic {
  width: 220px;
}
.images img:hover {
  box-shadow: 15px 15px 20px rgba(50, 50, 50, 0.4);
  transform: rotate(0deg) scale(2.2);
  -webkit-transform: rotate(0deg) scale(1.2);
  z-index: 1000;
}

.images img {
  padding: 10px 10px 15px;
  background: white;
  border: 1px solid #ddd;
  box-shadow: 2px 2px 3px rgba(50, 50, 50, 0.4);
  -webkit-transition: all 0.5s ease-in;
  -moz-transition: all 0.5s ease-in;
  -ms-transition: all 0.5s ease-in;
  -o-transition: all 0.5s ease-in;
  transition: all 0.5s ease-in;
  position: absolute;
  z-index: 1;
}

.pic1 {
  left: 400px;
  top: 0;
  transform: rotate(-5deg);
  -webkit-transform: rotate(-5deg);
}

.pic2 {
  left: 200px;
  top: 10px;
  transform: rotate(-20deg);
  -webkit-transform: rotate(-20deg);
}
.pic3 {
  top: 230px;
  right: 30px;
  transform: rotate(5deg);
  -webkit-transform: rotate(5deg);
}

.pic4 {
  top: 200px;
  left: 300px;
  transform: rotate(-10deg);
  -webkit-transform: rotate(-10deg);
}

.pic5 {
  top: 20px;
  right: 100px;
  transform: rotate(-10deg);
  -webkit-transform: rotate(-10deg);
}
.pic6 {
  left: 10px;
  top: 0;
  transform: rotate(10deg);
  -webkit-transform: rotate(10deg);
}

.pic7 {
  left: 850px;
  top: 0;
  transform: rotate(20deg);
  -webkit-transform: rotate(20deg);
}
.pic8 {
  left: 100px;
  top: 250px;
  transform: rotate(5deg);
  -webkit-transform: rotate(5deg);
}
.pic9 {
  left: 450px;
  top: 190px;
  transform: rotate(15deg);
  -webkit-transform: rotate(15deg);
}
.images img:hover {
  box-shadow: 15px 15px 20px rgba(50, 50, 50, 0.4);
  transform: rotate(0deg) scale(2.2);
  -webkit-transform: rotate(0deg) scale(2.2);
  z-index: 1000;
  width: 400px;
}
</style>

