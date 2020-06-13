<template>
    <div>
        <div class="featuers-index">
            <div class="container">
                <div class="row">
                    <div class="col-lg-5">
                        <div class="img">
                            <img :src="img" alt="Responsive-img">
                        </div>
                    </div>
                    <div class="col-lg-7 pl-3">
                        <div class="title">
                            <h3>Features Layout</h3>
                            <p>A left aligned image and content with tick</p>
                            <p class="mt-5">As soon as you make a successful payment via PayPal or Google Checkout, your web hosting and domain names will be activated immediately. No waiting time whatsoever. Our network runs the latest stable and secure versions of PHP & MySQL.</p>
                            <ul>
                                <li>Dedicated Servers</li>
                                <li>MySQL Databases</li>
                                <li>Web Builder</li>
                                <li>cPanel Access</li>
                                <li>Super Bandwidth</li>
                                <li>Web Secutity</li>
                            </ul>
                        </div>                    
                    </div>
                </div>
            </div>
        </div>   
        <CompFeatuers/>
    </div>

</template>


<script>
import IMG from './../../assets/photos/features.png'
import CompFeatuers from './featuers'
export default {
    data() {
        return {
            img:IMG
        }
    },
    components:{
        CompFeatuers
    }
}
</script>
<style scoped>
    
</style>