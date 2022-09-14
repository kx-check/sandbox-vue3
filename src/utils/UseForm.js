// 定义查询列表响应式数据 
import { reactive, ref } from 'vue';

export default function(options) {
    const openDrawerRef = ref(true)

    const product = reactive({
        id: "",
        title: ""
    })

    // 打开编辑
    const handleOpen = () => {
            openDrawerRef.value = true
        }
        // 打开编辑
    const handleClose = () => {
        openDrawerRef.value = false
    }

    // 执行保存
    const handleSave = async() => {
        // 异步保存方法
        try {
            const res = await options.onSave(product.value);
            // 增加通用逻辑
            options.onSuccess(res);
        } catch (err) {
            options.onError(err)
        }
    }


    return {
        product,
        openDrawerRef,
        handleOpen,
        handleClose,
        handleSave
    }

}