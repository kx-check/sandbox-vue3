<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <Menu :menus="menus"></Menu>
            </el-header>
            <el-container>
                <el-aside width="200px">Aside</el-aside>
                <el-container>
                    <el-main>Main</el-main>
                    <el-footer>Footer</el-footer>
                </el-container>
            </el-container>
        </el-container>
    </div>
</template>

<script setip>
import { reactive } from 'vue';
// eslint-disable-next-line no-unused-vars
import Menu from './menu.vue';

// eslint-disable-next-line no-unused-vars
const menus = reactive([]);

</script>