<template>
  <div class="aside-container">
    <div class="logo">myDota</div>
    <el-menu router>
      <!-- <router-link to="overview" tag="li"> -->
      <el-menu-item index="1" route="/">首页</el-menu-item>
      <el-submenu index="2">
        <template slot="title">玩家信息</template>
        <el-menu-item index="2-1" :route="{name: 'overview'}">概览</el-menu-item>
        <el-menu-item index="2-2" :route="{name: 'heroes'}">常用英雄</el-menu-item>
        <el-menu-item index="2-3" :route="{name: 'matches'}">最近比赛</el-menu-item>
        <el-menu-item index="2-4" :route="{name: 'trend'}">趋势图</el-menu-item>
      </el-submenu>
      <!-- </router-link> -->
      <el-submenu index="3" >
        <template slot="title">队友</template>
        <el-menu-item index="3-1" :route="{name: 'heroes'}">2-1</el-menu-item>
      </el-submenu>
      <el-menu-item index="4">2</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.aside-container {
  height: 100%;
}
</style>
