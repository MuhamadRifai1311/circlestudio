<template>
  <!-- HERO CAROUSEL -->
  <section class="overflow-hidden relative h-screen">
    <div
      ref="track"
      class="flex transition-transform duration-700 ease-in-out h-full"
    >
      <div
        v-for="img in images"
        :key="img"
        class="min-w-full h-full bg-cover bg-center relative"
        :style="`background-image:url('${img}')`"
      >
        <div class="absolute inset-0 bg-black/30"></div>
      </div>
    </div>
  </section>

  <!-- ABOUT -->
  <div class="flex flex-col gap-10 px-30 py-20 w-full">
    <p class="max-w-4xl text-[26px] leading-relaxed text-black">
      Circle Studio adalah studio desain kreatif yang berfokus pada pengembangan
      branding secara menyeluruh. Kami membantu brand membangun identitas yang
      kuat, konsisten, dan relevan—mulai dari perancangan logo, visual branding,
      foto produk, hingga pengelolaan media sosial.
    </p>
    <p class="max-w-4xl text-[26px] leading-relaxed text-black">
      Dengan pendekatan strategis dan visual yang matang, Circle Studio hadir
      sebagai partner kreatif untuk mengubah ide menjadi brand yang bernilai,
      mudah dikenali, dan siap bersaing di dunia digital.
    </p>
  </div>
  <div class="flex flex-col gap-3 px-30 py-20 w-full">
    <div class="flex-start">
      <h2 class="text-2xl font-medium text-red-600">Visi</h2>
    </div>
    <div class="text-black font-bold text-[64px]">
      Menjadi studio desain kreatif yang dipercaya dalam membangun brand yang
      kuat, konsisten, dan berdampak melalui strategi visual dan komunikasi yang
      terintegrasi.
    </div>
  </div>
  <div class="flex flex-col gap-3 px-30 py-20 w-full">
    <div class="flex-start">
      <h2 class="text-2xl font-medium text-red-600">Misi</h2>
    </div>
    <div class="flex gap-10">
      <div class="flex flex-col gap-5 w-96" v-for="value in misi" :key="value.title"> 
        <h2 class="text-red-600 font-medium text-[48px]">{{ value.title }}</h2>
        <p class="text-lg">{{value.desc}}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const images = [
  "/18.png",
  "/Free Light Wood Storefront Mockup.png",
  "/13.png",
  "/Artboard 2.png",
];

const misi = [
  {
    title: "Memberikan",
    desc: "Solusi branding secara menyeluruh mulai dari perumusan konsep, pengembangan desain, hingga tahap eksekusi yang terintegrasi."
  },
  {
    title: "Menciptakan",
    desc: 'Identitas visual yang relevan, estetis, dan selaras dengan karakter serta nilai unik dari setiap brand.'
  },
  {
    title: "Membantu",
    desc: "Klien dalam meningkatkan nilai dan kepercayaan brand melalui visual serta konten yang konsisten dan berkelanjutan."
  }
]

const track = ref(null);
let index = 0;

onMounted(() => {
  setInterval(() => {
    index = (index + 1) % images.length;
    track.value.style.transform = `translateX(-${index * 100}%)`;
  }, 2000);
});
</script>
