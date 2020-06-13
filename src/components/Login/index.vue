<template>
    <div>
        <div class="login">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="form">
                            <div class="upper-title">
                                Login
                            </div>
                            <div class="form-content">
                                <form>
                                    <div class="form-group">

                                        <input v-model="formData.Email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">

                                    </div>
                                    <div class="form-group">

                                        <input v-model="formData.Password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                                    </div>

                                    <button @click="Submit" type="submit" class="btn btn-success btn-block">Login</button>
                                </form>                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            formData: {
                Email: '',
                Password: '',
            }
        }
    },
    methods: {
        Submit() {
            console.log(this.formData)
        }
    }
}
</script>