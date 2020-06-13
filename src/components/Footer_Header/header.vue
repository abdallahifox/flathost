<template>
    <div>
		<nav class="navbar navbar-expand-lg navbar-light fixed-top">
			<div class="container">	
			  	<a class="navbar-brand" href="/">
                    <img :src="Logo" alt="LogoImg">  
                </a>
			  	<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
			    	<i class="fas fa-bars navbar-toggler-icon" style="color:#fff;"></i>
			  	</button>

			  	<div class="collapse navbar-collapse" id="navbar">
				    <ul class="navbar-nav ml-auto">
				      <li class="nav-item">
				        <router-link class="nav-link" to="/" active-class="active" exact>Home</router-link>
				      </li>
				      <li class="nav-item">
				        <router-link class="nav-link" to="/featuers" active-class="active" exact>features</router-link>
				      </li>
				      <li class="nav-item">
				        <router-link class="nav-link" to="/partners" active-class="active" exact >partners</router-link>
				      </li>
				      <li class="nav-item">
				        <router-link class="nav-link" to="/pricing" active-class="active" exact >pricing</router-link>
				      </li>
                      <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" style="cursor:pointer;" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Blog
                        </a>
                        <div class="dropdown-menu" :class="{show : isDropDownOpen}"
					   		@click.prevent="isDropDownOpen = !isDropDownOpen"
					    	aria-labelledby="navbarDropdownMenuLink">
                            <router-link class="dropdown-item" to="/blog">Blog</router-link>
                            <router-link class="dropdown-item" to="/single-blog">Single Blog Page</router-link>
                        </div>
                      </li>                      
				      <li class="nav-item">
				        <router-link class="nav-link" to="/contact" active-class="active" exact >contact</router-link>
				      </li>	
				      <li class="nav-item">
				        <router-link class="nav-link" to="/login" active-class="active" exact >Login</router-link>
				      </li>
				      <li class="nav-item">
				        <router-link class="nav-link btn btn-success" to="/404" >Sing Up</router-link>
				      </li>		      			      			      		      			      			      			      
				    </ul>
			  	</div>
		  	</div>
		</nav>
               
    </div>
</template>

<script>
import LogoIMG from './../../assets/photos/logo.png'
export default {
    data() {
        return {
			Logo:LogoIMG,
			isDropDownOpen: false
        }
    },
}
</script>