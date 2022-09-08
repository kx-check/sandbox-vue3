<template>
    <el-row class="min-h-screen">
        <el-col :lg="9" :md="12" class="admin-login-left">
            <h2 class="admin-login-title">欢迎回来</h2>
            <div class="admin-login-info">
                <span class="admin-line"></span>
                <span>账号密码登录</span>
                <span class="admin-line"></span>
            </div>
            <el-form ref="loginForm" :model="form" class="w-[250px]" :rules="rules">
                <el-form-item prop="username">
                    <el-input v-model.trim="form.username" type="text" maxlength="20" minlength="3"
                        placeholder="请输入用户名">
                        <template #prefix>
                            <el-icon>
                                <user />
                            </el-icon>
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input v-model.trim="form.password" @keydown.enter="handleLoginSubmit" type="password"
                        maxlength="20" minlength="3" placeholder="请输入密码">
                        <template #prefix>
                            <el-icon>
                                <lock />
                            </el-icon>
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item>
                    <el-button round color="#626aef" class="w-[250px]" type="primary" :loading="loading"
                        @click="handleLoginSubmit">登 录
                    </el-button>
                </el-form-item>
                <el-form-item>
                    <el-button round color="#626aef" class="w-[250px]" type="primary" :loading="loading"
                        @click="handleDingTalkLogin">钉钉登录
                    </el-button>
                </el-form-item>
            </el-form>
        </el-col>
        <el-col :lg="15" :md="12" class="admin-login-right">
            <div class="text-center">
                <img src="@/assets/img/hero_img.png" alt="">
                <div class="font-bold text-5xl text-light-50 mb-4 mt-9">欢迎光临</div>
            </div>
        </el-col>
    </el-row>
</template>
  
<script setup>
import { reactive, ref } from 'vue'
// eslint-disable-next-line no-unused-vars
import store from "@/store";
import router from "@/router";

// eslint-disable-next-line no-unused-vars
const form = reactive({
    username: 'admin@admin.cc',
    password: '123456'
})

// 定义属性
// eslint-disable-next-line no-unused-vars
const loading = ref(false);

// 表单验证
const loginForm = ref(null);

// 表单验证规则
// eslint-disable-next-line no-unused-vars
const rules = {
    username: [
        { required: true, message: '请输入用户名', trigger: 'blur' },
        { min: 4, max: 20, message: '你的用户名必须是 4 to 20', trigger: 'blur' }
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 4, max: 20, message: '你的密码必须是 4 to 20', trigger: 'blur' }
    ]
};

// 表单提交
// eslint-disable-next-line no-unused-vars
const handleLoginSubmit = () => {
    // 1: 提交表单校验 校验表单输入
    loginForm.value.validate(async (valid) => {
        // 如果为valid = false 还存在非法数据.
        if (!valid) {
            return;
        }
        try {
            // form.password = encryptByDES(form.password)
            // store.dispatch("user/login", form).then(() => {
            router.push("/Home")
            // });
        } catch (e) {
            console.log(e);
        }
    });
};

// eslint-disable-next-line no-unused-vars
const handleDingTalkLogin = () => {

}

</script>
  
<style scoped>
.admin-login-left {
    background-color: rgba(253, 253, 253, 1);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: url('/src/assets/img/banner.png');
    background-size: cover;
}

.admin-login-title {
    font-weight: 700;
    font-size: 1.875rem;
    line-height: 2.25rem;
    color: rgba(31, 41, 55, 1);
}

.admin-login-info {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1.25rem;
    margin-bottom: 1.25rem;
    color: rgba(209, 213, 219, 1);

}

.admin-line {
    @apply h- [ 1px] w-16 bg-gray-200;
}

.admin-login-right {
    @apply flex items-center justify-center bg-indigo-500;
}
</style>