<template>
	<div>
        <option :value="1" :label="3">
            <slot></slot>
        </option>
	</div>
</template>

<script>
export default {
	name: 'iview-custom-option',
	props: {
		
	},
	data() {
		return {};
	},
	methods: {
		
	}
};
</script>

<style lang="less"></style>
