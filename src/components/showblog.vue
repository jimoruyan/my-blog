<template>
  <div id="show-blogs">
    <input type="text" v-model="search" placeholder="搜索">
    <div class="single-blog" v-for="(blog,index) in filteredBlogs" :key="index">
      <router-link v-bind:to="'/blog/'+blog.id">
        <h2>{{blog.title}}</h2>
        <ul>
          <li v-for="(category,index) in blog.categories" :key="index">{{category}}</li>
        </ul>
        <p>{{blog.time}}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from "../axios-auth";
export default {
  name: "show-blogs",
  data() {
    return {
      blogs: [],
      search: ""
    };
  },
  created() {
    axios
      .get("/post.json")
      .then(function(data) {
        return data.data;
      })
      .then(data => {
        var blogsArray = [];
        for (let key in data) {
          data[key].id = key;
          blogsArray.push(data[key]);
        }
        this.blogs = blogsArray;
        // console.log(this.blogs);s

      });
      
  },
  computed: {
    filteredBlogs: function() {
      return this.blogs.filter(blog => {
        return blog.title.match(this.search);
      });
    }
  }
};
</script>
<style scoped>
#show-blogs {
  max-width: 800px;
  margin: 0 auto;
  cursor: pointer;
}
.single-blog {
  padding: 12px;
  margin: 20px auto;
  box-sizing: border-box;
}
.single-blog:hover{
    background: #efefef;
}
h2{
    display: inline;
    font-weight: 400;
}
ul{
    display: inline-block;
    float: right;
    color: #888;
    background: #e8e8e8;
}
li{
    padding: 3px 4px;
    float: left;
    font-size: 13px;
}
#show-blogs a {
  color: #444;
  text-decoration: none;
}
input[type="text"] {
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
}
p {
  margin-top: 10px;
}
</style>
