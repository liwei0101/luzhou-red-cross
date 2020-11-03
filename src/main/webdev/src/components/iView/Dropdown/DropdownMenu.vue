<template>
    <DropdownMenu>
        <template  v-for='item in DropdownItemList'>
            <DropdownItem :disabled='item.disabled' :selected='item.selected'
                          :divided='item.divided' :name='item.name' v-if="!item.children">{{item.name}}
            </DropdownItem>

            <Dropdown placement="right-start" v-else>
                <DropdownItem :disabled='item.disabled' :selected='item.selected'
                              :divided='item.divided' :name='item.name'>
                    {{item.name}}
                    <Icon type="ios-arrow-forward"></Icon>
                </DropdownItem>
                <iview-custom-dropdown-menu :DropdownItemList="item.children" slot="list"></iview-custom-dropdown-menu>
            </Dropdown>
        </template>


    </DropdownMenu>
</template>

<script>
    export default {
        name: 'iview-custom-dropdown-menu',
        props: {
            DropdownItemList:{
                type: Array,
                default(){
                    return [{
                        name:'驴打滚',
                        disabled:false,
                        divided:false,
                        selected:false
                    },{
                        name:'炸酱面',
                        disabled:false,
                        divided:false,
                        selected:false
                    },{
                        name:'豆汁儿',
                        disabled:false,
                        divided:false,
                        selected:false
                    },{
                        name:'冰糖葫芦',
                        disabled:true,
                        divided:false,
                        selected:false
                    },{
                        name:'北京烤鸭',
                        disabled:false,
                        divided:false,
                        selected:false
                    }]
                }
            }
        },
        data() {
            return {};
        },
        methods: {
        }
    };
</script>

<style lang="less"></style>