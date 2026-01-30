<template>
  <div>
    <nav>
      <img src="/black logo.jpg" alt="Circle Studio" />
      <div>
        <NuxtLink to="/">HOME</NuxtLink>
        <NuxtLink to="/layanan">SERVICES</NuxtLink>
        <NuxtLink to="/works">WORKS</NuxtLink>
      </div>
    </nav>

    <main>
      <slot />
    </main>

    <footer class="site-footer">
      <div class="footer-container">
        <div class="footer-left">
          <img src="/black logo.jpg" alt="Circle Studio" class="footer-logo" />
          <p class="footer-desc">Memberdayakan merek-merek yang berfokus pada pengalaman, perhotelan, dan kuliner untuk menemukan sisi sebenarnya dari perjalanan mereka.</p>
        </div>

        <div class="footer-right">
          <p><strong>E</strong> : hi@circlestudio.com</p>
          <p><strong>P</strong> : +62 877 8000 97792</p>
          <p><strong>Instagram</strong> : circlestudio.id</p>
          <p class="footer-address">Jl. Antapani No.13, Antapani Tengah,<br/>Antapani, Kota Bandung, Jawa Barat 40291</p>
        </div>
      </div>

      <div class="footer-bottom">© 2026 Circle Studio • All rights reserved.</div>
    </footer>
  </div>
</template>

<script setup>
</script>
