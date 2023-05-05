
<template>
  <div>
   <h1> {{message1}} </h1>
  </div>
</template>

<script >

const User = {
  name: 'User',
  data () {
    return {
      'message1': 'Hello Vue in User Page'
    }
  }
}
export default User
</script>
