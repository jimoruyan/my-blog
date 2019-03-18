<template>
<div>
  <nav>
    <img src="../assets/images/me.jpg" alt="">
    <ul>
      <li>
        <router-link to="/" exact>博客</router-link>
        <router-link to="/class" exact>分类</router-link>
        <router-link to="/git" exact>开源</router-link>
        <router-link to="/photo" exact>摄影</router-link>
        <router-link to="/about" exact>关于</router-link>
        <router-link to="/add" exact>增加</router-link>
        <router-link to="/addgit" exact>git</router-link>
      </li>
    </ul>
  </nav>
  </div>
</template>
<script>
export default {
  name: "blogheader",
  data() {
    return {
      choosed: true
    };
  }
};
</script>
<style scoped>
div{
  height: 100%;
}
div head{
  width: 200px;
  height: 200px;
}
img{
  position: absolute;
  top:180px;
  left: 50%;
  margin-left: -50px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
ul {
  text-align: center;
  user-select:none
}
li {
  display: inline-block;
  margin: 0 10px;
  padding-bottom: 24px;
  border-bottom: 1px solid #efefef;
  /* font-size: 16px; */
}
a:hover {
  color: #000000;
}
a {
  color: #a0a0a0;
  text-decoration: none;
  padding: 12px;
  cursor: pointer;
}
nav {
  margin-top: 300px;
  padding: 30px 0;
  margin-bottom: 40px;
}
.router-link-active {
  color: #000000;
}
</style>

