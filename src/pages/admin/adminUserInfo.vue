<template>
    <div>
        <b-alert show variant='info'>
            <h4 class="alert-heading">基本信息</h4>
            <hr>
            <p>姓名：{{info.name}}</p>
            <p>年龄：{{info.age}}</p>
            <p>电话：{{info.tel}}</p>
            <p>住址：{{info.add}}</p>
            <p v-if="info.alone === '1'">是否独居：是</p>
            <p v-else>是否独居：否</p>
            <p>备注：{{info.note}}</p>
        </b-alert>
    </div>
</template>

<script>
    export default {
        name: "adminUserInfo",
        data: () => ({
            info: {
                name: '金泽辉',
                age: '80',
                tel: '13666666666',
                add: '1号楼2单元3层1户',
                note: '老人周内独自在家，请多关照。',
                alone: "1"
            }

        })
    }
</script>

<style scoped>

</style>