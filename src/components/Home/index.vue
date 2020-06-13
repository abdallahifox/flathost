<template>
    <div>
        <div class="slider">
            <div class="overlay"></div>
            <div class="container slider-box">
                <div class="row">
                    <div class="col-lg-12 text-center mt-5">
                        <carousel :touchDrag="false" :perPage="1" :speed="600"  :paginationEnabled="true" :autoplay="true" :mouseDrag="true" :autoplayTimeout="200">
                            <slide>
                                <div class="box-two mt-5">
                                    <div>
                                        <img src="../../assets/photos/01.png" alt="">
                                    </div>
                                    <h1 class="text-white mt-3">Dedicated and VIP Hosting</h1>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae, illo non totam adipisci excepturi aliquid quam <br>quaerat deleniti dolore nulla error, maiores asperiores</p>
                                </div>
                            </slide>
                            <slide>
                                <div class="box-two mt-5">
                                    <div>
                                        <img src="../../assets/photos/02.png" alt="">
                                    </div>
                                    <h1 class="text-white mt-3">Dedicated and VIP Hosting</h1>
                                    <p>Flathost is a bootstrap based responsive minimal, flat and afforable hosting template with easy customization and great support</p>
                                    <div class="buttons">
                                        <button class="btn btn-primary"><router-link to="/featuers">Explore Features</router-link></button>
                                        <button class="btn btn-success"><router-link to="/pricing">Plans And Pricing</router-link></button>
                                    </div>                                    
                                </div>
                            </slide>
                            <slide>
                                <div class="box-two mt-5">
                                    <div>
                                        <img src="../../assets/photos/03.png" alt="">
                                    </div>
                                    <h1 class="text-white mt-3">Dedicated and VIP Hosting</h1>
                                    <p>Flathost is a bootstrap based responsive minimal, flat and afforable hosting template with easy customization and great support</p>
                                </div>
                            </slide>                                                      
                        </carousel>
                    </div>
                </div>
            </div>
        </div>

        <!-- CompContent -->

        <CompContent/>
    </div>
    <!-- CompContent -->
</template>

<script>
import CompContent from './content'
import { Carousel, Slide } from 'vue-carousel';
export default {
    components : {
        Carousel,
        Slide,
        CompContent
    }
}
</script>