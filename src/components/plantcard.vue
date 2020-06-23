<template>
  <div >
      <Col span="8">
      <div class="card">
        <Card>
          <Row>
            <Col span="12">
              <img class="icon" src="../assets/plant.jpg" />
            </Col>
            <Col span="12">
              <div class="wendu">
                <Progress vertical :percent="45" status="active" />
              </div>
            </Col>
          </Row>
          <Row>
            <Col span="14">
              <div class="text">No:1</div>
            </Col>
            <Col span="10">
              <div class="text">湿度</div>
            </Col>
          </Row>
        </Card>
        </div>
      </Col>
  
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.icon {
  height: 60px;
  width: 50px;
}
.wendu {
  height: 60px;
  padding-left: 30px;
}
.text {
  padding-top: 10px;
  text-align: center;
}
.card{
    padding: 5px;
}
</style>