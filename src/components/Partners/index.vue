<template>
    <div>
        <div class="partners">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 mb-5">
                        <div class="partners-upper text-center mb-5">
                            <h1>Testimonials</h1>
                            <p>Kind words from our valuable customers</p>
                        </div>
                    </div>
                    <div class="col-lg-4" v-for="(client,index) in clients" :key="index">
                        <div class="box-content text-center mb-5">
                            <div class="img mb-3"><img :src="client.imgOne" alt="Responsive-img"></div>
                            <div class="title mb-3">{{client.title}}</div>
                            <span class="name mb-3">{{client.name}}</span>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
        <div class="clients">
            <div class="container">
                <div class="row">
                    <div class=" text-center mb-5 client-img col-lg-2" v-for="(partner ,index) in partners" :key="index">
                        <img :src="partner.IMG" alt="Responsive-img">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ClientOne from './../../assets/photos/client1.jpg'
import ClientTwo from './../../assets/photos/client2.jpg'
import ClientThree from './../../assets/photos/client3.jpg'
import PhotoOne from './../../assets/photos/0.jpg'
import PhotoTwo from './../../assets/photos/02.jpg'
import PhotoThree from './../../assets/photos/03.jpg'
import PhotoFour from './../../assets/photos/05.jpg'
import PhotoFive from './../../assets/photos/06.jpg'

export default {
    data() {
        return {
            clients:[
                {
                    imgOne:ClientOne,
                    title:'Flathost servers are having high physical security and power redundancy Your data will be secure with us.',
                    name:'James, Envato'
                },
                 {
                    imgOne:ClientTwo,
                    title:'We have a dedicated team of support for sales and support to help you in anytime. You can also chat with us.',
                    name:'Mariya, Activeden'
                },
                {
                    imgOne:ClientThree,
                    title:'With our ultra mordern servers and optical cables, your data will be transfered to end user in milliseconds.',
                    name:'Steven, Microlancer'
                },
                {
                    imgOne:ClientOne,
                    title:'Flathost servers are having high physical security and power redundancy Your data will be secure with us.',
                    name:'James, Envato'
                },
                {
                    imgOne:ClientTwo,
                    title:'With our ultra mordern servers and optical cables, your data will be transfered to end user in milliseconds.',
                    name:'Mariya, Activeden'
                },
                {
                    imgOne:ClientThree,
                    title:'We have a dedicated team of support for sales and support to help you in anytime. You can also chat with us.',
                    name:'Steven, Microlancer'
                },                                                                               
            ],
            partners:[
                {
                    IMG:PhotoOne
                },
                {
                    IMG:PhotoTwo
                },
                {
                    IMG:PhotoThree
                },
                {
                    IMG:PhotoFour
                },
                {
                    IMG:PhotoFive
                },    
                {
                    IMG:PhotoOne
                },                                                                            
            ]
        }
    }
}
</script>