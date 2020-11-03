
<template>
  <TimelineItem :color="color">
    <Icon v-if="iconType !== ''" :type="iconType" slot="dot"></Icon>
    <p class="time">{{title}}</p>
    <p class="content">{{content}}</p>
  </TimelineItem>
</template>
<script>
export default {
  name: "iview-custom-TimelineItem",
  props: {
    content:{
       type: String,
       default: "Apple I 问世"
    },
    title:{
       type: String,
       default: "1976"
    },
    iconType: {
      type: String,
      default: 'ios-trophy'
    },
    color:{
      type: String,
      default: 'blue'
    }
  },
}
</script>
