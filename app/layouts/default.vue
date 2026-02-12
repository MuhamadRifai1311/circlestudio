<script setup lang="ts">
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '~/components/ui/dropdown-menu'

import { Menu } from 'lucide-vue-next';
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <!-- NAVBAR -->
    <nav
      class="bg-white fixed z-10 w-full flex items-center justify-between px-4 lg:px-8 py-4 border-b border-gray-200"
    >
    <NuxtLink to="/">
      <img src="/black logo.jpg" alt="Circle Studio" class="h-5 lg:h-10"  />
    </NuxtLink>
      <div class="hidden lg:flex gap-6 text-sm tracking-wide">
        <NuxtLink to="/" class="hover:opacity-60">HOME</NuxtLink>
        <NuxtLink to="/layanan" class="hover:opacity-60">SERVICES</NuxtLink>
        <NuxtLink to="/works" class="hover:opacity-60">WORKS</NuxtLink>
      </div>
      <div class="block lg:hidden">
        <DropdownMenu >
          <DropdownMenuTrigger as-child><Menu/></DropdownMenuTrigger>
          <DropdownMenuContent align="start" class="fixed -left-87 top-3 w-screen rounded-none border-t-1">
            <NuxtLink to="/" class="hover:opacity-60"><DropdownMenuItem>HOME</DropdownMenuItem></NuxtLink>
            <NuxtLink to="/layanan" class="hover:opacity-60"><DropdownMenuItem>SERVICES</DropdownMenuItem></NuxtLink>
            <NuxtLink to="/works" class="hover:opacity-60"><DropdownMenuItem>WORKS</DropdownMenuItem></NuxtLink>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>

    <!-- CONTENT -->
    <main class="flex-1">
      <slot />
    </main>

    <!-- FOOTER -->
    <footer class="border-t border-gray-200 mt-16">
      <div class="max-w-full lg:max-w-6xl mx-auto px-8 py-15 flex flex-col lg:flex-row justify-between gap-8">
        <div class=" lg:w-1/3">
          <img src="/black logo.jpg" class="h-7 lg:h-10 mb-4" />
          <p class="text-sm lg:text-sm leading-relaxed text-gray-600">
            Circle Studio adalah studio desain kreatif yang berfokus pada
            pengembangan branding secara menyeluruh. Kami membantu brand
            membangun identitas yang kuat, konsisten, dan relevan—mulai dari
            perancangan logo, visual branding, foto produk, hingga pengelolaan
            media sosial.
          </p>
        </div>

        <div class="text-sm text-gray-700 space-y-1">
          <p><strong>E</strong> : hi@circlestudio.com</p>
          <p><strong>P</strong> : +62 877 8000 97792</p>
          <p><strong>Instagram</strong> : circlestudio.id</p>
          <p class="mt-4 text-gray-600">
            Jl. Antapani No.13, Antapani Tengah,<br />
            Antapani, Kota Bandung, Jawa Barat 40291
          </p>
        </div>
      </div>

      <div class="text-center text-xs text-gray-500 py-4">
        © 2026 Circle Studio • All rights reserved.
      </div>
    </footer>
  </div>
</template>
