<template>
    <template v-for="menu in props.menus">
        <template v-if="menu.children && menu.children.length > 0">
            <el-sub-menu :index="menu.path" :key="menu.path">
                <template #title>
                    <Icon color="blue" :name="menu.meta.icon ? menu.meta.icon : ''" />
                    <span>{{ menu.meta.title ? menu.meta.title : '' }}</span>
                </template>
                <menu-tree :menus="menu.children"></menu-tree>
            </el-sub-menu>
        </template>
        <template v-else>
            <el-menu-item :index="menu.path" :key="menu.path" @click="clickMenu(menu)">
                <Icon :color="blue" :name="menu.meta.icon ? menu.meta.icon : ''" />
                <span>{{ menu.meta.title ? menu.meta.title : '' }}</span>
            </el-menu-item>
        </template>
    </template>
</template>

<script setup>
// import { RouteRecordRaw } from 'vue-router'
// import { clickMenu } from '/@/utils/router'
import { onMounted } from 'vue';

// eslint-disable-next-line no-unused-vars, no-undef
const props = defineProps({
    menus: []
})

onMounted(() => {
    console.log('666',666)
  console.log(props.menus)  
})
</script>

<style scoped>
.el-sub-menu .icon,
.el-menu-item .icon {
    vertical-align: middle;
    margin-right: 5px;
    width: 24px;
    text-align: center;
}
</style>