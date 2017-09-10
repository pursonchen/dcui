<template>
<div>
<el-card class="box-card">
  <div slot="header" class="clearfix">
    <span style="line-height: 36px;">
    <div class="source">
	<el-breadcrumb separator="/">
  <el-breadcrumb-item :to="{ path: '/' }"><i class="el-icon-arrow-left"></i>&nbsp;&nbsp;首页</el-breadcrumb-item>
  <el-breadcrumb-item>批量订餐</el-breadcrumb-item>
</el-breadcrumb>
</div>
</span>
  </div>

<el-row type="flex" class="row-bg" justify="space-between">
  <el-col :span="6"><div class="grid-content bg-purple"><el-button type="primary" @click="showPrevWeek"><i class="el-icon-d-arrow-left
"></i>上周</el-button></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple-light"><el-button type="primary" @click="showThisWeek"><i class="el-icon-date
"></i>本周</el-button></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple"><el-button type="primary" @click="showNextWeek"><i class="el-icon-d-arrow-right
"></i>下周</el-button></div></el-col>
</el-row>
 <el-table
    ref="multipleTable"
    :data="tableData3"
    border
    tooltip-effect="dark"
    style="width: 100%; text-align:center">
    <el-table-column
      fixed
      prop="week"
      label="周"
      width="42">
    </el-table-column>
    <el-table-column
      fixed
      label="日期"
      width="120"
      >
      <template scope="scope">{{scope.row.date}}</template>
    </el-table-column>
    <el-table-column label="餐别">

     <el-table-column
      label="早"
      >
      <template scope="scope"> <el-checkbox v-model="scope.row.bchecked"></el-checkbox></template>
    </el-table-column>
     <el-table-column
      label="午"
      >
      <template scope="scope"> <el-checkbox v-model="scope.row.lchecked"></el-checkbox></template>
    </el-table-column>
     <el-table-column
      label="晚"
      >
      <template scope="scope"> <el-checkbox v-model="scope.row.schecked"></el-checkbox></template>
    </el-table-column>
    </el-table-column>
  </el-table>
<el-row type="flex" class="row-bg" justify="space-between">
  <el-col :span="1"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="22"><div class="grid-content bg-purple-light">  <div>
    <el-button type="success">订餐</el-button>
    <el-button type="danger">撤餐</el-button>
  </div></div></el-col>
  <el-col :span="1"><div class="grid-content bg-purple"></div></el-col>
</el-row>



</el-card>
</div>
</template>

<script>
	export default {
		name: 'dc4mul',
    week1day:'',
		data() {
      return {

        tableData3: [{
          week:'日',
          date: '2016-05-03',
          bchecked: false,
          lchecked: false,
          schecked: false,
        }, {
          week:'一',
          date: '2016-05-02',
          bchecked: false,
          lchecked: false,
          schecked: false,
        }, {
          week:'二',
          date: '2016-05-04',
          bchecked: false,
          lchecked: false,
          schecked: false,
        }, {
          week:'三',
          date: '2016-05-01',
          bchecked: false,
          lchecked: false,
          schecked: false,
        }, {
          week:'四',
          date: '2016-05-08',
          bchecked: false,
          lchecked: false,
          schecked: false,
        }, {
          week:'五',
          date: '2016-05-06',
          bchecked: false,
          lchecked: false,
          schecked: false,
        }, {
          week:'六',
          date: '2016-05-07',
          bchecked: false,
          lchecked: false,
          schecked: false,
        }],

      }
    },
    created: function(){
     this.showThisWeek();
    },
    methods: {
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      showThisWeek()
      {
      var Nowdate=new Date();
      this.week1day = new Date(Nowdate-(Nowdate.getDay())*86400000);
      this.updateWeek(this.week1day);   
      },
      showNextWeek()
      {
      this.week1day =  new Date(this.week1day.valueOf()+7*86400000)
      this.updateWeek(this.week1day);  
      },
      showPrevWeek()
      {
      this.week1day =  new Date(this.week1day.valueOf()-7*86400000)
      this.updateWeek(this.week1day);
      },
      updateWeek(week1day) 
      {
      this.tableData3[0].date= this.formatDate(week1day); 
      this.tableData3[1].date= this.formatDate(new Date(week1day.valueOf()+1*86400000));  
      this.tableData3[2].date= this.formatDate(new Date(week1day.valueOf()+2*86400000));  
      this.tableData3[3].date= this.formatDate(new Date(week1day.valueOf()+3*86400000));  
      this.tableData3[4].date= this.formatDate(new Date(week1day.valueOf()+4*86400000));  
      this.tableData3[5].date= this.formatDate(new Date(week1day.valueOf()+5*86400000));  
      this.tableData3[6].date= this.formatDate(new Date(week1day.valueOf()+6*86400000));
      },
      formatDate(date) {  
         var y = date.getFullYear();  
         var m = date.getMonth() + 1;  
         m = m < 10 ? '0' + m : m;  
         var d = date.getDate();  
         d = d < 10 ? ('0' + d) : d;  
         return y + '-' + m + '-' + d;  
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
  .el-row {
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
    text-align: center;
  }
  .row-bg {
    padding: 5px 0;
    background-color: #f9fafc;
  }

</style>