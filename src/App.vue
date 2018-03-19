<template>
  <div id="app">
    <el-container class="main-container" direction="vertical">
      <el-header>
          <v-header/>
      </el-header>
      <el-container>
        <el-aside>
          <v-aside/>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Header from '@@/Header'
import Aside from '@@/Aside'
export default {
  components: {
    'v-header': Header,
    'v-aside': Aside
  }
}
</script>

<style lang="scss">
#app {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  // font-family: 'Avenir', Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
  .main-container {
    height: 100%;
    margin-top: 20px;
    .el-header {
      width: 100%;
    }
    .el-aside {
      height: 100%;
    }
  }
}
</style>
