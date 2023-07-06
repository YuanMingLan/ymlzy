<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right" class="el-icon">
      <el-breadcrumb-item :to="{ path: '/productmanage' }">个人中心</el-breadcrumb-item>
      <el-breadcrumb-item>成绩查询</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <!-- 搜索栏 -->
      <el-row>
        <el-row gutter="10">
          <el-col :span="4">
            <el-select v-model="value" placeholder="请选择课程类别">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="6">
            <el-input v-model="input" placeholder="请输入课程名称"></el-input>
          </el-col>
          <!-- <el-col :span="4">
            <el-button type="primary">搜索</el-button>
          </el-col> -->
          <el-col :span="4">
            <el-button type="primary">查询成绩</el-button>
          </el-col>
        </el-row>
      </el-row>
    </el-card>

    <el-table
      :data="tableData"
      stripe="true"
      style="width: 100%"
      class="el-table"
    >
      <el-table-column type="index" label="序号" width="180"></el-table-column>
      <el-table-column prop="date" label="考试学期" width="180"> </el-table-column>
      <el-table-column prop="name" label="课程名" width="180"> </el-table-column>
      <el-table-column prop="score" label="分数"> </el-table-column>
      <!-- <el-table-column label="操作"> -->
        <!-- <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column> -->
    </el-table>

    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
      class="choose"
    >
    </el-pagination>
  </div>
</template>
<script>
export default {
  name: "product",
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "数学",
        },
        {
          value: "选项2",
          label: "物理",
        },
        {
          value: "选项3",
          label: "马克思主义",
        },
        {
          value: "选项4",
          label: "计算机",
        },
        
      ],
      value: "",
      tableData: [
        {
          date: "2023学年上半年",
          name: "高等数学",
          score: "90",
        },
        {
          date: "2023学年上半年",
          name: "数据结构",
          score: "85",
        },
        {
          date: "2023学年上半年",
          name: "算法分析",
          score: "88",
        },
        {
          date: "2023学年上半年",
          name: "马克思主义原理",
          score: "82",
        },
      ],
    };
  },
};
</script>
<style scoped>
.el-icon {
  margin-bottom: 15px;
  font-size: 12px;
}
.el-table {
  margin-top: 12px;
  margin-bottom: 15px;
}
</style>