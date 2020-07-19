<template>
    <div id="index">

        <div class="container">
            <div class="row">
                <div class="col-md-4">
                </div>

                <div class="col-md-4">
                    <div class="text-center">
                        <img src="img/1.png" class="img-fluid" alt="Responsive image">
                    </div>

                    <b-form @submit="onSubmit" v-if="show">

                        <b-form-group
                                id="input-group-1"
                                label="账号："
                                label-for="input-1"
                        >
                            <b-form-input
                                    id="input-1"
                                    v-model="form.UserID"
                                    type="text"
                                    required
                                    placeholder="Enter UserID"
                            ></b-form-input>
                        </b-form-group>

                        <b-form-group id="input-group-2" label="密码：" label-for="input-2">
                            <b-form-input
                                    id="input-2"
                                    v-model="form.Password"
                                    type="password"
                                    required
                                    placeholder="Enter Password"
                            ></b-form-input>
                        </b-form-group>


                        <b-button block pill type="submit" variant="primary">登录</b-button>


                    </b-form>


                </div>

                <div class="col-md-4">
                </div>

            </div>
        </div>


        <div>
            <div class="col-4">
            </div>
        </div>

    </div>
</template>


<script>
    export default {
        name: 'index',
        data() {
            return {
                form: {
                    UserID: '',
                    Password: ''
                },
                show: true
            }
        },
        methods: {
            onSubmit(evt) {
                evt.preventDefault()
                if(this.form.UserID === 'user'){
                    window.location.href = 'user.html'
                }else if(this.form.UserID === 'admin'){
                    window.location.href = 'admin.html'
                }


            }
        }
    }


</script>

<style>
    body {
        padding-top: 50px
    }

</style>
