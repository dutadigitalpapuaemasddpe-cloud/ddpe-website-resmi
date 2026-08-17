/**
 * DDPE — Konfigurasi sistem berita
 * Edit file ini untuk ganti password, Formspree, atau Supabase.
 */
window.DDPE_NEWS_CONFIG = {
  // Password halaman tulis-berita.html (ganti sebelum publish publik)
  editorPassword: "DDPE2026",

  // Endpoint Formspree (opsional) — notifikasi email saat artikel baru
  formspreeEndpoint: "",

  // Supabase (opsional) — sinkron multi-perangkat
  supabaseUrl: "",
  supabaseAnonKey: "",
  table: "articles"
};
