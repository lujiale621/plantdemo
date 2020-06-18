<template>
  <div class="control">
    <Button>浇水</Button>
    <Button type="primary">除虫</Button>
    <Button type="dashed">施肥</Button>

    <br />
    <br />
    <Button type="info">Info</Button>
    <Button type="success">Success</Button>
    <Button type="warning">Warning</Button>
    <Button type="error">Error</Button>
  </div>
</template>

<script>
export default {
  name: "dashboard"
};
</script>

<style  scoped>
.control{
    padding: 10%;
}
</style>