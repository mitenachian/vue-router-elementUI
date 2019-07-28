<template>
  <div>
    <el-row>
      <h3>作品區</h3>
    </el-row>
    <el-row>
	  <el-col :span="6" v-for="(item, index) in list" :key="index">
	    <el-card :body-style="{ padding: '10px' }" shadow="never">
	      <img :src="item.img" class="image">
	      <div style="padding: 14px;">
	        <span>{{item.name}}</span>
	        <div class="bottom clearfix">
	          <span class="titleName">{{ item.note }}</span>
	          <el-link class="button" :href="item.link" target="_blank">查看<i class="el-icon-view el-icon--right"></i> </el-link>
	        </div>
	      </div>
	    </el-card>
	  </el-col>
	</el-row>
  </div>
</template>

<script>
export default {
  data(){
    return {
      list:[{
      	id:1,
      	name:"婚紗酒杯", 
      	link:"http://mitenahandmade.byethost3.com/",
      	img:"http://mitenahandmade.byethost3.com/webImagesurl/mitenahandmade.jpg",
      	note:"靜態一頁式 HTML JQUERY CSS",
      },{
      	id:2,
      	name:"Design Lab", 
      	link:"http://designlab.tw/",
      	img:"http://mitenahandmade.byethost3.com/webImagesurl/designLab.jpg",
      	note:"HTML CSS JQUERY PHP Mysql",
      },{
      	id:3,
      	name:"VAQ2 汽車零件電商", 
      	link:"https://vaq2.com",
      	img:"http://mitenahandmade.byethost3.com/webImagesurl/vaq2.jpg",
      	note:"HTML CSS JQUERY PHP Mysql",
      },{
      	id:4,
      	name:"VAQ2 汽車零件電商 後台", 
      	link:"http://www.globalnetauto.url.tw/admin/gnaadmin/index.php",
      	img:"http://mitenahandmade.byethost3.com/webImagesurl/vaq2-2.jpg",
      	note:"HTML CSS JQUERY PHP Mysql",
      },{
      	id:5,
      	name:"GlobalNetAuto Co.Ltd 官網", 
      	link:"http://www.globalnetauto.com",
      	img:"http://mitenahandmade.byethost3.com/webImagesurl/gna.jpg",
      	note:"HTML CSS JQUERY PHP Mysql",
      },{
      	id:6,
      	name:"GlobalNetAuto Co.Ltd 後台", 
      	link:"http://www.globalnetauto.com.tw/gna_admin/login.php",
      	img:"http://mitenahandmade.byethost3.com/webImagesurl/gna2.jpg",
      	note:"HTML CSS JQUERY PHP Mysql",
      },{
      	id:7,
      	name:"GNA內部系統網",
      	link:"http://www.globalnetauto.url.tw/gna_helper/login.php",
      	img:"http://mitenahandmade.byethost3.com/webImagesurl/gnaHelper.jpg",
      	note:"HTML CSS JQUERY PHP Mysql",
      },{
      	id:8,
      	name:"titaniumplusautoparts", 
      	link:"http://www.titaniumplusautoparts.com/",
      	img:"http://mitenahandmade.byethost3.com/webImagesurl/tpa.jpg",
      	note:"一頁式 HTML CSS JQUERY",
      },{
      	id:9,
      	name:"FunTaiPei",
      	link:"http://mitenahandmade.byethost3.com/funtapei_web",
      	img:"http://mitenahandmade.byethost3.com/webImagesurl/funtaipei.jpg",
      	note:"(橫軸捲動)17屆網站新人王",
      },{
      	id:10,
      	name:"資策會FunTaipei", 
      	link:"http://mitenahandmade.byethost3.com/funtaipei_web_project",
      	img:"http://mitenahandmade.byethost3.com/webImagesurl/funtaipeiProject.jpg",
      	note:"視差滾動 skrollr",
      },{
      	id:11,
      	name:"RWD", 
      	link:"http://mitenahandmade.byethost3.com/RWD/",
      	img:"http://mitenahandmade.byethost3.com/webImagesurl/rwd.jpg",
      	note:"Bootstrap 練習用",
      }],
    }
  },
  methods:{

  }
}
</script>
<style scoped>
  .titleName {
    font-size: 13px;
    color: #999;
  }
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>