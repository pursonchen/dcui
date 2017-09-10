<template>
<div>

<el-card class="box-card">
  <div slot="header" class="clearfix">
    <span style="line-height: 36px;">
    <div class="source">
	<el-breadcrumb separator="/">
  <el-breadcrumb-item :to="{ path: '/' }"><i class="el-icon-arrow-left"></i>&nbsp;&nbsp;首页</el-breadcrumb-item>
  <el-breadcrumb-item>个人订餐</el-breadcrumb-item>
</el-breadcrumb>
</div>
</span>
  </div>
  <div class="text item">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="ruleForm">
  <el-form-item label="订餐日期" required>
    <el-col :span="11">
      <el-form-item prop="date1">
        <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
      </el-form-item>
    </el-col>  
  </el-form-item>

  <el-form-item label="订餐餐别" prop="type">
    <el-checkbox-group v-model="ruleForm.type">
      <el-checkbox label="早晨" name="type"></el-checkbox>
      <el-checkbox label="午餐" name="type"></el-checkbox>
      <el-checkbox label="晚餐" name="type"></el-checkbox>
    </el-checkbox-group>
  </el-form-item>

  <el-form-item id="btnGroup">
    <el-button type="primary" @click="submitForm('ruleForm')">订餐</el-button>
    <el-button @click="resetForm('ruleForm')">撤餐</el-button>
  </el-form-item>
</el-form>	

  </div>
</el-card>
</div>
</template>

<script>
export default {
  name: 'DCSelf',
    data() {
      return {
        ruleForm: {
          date1: '',
          type: [],
        },
        rules: {
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个餐别', trigger: 'change' }
          ],
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
}
</script>

<style scope>

	.source {
		    display: block;
		    font-weight: 400;
            -webkit-font-smoothing: antialiased;

	}
	#btnGroup {
		margin-top: 15%;
	}
	.ruleForm {
		margin: 0 auto;
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