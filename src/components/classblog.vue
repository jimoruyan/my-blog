<template>
  <div class="blog-class">
    <div class="category">
      <span
        @click="changeclass(categores)"
        v-for="(categores,index) in ['javascript','css','html','vue','other']"
        :key="index"
      >{{categores}}</span>
    </div>
    <div class="single-blog" v-for="(blog,index) in filteredBlogs"
     :key="index">
      <router-link v-bind:to="'/blog/'+blog.id">
        <h2>{{blog.title}}</h2>
        <ul>
          <li v-for="(category,index) in blog.categories"
           :key="index">{{category}}</li>
        </ul>
        <p>{{blog.time}}</p>
      </router-link>
    </div>
  </div>
</template>
<script>
import axios from "../axios-auth";

export default {
  name: "blog-class",
  data() {
    return {
      blogs: [],
      search: "",
      categoriy: []
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
        //  console.log(data)
        for (let key in data) {
          data[key].id = key;
          blogsArray.push(data[key]);
        }
        this.blogs = blogsArray;
      });
    // axios
    //   .get("/categoriy.json")
    //   .then(data => {
    //     return data.data;
    //   })
    //   .then(data => {
    //     let categoriyArray = [];
    //     for (let key in data) {
    //       data[key].id = key;
    //       categoriyArray.push(data[key]);
    //     }
    //     this.categoriy = categoriyArray[0];
    //   });
  },
  
  computed: {
    filteredBlogs: function() {
      let newblog = [];
      for (let i = 0; i < this.blogs.length; i++) {
        for (let j = 0; j < this.blogs[i].categories.length; j++) {
          if (this.blogs[i].categories[j] == this.search) {
            newblog = newblog.concat(this.blogs[i]);
          }
        }
      }
      return  newblog;
    }
  },
  methods: {
    changeclass: function(fl) {
      this.search = fl;
    }
  }
};
</script>
<style lang="less" scoped>
.blog-class {
  max-width: 800px;
  margin: 0 auto;
  box-sizing: border-box;
  user-select:none;
  .category {
    width: 100%;
    box-sizing: border-box;
    text-align: center;
    padding: 5px;
    span {
      padding: 3px 8px;
      color: #888;
      cursor: pointer;
      &:hover {
        background-color: #e8e8e8;
      }
    }
  }
}
.single-blog {
  padding: 12px;
  margin: 20px auto;
  box-sizing: border-box;
}
.single-blog:hover {
  background: #efefef;
  .a {
    color: #444;
    text-decoration: none;
  }
}
h2 {
  display: inline;
  color: #444;
  font-weight: 400;
}
ul {
  display: inline-block;
  float: right;
  color: #888;
  background: #e8e8e8;
}
li {
  padding: 3px 4px;
  float: left;
  font-size: 13px;
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

