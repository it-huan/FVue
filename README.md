# shop

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



>创建一个project文件夹并在vscode上打开终端，输入cnmp i yarn -g进行全局配置，接下来输入vue create shop创建名为shop的vue项目，回车选择好，创建成功在终端输入yarn serve   或   npm run serve来运行程序；

>接下来进行修改eslint报错设置，在vue.config.js文件里写入lintOnSave:false 然后重新运行即可；

>接下来进行路由配置；

>接下来安装element UI{
    npm install element-plus --save
}
在main.js引入element UI{
    import ElementPlus from 'element-plus'
    import 'element-plus/dist/index.css'
    .use(ElementPlus)
}

>安装组件【安装了container布局容器和button按钮组件，利用flex布局对layout页面进行布局】

>menu制作

>安装icon{
    npm install @element-plus/icons-vue
}
注册一下{
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
}
<el-icon><User /></el-icon>

>开始制作登入页面

>Vuex:专为vue.js应用程序开发的状态管理模式+库。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。
初步了解vuex的使用

>路由守卫

>路由守卫登入状态存储+退出设置

>axios封装，cnpm i axios --save，创建了util.service.js
开始下载phpsudy

