<template>
<div>
    <el-row>
      <h3>
      	TO DO LIST
      </h3>
    </el-row>
    <el-row>
    	<el-col :span="24">
    		<el-form :inline="true" ref="form">
    			<el-form-item label="新增待辦">
				   <el-input v-model="todo" width="200px"></el-input>
    			</el-form-item>
    			<el-form-item>
		    		<el-button type="primary" size="mini" circle @click="addToDo()"><icon name="plus"></icon></el-button>
    			</el-form-item>
    		</el-form>
		</el-col>
    </el-row>
    <el-row>
	    <el-col :span="12">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>未完成清單</span>
          </div>
          <div v-for="(item,index) in list" :key="index">
            <span> {{ item }} </span>
            <el-button type="success" size="mini" circle @click="doneToDo(item,index)"><icon name="check"></icon></el-button>
            <el-button type="danger" size="mini" circle @click="removeToDo( 'list' ,index)"><icon name="minus"></icon></el-button>
            <el-divider></el-divider>
          </div>
        </el-card>
		</el-col>
		<el-col :span="12">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>已完成清單</span>
          </div>
          <div v-for="(item,index) in listDone" :key="index">
            <span> {{ item }} </span>
            <el-button type="danger" size="mini" circle @click="removeToDo( 'listDone' ,index)"><icon name="minus"></icon></el-button>
            <el-divider></el-divider>
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
      list:["學習VueRouter","學習Vuex","ES6","Promise"],
      todo:'',
      listDone:[],
    }
  },
  methods:{
    addToDo(){
      if(this.todo) {
        this.list.push(this.todo);
        this.todo ='';
      }
    },
    doneToDo(item , index) {
      this.listDone.push(item);
      this.list.splice(index, 1);
    },
    removeToDo(type , index) {
      if(type=="list"){
        this.list.splice(index,1);
      }
      if(type=="listDone") {
        this.listDone.splice(index,1);
      }
    }
  }
}
</script>