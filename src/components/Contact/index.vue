<template>
    <div>
        <div class="contact">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="upper-header text-center mb-5">
                            <h1>Contact Us</h1>
                            <p>Keep in touch with us. we are here to help you</p>
                        </div>
                    </div>                    
                </div>
                <div class="row">
                    <div class="col-lg-6">
                        <div class="info">
                            <div class="row">
                                <div class="col-lg-6">
                                    <h4>Australia</h4>
                                    <address>
                                    <strong>Flat Host Pty Ltd</strong><br>
                                    13/2 Elizabeth Street<br>
                                    Melbourne VIC 30007<br>
                                    Australia<br>
                                    <abbr title="Phone">P:</abbr> +201013455022<br>
                                    <br>
                                    </address>
                                </div>
                                <div class="col-lg-6">
                                    <h4>India</h4>
                                    <address>
                                    <strong>Flat Host Pty Ltd</strong><br>
                                    MG Road<br>
                                    Pulleppady Jn<br>
                                    Kochi, India<br>
                                    <abbr title="Phone">P:</abbr> +201555665127<br>
                                    <br>
                                    </address>
                                </div>
                                <div class="col-lg-12 mt-3">
                                    <div style="width: 100%"><iframe width="100%" height="900" src="https://maps.google.com/maps?width=100%&amp;height=900&amp;hl=en&amp;coord=25.702096,32.647186&amp;q=Egypt%2Cluxor+(Abdallah%20Muhammed)&amp;ie=UTF8&amp;t=&amp;z=6&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"><a href="https://www.maps.ie/map-my-route/">Create route map</a></iframe></div><br />
                                </div>                                
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <form>
                            <div class="form-group">
                                <input v-model="formData.Email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                            </div>
                            <div class="form-group">
                                <input v-model="formData.Password" type="password" class="form-control"  placeholder="Password">
                            </div>
                            <div class="form-group">
                                <input v-model="formData.MobileNumber" type="text" class="form-control"  aria-describedby="emailHelp" placeholder="Mobile Number">
                            </div>                            
                            <div class="form-group">
                                <textarea v-model="formData.Massage" class="form-control"  rows="3" placeholder="Your Massage"></textarea>
                            </div>        
                            <button @click.prevent="SendInfo" type="submit" class="btn btn-success btn-block">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            formData: {
                Email: '',
                MobileNamber:'',
                Massage: '',
                Password: ''
            }
        }
    },
    methods: {
        SendInfo() {
            console.log(this.formData)
        }
    }
}
</script>