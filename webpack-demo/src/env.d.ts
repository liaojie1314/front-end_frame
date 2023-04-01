// 配置vue 声明文件不然ts 识别不了vue 后缀
declare module "*.vue" {
    import { DefineComponent } from 'vue'
    const component:DefineComponent<{},{},any>
    export default component
}