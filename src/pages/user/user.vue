<template>
    <div id="user">
        <div class="container">
            <header class="blog-header py-3">
                <div class="row flex-nowrap justify-content-between align-items-center" style="padding-bottom: 20px;">
                    <div class="col-4">
                    </div>
                    <div class="col-4 text-center">
                        <a class="blog-header-logo" style="font-size:30px;">个人中心</a>
                    </div>
                    <div class="col-4 d-flex justify-content-end align-items-center">
                        <a class="btn btn-outline-secondary" @click="logOut">注销</a>
                    </div>
                </div>

            </header>

            <div class="row">
                <div class="col-lg-3">
                    <info/>
                </div>

                <div class="col-lg-9">
                    <div>
                        <needs/>
                    </div>
                    <div style="margin-top: 10px;">
                        <balance/>
                    </div>
                    <div style="margin-top: 10px;">
                        <fire/>
                    </div>
                </div>
            </div>

            <div class="row  row-cols-lg-2">
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

        </div>
    </div>
</template>

<script>
    import info from "@/pages/user/info"
    import step from "@/pages/user/step"
    import heart from "@/pages/user/heart"
    import temperature from "@/pages/user/temperature"
    import activity from "@/pages/user/activity"
    import homeHumidity from "@/pages/user/homeHumidity"
    import homeTemperature from "@/pages/user/homeTemperature"
    import needs from "@/pages/user/needs"
    import balance from "@/pages/user/balance"
    import fire from "@/pages/user/fire"
    export default {
        name: 'user',
        components: {
            info,
            step,
            heart,
            temperature,
            activity,
            homeHumidity,
            homeTemperature,
            needs,
            balance,
            fire
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