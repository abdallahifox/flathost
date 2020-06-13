<template>
    <div>
        <div class="content">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="box-content text-center mb-2">
                            <div class="icon mb-2">
                               <img :src="Icon1" alt="Responsive-imge">
                            </div>
                            <div class="content-header mb-2">
                                Secure & Reliable
                            </div>
                            <div class="title">
                                Flathost servers are having high physical security and power redundancy Your data will be secure with us.
                            </div>                           
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="box-content text-center mb-2">
                            <div class="icon mb-2">
                               <img :src="Icon2" alt="Responsive-imge">
                            </div>
                            <div class="content-header mb-2">
                                Secure & Reliable
                            </div>
                            <div class="title">
                                Flathost servers are having high physical security and power redundancy Your data will be secure with us.
                            </div>                           
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="box-content text-center mb-2">
                            <div class="icon mb-2">
                               <img :src="Icon3" alt="Responsive-imge">
                            </div>
                            <div class="content-header mb-2">
                                Secure & Reliable
                            </div>
                            <div class="title">
                                Flathost servers are having high physical security and power redundancy Your data will be secure with us.
                            </div>                           
                        </div>
                    </div>                                  
                </div>         
            </div>
        </div>
        <Features/>
    </div>
</template>


<script>
import imgOne from './../../assets/photos/icon1.png';
import imgTwo from './../../assets/photos/icon2.png';
import imgThree from './../../assets/photos/icon3.png';
import Features from './../Featuers/featuers'
export default {
    data() {
        return {
            Icon1:imgOne,
            Icon2:imgTwo,
            Icon3:imgThree,
        }
    },
    components : {
        Features
    }
}
</script>