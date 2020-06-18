<template>
  <div>
    <Row>
      <Col span="24">
        <div class="title">概览</div>
        <Divider />
        <div class="default">
          <Row>
            <Col span="8">
              <div class="rantangle">
                <div class="inbox">植物</div>
              </div>
            </Col>
            <Col span="8">
              <div class="rantangle">
                <div class="inbox">植物</div>
              </div>
            </Col>
            <Col span="8">
              <div class="rantangle">
                <div class="inbox">植物</div>
              </div>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
    <Row>
      <Col span="8">
        <div class="box_center">
          <Card style="width:320px">
            <div style="text-align:center">
              <div class="box">
                <div class="cover">
                  <img class="icon" src="../assets/plant.jpg" />
                </div>
                <div style="height: 100px;">
                  <Progress vertical :percent="25" />
                  <Progress vertical :percent="45" status="active" />
                  <Progress vertical :percent="65" status="wrong" />
                  <Progress vertical :percent="100" />
                  <Progress vertical :percent="25" hide-info />
                </div>
              </div>
              <h3>A high quality UI Toolkit based on Vue.js</h3>
            </div>
          </Card>
        </div>
      </Col>
      <Col span="8">
        <div class="box_center">
          <Card style="width:320px">
            <div style="text-align:center">
              <div class="box">
                <div class="cover">
                  <img class="icon" src="../assets/plant.jpg" />
                </div>
                <div style="height: 100px;">
                  <Progress vertical :percent="25" />
                  <Progress vertical :percent="45" status="active" />
                  <Progress vertical :percent="65" status="wrong" />
                  <Progress vertical :percent="100" />
                  <Progress vertical :percent="25" hide-info />
                </div>
              </div>
              <h3>A high quality UI Toolkit based on Vue.js</h3>
            </div>
          </Card>
        </div>
      </Col>
      <Col span="8">
        <div class="box_center">
          <Card style="width:320px">
            <div style="text-align:center">
              <div class="box">
                <div class="cover">
                  <img class="icon" src="../assets/plant.jpg" />
                </div>
                <div style="height: 100px;">
                  <Progress vertical :percent="25" />
                  <Progress vertical :percent="45" status="active" />
                  <Progress vertical :percent="65" status="wrong" />
                  <Progress vertical :percent="100" />
                  <Progress vertical :percent="25" hide-info />
                </div>
              </div>
              <h3>A high quality UI Toolkit based on Vue.js</h3>
            </div>
          </Card>
        </div>
      </Col>
      <Col span="8">
        <div class="box_center">
          <Card style="width:320px">
            <div style="text-align:center">
              <div class="box">
                <div class="cover">
                  <img class="icon" src="../assets/plant.jpg" />
                </div>
                <div style="height: 100px;">
                  <Progress vertical :percent="25" />
                  <Progress vertical :percent="45" status="active" />
                  <Progress vertical :percent="65" status="wrong" />
                  <Progress vertical :percent="100" />
                  <Progress vertical :percent="25" hide-info />
                </div>
              </div>
              <h3>A high quality UI Toolkit based on Vue.js</h3>
            </div>
          </Card>
        </div>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.title {
  text-align: left;
  padding-left: 20px;
}
.inbox {
  background: #ebebeb;
  padding: 0 20px;
  height: 100%;
  width: 100%;
}
.icon {
  height: 60px;
  width: 50px;
}
.cover {
  padding: 20px;
}
.box {
  display: flex;
  flex-direction: row;
}
.box_center {
  padding: 10px;
}
.rantangle {
  height: 100px;
  width: 250;
}
</style>