# vue 个人项目
> 使用vue全家桶仿卖座电影
## 后台api说明
### banner 
> 'billboard/home?t=' + new Date() * 1
### 首页热映电影
> 'film/now-playing?_t=' + new Date() * 1 + '&page=1&count=5'
### 获取即将上映电影
> 'film/coming-soon?_t=' + new Date() * 1 + '&page=1&count=3'
### 电影详情
> 'film/' + id + '?__t=' + new Date() * 1
### 说明
> 开发时仅考虑前端代码，接口跨域使用[JSONBIRD](https://bird.ioliu.cn/)提供的代理转发
> 使用方法：https://bird.ioliu.cn/v1/?url= + 请求url

## Build 

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

## TODO
> 只是模仿了以上页面，这几个页面感觉已经包括了vue的常用功能了。日后有时间继续完善后续页面开发。
