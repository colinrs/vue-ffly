
<template>
    <div>
      <el-container>
  <el-header>Header</el-header>
  <el-container>
    <el-aside width="200px"><common-aside/></el-aside>
    <el-main>     <router-view/></el-main>
  </el-container>
</el-container>

    </div>
  </template>
<script >
import CommonAside from '@/components/CommonAside.vue'
const Main = {
  name: 'Main',
  data () {
    return {
      'message1': 'Hello Vue in Main Page'
    }
  },
  components: {
    CommonAside
  }
}
export default Main
</script>
