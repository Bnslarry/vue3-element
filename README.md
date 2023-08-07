# 基于 Vue3 的组件库

## 编译处理

### 编译脚本 scripts/build-module.ts

## 快速启动


```sh
# node 版本使用 v16.14.0
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm

nvm use v16.14.0

# pnpm 版本使用 8.6.1

sudo npm install -g pnpm@8.6.1

# 使用 pnpm 来管理项目
pnpm i
```
## 开发模式

### 基础组件开发模式

```sh
npm run dev:components
```

### 业务组件开发模式

```sh
npm run dev:business
```
## 组件设计规范

### 组件尽量不要写死尺寸，需要用弹性的尺寸样式，建议直接使用栅格组件；

### 组件里的文字内容要考虑换行处理，特别是纯字母和数字的显示组件；

### 组件里图片显示尽量在控制好边缘尺寸限制；

### 组件里绝对定位注意固定位置的偏移是否受外界布局组件容器的影响
