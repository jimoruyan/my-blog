<template>
  <div id="app">
    <blogheader></blogheader>
    <router-view></router-view>
  </div>
</template>

<script>
import blogheader from "./components/header";

export default {
  name: "App",
  components: {
    blogheader
  }
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: "微软雅黑";
  background-color: #fff;
  /* overflow: hidden; */
}
body,
html {
  -webkit-text-size-adjust: none;
  width: 100%;
  /* height: 100%; */
}
* {
  text-decoration: none;
  list-style: none;
}
img {
  border: 0px;
}
ul,
li,
dl,
dd,
dt,
p,
ol,
h1,
h2,
h3,
h4,
h5 {
  font-size: 14px;
  padding: 0;
  margin: 0;
}
a,
input,
button {
  outline: none;
}
</style>
