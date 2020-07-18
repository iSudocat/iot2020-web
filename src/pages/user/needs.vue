<template>
    <div>
        <b-table striped hover v-if="loaded" :items="items" :fields="fields">
            <template v-slot:cell(record)="data">
                <a :href="`${data.value}`" target="_blank">点击收听</a>
            </template>
        </b-table>
    </div>
</template>

<script>
    export default {
        data: () =>({
            loaded: false,
            items:[],
            fields:[]
        }),
        async mounted () {
            this.loaded = false
            try {
                this.fields =[
                    { key: 'time', label: '时间' },
                    { key: 'record', label:'录音' },
                    { key: 'result', label:'识别结果' },
                    { key: 'status', label:'状态' },
                    { key: 'person', label:'处理人' },
                    { key: 'note', label:'备注' }
                ]
                this.items = [
                    {
                    time:'2020.7.16 19:21:35',
                    record:'http://www.baidu.com',
                    result:'xlxnb，xlxnb，xlxnb。',
                    status:'未处理',
                    person:'',
                    note:''
                    },
                    {
                        time:'2020.7.17 10:52:11',
                        record:'http://www.baidu.com',
                        result:'xlxnb，xlxnb，xlxnb。',
                        status:'已处理',
                        person:'Tim',
                        note:'xlxnb'
                    }
                    ]
                this.loaded = true
            } catch (e) {
                console.error(e)
            }


        }
    }
</script>

<style scoped>

</style>