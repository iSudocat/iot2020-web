<template>
    <div>
        <b-card title="需求">
            <div>
                <b-table striped hover responsive  v-if="loaded" :items="items" :fields="fields">
                    <template v-slot:cell(record)="row">
                        <b-button variant="info" size="sm" @click="initAudioModal(row.item, row.index, $event.target)" style="width: 3rem">
                            查看
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
        </b-card>

    </div>
</template>

<script>
    export default {
        data: () =>({
            loaded: false,
            items:[],
            fields:[],
            audioModal: {
                index: null,
                id: 'audio-modal',
                title: '原始录音',
                record: ''
            }
        }),
        async mounted () {
            this.loaded = false
            try {
                this.fields =[
                    { key: 'time', label: '提交时间' },
                    { key: 'record', label:'原始录音' },
                    { key: 'result', label:'录音识别结果' },
                    { key: 'status', label:'状态' },
                    { key: 'person', label:'处理人' },
                    { key: 'note', label:'处理人备注' }
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
            initAudioModal(item, index, button) {
                this.audioModal.index = index
                this.audioModal.record = this.items[index].record
                this.$root.$emit('bv::show::modal', this.audioModal.id, button)
            }
        }
    }
</script>

<style scoped>

</style>