<template>
    <div class="welcome-board">
        <div class="welcome-title">用户登录</div>
        <div class="welcome-input">
            <el-form :model="form" :rules="rules" @validate="" ref="formRef">
                <el-form-item prop="username">
                    <el-input v-model="form.username" type="text" placeholder="请输入用户名或邮箱">
                        <template #prefix>
                            <el-icon><User /></el-icon>
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input v-model="form.password" type="password" placeholder="请输入密码">
                        <template #prefix>
                            <el-icon><Lock /></el-icon>
                        </template>
                    </el-input>
                </el-form-item>
            </el-form>
        </div>
        <el-row style="margin-top: 5px;">
            <el-col :span="12" style="text-align: left">
                <el-checkbox v-model="form.remember" label="记住我"/>
            </el-col>
            <el-col :span="12" style="text-align: right;margin-top: 3px">
                <el-link @click="goto('/forget')" :underline="false">忘记密码？</el-link>
            </el-col>
        </el-row>
        <div style="margin-top: 15px">
            <el-button @click="login()" class="btn-side" type="primary">登录</el-button>
            <el-button @click="goto('/register')" class="btn-side" plain>注册</el-button>
        </div>
    </div>
</template>

<script setup>
import {User, Lock} from "@element-plus/icons-vue";
import {reactive, ref} from "vue";
import {ElMessage} from "element-plus";
import {post} from "@/net";
import router from "@/router";

const form = reactive({
    username: '',
    password: '',
    remember: false
})

const formRef = ref()

const rules = {
    username: [
        { required: true, message: '请输入用户名或邮箱', trigger: ['blur', 'change'] }
    ],
    password: [
        { required: true, message: '请输入密码', trigger: ['blur', 'change'] }
    ]
}

const login = () => {
    formRef.value.validate((isValid) => {
        if(isValid) {
            post('/api/auth/login', {
                username: form.username,
                password: form.password,
                remember: form.remember
            }, (message) => {
                ElMessage.success(message)
                goto('/index')
            })
        } else {
            // ElMessage.warning('请填写用户名和密码')
        }
    })
}

const goto = (url) => {
    window.removeEventListener('keydown',keydown,false)
    router.push(url)
}

const keydown = (e) => {
    if (e.key === "Enter")
        login()
}

window.addEventListener('keydown', keydown)

</script>

<style scoped>
@import "@/assets/css/welcome.css";
</style>