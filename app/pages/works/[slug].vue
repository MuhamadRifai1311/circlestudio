<script setup lang="ts">
import { works } from "~/config/works";
import { computed } from "vue";
const route = useRoute();

const workBySlug = computed(() => {
  return works.find((w) => w.slug === route.params.slug);
});
</script>

<template>
  <div
    class="bg-white text-neutral-900 leading-relaxed"
    v-for="item in workBySlug?.detail"
    :key="item.title"
  >
    <!-- INTRO -->
    <section
      class="grid grid-cols-1 lg:grid-cols-2 gap-16 px-8 lg:px-24 py-24 items-center"
    >
      <div>
        <h1 class="text-4xl font-semibold mb-6">
          {{ item.title }}
        </h1>
        <p class="text-base max-w-lg">
          {{ item.desc }}
        </p>
      </div>

      <div class="flex justify-center lg:justify-end">
        <img
          :src="item.img"
          :alt="item.title"
          class="w-full max-w-md aspect-[10/6] object-cover rounded-xl"
        />
      </div>
    </section>

    <!-- META -->
    <section
      class="grid grid-cols-1 md:grid-cols-3 gap-10 px-8 lg:px-24 py-16 border-t border-neutral-200"
    >
      <div>
        <h4 class="text-xs uppercase text-neutral-400 mb-2">Client</h4>
        <p>{{ item.client }}</p>
      </div>
      <div>
        <h4 class="text-xs uppercase text-neutral-400 mb-2">Service</h4>
        <p>{{ item.service }}</p>
      </div>
      <div>
        <h4 class="text-xs uppercase text-neutral-400 mb-2">Timeline</h4>
        <p>{{ item.timeline }}</p>
      </div>
    </section>

    <!-- STORY -->
    <section
      class="grid grid-cols-1 gap-16 px-8 lg:px-24 pb-32 items-center"
    >
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-5" v-for="value in item?.contents" :key="value.title">
        <div class="flex flex-col justify-center">

          <h2 class="text-2xl font-semibold mb-6">{{ value.title }}</h2>
          <p>
            {{ value.desc }}
          </p>
          
        </div>
        <div class="overflow-hidden rounded-2xl">
          <img
            :src="value.img"
            :alt="value.title"
            class="w-full aspect-[10/6] object-cover rounded-2xl scale-100 hover:scale-110 duration-600 ease-in-out transition-all"
          />
        </div>
      </div>
    </section>

    <!-- STRIP IMAGE -->
    <section class="grid grid-cols-3" >
      <div v-for="data in item?.catalog" :key="data.alt" class="flex">
        <img :src="data.img" :alt="data.alt" class="aspect-square object-cover w-full" />
      </div>
    </section>

    <!-- HIGHLIGHT -->
    <section :class="[`px-8 lg:px-24 py-20  ` , item.color ? item.color : 'bg-black' ]">
      <div class="grid grid-cols-2 gap-8" >
        <img v-for="data in item.catalHead" :key="data.alt"
          :src="data.img" :alt="data.alt"
          class="aspect-[4/5] object-cover rounded-2xl w-full"
        />
      </div>
    </section>
<<<<<<< HEAD

=======
>>>>>>> 6f7d62fe2289ad763e31a2e84e8f16a6792e12ea



  </div>
</template>
