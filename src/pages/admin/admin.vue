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
                        <a class="btn btn-outline-secondary" href="#">Log out</a>
                    </div>
                </div>

            </header>

            <div class="row">
                <div class="col-lg-12">
                    <b-alert show variant="info">
                        编号:{{adminInfo.no}} 姓名:{{adminInfo.name}} 联系方式:{{adminInfo.tel}} 负责区域:{{adminInfo.area}}
                    </b-alert>
                    <div>
                        <b-card title="需求">
                            <div>
                                <needs/>
                            </div>
                        </b-card>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import needs from "@/pages/admin/needs"
    export default {

        name: 'admin',
        components: {
            needs
        },
        data() {
            return {
                adminInfo: {
                    name: '炫神',
                    no: '000001',
                    tel: '11451419198',
                    area: '鱼塘'
                }
            }

        },
        methods: {
            submitForm: function () {
                alert("成功！")
            }
        }

    }
</script>

<style>

</style>