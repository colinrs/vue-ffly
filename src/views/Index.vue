
<template>
  <div>
   <h1> {{message}} </h1>
   <el-row>
  <el-button>默认按钮</el-button>
  <el-button type="primary">主要按钮</el-button>
  <el-button type="success">成功按钮</el-button>
  <el-button type="info">信息按钮</el-button>
  <el-button type="warning">警告按钮</el-button>
  <el-button type="danger">危险按钮</el-button>
</el-row>
  </div>

</template>

<script >
const Index = {
  name: 'Index',
  data () {
    return {
      'message': 'Hello Vue in Index Page'
    }
  }
}
export default Index
</script>
