<template>
  <el-container class="container">
    <el-header height="50px">Header</el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          router>
          <el-menu-item index="index">
            <i class="el-icon-s-home"></i>
            <span>系统首页</span>
          </el-menu-item>

          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>个人中心</span>
            </template>
            <el-menu-item index="product">成绩查询</el-menu-item>
            <el-menu-item index="category">作业上传</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-main>
          <router-view />
        </el-main>
        <el-footer height="30px">XXXXX 版权所有@ ALL RIGHT Reserved</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "main",
};
</script>

<style scoped>
.container {
  height: 100%;
}
.el-header {
  background-color: #fff;
  font-size: 20px;
  display: flex;
  align-items: center;
}
.el-aside {
  background-color: #304156;
  color: #fff;
}
.el-main {
  background-color: #eaedf1;
}
.el-footer {
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>