<script setup>
import { ref, onMounted } from "vue";
import { services } from "~/config/services";

const images = [
  "/18.png",
  "/Free Light Wood Storefront Mockup.png",
  "/13.png",
  "/Artboard 2.png",
];

const track = ref(null);
let index = 0;

onMounted(() => {
  setInterval(() => {
    index = (index + 1) % images.length;
    track.value.style.transform = `translateX(-${index * 100}%)`;
  }, 2000);
});
</script>

<template>
  <div class="px-35 py-25">
    <div
      class="flex flex-col justify-center items-center w-full h-96 gap-3 mb-30"
    >
      <h2 class="text-black font-bold text-[72px]">Rate & Services</h2>
      <p class="text-center text-[17px] leading-10 px-30">
        Di Circle Studi, setiap proyek berangkat dari kejelasan tujuan,
        identitas, dan arah brand. Kami membantu brand membangun fondasi visual
        dan komunikasi yang konsisten, relevan, dan berkelanjutan. Setiap
        layanan dirancang secara khusus, karena setiap brand memiliki perjalanan
        yang berbeda.
      </p>
    </div>
    <div
      class="flex items-center justify-between border-b border-t py-8 border-gray-200 mb-30"
    >
      <div
        class=""
        v-for="value in [
          'Brand strategy',
          'Product Photography',
          'Social Media Management',
        ]"
        :key="value"
      >
        <h2 class="text-3xl font-bold">{{ value }}</h2>
      </div>
    </div>
    <div
      class="flex flex-col gap-10 text-black"
      v-for="value in services"
      :key="value.desc"
    >
      <div class="py-20 border-b border-gray-200">
        <h2 class="text-[52px]">{{ value.title }}</h2>
      </div>
      <div class="grid grid-cols-3">
        <div class="flex flex-col gap-3 col-span-2">
          <div class="flex items-center gap-2">
            <div class="bg-red-500 rounded-full h-3 w-3"></div>
            <h2 class="text-[20px] font-bold">{{ value.title2 }}</h2>
          </div>
          <p class="text-black/50 w-3/4">{{ value.desc }}</p>
        </div>
        <div class="flex flex-col gap-2">
          <h2 class="font-bold text-black">IDR.{{ value.price }}</h2>
          <button class="text-center border w-fit text-[12px] px-1">
            {{ value.button }}
          </button>
          <p class="text-black/50 text-xs w-3/4">{{ value.desc2 }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
