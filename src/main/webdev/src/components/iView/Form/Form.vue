<template>
  <div class="iview-custom-form">
        <Form ref="formDynamic" 
            :model="model" 
            :label-position="labelPosition" 
            :show-message="showMessage" 
            :rules="rules" 
            :label-width="labelWidth"  >
            <slot></slot>
        </Form>
  </div>
</template>

<script>
    export default {
      name: "iview-custom-form",
      props:{
        labelWidth:{
          type: Number,
          default: 100
        },
        width_:{
          type: Number,
          default: 400
        },
        model:{
          type: Object,
          default: null
        },
        rules:{
          type: Object,
          default: null
        },
        labelPosition:{
            type: String,
            default: 'right'
        },
        showMessage:{
            type:Boolean,
            default: true
        }
      },
      mounted(){
          this.$emit('initForm',this.$refs.formDynamic);
      }
    }
</script>
