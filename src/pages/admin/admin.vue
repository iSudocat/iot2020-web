<template>
    <div id="admin">
        <div class="container">
            <header class="blog-header py-3">
                <div class="row flex-nowrap justify-content-between align-items-center" style="padding-bottom: 20px;">
                    <div class="col-4">
                    </div>
                    <div class="col-4 text-center">
                        <a class="blog-header-logo" style="font-size:30px;">管理中心</a>
                    </div>
                    <div class="col-4 d-flex justify-content-end align-items-center">
                        <a class="btn btn-outline-secondary" @click="logOut">注销</a>
                    </div>
                </div>

            </header>

            <div class="row">
                <div class="col-lg-12">
                    <b-alert show variant="info">
                        编号:{{adminInfo.no}} 姓名:{{adminInfo.name}} 联系方式:{{adminInfo.tel}} 负责区域:{{adminInfo.area}}
                    </b-alert>
                    <div>
                        <needs/>
                    </div>
                </div>
            </div>

            <div class="row" style="margin-top: 10px; margin-bottom: 10px;">
                <div class="col-lg-12">
                    <adminUser/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import needs from "@/pages/admin/needs"
    import adminUser from "@/pages/admin/adminUser"
    export default {
        name: 'admin',
        components: {
            needs,
            adminUser
        },
        data() {
            return {
                adminInfo: {
                    name: '社区管理员-辛林炫',
                    no: '000001',
                    tel: '13555555555',
                    area: '蒂姆山庄'
                }
            }

        },
        methods: {
            logOut: function () {
                window.location.href = 'index.html'
            }
        }

    }
</script>

<style>

</style>