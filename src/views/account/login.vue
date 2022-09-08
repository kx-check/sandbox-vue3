<!-- eslint-disable no-unused-vars -->
<template>
    <div>
        <div @contextmenu.stop="" id="bubble" class="bubble">
            <canvas id="bubble-canvas" class="bubble-canvas"></canvas>
        </div>
        <div class="login">
            <div class="login-box">
                <div class="head">
                    <img src="../../assets/login-header.png" alt="" />
                </div>
                <div class="form">
                    <img class="profile-avatar" src="../../assets/avatar.png" alt="" />
                    <div class="content">
                        <el-form @keyup.enter="onSubmit(formRef)" ref="formRef" :rules="rules" size="large"
                            :model="form">
                            <el-form-item prop="username">
                                <el-input ref="usernameRef" type="text" clearable v-model="form.username"
                                    :placeholder="请输入账号">
                                    <template #prefix>
                                        <Icon name="fa fa-user" class="form-item-icon" size="16"
                                            color="var(--el-input-icon-color)" />
                                    </template>
                                </el-input>
                            </el-form-item>
                            <el-form-item prop="password">
                                <el-input ref="passwordRef" v-model="form.password" type="password" :placeholder="请输入密码"
                                    show-password>
                                    <template #prefix>
                                        <Icon name="fa fa-unlock-alt" class="form-item-icon" size="16"
                                            color="var(--el-input-icon-color)" />
                                    </template>
                                </el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-button :loading="form.loading" class="submit-button" round type="primary"
                                    size="large" @click="onSubmit(formRef)">
                                    登录
                                </el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue';
import { ElForm, ElInput } from 'element-plus'
import { ElNotification } from 'element-plus'
import { validatorAccount, validatorPassword } from '../../utils/validate.js'

const form = reactive({
    username: '',
    password: '',
    captcha: '',
    keep: false,
    loading: false,
    captcha_id: '',
})

// 表单验证规则
const rules = reactive({
    username: [
        {
            required: true,
            message: '请输入账号',
            trigger: 'blur',
        },
        {
            validator: validatorAccount,
            trigger: 'blur',
        },
    ],
    password: [
        {
            required: true,
            message: '请输入密码',
            trigger: 'blur',
        },
        {
            validator: validatorPassword,
            trigger: 'blur',
        },
    ],
})

// const usernameRef = ref(null)
// const passwordRef = ref(null)

// const focusInput = () => {
//     if (form.username === '') {
//         usernameRef.value!.focus()
//     } else if (form.password === '') {
//         passwordRef.value!.focus()
//     }
// }

const onSubmit = (formEl) => {
    if (!formEl) return
    formEl.validate((valid) => {
        if (valid) {
            form.loading = true
            // login('post', form)
            //     .then((res) => {
            form.loading = false
            // adminInfo.dataFill(res.data.userinfo)
            ElNotification({
                message: '登录成功',
                type: 'success',
            })
            // router.push({ path: res.data.routePath })
            // })
            // .catch(() => {
            //     onChangeCaptcha()
            //     form.loading = false
            // })
        } else {
            // onChangeCaptcha()
            return false
        }
    })
}
</script>

<style scoped>
.bubble {
    overflow: hidden;
    background: url(/@/assets/bg.jpg) repeat;
}

.form-item-icon {
    height: auto;
}

.login {
    position: absolute;
    top: 0;
    display: flex;
    width: 100vw;
    height: 100vh;
    align-items: flex-start;
    justify-content: center;
}

.login .login-box {
    overflow: hidden;
    width: 430px;
    padding: 0;
    background: var(--ba-bg-color-overlay);
    margin-top: 130px;
}

.login .head {
    background: #ccccff;
}

.login .head img {
    display: block;
    width: 430px;
    margin: 0 auto;
    user-select: none;
}

.login .form {
    position: relative;
}

.login .form .profile-avatar {
    display: block;
    position: absolute;
    height: 100px;
    width: 100px;
    border-radius: 50%;
    border: 4px solid var(--ba-bg-color-overlay);
    top: -50px;
    right: 175px;
    z-index: 2;
    user-select: none;
}

.login .form .content {
    padding: 100px 40px 40px 40px;
}

.login .form .submit-button {
    width: 100%;
    letter-spacing: 2px;
    font-weight: 300;
    margin-top: 15px;
    --el-button-bg-color: var(--el-color-primary);
}

@media screen and (max-width: 720px) {
    .login {
        display: flex;
        align-items: center;
        justify-content: center;

    }

    .login .login-box {
        width: 340px;
        margin-top: 0;
    }
}
</style>
