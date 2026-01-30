<template>
  <section class="hero-carousel">
    <div class="carousel-track" ref="track">
      <div class="carousel-slide" :style="`background-image:url('/18.png')`"><div class="hero-overlay"></div></div>
      <div class="carousel-slide" :style="`background-image:url('/Free Light Wood Storefront Mockup.png')`"><div class="hero-overlay"></div></div>
      <div class="carousel-slide" :style="`background-image:url('/13.png')`"><div class="hero-overlay"></div></div>
      <div class="carousel-slide" :style="`background-image:url('/Artboard 2.png')`"><div class="hero-overlay"></div></div>
    </div>
  </section>

  <section class="circle-section">
    <div class="circle-desc reveal">Circle Studio adalah studio desain kreatif yang berfokus pada pengembangan branding secara menyeluruh. Kami membantu brand membangun identitas yang kuat, konsisten, dan relevan—mulai dari perancangan logo, visual branding, foto produk, hingga pengelolaan media sosial.<br/><br/>Dengan pendekatan strategis dan visual yang matang, Circle Studio hadir sebagai partner kreatif untuk mengubah ide menjadi brand yang bernilai, mudah dikenali, dan siap bersaing di dunia digital.</div>

    <div class="circle-visi reveal">Visi</div>

    <div class="circle-headline reveal">Menjadi studio desain kreatif yang dipercaya dalam membangun brand yang kuat, konsisten, dan berdampak melalui strategi visual dan komunikasi yang terintegrasi.</div>
  </section>

  <section class="misi-section">
    <div class="misi-container">
      <div class="misi-item reveal">
        <span class="misi-label">Misi</span>
        <h2 class="misi-title">Memberikan</h2>
        <p class="misi-text">Solusi branding secara menyeluruh mulai dari perumusan konsep, pengembangan desain, hingga tahap eksekusi yang terintegrasi.</p>
      </div>

      <div class="misi-item reveal">
        <h2 class="misi-title">Menciptakan</h2>
        <p class="misi-text">Identitas visual yang relevan, estetis, dan selaras dengan karakter serta nilai unik dari setiap brand.</p>
      </div>

      <div class="misi-item reveal">
        <h2 class="misi-title">Membantu</h2>
        <p class="misi-text">Klien dalam meningkatkan nilai dan kepercayaan brand melalui visual serta konten yang konsisten dan berkelanjutan.</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const track = ref(null)
let index = 0

onMounted(()=>{
  const slides = track.value.querySelectorAll('.carousel-slide')
  setInterval(()=>{
    index = (index + 1) % slides.length
    track.value.style.transform = `translateX(-${index*100}%)`
  }, 2000)

  const reveals = document.querySelectorAll('.reveal')
  const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{ if(entry.isIntersecting) entry.target.classList.add('active') })
  },{threshold:0.15})
  reveals.forEach(el=>observer.observe(el))
})
</script>
