// 导入组件，组件必须声明 name
import XYButton from './src'

// 为组件提供 install 安装方法，供按需引入
XYButton.install = function (Vue) {
  Vue.component(XYButton.name, XYButton)
}

// 导出组件
export default XYButton