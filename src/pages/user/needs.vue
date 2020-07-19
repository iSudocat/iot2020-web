<template>
    <div>
        <b-card title="需求">
            <div>
                <b-table striped hover responsive  v-if="loaded" :items="items" :fields="fields">
                    <template v-slot:cell(record)="data">
                        <a :href="`${data.value}`" target="_blank">点击收听</a>
                    </template>
                    <template v-slot:head()="scope">
                        <div class="text-nowrap">
                            {{ scope.label }}
                        </div>
                    </template>
                    <template v-slot:cell()="data">
                        <div class="text-nowrap">
                            {{data.value}}
                        </div>
                    </template>
                </b-table>
            </div>
        </b-card>

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
                        person:'炫神',
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