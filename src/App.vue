<template>
  <div>
    <CompHeader/>
      <transition name="slide" mode="out-in">
        <router-view></router-view>
      </transition>
    <CompFooter/>
  </div>
</template>

<script>
import CompHeader from './components/Footer_Header/header'
import CompFooter from './components/Footer_Header/footer'
import CompHome from './components/Home/index'

export default {
  name: 'app',
  components: {
   CompHeader,
   CompFooter,
   CompHome
  }
};
</script>

<style>

@import './assets/css/style.css';

.slide-enter-acitve {
  animation: slide-in 250ms ease-out forwards;
}

.slide-leave-active {
animation: slide-out 250ms ease-out forwards;
}

@keyframes slide-in {
  from {
    transform: translateY(-30px);
    opacity: 0;
  }
  to {
    transform: translateY(0px);
    opacity: 1;
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0px);
    opacity: 1;
  }
  to {
    transform: translateY(-30px);
    opacity: 0;
  }
}
  
</style>


