<template>
    <div>
        <b-card title="人员管理">
            <div>
                <b-table striped hover responsive v-if="loaded" :fields="fields" :items="items">
                    <template v-slot:cell(operation)="row" >
                        <b-button variant="primary" size="sm" @click="initModal(row.item, row.index, $event.target)" style="width: 6rem">
                            查看详情
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

            <b-modal size="xl" scrollable :id="userModal.id" :title="userModal.title">
                <div class="row">
                    <div class="col-lg-12">
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
    import step from "@/pages/user/step"
    import heart from "@/pages/user/heart"
    import temperature from "@/pages/user/temperature"
    import activity from "@/pages/user/activity"
    import homeHumidity from "@/pages/user/homeHumidity"
    import homeTemperature from "@/pages/user/homeTemperature"
    import needs from "@/pages/user/needs"
    import balance from "@/pages/user/balance"
    import gas from "@/pages/user/gas"
    export default {
        name: "adminUser",
        components: {
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
                    name: '炫神',
                    no: '000001',
                    tel: '11451419198',
                    area: '鱼塘'
                }
                this.fields =[
                    { key: 'name', label: '姓名' },
                    { key: 'tel', label: '电话' },
                    { key: 'address', label: '住址' },
                    { key: 'health', label:'健康状况' },
                    { key: 'help', label:'是否需要上门服务' },
                    { key: 'operation', label:'操作' }
                ]
                this.items = [
                    {
                        name:'xlx',
                        address:'1号楼1单元1层1户',
                        tel:'12345678987',
                        health:'正常',
                        help:'否'
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
            }
        }
    }
</script>

<style scoped>

</style>