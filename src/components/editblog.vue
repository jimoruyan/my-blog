<template>
  <div id="add-blog">
    <h2>编辑</h2>
    <form v-if="!submmited">
      <label>博客标题</label>
      <input type="text" v-model="blog.title" required>
      <label>博客内容</label>
      <textarea v-model="blog.content"></textarea>
      <div id="checkboxes">
        <label for="_vue">Vue</label>
        <input type="checkbox" id="_vue" value="Vue" v-model="blog.categories">
        <label for="_html">html</label>
        <input  type="checkbox" id="_html" value="html" v-model="blog.categories">
        <label for="_css">css</label>
        <input  type="checkbox" id="_css" value="css" v-model="blog.categories">
        <label for="_javascript">javascript</label>
        <input  type="checkbox" id="_javascript" value="javascript" v-model="blog.categories">
        <label for="_other">其他</label>
        <input  type="checkbox" id="_other" value="other" v-model="blog.categories">
        <label>时间</label>
        <input type="date" v-model="blog.time"><br>
        <!-- <label>作者</label>
        <select v-model="blog.author">
          <option v-for="(author,index) in authors" :key="index">{{author}}</option>
        </select> -->
        <button v-on:click.prevent="post">提交</button>
      </div>
    </form>
    <div v-if="submmited">您的博客发送成功</div>

    <hr>
    <div class="preview">
      <h3>博客总览</h3>
      <p>博客标题：{{blog.title}}</p>
      <p>博客内容:</p>
      <p>{{blog.content}}</p>
      <p>博客分类:</p>
      <ul>
        <li v-for="(category,index) in blog.categories" :key="index">{{category}}</li>
      </ul>
      <p>作者：{{blog.author}}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "add-blog",
  data() {
    return {
      id: this.$route.params.id,
      blog: {},
      // authors: ["Hemiash", "Henry", "Bucky"],
      submmited: false
    };
  },
  methods: {
    fetchData() {
      axios.get("/post/" + this.id + ".json").then(response => {
        // console.log(response);
        this.blog = response.data;
      });
    },
    post: function() {
      axios.put("/post/" + this.id + ".json", this.blog).then(data => {
        // console.log(data);
        this.submmited = true;
      });
    }
  },
  created() {
    this.fetchData();
  }
};
</script>
<style scoped>
#add-blog * {
  box-sizing: border-box;
}

#add-blog {
  margin: 20px auto;
  max-width: 600px;
  padding: 20px;
}
label {
  display: block;
  margin: 20px 0 10px;
}
input[type="text"],
textarea,
select {
  display: block;
  width: 100%;
  padding: 8px;
}
textarea {
  height: 200px;
}
#checkboxes label {
  display: inline-block;
  margin-top: 0;
}
#checkboxes input {
  display: inline-block;
  margin-right: 10px;
}
button {
  display: block;
  margin: 20px auto;
  background: crimson;
  color: #fff;
  border: 0;
  padding: 14px;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
}
#preview {
  padding: 10px 20px;
  border: 1px solid #ccc;
  margin: 30px 0;
}
h3 {
  margin-top: 10px;
}
</style>
