### 准备开始
---
#### 学员反馈
看得懂，听得懂，似懂非懂，但是自己写不粗来。这该怎么办，好像除了打代码，还是打代码......
    
        先看老师的图,自己屡屡思路
            要么图，要么一行行注释
                到自己写的时候，不知道api怎么写

        一个请求 ->  一个路由规则 ->  1:接收数据 2:处理数据  3:响应数据

*** 登录那块没听明白，有点懵
    1:post /api/do-login
    2: 接收登录的数据  username password remember_me
    3: 以username为条件查询数据库
        3.1:如果没有这个用户，直接响应res.json({ code:'002',msg:'用户名或密码不正确'}) return;
        3.2:从查询出的用户中获取密码对比password，
        如果不一致。用户名或密码不正确 return
        3.3: 以上都不满足，登录成功 req.session.user = 数据
*** express()是调用express函数吗 websocket的补充视频发一下呗

   对postman的使用有点懵

   代码敲的慢

 很想知道,像我们这样,面临着年前不好找工作,又底子不好,该作何打算?又该何去何从?唉
#### 复习

#### 今日重点
* 部分后端接口实现
* 前端页面接口调用

#### 删除音乐
#### 用户退出
#### 登录、注册、列表、添加、更新页面显示