
<template>
    <div>
      <el-container>
        <el-aside width="auto"><common-aside /></el-aside>
      <el-container>
        <el-main><router-view/></el-main>
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
