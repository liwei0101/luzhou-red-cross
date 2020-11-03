<template>
	<div>
		<Menu
			@on-select="onSelect"
			@on-open-change="onOpenChange"
			:mode="mode"
			:theme="theme"
			:active-name="activeName"
			:open-names="openNames"
			:accordion="accordion"
			:width="width"
		>
			<div v-for="(subItem,index) in menuList" :key="index">
				<template v-if="!(subItem.menuItemList && subItem.menuItemList.length)">
					<MenuItem :name="subItem.name">
						<Icon v-if="subItem.icon" :type="subItem.icon" />
						{{ subItem.menuTitle }}
					</MenuItem>
				</template>
				<template v-else>
					<Submenu :name="subItem.name" >
						<template slot="title">
							<Icon v-if="subItem.icon" :type="subItem.icon" />
							{{ subItem.menuTitle }}
						</template>
						<template v-for="(item,index_) in subItem.menuItemList" >
							<MenuItem 
								v-if="!item.menuGroup"
								:key="index_" 
								:name="item.name"
								>
								<Icon v-if="item.icon" :type="item.icon" />
								{{ item.title }}
							</MenuItem>
							<MenuGroup 
								v-if="item.menuGroup"
								:title="item.title">
								<MenuItem 
									v-for="(data,indexList) in item.menuItemList" 
									:key="indexList" 
									:name="data.name">
									<Icon v-if="data.icon" :type="data.icon" />
									{{ data.title }}
								</MenuItem>
							</MenuGroup>
						</template>
					
					</Submenu>
				</template>
			</div>
			
		</Menu>
	</div>
</template>

<script>
export default {
	name: 'iview-custom-menu',
	props: {
		menuList: {
			type: Array,
			default() {
				return [
					{
						icon: 'ios-paper',
						name: '1',
						menuTitle: '内容管理1',
					},
					{
						icon: 'ios-people',
						name: '2',
						menuTitle: '内容管理2',
						menuItemList: [
							{
								icon: 'ios-people',
								name: '2-1',
								title: '新增用户2'
							},
							{
								icon: 'ios-people',
								name: '2-2',
								title: '活跃用户2'
							}
						]
					},
					{
						icon: 'ios-people',
						name: '3',
						menuTitle: '内容管理3',
						menuItemList: [
							{
								icon: 'ios-people',
								name: '3-4',
								title: '新增和启动'
							},
							{
								menuGroup:true,
								title: '留存1',
								menuItemList: [
									{
										icon: 'ios-people',
										name: '3-5',
										title: '用户留存'
									},
									{
										icon: 'ios-people',
										name: '3-6',
										title: '流失用户'
									}
								]
							},

							{
								menuGroup:true,
								title: '使用2',
								menuItemList: [
									{
										name: '3-1',
										title: '新增和启动'
									},
									{
										name: '3-2',
										title: '活跃分析'
									},
									{
										name: '3-3',
										title: '时段分析'
									}
								]
							},
						]
					}
				];
			}
		},
		mode: {
			type: String,
			default: ''
		},
		theme: {
			type: String,
			default: ''
		},
		activeName: {
			type: String | Number,
			default: '1-2'
		},
		openNames: {
			type: Array,
			default() {
				return ['1'];
			}
		},
		accordion: {
			type: Boolean,
			default: false
		},
		width: {
			type: String,
			default: ''
		}
	},
	data() {
		return {};
	},
	methods: {
		onSelect(name) {
			this.$emit('on-select', name);
		},
		onOpenChange(nameList) {
			this.$emit('on-open-change', name);
		}
	}
};
</script>

<style lang="less"></style>
