
<script>
export default {
  name: 'HelloWorld2',
  props: {
      msg: String,
  }
    }
    //const checked = ref('')
</script>
<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <p>Message is: {{ message }}</p>
        <input v-model="message" placeholder="edit me" />
        <input type="checkbox" id="checkbox" v-model="checked" />
        <label for="checkbox">{{ checked }}</label>
    </div>
</template>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
