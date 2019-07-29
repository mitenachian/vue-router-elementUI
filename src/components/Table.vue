<template>
<div>
    <el-row>
      <h3>TABLE</h3>
    </el-row>
	  <el-table
	    :data="list.slice((currentPage-1)*pagesize,currentPage*pagesize)"
	    style="width:99.9%;">
	    <el-table-column
	      label="id"
	      prop="id">
	    </el-table-column>
	    <el-table-column
	      label="name"
	      prop="name">
	    </el-table-column>
	    <el-table-column
	      label="email"
	      prop="email">
	    </el-table-column>
	    <el-table-column>
	      <template slot-scope="scope">
	        <el-button
	          size="mini"
	          @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
		    <el-tooltip class="item" effect="dark" content="不給刪" placement="top-start">
		      <el-button
		          size="mini"
		          type="danger"
		          @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
		    </el-tooltip>
	      </template>
	    </el-table-column>
	  </el-table>
<!--編輯介面-->
		<el-dialog title="編輯" :visible.sync="editFormVisible">
			<el-form :model="editForm" label-width="80px" ref="editForm">
				<el-form-item label="id" prop="id">
					<el-input v-model="editForm.id" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="name">
					<el-input v-model="editForm.name"></el-input>
				</el-form-item>
				<el-form-item label="username">
					<el-input v-model="editForm.username"></el-input>
				</el-form-item>
				<el-form-item label="phone">
					<el-input v-model="editForm.phone"></el-input>
				</el-form-item>
				<el-form-item label="email">
					<el-input v-model="editForm.email"></el-input>
				</el-form-item>
				<el-form-item label="website">
					<el-input type="textarea" v-model="editForm.website"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click.native="editFormVisible = false">取消</el-button>
				<el-button type="primary" @click.native="editFormVisible = false">送出</el-button>
			</div>
		</el-dialog>	  

	  <div style="margin-top:10px;">
	      <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[5, 10, 50, 100]"
            :page-size="5"
            background
            layout="total, sizes, prev, pager, next, jumper"
            :total="list.length">
          </el-pagination>	  	
	  </div>
    </el-row>
</div>

</template>
<script>
export default {
  data(){
     return {
      list:[],
      search: '',
      pagesize:5,
      currentPage:1,
      editFormVisible : false,
      editForm: {
					id: 0,
					name: '',
					phone: '',
					username: '',
					website: '',
					email: '',
					address: {},
					company: {},
				},
     }
   },
  methods:{
  	handleEdit(index , row) {
  		console.log(row);
		this.editForm = Object.assign({}, row);
  		this.editFormVisible = true;
  	},
  	handleDelete(index , row) {
        this.$confirm('此操作將永久刪除資料, 是否繼續?', '提示', {
          confirmButtonText: '確定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.delete();
        }).catch(() => {       
        });
    },
    delete() {
        this.$alert('刪除失敗', '提示', {
          confirmButtonText: '確定',
          type: 'error'
        })
    },
  	editSubmit(){
  		alert("submit!");
  		this.editFormVisible = false
  	},
    handleSizeChange(val) {
        this.pagesize =val;
      },
    handleCurrentChange(val) {
        this.currentPage = val;
      },
  },

  mounted(){

	fetch('https://jsonplaceholder.typicode.com/users')
	  .then((response) => {
	    // 這裡會得到一個 ReadableStream 的物件
	    console.log(response);
	    // 可以透過 blob(), json(), text() 轉成可用的資訊
	    return response.json(); 
	  })
	  .then((jsonData) => {
	    console.log(jsonData);
	    this.list = jsonData;
	  })
	  .catch((err) => {
	    console.log('錯誤訊息:', err);
	});
  },
}
</script>
<style scoped>

</style>
