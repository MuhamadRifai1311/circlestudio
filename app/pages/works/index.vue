<script setup>
import { works } from "~/config/works";
</script>
<template>
  <div class="px-5 lg:px-35 py-25">
    <h2 class="text-black text-[24px] lg:text-[48px]">
      Kami membantu merek dalam momen transformasi dan pertumbuhan dengan
      strategi, desain, dan teknologi.
    </h2>
  </div>
  <div class="px-5 lg:px-15 grid grid-cols-2 lg:grid-cols-4 gap-5 py-10 lg:py-20">
    <NuxtLink
      :to="`/works/${value.slug}`"
      v-for="value in works"
      :key="value.slug"
      class="group relative w-full overflow-hidden cursor-pointer transition-all"
    >
      <img
        :src="value.img"
        alt=""
        class="scale-100 group-hover:scale-110 duration-500 ease-in-out object-cover transition-transform"
      />
      <div
        class="hidden lg:absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-500 delay-150 group-hover:opacity-100"
      ></div>
      <p
        class="absolute inset-0 flex items-center justify-center text-white text-lg tracking-wide uppercase opacity-0 translate-y-2 transition-all duration-500 delay-200 group-hover:opacity-100 group-hover:translate-y-0"
      >
        {{ value.title }}
      </p>
    </NuxtLink>
  </div>
</template>
