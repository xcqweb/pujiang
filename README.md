# 需求描述
1、单屏主页，
2、大数据展示
3、不同区域模块可切换自定义
4、三种色系版本（形成本版本需求后，需要进行各接口的统一，css文件，props数据下传等）
5、后期可能多页面
6、添加登录页
7、header部分展开
8、model框三种方式选择(根节点处创建v-if控制vuex传递状态,$tosk,reder)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
# 查看当前远程地址
git remote -v
# 删除当前远程地址
git remote rm origin
# 添加新远程地址
git remote add origin git@github.com:Liutos/foobar.git
# 直接修改
git remote origin set-url URL

# 提交代码
git status
git add .
git commit -m ""
git push -u origin master


git --version   查询版本号
git config --global user.name" "    名字
git config --global user.email" "   邮箱
git add 文件名 将文件添加到缓存区
git add .   将所有文件添加到缓存区
git commit 文件名 -m"注释"   将文件提交到版本库
git status  有没有没提交的更新
git diff    具体怎么改的
git rm -f 文件名   删除文件，要提交才行
git log 显示日志git branch  查看分支，带*的是当前分支,创建分支
git branch -a   包括远程分支
git checkout 分支 切换到分支
git checkout -b 创建并切换分支
git merge 分支    master合并merge分支，分支的修改要相互不影响
git push origin 分支名字    上传到远程分支
git clone   第一次拿远程的代码
git pull    之后拿代码
git remote add origin 添加新的远程仓库
git pull origin master  将远程的代码直接合并到本地master上确保远程与本地 
For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

sublime 文件地址
C:\Users\Administrator\AppData\Roaming\Sublime Text 3\Packages\SublimeTmpl\templates