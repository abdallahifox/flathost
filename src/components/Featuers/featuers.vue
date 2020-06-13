<template>
    <div>
        <div class="featuers">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="upper text-center mb-5">
                            <h2>More Features</h2>
                            <p>You will get lot of features with flathost</p>
                        </div>                       
                    </div>
                    <div class="col-lg-6 col-md-6 mb-3" v-for="(post ,index) in posts" :key="index">
                        <div class="img mb-6">
                            <img :src="post.img" alt="Responsive-img">
                        </div>
                        <div class="post-title">
                            <h3>{{post.upper}}</h3>
                            <p>{{post.title}}</p>                            
                        </div>                      
                    </div>                 
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import FeautersOne from './../../assets/photos/f1.png';
import FeautersTwo from './../../assets/photos/f2.png';
import FeautersThree from './../../assets/photos/f3.png';
import FeautersFour from './../../assets/photos/f4.png';
import FeautersFive from './../../assets/photos/f5.png';
import FeautersSix from './../../assets/photos/f6.png'
export default {
    data() {
        return {
            posts: [
                {
                    img:FeautersOne,
                    upper:'Instant Setup',
                    title:'As soon as you make a successful payment via PayPal or Google Checkout, your web hosting and domain names will be activated immediately. No waiting time whatsoever.'
                },
                {
                    img:FeautersTwo,
                    upper:'Constant Backups',
                    title:'Your hosting account is backed up 4 times a day as standard, with our backup integration. We use dedicated backup servers, providing fast & easy individual file rollback abilities.'
                },
                {
                    img:FeautersThree,
                    upper:'GIT/SVN Support',
                    title:'Web Developers love using version control systems. All of our hosting accounts can use GIT & SVN command line tools on our servers. Simply request SSH access to get started'
                },
                {
                    img:FeautersFour,
                    upper:'280+ Install Scripts',
                    title:'All our hosting accounts allow you to install popular software such as Wordpress, Drupal, Joolma and Magento in one easy step. Upgrading your software is just as easy!'
                },
                {
                    img:FeautersFive,
                    upper:'cPanel Included',
                    title:'All hosting accounts come with the latest version of cPanel. This makes life easy for you to do routine tasks such as setting up email addresses and managing MySQL databases..'
                },
                {
                    img:FeautersSix,
                    upper:'Latest PHP & MySQL',
                    title:'Our network runs the latest stable and secure versions of PHP & MySQL. We also implement strict security and firewall rules protecting your website from unwanted visitors 24/7.'
                },                                                                                
            ]
        }
    },
}
</script>