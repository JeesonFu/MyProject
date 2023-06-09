## 前后端分离项目

---

### 用户功能

---
包含用户登录、注册、重置密码基础功能。

在参考模板的基础上，根据不同用户（未登录用户、管理员用户、普通用户）设置访问拦截、强制跳转。

（可能还有各种bug和不周到的地方，欢迎指出）

1. 用户登录：支持用户名或邮箱登录（增加Enter键监听）
2. 用户注册
   1. 使用用户名、邮箱注册（发送验证码）
   2. 用户名、密码、邮箱的格式验证
3. 忘记密码
   1. 通过邮箱重置密码（发送验证码），设置新密码
4. 控制页面拦截（可能还有bug暂未发现）
   1. 未登录状态：
      1. 访问管理员页面，强制跳转到登录页
   2. 普通用户登录：（/index）
      1. 访问管理员页面，强制跳转到无权限页面
   3. 管理员用户登录：（/admin，管理员后台手动输入url跳转）
   4. 其它：
      1. 登录状态下访问登录页，强制跳转到网站主页
      2. url错误，访问不存在的页面时，强制跳转到404页面（现改为不跳转直接显示404页面内容）
      3. 如后端请求错误，强制跳转到网络异常页面（现改为不跳转直接显示异常页面内容）

### 技术栈

---
+ SpringBoot 3 + Maven （Java 17）
   + MySQL 8
   + Redis
   + Lombok
+ Vue 3 （Html5 / CSS3 / JavaScript）
   + NodeJS / Vite / Pinia
   + Axios
   + element-plus

 ### 参考项目

---
前后端分离项目模版：https://github.com/Ketuer/study-project

### 问题反馈 & 技术交流

---
+ B站：冷尐风Jeeson

+ QQ：442885735

+ Email：jeesontools@qq.com

### 致谢

---
如果觉得有用的话，不妨打赏支持一下，您的支持就是我最大的动力。

<img src="./picture/qr_wechat.png" width="45%" alt=""/>
<img src="./picture/qr_alipay.jpg" width="45%" alt=""/>
<img src="./picture/qr_ali_redbag.jpg" width="45%" alt=""/>

### Others

---
+ 网站具体业务可在mytools-backend和mytools-frontend的基础上自行开发

+ 后续是否还会更新，我也不知道

+ 本项目仅用于个人开发，请勿商用，如本项目涉及侵权，请联系我删除，谢谢！