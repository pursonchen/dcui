<template>
<div>
<el-card class="box-card">
  <div slot="header" class="clearfix">
    <span style="line-height: 36px;">
    <div class="source">
	<el-breadcrumb separator="/">
  <el-breadcrumb-item :to="{ path: '/' }"><i class="el-icon-arrow-left"></i>&nbsp;&nbsp;首页</el-breadcrumb-item>
  <el-breadcrumb-item>订餐查询</el-breadcrumb-item>
</el-breadcrumb>
</div>
</span>
  </div>
<el-row>
  <el-col :span="8"><div>
    <div style="margin-top:10px; font-size:15px;">
      订餐日期:
    </div>
  </div></el-col>
  <el-col :span="16"><div>
  <el-date-picker
      v-model="value1"
      type="date"
      placeholder="选择日期"
      >
    </el-date-picker></div></el-col>

</el-row >

    <el-table
    :data="tableData3"
    height="400"
    border
    style="width: 100%; margin-top:10px">
    <el-table-column
      prop="type"
      label="餐别">
    </el-table-column>
    <el-table-column
      prop="name"
      label="订餐人"
     >
    </el-table-column>
    <el-table-column
      prop="count"
      label="餐数">
    </el-table-column>
    <el-table-column
      prop="cancel"
      label="撤餐">
    </el-table-column>
  </el-table>
 
  <el-pagination
    layout="prev, pager, next"
    :total="50"
    style="text-align: center">
  </el-pagination>
</el-card>
</div>
</template>

<script>
	export default {
		name: 'dcdetail',
		data(){
			return {
       value1: '',
        tableData3: [{
          type: '早餐',
          name: '王小虎',
          count: '1',
          cancel: '撤餐'
        }, {
          type: '早餐',
          name: '王小虎',
          count: '1',
          cancel: '撤餐'
        },  {
          type: '早餐',
          name: '王小虎',
          count: '1',
          cancel: '撤餐'
        },  {
          type: '早餐',
          name: '王小虎',
          count: '1',
          cancel: '撤餐'
        },  {
          type: '早餐',
          name: '王小虎',
          count: '1',
          cancel: '撤餐'
        },  {
          type: '早餐',
          name: '王小虎',
          count: '1',
          cancel: '撤餐'
        },  {
          type: '早餐',
          name: '王小虎',
          count: '1',
          cancel: '撤餐'
        }, ]
			};
		}
	}
</script>
<style scope>
	
.source {
		    display: block;
		    font-weight: 400;
            -webkit-font-smoothing: antialiased;
}
 .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  .clearfix:after {
      clear: both
  }

  .box-card {
    width: 96%;
    margin: 0 auto;
  }
</style>