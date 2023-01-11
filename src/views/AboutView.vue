<template>
    <div>
        About
        <ListParent />
    </div>
    <br><br><br>
     
      slide1
      <Splide :options="{ 
        rewind: true,

        }" aria-label="My Favorite Images">
        <SplideSlide>
          <img src="https://picsum.photos/seed/picsum/200/300" alt="Sample 1">
          <button></button>
        </SplideSlide>
        <SplideSlide>
          <img src="https://picsum.photos/seed/picsum/200/300" alt="Sample 2">
        </SplideSlide>
        <SplideSlide>
          <img src="https://picsum.photos/seed/picsum/200/300" alt="Sample 2">
        </SplideSlide>
        <SplideSlide>
          <img src="https://picsum.photos/seed/picsum/200/300" alt="Sample 2">
        </SplideSlide>
        <SplideSlide>
          <img src="https://picsum.photos/seed/picsum/200/300" alt="Sample 2">
        </SplideSlide>
      </Splide>

      <br><br><br>
      slide2
      <Splide :options="{ 
        rewind: true,
        }" aria-label="My Favorite Images">
        <SplideSlide>
           <p>피태그</p>
            <button>버튼태그</button>
            <a>에이태그</a>
            <h1>에이치태그</h1>
            <span>슬라이드 1번째</span>
          <img src="https://picsum.photos/seed/picsum/200/300" alt="Sample 1">
          
        </SplideSlide>
        <SplideSlide>
           <p>피태그</p>
            <button>버튼태그</button>
            <a>에이태그</a>
            <h1>에이치태그</h1>
            <span>슬라이드 2번째</span>
          <img src="https://picsum.photos/seed/picsum/200/300" alt="Sample 2">
        </SplideSlide>
        <SplideSlide>
           <p>피태그</p>
            <button>버튼태그</button>
            <a>에이태그</a>
            <h1>에이치태그</h1>
            <span>슬라이드 3번째</span>
          <img src="https://picsum.photos/seed/picsum/200/300" alt="Sample 2">
        </SplideSlide>
        <SplideSlide>
           <p>피태그</p>
            <button>버튼태그</button>
            <a>에이태그</a>
            <h1>에이치태그</h1>
            <span>슬라이드 4번째</span>
          <img src="https://picsum.photos/seed/picsum/200/300" alt="Sample 2">
        </SplideSlide>
        <SplideSlide>
           <p>피태그</p>
            <button>버튼태그</button>
            <a>에이태그</a>
            <h1>에이치태그</h1>
            <span>슬라이드 5번째</span>
          <img src="https://picsum.photos/seed/picsum/200/300" alt="Sample 2">
        </SplideSlide>
      </Splide>

      <br><br><br>
      slide3 

      <MainSlider />
     
</template>

<script>

import ListParent from '../components/ListParent.vue'
import MainSlider from './Slide.vue'
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';


    export default {
        name: "About",
        components: {
            ListParent,
            Splide,
            SplideSlide,
            MainSlider
        }
    }
</script>