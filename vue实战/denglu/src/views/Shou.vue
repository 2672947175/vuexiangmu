<template>
  <div>
    <div class="contaite">
      <div class="conbox">
        <div class="left"></div>
        <div class="right" @click="btns">+ 添加</div>
      </div>
      <div class="neibox">
         <!-- 添加弹框 -->
        <div class="ale"  v-if="isShow">
          <div class="tankuan">
            <!-- 姓名 -->
            <input class="inp" ref="xing" type="text" placeholder="请输入姓名">
             <!-- 年龄 -->
            <input class="inp" ref="jifeng" type="number" placeholder="年龄">
            <button  @click="btno">取消</button>
            <button @mousedown="bao">保存</button>
            <!-- 提示框 -->
            <div class="tex" ref="tex"></div>
          </div>
        </div>
        <!-- 介绍 -->
        <div class="nei">
          <ul>
            <li>姓名</li>
            <li>操作</li>
          </ul>
        </div>
        <!-- 添加列表 -->
        <div v-if="arr!=[]?true:false">
          <div class="textbo" v-for="(item,index) in ary" :key="index">
            <ul>
              <li>{{item.xing}}</li>
              <li>{{item.ji}}</li>
              <li>
                <span @click="san(index)">删除</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Heder from "../components/Heder";
import {mapState,mapGetters,mapActions} from 'vuex'
export default {
  name: "shou",
  components: {
    Heder
  },
  data() {
    return {
      isShow: false,
      srca: null,
      arr: [],
      sho:true,
    };
  },
  computed: {
    ...mapState(['ary']),
  },
  methods: {
    btns() {
      this.isShow = true;
    },
    btno() {
      this.isShow = false;
    },
    // 添加保存事件
    bao() {
      const xing = this.$refs.xing.value;
      const jifeng = this.$refs.jifeng.value;
      if (xing == "") {
        this.fn("请输入姓名");
        return;
      }
      let arys = { xing: xing}
      //利用本地缓存来存储
      this.ary.unshift(arys);
      this.isShow=false
    },
    san(index){
     this.ary.splice(index,1)      
    }
  },
  mounted() {
    this.fn = text => {
      const tex = this.$refs.tex;
      tex.style.display = "block";
      tex.innerHTML = text;
      setTimeout(() => {
        tex.style.display = "none";
      }, 1000);
    };
  }
};
</script>


<style lang="less">
.contaite {
  width: 1200px;
  background: aqua;
  margin: 0 auto;
}
.conbox {
  width: 1200px;
  height: 60px;
  position: fixed;
  bottom: 0;
  margin: 30px 0px 10px 0;
  background: pink;
  color: #fff;
  font-size: 18px;
  padding: 0 50px;
  box-sizing: border-box;
  .right {
    float: right;
    cursor: pointer;
    background: #fff;
    color: #000;
    padding: 5px 20px;
    margin-top: 13px;
  }
}
.neibox {
  width: 100%;
  background: #ccc;
  padding: 15px 80px;
  box-sizing: border-box;
  position: relative;
  .nei {
    width: 100%;
    height: 60px;
    background-color: violet;
    border-bottom: 1px solid #fff;
    ul {
      width: 100%;
      li {
        width: 50%;
        line-height: 60px;
        float: left;
        font-size: 20px;
        font-weight: 600;
        color: #fff;
      }
    }
  }
  .ale {
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    .tankuan {
      width: 40%;
      margin: 0 auto;
      border: 1px solid #999;
      background: #fff;
      padding: 30px 0;
      box-sizing: border-box;
      .toux {
        width: 100px;
        height: 100px;
        margin: 20px auto;
        display: block;
        line-height: 100px;
        border: 1px solid #999;
        position: relative;
        margin-bottom: 50px;
        input {
          position: absolute;
          opacity: 0;
          display: block;
          width: 100%;
          height: 100%;
          top: 0;
        }
      }
      .inp {
        line-height: 50px;
        display: block;
        width: 70%;
        line-height: 40px;
        margin: 20px auto;
        border: 1px solid #999;
        padding: 0 20px;
        box-sizing: border-box;
        outline: none;
      }
      button {
        width: 30%;
        line-height: 40px;
        margin: 30px 10px;
      }
      .tex {
        position: absolute;
        top: 0;
        width: 30%;
        height: 50px;
        left: 50%;
        margin-left: -15%;
        line-height: 50px;
        background: red;
        color: #fff;
        display: none;
      }
    }
  }
  .textbo {
    width: 100%;
    ul {
      width: 100%;
      padding: 20px 0;
      display: flex;
      background: aquamarine;
      li {
        text-align: center;
        flex: 1;
        color: #fff;
        line-height: 100px;
      }
    }
  }
}
</style>