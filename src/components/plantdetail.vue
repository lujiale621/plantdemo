<template>
  <div>
    <plantcard number="1" :hum='plantdata.hum1+20'></plantcard>
    <plantcard number="2" :hum='plantdata.hum2+20'></plantcard>
    <plantcard number="3" :hum='plantdata.hum3+20'></plantcard>
    <plantcard number="4" :hum='plantdata.hum4+20'></plantcard>
    <plantcard number="5" :hum='plantdata.hum5+20'></plantcard>
    <plantcard number="6" :hum='plantdata.hum6+20'></plantcard>
    <plantcard number="7" :hum='plantdata.hum7+20'></plantcard>
    <plantcard number="8" :hum='plantdata.hum8+20'></plantcard>
    <plantcard number="9" :hum='plantdata.hum9+20'></plantcard>
    <plantcard number="10" :hum='plantdata.hum10+20'></plantcard>
    <plantcard number="11" :hum='plantdata.hum11+20'></plantcard>
    <plantcard number="12" :hum='plantdata.hum12+20'></plantcard>
  </div>
</template>

<script>
import plantcard from "@/components/plantcard";

export default {
  data() {
    return {
      plantdata: ""
    };
  },
  mounted() {
    this.loadplandmid();
  },
  methods: {
    loadplandmid() {
      var self = this;
      var value = "getdata/penzai/one";
      this.axios
        .get(value, {
          params: {}
        })
        .then(function(rest) {
         
          self.plantdata = rest.data;
           console.log( self.plantdata);
        });
    }
  },
  components: {
    plantcard
  }
};
</script>

<style>
</style>