<template>
  <div id="single-blog">
      <h1 class="hed">{{blog.title}}</h1>
      <p class="time">{{blog.time}}</p>
      <!-- <article>{{blog.content}}</article> -->
      <article v-html="blog.content"></article>
      <button class="btn"  @click="deleteSingleBlog()">删除</button>
      <router-link class="link"  :to="'/edit/' +id">编辑</router-link>
      <div class="comment">
        <p>Thanks For Reading</p>
        <h2>comments:</h2>
        <ul class="clearfix" v-for="(_blog,index) in blog.comments" :key="index">
          <li>{{_blog.email}}:</li>
          <li style="text-indent:2em;">{{_blog.comment}}</li>
          <li>{{_blog.time}}</li>
        </ul>
        <br>
        <br>
        <h2>Talk with author :</h2>
        <input type="text" v-model="comments.email" placeholder="leave your email">
        <textarea v-model="comments.comment"></textarea>
        <button class="btn" @click="addComment">提交</button>
      </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "single-blog",
  data() {
    return {
      id: this.$route.params.id,
      blog: {},
      comments: {
        comment: "",
        time: "",
        email:"",
      },
      submmited: false
    };
  },
  created() {
    axios.get("/post/" + this.id + ".json").then(data => {
      this.blog = data.data;
      console.log(this.blog);
    });
  },
  methods: {
    deleteSingleBlog() {
      axios.delete("/post/" + this.id + ".json").then(response => {
        this.$router.push({ path: "/" });
      });
    },
    addComment() {
      let c_date = new Date();
      if (!this.blog.comments.length) {
        this.blog.comments = [];
      }
      this.comments.time = c_date.toLocaleString();
      this.blog.comments.push(this.comments);
      console.log(this.blog);
      axios.put("/post/" + this.id + ".json", this.blog).then(response => {
        this.$router.push({ path: "/blog/" + this.id }); 
      });
      
      // window.location.reload(); 
      // this.comments.email = "";
      // this.comments.comment = "";
      
    },
  },
  
};
</script>

<style>
#single-blog {
  box-sizing: border-box;
  max-width: 960px;
  margin: 0 auto;
  padding: 20px;
  /* background: #eeeeee; */
  border: 1px solid #eee;
  border-radius: 8px;
}
#single-blog .hed {
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 12px;
}
#single-blog .time {
  text-align: center;
  opacity: 0.7;
  margin-bottom: 16px;
}
#single-blog article {
  /* text-indent: 2em; */
  word-break: break-all;
}
#single-blog .btn {
  display: inline-block;
  margin: 20px 10px;
  background: crimson;
  color: #fff;
  border: 0;
  padding: 14px;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
}
#single-blog .link {
  display: inline-block;
  margin: 20px auto;
  background: crimson;
  color: #fff;
  border: 0;
  padding: 14px;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
}
#single-blog .comment {
  max-width: 700px;
}
#single-blog ul{
  background: white;
  height: 100%;
  border-bottom: 1px solid #eee;
}
#single-blog ul li{
  padding: 6px;
}
#single-blog ul li:nth-child(3){
  float: right;
}
#single-blog .comment p {
  opacity: 0.7;
  padding: 10px;
  border-top: 1px solid #eee;
}
#single-blog .comment h2 {
  font-weight: 400;
  font-size: 20px;
}
#single-blog .comment input {
  width: 100%;
  height: 24px;
  border: 1px solid #eee;
  outline:none;
  text-indent: 1em;
}
#single-blog .comment textarea {
  border: 2px solid #e8e8e8;
  border-radius: 3px;
  margin: 0 auto;
  margin-top: 13px;
  width: 100%;
  height: 200px;
  resize: none;
  border: 1px solid #eee;
}
.clearfix:after {
    clear: both;
    content: "\0020";
    display: block;
    height: 0;
    font-size: 0px;
    visibility: hidden;
}
</style>