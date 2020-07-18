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
                        <a class="btn btn-outline-secondary" href="#">Log out</a>
                    </div>
                </div>

            </header>

            <div class="row">
                <div class="col-lg-3">
                    <div>
                        <b-card
                                title="基本信息"
                                img-src="img/2.png"
                                img-alt="Image"
                                img-top
                                tag="article"

                                class="mb-2"
                        >
                            <div>
                                <label>姓名：</label>
                                <b-form-input v-model="form.name" type="text"
                                              placeholder="Enter your name"></b-form-input>
                                <label style="margin-top: 10px;">年龄：</label>
                                <b-form-input v-model="form.age" type="number"
                                              placeholder="Enter your age"></b-form-input>
                                <label style="margin-top: 10px;">联系方式：</label>
                                <b-form-input v-model="form.tel" type="tel"
                                              placeholder="Enter your telephone number"></b-form-input>
                                <label style="margin-top: 10px;">住址：</label>
                                <b-form-input v-model="form.add" type="text"
                                              placeholder="Enter your address"></b-form-input>
                                <div>
                                    <b-form-group label="当前是否独居:" style="margin-top: 10px;">
                                        <b-form-radio-group id="radio-group-2" v-model="alone" name="is-alone">
                                            <b-form-radio value="1">是</b-form-radio>
                                            <b-form-radio value="0">否</b-form-radio>
                                        </b-form-radio-group>
                                    </b-form-group>
                                </div>
                                <div>
                                    <label>备注信息：</label>
                                    <b-form-textarea
                                            id="hc"
                                            v-model="form.health"
                                            placeholder="Enter something..."
                                            rows="3"
                                            max-rows="6"
                                    ></b-form-textarea>
                                    <pre class="mt-3 mb-0">{{ form.health }}</pre>
                                </div>
                            </div>

                            <b-button block pill variant="outline-primary" v-on:click="submitForm"
                                      style="margin-top: 10px;">提交修改
                            </b-button>
                        </b-card>


                    </div>
                </div>

                <div class="col-lg-9">
                    <div>
                        <b-card title="需求">
                            <div>
                                <needs/>
                            </div>
                        </b-card>
                    </div>

                    <div>
                        <b-card title="平衡状态" style="margin-top: 10px;">
                            <div>
                                <b-alert show variant='success'>暂无异常记录</b-alert>
                            </div>
                        </b-card>
                    </div>

                    <div>
                        <b-card title="天然气监测" style="margin-top: 10px;">
                            <div>
                                <b-alert show variant='success'>暂无异常记录</b-alert>
                            </div>
                        </b-card>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-6" style="margin-top: 10px;">
                    <div>
                        <b-card title="步数">
                            <div>
                                <stepChart/>
                            </div>
                        </b-card>
                    </div>

                    <div>
                        <b-card title="心率" style="margin-top: 10px;">
                            <div>
                                <heartChart/>
                            </div>
                        </b-card>
                    </div>
                </div>

                <div class="col-lg-6">

                    <div>
                        <b-card title="活动情况" style="margin-top: 10px;">
                            <div>
                                <activityChart/>
                            </div>
                        </b-card>
                    </div>

                    <div>
                        <b-card title="体温" style="margin-top: 10px;">
                            <div>
                                <temperatureChart/>
                            </div>
                        </b-card>
                    </div>

                </div>
            </div>

            <div class="row">
                <div class="col-lg-6">
                    <div>
                        <b-card title="家庭温度"  style="margin-top: 10px;">
                            <div>
                                <homeTemperatureChart/>
                            </div>
                        </b-card>
                    </div>
                </div>

                <div class="col-lg-6">
                    <div>
                        <b-card title="家庭湿度"  style="margin-top: 10px;">
                            <div>
                                <homeHumidityChart/>
                            </div>
                        </b-card>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import stepChart from "@/pages/user/stepChart"
    import heartChart from "@/pages/user/heartChart"
    import temperatureChart from "@/pages/user/temperatureChart"
    import activityChart from "@/pages/user/activityChart"
    import homeHumidityChart from "@/pages/user/homeHumidityChart"
    import homeTemperatureChart from "@/pages/user/homeTemperatureChart"
    import needs from "@/pages/user/needs"
    export default {
        name: 'user',
        components: {
            stepChart,
            heartChart,
            temperatureChart,
            activityChart,
            homeHumidityChart,
            homeTemperatureChart,
            needs
        },
        data() {
            return {
                form: {
                    name: 'xlx',
                    age: '80',
                    tel: '12345678987',
                    add: '1号楼1单元1层1户',
                    health: ''
                },
                alone: "1",

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