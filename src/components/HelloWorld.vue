<template>
  <div class="hello">
    <!-- 条件 -->
    <p v-if="issuccess">成功</p>
    <p v-else>失败</p>
    <!-- 事件绑定 -->
    <button v-on:click="changestate">改变按钮</button>
    <!-- 等效简写 -->
    <button @click="changestate">改变按钮</button>

    <!-- 循环 -->
    <ul id="example-1">
      <li v-for="item in items" :key="item.message">
        {{ item.message }}
      </li>
    </ul>

    <p>原始值: {{ show }}</p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      issuccess: true,
      show: "myshows",
      items: [{ message: "Foo" }, { message: "Bar" }],
    };
  },
  methods: {
    changestate() {
      this.issuccess = !this.issuccess;
    },
  },
};
</script>

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
