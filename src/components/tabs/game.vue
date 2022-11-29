<template>
  <div class="lottie" id="lottie">
    <svg viewBox="0 0 400 200">
      <text x="0" y="70%" id="timelinetext">GAME</text>
    </svg>
<!--    <Vue3Lottie :animationData="DogJSON" :height="200" :width="200" />-->
  </div>
</template>

<!--<script setup lang="ts">-->
<!--import { Vue3Lottie } from 'vue3-lottie'-->
<!--import 'vue3-lottie/dist/style.style'-->
<!--const DogJSON: any = './uav2.json'-->
<!--</script>-->

<style lang="scss" scoped>
 .lottie{
   height: 400px;
   display: flex;
   align-items: center;
   justify-content: center;
 }
 svg {
   position: fixed;
   width: 400px;
   height: 200px;
   margin: auto;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
 }

 svg text {
   text-transform: uppercase;
   letter-spacing: 10px;
   font-size: 128px;
   animation: stroke 5s infinite alternate;
 }
 @keyframes stroke {
   0% {
     fill: rgba(72, 138, 20, 0);
     stroke: rgba(54, 95, 160, 1);
     stroke-dashoffset: 25%;
     stroke-dasharray: 0 50%;
     stroke-width: 0.8;
   }
   70% {
     fill: rgba(72, 138, 20, 0);
     stroke: rgba(54, 95, 160, 1);
     stroke-width: 1.2;
   }
   85% {
     fill: rgba(72, 138, 20, 0);
     stroke: rgba(54, 95, 160, 1);
     stroke-width: 1.5;
   }
   95%,
   100% {
     fill: rgba(72, 138, 204, 1);
     stroke: rgba(54, 95, 160, 0);
     stroke-dashoffset: -25%;
     stroke-dasharray: 50% 0;
     stroke-width: 0;
   }
 }

 #g-scroll {
   width: 100vw;
   height: 300vh;
 }

 @supports (animation-timeline: works) {
   @scroll-timeline change {
     source: auto;
     orientation: vertical;
   }

   #timelinetext {
     animation: stroke 5s both;
     animation-timeline: change;
   }
 }
</style>
