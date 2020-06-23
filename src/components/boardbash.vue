<template>
  <div class="layout">
    <el-row>
      <el-button type="primary" round @click="execute(1,1)">打浇灌器</el-button>
      <el-button type="primary" round @click="execute(1,0)">关浇灌器</el-button>
      <el-button type="success" round @click="execute(2,1)">开浇灌器2</el-button>
      <el-button type="success" round @click="execute(2,0)">关浇灌器2</el-button>
      <el-button type="warning" round @click="execute(3,1)">开继电器3</el-button>
      <el-button type="warning" round @click="execute(3,0)">关继电器3</el-button>
      <el-button type="danger" round @click="execute(4,1)">开继电器4</el-button>
      <el-button type="danger" round @click="execute(4,0)">关继电器4</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    execute: function(dev, flag) {
      var par = "";
      if (flag == 0) {
        par = "open";
      } else {
        par = "close";
      }
      var value = "api/";
      if (dev == 1) {
        value = value + "pumb";
      } else if (dev == 2) {
        value = value + "pumb2";
      } else if (dev == 3) {
        value = value + "spray";
      } else if (dev == 4) {
        value = value + "moudle";
      }
      this.axios.get(value, {
        params: {
          msg: par
        }
      });
    }
  }
};
</script>

<style  scoped>
.layout {
  line-height: 100px;
}
</style>