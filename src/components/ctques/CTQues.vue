<template>
<div>
  <el-card class="box-card">
  <div slot="header" class="clearfix">
    <span style="line-height: 36px;">
      <div class="source">
        <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }"><i class="el-icon-arrow-left"></i>&nbsp;&nbsp;首页</el-breadcrumb-item>
        <el-breadcrumb-item>满意度调查</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </span>
  </div>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="早餐评分"  required>
<el-rate
  v-model="ruleForm.value1"
   show-text
  :colors="['#99A9BF', '#F7BA2A', '#FF9900']"
  text-template="{value}">
</el-rate>
  </el-form-item>

  <el-form-item label="午餐评分"  required>
  <el-rate
  v-model="ruleForm.value2"
   show-text
  :colors="['#99A9BF', '#F7BA2A', '#FF9900']"
  text-template="{value}">
</el-rate>
  </el-form-item>

  <el-form-item label="晚餐评分" required>
  <el-rate
  v-model="ruleForm.value3"
   show-text
  :colors="['#99A9BF', '#F7BA2A', '#FF9900']"
  text-template="{value}">
</el-rate>
  </el-form-item>

  <el-form-item label="意见或建议" prop="desc">
  <el-input type="textarea" v-model="ruleForm.desc"></el-input>
  </el-form-item>
  <el-form-item>
  <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
  <el-button @click="resetForm('ruleForm')">取消</el-button>
  </el-form-item>

  </el-form>
  </el-card>
</div>
</template>

<script>
	export default {
		name: 'ctques',
		data(){
			return {
         ruleForm: {
          value1:0,         
          value2:0,         
          value3:0,         
          desc: ''
        },
        rules: {
          
          desc: [
            { required: true, message: '请填意见或建议', trigger: 'blur' }
          ]
        }
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