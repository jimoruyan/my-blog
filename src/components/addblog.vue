<template>
  <div id="add-blog">
    <h2>添加博客</h2>
    <form v-if="!submmited">
      <label>博客标题</label>
      <input type="text" v-model="blog.title" required>
      <label>博客内容</label>
      <!-- <textarea v-model="blog.content"></textarea> -->
      <div class="edit_container">
      <quill-editor
        v-model="blog.content"
        ref="myQuillEditor"
        :options="editorOption"
        @blur="onEditorBlur($event)"
        @focus="onEditorFocus($event)"
        @change="onEditorChange($event)"
      ></quill-editor>
    </div>
      <div id="checkboxes">
        <label>Vue</label>
        <input type="checkbox" value="Vue" v-model="blog.categories">
        <label>html</label>
        <input type="checkbox" value="html" v-model="blog.categories">
        <label>css</label>
        <input type="checkbox" value="css" v-model="blog.categories">
        <label>javascript</label>
        <input type="checkbox" value="javascript" v-model="blog.categories">
        <label>其他</label>
        <input type="checkbox" value="other" v-model="blog.categories">
        <label>时间</label>
          <input type="date" v-model="blog.time"><br>
        <button v-on:click.prevent="post">添加博客</button>
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
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { quillEditor } from "vue-quill-editor"; //调用编辑器
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
export default {
  name: "addblog",
  data() {
    return {
      editorOption: {},
      blog: {
        title: "",
        content: "",
        categories: [,],
        author: "",
        time:"",
        blog_src:"",
        comments:"",
        // date:"",
        submmited: false
      },
      authors: ["Hemiash", "Henry", "Bucky"],
      submmited: false
    };
  },
  created(){
    this.comments = [];
  },
  methods: {
    post() {
      axios.post("/post.json", this.blog).then(data => {
        console.log(data);
        this.submmited = true;
      });
    },
    onEditorReady(editor) {
      // 准备编辑器
    },
    onEditorBlur() {}, // 失去焦点事件
    onEditorFocus() {}, // 获得焦点事件
    onEditorChange() {} // 内容改变事件
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill;
    }
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
#checkboxes{
  margin-top: 100px;
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
.quill-editor {
  height: 745px;
}

.limit {
  height: 30px;
  border: 1px solid #ccc;
  line-height: 30px;
  text-align: right;
}

.ql-snow .ql-editor img {
  max-width: 480px;
}

.ql-editor .ql-video {
  max-width: 480px;
}
</style>
