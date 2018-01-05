
<template>
<div class="container">
  <transition :name="dialogTransition" @after-enter="onShow()" @after-leave="onHide()">
    <div class="wd-dialog" :class="[dialogClass]" ref="popup" v-if="visible" :style="{'z-index': zIndex}">
      <div class="wd-dialog-header">
        <div v-if="showClose" class="wd-dialog-header-close" @click="close"></div>
      </div>
      <div class="wd-dialog-content">
        <slot>defluat slot</slot>
      </div>
      <div class="wd-dialog-footer">
        <slot name="footer">footer slot</slot>
      </div>
      <button><slot name="sure">确认</slot></button>
    </div>
  </transition>
  <button @click='opena'>点击</button>
</div>
</template>
<script>
import Vue from 'vue'
import Popup from '../components/commonui/overlay/index.js'

export default {
  name: 'wd-dialog',
  mixins: [Popup],
  props: {
    transition: {
      type: String,
      default: 'fade'
    },
    value: {
      type: Boolean,
      default: false
    },
    dialogClass: {
      type: String,
      default: ''
    },
    showClose: {
      type: Boolean,
      default: true
    },
    onShow: {
      type: Function,
      default: () => {}
    },
    onHide: {
      type: Function,
      default: () => {}
    }
  },
  data() {
    return {
      visible: false
    }
  },
  computed: {
    dialogTransition:function() {
      if(this.transition) {
        return `dialog-${this.transition}`
      }else {
        return ''
      }
    }
  },
  watch: {
    value(val) {
      this.visible = val
    },
    visible(val) {
      this.$emit('input', val)
    }
  },
  methods: {
    close() {
      this.visible = false
    },
    opena(){
      console.log(this.visible);
      this.visible = true
    }
  },
  mounted() {
    if (this.value) {
      this.visible = true
      this.open = true
    }
  }
}
</script>
<style lang="less">
.container{}
  .wd-dialog {
    width: 560px;
    position: fixed;
    background-color: #FFFFFF;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    backface-visibility: hidden;
    overflow: hidden;
    border-radius: 16px;
    padding-bottom: 56px;
    .wd-dialog-header {
      position: relative;
      height: 94px;
      line-height: 94px;
      padding: 0 56px;
      .wd-dialog-header-close {
        position: absolute;
        top: 36px;
        right: 36px;
        width: 32px;
        height: 32px;
        &:before, &:after {
          content: '';
          position: absolute;
          height: 1px; /* no */
          width: 100%;
          top: 50%;
          left: 0;
          background: #000000;
        }
        &:before {
          transform: rotate(45deg);
        }
        &:after {
          transform: rotate(-45deg);
        }
      }
    }
    .wd-dialog-content, .wd-dialog-footer {
      box-sizing: border-box;
      padding: 0 56px;
    }
    .wd-dialog-footer {
      text-align: right;
    }
  }
</style>