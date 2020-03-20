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
             <el-link class="button" :href="item.link" target="_blank" type="success">查看<i class="el-icon-view el-icon--right"></i> </el-link>
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
				name:"Music Player", 
				link:"https://mitenachian.github.io/mitena-player/",
				img:"https://github.com/mitenachian/mitena-player/raw/master/mt-player.jpg?raw=true",
				note:"F2E 2nd精神時光屋 自主練習",
      },{
				id:2,
				name:"RealTimeChat", 
				link:"https://mitenachian.github.io/chat_room/dist/#/",
				img:"https://github.com/mitenachian/chat_room/raw/master/real-time-chat.jpg?raw=true",
				note:"F2E 2nd精神時光屋 自主練習",
      },{
				id:3,
				name:"Little Game", 
				link:"https://mitenachian.github.io/Little-game/",
				img:"https://github.com/mitenachian/Little-game/raw/master/littleGame.gif?raw=true",
				note:"F2E 2nd精神時光屋 自主練習 phaserJS",
      },{
				id:4,
				name:"Pay Flow", 
				link:"https://mitenachian.github.io/mitena-pay/",
				img:"https://github.com/mitenachian/mitena-pay/raw/master/pay-flow.jpg?raw=true",
				note:"F2E 2nd精神時光屋 自主練習",
      },{
				id:5,
				name:"Room booking", 
				link:"https://mitenachian.github.io/room-booking/",
				img:"https://github.com/mitenachian/room-booking/raw/master/mt-bookin.jpg?raw=true",
				note:"F2E 2nd精神時光屋 自主練習",
      },{
				id:6,
				name:"Wedding Easy", 
				link:"https://github.com/mitenachian/wedding-easy",
				img:"https://github.com/mitenachian/wedding-easy/raw/master/wedding-easy.jpg?raw=true",
				note:"購物車 結帳 訂單 線上課程練習",
      },{
				id:7,
				name:"Design Lab", 
				link:"https://mitenachian.github.io/designlab.tw/",
				img:"http://mitenahandmade.byethost3.com/webImagesurl/designLab.jpg",
				note:"github",
      },{
				id:8,
				name:"FunTaiPei",
				link:"http://mitenahandmade.byethost3.com/funtapei_web",
				img:"http://mitenahandmade.byethost3.com/webImagesurl/funtaipei.jpg",
				note:"(橫軸捲動)17屆網站新人王",
      },{
				id:9,
				name:"資策會FunTaipei", 
				link:"http://mitenahandmade.byethost3.com/funtaipei_web_project",
				img:"http://mitenahandmade.byethost3.com/webImagesurl/funtaipeiProject.jpg",
				note:"視差滾動 skrollr",
      },{
				id:10,
				name:"台灣空氣觀測查詢", 
				link:"https://codepen.io/mitenachian/pen/jONJRpX",
				img:"http://mitenahandmade.byethost3.com/webImagesurl/aqi.jpg",
				note:"CodePen/TAIWAN GOV OPEN DATA",
      },{
				id:11,
				name:"Wedding Glasses", 
				link:"http://mitenahandmade.byethost3.com/",
				img:"http://mitenahandmade.byethost3.com/webImagesurl/mitenahandmade.jpg",
				note:"靜態一頁式 HTML JQUERY CSS",
      },{
				id:12,
				name:"GNA內部系統網",
			link:"http://www.globalnetauto.url.tw/gna_helper/login.php",
				img:"http://mitenahandmade.byethost3.com/webImagesurl/gnaHelper.jpg",
				note:"HTML CSS JQUERY PHP Mysql/僅供現場demo",
      },{
				id:13,
				name:"VAQ2 汽車零件銷售", 
				link:"https://vaq2.com",
				img:"http://mitenahandmade.byethost3.com/webImagesurl/vaq2.jpg",
				note:"HTML CSS JQUERY PHP Mysql",
      },{
				id:14,
				name:"VAQ2 汽車零件銷售 後台", 
				link:"http://www.globalnetauto.url.tw/admin/gnaadmin/index.php",
				img:"http://mitenahandmade.byethost3.com/webImagesurl/vaq2-2.jpg",
				note:"HTML CSS JQUERY PHP Mysql/僅供現場demo",
      },{
				id:15,
				name:"GlobalNetAuto Co.Ltd 官網", 
				link:"http://www.globalnetauto.com",
				img:"http://mitenahandmade.byethost3.com/webImagesurl/gna.jpg",
				note:"HTML CSS JQUERY PHP Mysql",
			},{
				id:16,
				name:"GlobalNetAuto Co.Ltd 後台", 
				link:"http://www.globalnetauto.com.tw/gna_admin/login.php",
				img:"http://mitenahandmade.byethost3.com/webImagesurl/gna2.jpg",
				note:"HTML CSS JQUERY PHP Mysql/僅供現場demo",
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
		height: 230px;
		overflow: hidden;
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
	.el-card {
			margin:15px;
	}
</style>