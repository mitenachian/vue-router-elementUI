<template>
<div>
    <el-row>
      <h3>JSON DATA Render and Search Filter</h3>
    </el-row>
    <el-row>
      <el-col :span="12">
        <el-input v-model="serchText" placeholder="seach lesson title"></el-input>
      </el-col>
    </el-row>
    <el-row>
        <div class="lesson" v-for="(lesson, index) in filteredList" :key="index">
            <div class="image" :style="imgStyle(lesson.img)"></div>
            <a v-bind:href="lesson.url" target="_blank">
                <h1>{{lesson.title}}</h1>
            </a>
            <span>{{lesson.teacher}}</span>
        </div>
    </el-row>
</div>

</template>
<script>
import jsonData from './data.json'
export default {
  data(){
     return {
      serchText:'',
      lessons:[],
     }
   },
  methods:{
      imgStyle(img){
          return{
              backgroundImage:`url(${img})`,
          }
      }
  },
  mounted(){
    this.lessons = jsonData;
   /* fetch('./data.json')
      .then( function (res) {
        console.log(res);
        res.json();
      })
      .then(lessons => this.lessons =lessons)*/
  },  
  computed: {
    filteredList() {
      return this.lessons.filter(lesson => {
        return lesson.title.toLowerCase().includes(this.serchText.toLowerCase())
      })
    }
  },
}
</script>
<style scoped>
    h1{
        color:dimgrey;
        text-decoration: none;
        font-size:18px;
    }
    a{
        color:#369;     
    }
    .teacher{
       font-size: 12px;
    }
    .lesson{
        position: relative;
        display:inline-block;
        width:240px;
        border:1px solid #999;
        margin:12px;
        padding:8px;
        overflow: hidden;
        padding-top:150px;
        border-radius: 8px;
        height: 100px;
    }
    .image{
        position:absolute;
        width:100%;
        height: 150px;
        background-size:cover;
        background-position: center center;
        left: 0;
        top:0;

    }
</style>
