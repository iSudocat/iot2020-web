<template>
    <div>
        <b-card title="需求">
            <div>
                <b-table striped hover responsive v-if="loaded" :fields="fields" :items="items">
                    <template v-slot:cell(record)="data">
                        <a :href="`${data.value}`" target="_blank">点击收听</a>
                    </template>

                    <template v-slot:cell(operation)="row" >
                        <b-button variant="primary" size="sm" @click="initModal(row.item, row.index, $event.target)" style="width: 3rem">
                            处理
                        </b-button>
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


            <b-modal :id="infoModal.id" :title="infoModal.title">

                <form>
                    <b-form-group
                            label="备注："
                            label-for="name-input"
                    >
                        <b-form-input
                                id="name-input"
                                v-model="infoModal.note"
                        ></b-form-input>
                    </b-form-group>
                </form>
                <template v-slot:modal-footer>
                    <b-button variant="danger" @click="handleCancel">
                        取消
                    </b-button>
                    <b-button variant="success" @click="handleOk">
                        确定
                    </b-button>
                </template>
            </b-modal>
        </b-card>


    </div>
</template>

<script>
    export default {
        data: () =>({
            loaded: false,
            items:[],
            fields:[],
            infoModal: {
                index: null,
                id: 'info-modal',
                title: '处理需求',
                content: '',
                note: ''
            },
            adminInfo: {}

        }),
        async mounted () {
            this.loaded = false
            try {
                this.adminInfo = {
                    name: '炫神',
                    no: '000001',
                    tel: '11451419198',
                    area: '鱼塘'
                }
                this.fields =[
                    { key: 'time', label: '需求提交时间' },
                    { key: 'name', label: '提交者姓名' },
                    { key: 'tel', label: '提交者电话' },
                    { key: 'address', label: '提交者住址' },
                    { key: 'record', label:'语音原件' },
                    { key: 'result', label:'语音识别结果' },
                    { key: 'status', label:'状态' },
                    { key: 'person', label:'处理人' },
                    { key: 'note', label:'处理人备注' },
                    { key: 'operation', label:'操作' }
                ]
                this.items = [
                    {
                        time:'2020.7.16 19:21:35',
                        name:'xlx',
                        address:'1号楼1单元1层1户',
                        tel:'12345678987',
                        record:'http://www.baidu.com',
                        result:'xlxnb，xlxnb，xlxnb。',
                        status:'未处理',
                        person:'',
                        note:''
                    },
                    {
                        time:'2020.7.17 10:52:11',
                        name:'xlx',
                        address:'1号楼1单元1层1户',
                        tel:'12345678987',
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


        },
        methods: {
            initModal(item, index, button) {
                this.infoModal.index = index
                this.infoModal.content = JSON.stringify(item, null, 2)
                this.infoModal.note = this.items[this.infoModal.index].note
                this.$root.$emit('bv::show::modal', this.infoModal.id, button)
            },
            handleCancel(){
                this.$nextTick(() => {
                    this.$bvModal.hide(this.infoModal.id)
                })
            },
            handleOk() {
                this.items[this.infoModal.index].status = '已处理'
                this.items[this.infoModal.index].person = this.adminInfo.name
                this.items[this.infoModal.index].note = this.infoModal.note
                this.$nextTick(() => {
                    this.$bvModal.hide(this.infoModal.id)
                })
            },
        }
    }
</script>

<style scoped>

</style>