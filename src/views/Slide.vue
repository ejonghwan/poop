<template>
    <div id="mainslider">
        <splide :options="options">
        <splide-slide>
             <p>피태그</p>
            <button>버튼태그</button>
            <a>에이태그</a>
            <h1>에이치태그</h1>
            <span>슬라이드 1번째</span>
            <img src="https://picsum.photos/200/300?grayscale" alt="main1">
        </splide-slide>
        <splide-slide>
             <p>피태그</p>
            <button>버튼태그</button>
            <a>에이태그</a>
            <h1>에이치태그</h1>
            <span>슬라이드 2번째</span>
            <img src="https://picsum.photos/200/300?grayscale" alt="main2">
        </splide-slide>
        <splide-slide>
            <p>피태그</p>
            <button>버튼태그</button>
            <a>에이태그</a>
            <h1>에이치태그</h1>
            <span>슬라이드 3번째</span>
            <img src="https://picsum.photos/200/300?grayscale" alt="main3">
        </splide-slide>
    </splide>
  

   
    </div>
  
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

export default {
    name:"MainSlider",
    components: {
    Splide,
    SplideSlide,
  },
    data() {
      return {
        options: {
        type : 'fade',
        rewind      : true,
        perPage     : 1,
        autoplay    : true,
        pauseOnHover: false,
        arrows      : false,
        dots: true,
        animatedDots: true,
        },
      };
    },
}

</script>