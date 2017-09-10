<template>
<div>
<el-card class="box-card">
  <div slot="header" class="clearfix">
    <span style="line-height: 36px;">
    <div class="source">
	<el-breadcrumb separator="/">
  <el-breadcrumb-item :to="{ path: '/' }"><i class="el-icon-arrow-left"></i>&nbsp;&nbsp;首页</el-breadcrumb-item>
  <el-breadcrumb-item>每周菜谱</el-breadcrumb-item>
</el-breadcrumb>
</div>
</span>
  </div>
    <el-row>
  <el-col :span="8"><div>
    <div style="margin-top:10px; font-size:15px;">
      日期:
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
      label="菜名"
     >
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
		name: 'weekdishs',
		data(){
			return {
 value1: '',
        tableData3: [{
          type: '早餐',
          name: '东坡肘子',
        }, {
          type: '早餐',
          name: '馒头',
        }, {
          type: '午餐',
          name: '鱼香肉丝',
        }, {
          type: '午餐',
          name: '麻婆豆腐',
        }, {
          type: '午餐',
          name: '辣子鸡丁',
        }, {
          type: '晚餐',
          name: ' 馒头',
        }, {
          type: '晚餐',
          name: '鱼香肉丝',
        }]
      
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