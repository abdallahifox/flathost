<template>
    <div>
        <div class="single-blog">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="upper-header text-center mb-5">
                            <h1>Our Blog</h1>
                            <p>Latest news and updates from flathost</p>
                        </div>                        
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-9">
                        <div class="blog-box">
                            <div class="box-content">
                                <h3>Managed Hosting vs Dedicated Hosting</h3>
                                <p>Posted By <a href="#">Abdallah Muhammeed</a> on 17 Jul 2013. <a href="#">16 Comment</a></p>
                                <img :src="img" alt="Responsive-image">
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, accusantium impedit! Nemo explicabo laborum tempore officiis non aliquid, atque adipisci, consequatur error voluptatem id obcaecati asperiores corporis ea nam animi.</p>
                                <p>Sed adipiscing faucibus quam, at mollis sapien imperdiet at. Curabitur fringilla eget augue id ullamcorper. Pellentesque et pretium nisl, sit amet condimentum diam. Sed tempor scelerisque magna ut volutpat. Duis laoreet tellus non ipsum vestibulum bibendum. Duis ac leo urna. Suspendisse accumsan erat sed ligula pellentesque tristique. Maecenas volutpat felis libero, eget pretium ipsum condimentum sit amet. Aenean nec fermentum metus. Integer laoreet lectus adipiscing ante molestie, a viverra enim vulputate. Donec ut porta elit. Vestibulum tristique pellentesque quam in euismod. Duis facilisis feugiat rhoncus. Nulla quis diam congue, vulputate nibh et, placerat erat. Proin et enim eleifend, pharetra sem in, adipiscing sapien.</p>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, accusantium impedit! Nemo explicabo laborum tempore officiis non aliquid, atque adipisci, consequatur error voluptatem id obcaecati asperiores corporis ea nam animi.</p>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, accusantium impedit! Nemo explicabo laborum tempore officiis non aliquid, atque adipisci, consequatur error voluptatem id obcaecati asperiores corporis ea nam animi.</p>
                                <p>Sed adipiscing faucibus quam, at mollis sapien imperdiet at. Curabitur fringilla eget augue id ullamcorper. Pellentesque et pretium nisl, sit amet condimentum diam. Sed tempor scelerisque magna ut volutpat. Duis laoreet tellus non ipsum vestibulum bibendum. Duis ac leo urna. Suspendisse accumsan erat sed ligula pellentesque tristique. Maecenas volutpat felis libero, eget pretium ipsum condimentum sit amet. Aenean nec fermentum metus. Integer laoreet lectus adipiscing ante molestie, a viverra enim vulputate. Donec ut porta elit. Vestibulum tristique pellentesque quam in euismod. Duis facilisis feugiat rhoncus. Nulla quis diam congue, vulputate nibh et, placerat erat. Proin et enim eleifend, pharetra sem in, adipiscing sapien.</p>
                            </div>
                        </div>                                            
                    </div>
                    <div class="col-lg-3">
                        <div class="blog-box mb-5">
                            <div class="box-list">
                                <h3>Categories</h3>
                                <ul>
                                    <li>Dedicated Servers</li>
                                    <li>Managed Hosting</li>
                                    <li>News and Updates</li>
                                    <li>New Features</li>
                                    <li>Domian Registration</li>
                                    <li>Server Locations</li>                                    
                                </ul>
                            </div>
                        </div>
                         <div class="blog-box mb-5">
                            <div class="box-list">
                                <h3>Text Widget</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui expedita enim nisi nesciunt beatae perferendis pariatur? Dicta error <br>
                                 <br> quidem voluptate provident, sed amet eaque, aut magnam eos ipsum consequatur nostrum?</p>
                            </div>
                        </div>                       
                        <div class="blog-box mb-5">
                            <div class="box-list">
                                <h3>Archieves</h3>
                                <ul>
                                    <li>May 2013</li>
                                    <li>April 2013</li>
                                    <li>March 2013</li>
                                    <li>February 2013</li>
                                    <li>Jun 2012</li>
                                    <li>December 2012</li>
                                    <li>November 2012</li>
                                    <li>October 2012</li>
                                    <li>September 2012</li>
                                    <li>August 2012</li>                                    
                                </ul>
                            </div>
                        </div>                        
                    </div>                    
                </div>
            </div>
        </div>
    </div>
</template>


<script> 
import BlogIMG from './../../assets/photos/blog2.png'
export default {
    data() {
        return {
            img:BlogIMG
        }
    }
}
</script>