<template>
    <div class="container">


      <div class="grade">
                   <tooltip :content="graded" :always="always" placement="top-start"
                            :offset="offset[1]">
                     <img src="./grad.png" alt="">
                   </tooltip>
      </div>
     <!-- <rate disabled v-model="valueDisabled" :count='count' :offset='offset'></rate> -->

    </div>
</template>
<script>
export default {
  data() {
    return {
      show: true,
      // valueDisabled: 3,
      //总数
      count: 5,
      offset: ["90", "90", "90"], 
      always: true,
      list: [{ number: 3.3 }],
      graded: ""
    };
  },
  computed: {},
  methods: {},
  created() {
    console.log(this.list);
    var listArr = this.list;
    for (var k in listArr) {
      var listSrt = listArr[k].number;
      console.log(listSrt);
      
      // this.offset[1] = this.graded;
      this.offset[1] =120 * listSrt;;

      this.graded= listSrt
      console.log(this.graded);
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
  margin: 50px;
}
.ivu-tooltip-inner {
  width: 40px;
  background: coral;
}
.ivu-tooltip-popper[x-placement^="bottom"] .ivu-tooltip-arrow {
  border-bottom-color: coral;
}
</style>
