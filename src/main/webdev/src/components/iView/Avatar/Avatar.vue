<template>
  <Avatar 
  :shape="shape" 
  :size="size" 
  :src="src" 
  :icon="icon" 
  @on-error='onError'
  :style="{color: color, background:background}">{{content}}</Avatar>
</template>

<script>
export default {
  name: "iview-custom-avatar",
  props: {
    content: {
      type: String,
      default: "U"
    },
    shape: {
      type: String,
      default: "circle"
    },
    size: {
      type: String,
      default: ""
    },
    src: {
      type: String,
      default: ""
    },
   
    icon: {
      type: String,
      default: ""
    },
    color:{
      type: String,
      default: ""
    },
    background:{
      type: String,
      default: ""
    }
    
  },
  methods:{
    onError(event){
      this.$emit('onError', event);
    }
  }
 
};
</script>