<template>
    <div class="container">


      <div class="grade">
                   <tooltip :content="graded" :always="always" placement="top-start"
                            :offset="offset[1]">
                     <img src="./grad.png" alt="" class="gradeimg">
                   </tooltip>
      </div>
      <div class="grade">
                   <tooltip :content="twos" :always="always" placement="top-start"
                            :offset="offset[2]">
                     <img src="./grad.png" alt="" class="gradeimg">
                   </tooltip>
      </div>
     
    </div>
</template>
<script>
export default {
  data() {
    return {
      show: true,
      offset: [600, 600, 600],
      always: true,
      list: [{ number: 4.0 }, { number: 2.0 }, { number: 4.5 }],
      twos: "",
      graded: ""
    };
  },
  computed: {},
  methods: {},
  created() {
    var listArr = this.list;
    for (var k in listArr) {
      var listSrt = listArr[k].number;
      // console.log(listSrt)
      console.log(listArr[1]);
      var one = listArr[1].number;

      var two = listArr[2].number;
      console.log(two);
      this.offset[1] = 145 * one;
      this.graded=one

      // this.offset[1] = 145 * listSrt;
      // this.graded = listSrt;
      this.offset[2] = 145 * two;
      this.twos = two;
    }
  }
};
</script>
<style>
.list {
  display: flex;
  justify-content: flex-start;
}
p {
  padding: 5px;
}
.grade {
  margin: 150px 100px;
}
.gradeimg {
  width: 720px;
}
.ivu-tooltip-inner {
  width: 40px;
  background: coral;
  margin-left: -25px;
}
.ivu-tooltip-popper[x-placement^="bottom"] .ivu-tooltip-arrow {
  border-bottom-color: coral;
  margin-left: -25px;
}
.ivu-tooltip-popper[x-placement^="top"] .ivu-tooltip-arrow {
  border-top-color: coral;
  margin-left: -25px;
}
</style>
