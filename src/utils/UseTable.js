// 定义查询列表响应式数据 
import { reactive, onMounted, ref } from 'vue';

function UseTable(options) {

    // 列表的数据容器
    const tableData = reactive({
        value: []
    });

    // 分页信息
    const pageNo = ref(1);
    const pageSize = ref(10);
    const total = ref(0);
    const pages = ref(0);


    // 编辑方法
    const initData = async(pno = 1) => {
        try {
            // 获取谁的数据呢？当然你外部指定的异步方法的数据
            //  options.loadData 就是你通过参数传递进来的异步数据调用
            const res = await options.loadData(pageNo.value);
            if (options.onSuccess && typeof options.onSuccess == "function") {
                options.onSuccess(res)
            } else {
                tableData.value = res.list
            }
        } catch (err) {
            console.log(err);
        }
    };


    // 生成周期触发执行，获取第一页的数据
    onMounted(() => {
        initData();
    })


    // 删除方法
    const handleDel = (index, id) => {
        console.log("删除")
    };

    // 编辑方法
    const handleEdit = (index, id) => {
        console.log("编辑")
        tableData.value = [1, 2, 3, 4, 5, 6];
    };


    // 返回
    return {
        tableData,
        handleDel,
        handleEdit,
        pageNo,
        pageSize,
        total,
        pages
    }

}

export default UseTable;