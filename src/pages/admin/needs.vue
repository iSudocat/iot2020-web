<template>
    <div>
        <b-card title="需求">
            <div>
                <b-table hover responsive v-if="loaded" :fields="fields" :items="items" :tbody-tr-class="rowClass">
                    <template v-slot:cell(record)="row">
                        <b-button variant="info" size="sm" @click="initAudioModal(row.item, row.index, $event.target)" style="width: 3rem">
                            查看
                        </b-button>
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

            <b-modal :id="audioModal.id" :title="audioModal.title" ok-only>
                <audio :src="audioModal.record" controls="controls">
                    Your browser does not support the audio element.
                </audio>
            </b-modal>

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
            audioModal: {
                index: null,
                id: 'audio-modal_admin',
                title: '原始录音',
                record: ''
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
                    { key: 'time', label: '提交时间' },
                    { key: 'name', label: '姓名' },
                    { key: 'tel', label: '电话' },
                    { key: 'address', label: '住址' },
                    { key: 'record', label:'原始录音' },
                    { key: 'result', label:'录音识别结果' },
                    { key: 'status', label:'状态' },
                    { key: 'person', label:'处理人' },
                    { key: 'note', label:'处理人备注' },
                    { key: 'operation', label:'操作' }
                ]
                this.items = [
                    {
                        time:'2020.7.16 19:21:35',
                        name:'金泽辉',
                        address:'1号楼2单元3层1户',
                        tel:'13666666666',
                        record:'https://jishe-1251910132.cos.ap-chengdu.myqcloud.com/20200719_204450.m4a',
                        result:'腰酸背痛，希望有人帮我买菜。',
                        status:'已处理',
                        person:'社区管理员-辛林炫',
                        note:'已订外卖：土豆、胡萝卜、大白菜'
                    },
                    {
                        time:'2020.7.17 10:52:11',
                        name:'金泽辉',
                        address:'1号楼2单元3层1户',
                        tel:'13666666666',
                        record:'https://jishe-1251910132.cos.ap-chengdu.myqcloud.com/20200719_204506.m4a',
                        result:'家里的水管坏了，想找社区管理员派人来修一下。',
                        status:'未处理',
                        person:'',
                        note:''
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
            initAudioModal(item, index, button) {
                this.audioModal.index = index
                this.audioModal.record = this.items[index].record
                this.$root.$emit('bv::show::modal', this.audioModal.id, button)
            },
            rowClass(item, type) {
                if (!item || type !== 'row') return
                if (item.status === '未处理') return 'table-warning'
            }
        }
    }
</script>

<style scoped>

</style>