<template>
    <div>
        <b-card title="人员管理">
            <div>
                <b-table hover responsive v-if="loaded" :fields="fields" :items="items" :tbody-tr-class="rowClass">
                    <template v-slot:cell(operation)="row" >
                        <b-button variant="info" size="sm" @click="initModal(row.item, row.index, $event.target)" style="width: 3rem">
                            详情
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

            <b-modal size="xl" scrollable :id="userModal.id" :title="userModal.title" ok-only>
                <div class="row">
                    <div class="col-lg-12">
                        <div>
                            <adminUserInfo/>
                        </div>
                        <div>
                            <needs/>
                        </div>
                        <div style="margin-top: 10px;">
                            <balance/>
                        </div>
                        <div style="margin-top: 10px;">
                            <gas/>
                        </div>
                    </div>
                </div>
                <div class="row row-cols-lg-2">
                    <div class="col-lg-6" style="margin-top: 10px;">
                        <step/>
                    </div>
                    <div class="col-lg-6" style="margin-top: 10px;">
                        <activity/>
                    </div>
                    <div class="col-lg-6" style="margin-top: 10px;">
                        <heart/>
                    </div>
                    <div class="col-lg-6" style="margin-top: 10px;">
                        <temperature/>
                    </div>
                    <div class="col-lg-6" style="margin-top: 10px;">
                        <homeTemperature/>
                    </div>
                    <div class="col-lg-6" style="margin-top: 10px; margin-bottom: 10px;">
                        <homeHumidity/>
                    </div>
                </div>
            </b-modal>
        </b-card>
    </div>
</template>

<script>
    import adminUserInfo from "@/pages/admin/adminUserInfo"
    import step from "@/pages/user/step"
    import heart from "@/pages/user/heart"
    import temperature from "@/pages/user/temperature"
    import activity from "@/pages/user/activity"
    import homeHumidity from "@/pages/user/homeHumidity"
    import homeTemperature from "@/pages/user/homeTemperature"
    import needs from "@/pages/user/needs"
    import balance from "@/pages/user/balance"
    import gas from "@/pages/user/fire"
    export default {
        name: "adminUser",
        components: {
            adminUserInfo,
            step,
            heart,
            temperature,
            activity,
            homeHumidity,
            homeTemperature,
            needs,
            balance,
            gas
        },
        data: () =>({
            loaded: false,
            items:[],
            fields:[],
            userModal: {
                index: null,
                id: 'user-modal',
                title: '详细信息',
                content: ''
            },
            adminInfo: {}

        }),
        async mounted () {
            this.loaded = false
            try {
                this.adminInfo = {
                    name: '社区管理员-辛林炫',
                    no: '000001',
                    tel: '13555555555',
                    area: '蒂姆山庄'
                }
                this.fields =[
                    { key: 'name', label: '姓名' },
                    { key: 'tel', label: '电话' },
                    { key: 'address', label: '住址' },
                    { key: 'health', label:'健康状况' },
                    { key: 'help', label:'是否需要上门服务' },
                    { key: 'reason', label:'原因' },
                    { key: 'operation', label:'操作' }
                ]
                this.items = [
                    {
                        name: '金泽辉',
                        tel: '13666666666',
                        address: '1号楼2单元3层1户',
                        health:'正常',
                        help: '是',
                        reason: '可能发生火灾'
                    }
                ]
                this.loaded = true
            } catch (e) {
                console.error(e)
            }


        },
        methods: {
            initModal(item, index, button) {
                this.userModal.index = index
                this.$root.$emit('bv::show::modal', this.userModal.id, button)
            },
            rowClass(item, type) {
                if (!item || type !== 'row') return
                if (item.help === '是') return 'table-danger'
            }
        }
    }
</script>

<style scoped>

</style>