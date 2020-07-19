<template>
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
</template>

<script>
    export default {
        name: "info",
        data: () => ({
            form: {
                name: 'xlx',
                age: '80',
                tel: '12345678987',
                add: '1号楼1单元1层1户',
                health: ''
            },
            alone: "1"
        }),
        methods: {
            submitForm: function () {
                alert("成功！")
            }
        }
    }
</script>

<style scoped>

</style>