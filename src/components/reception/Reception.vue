<template>
<div>
<el-card class="box-card">
  <div slot="header" class="clearfix">
    <span style="line-height: 36px;">
    <div class="source">
	<el-breadcrumb separator="/">
  <el-breadcrumb-item :to="{ path: '/' }"><i class="el-icon-arrow-left"></i>&nbsp;&nbsp;首页</el-breadcrumb-item>
  <el-breadcrumb-item>接待登记</el-breadcrumb-item>
</el-breadcrumb>
</div>
</span>
  </div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <el-form-item label="开始日期" required>
      <el-form-item prop="date1">
        <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
      </el-form-item>
  </el-form-item>
    <el-form-item label="结束日期" required>
      <el-form-item prop="date2">
        <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date2" style="width: 100%;"></el-date-picker>
  </el-form-item>
  </el-form-item>
  <el-form-item label="餐别" prop="type">
    <el-checkbox-group v-model="ruleForm.type">
      <el-checkbox label="早晨" name="type"></el-checkbox>
      <el-checkbox label="午餐" name="type"></el-checkbox>
      <el-checkbox label="晚餐" name="type"></el-checkbox>
    </el-checkbox-group>
  </el-form-item>


  <el-form-item label="来访单位" prop="name" required>
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
  <el-form-item label="来访人数" prop="people" required>
    <el-input v-model="ruleForm.people"></el-input>
  </el-form-item>
    <el-form-item label="接待标准" prop="price" required>
    <el-input v-model="ruleForm.price"></el-input>
  </el-form-item> 
   <el-form-item label="接待人" prop="handler" required>
    <el-input v-model="ruleForm.handler"></el-input>
  </el-form-item>
  <el-form-item label="接待事由" prop="desc">
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
		name: 'reception',
		data(){
			return {
         ruleForm: {
          name: '',
          date1: '',
          date2: '',
          type: [],
          people:'',
          price:'',
          handler:'',          
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
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