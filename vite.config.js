import { resolve } from 'path';
import { defineConfig } from 'vite';
import { sync as glob } from 'fast-glob';

// --- BAGIAN OTOMATISASI DIMULAI DI SINI ---

// 1. Temukan semua file .html di dalam folder src/pages
const pageFiles = glob('src/pages/**/*.html');

// 2. Buat objek input untuk Rollup/Vite dari file yang ditemukan
const pageInputs = pageFiles.reduce((acc, file) => {
  // Buat nama entri yang unik dari path file
  // contoh: 'src/pages/admin/dashboard.html' -> 'admin-dashboard'
  const name = file.replace('src/pages/', '').replace('.html', '').replace(/\//g, '-');
  
  acc[name] = resolve(__dirname, file);
  return acc;
}, {});

// --- BAGIAN OTOMATISASI SELESAI ---

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        // 3. Gabungkan halaman utama dengan semua halaman yang ditemukan secara otomatis
        main: resolve(__dirname, 'src/index.html'), // Halaman utama kita di src/index.html
        ...pageInputs,
      },
    },
    // Pastikan output build diletakkan di folder 'dist' di root proyek, bukan di dalam 'src'
    outDir: '../dist',
  },
  // Beritahu Vite bahwa root proyek kita ada di dalam 'src'
  root: 'src',
});