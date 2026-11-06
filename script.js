
/* =====================================
   JAVASCRIPT PONDOK PESANTREN ARROZQIYAH
   ===================================== */

// GANTI DENGAN NOMOR WHATSAPP RESMI
const WA_NUMBER = "6281234567890";

// MENU RESPONSIVE
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

navMenu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
  });
});

// ANIMASI SCROLL
const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealElements.forEach(element => {
  observer.observe(element);
});

// BACK TO TOP
const backTop = document.getElementById("backTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    backTop.classList.add("visible");
  } else {
    backTop.classList.remove("visible");
  }
});

backTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// TAHUN OTOMATIS
document.getElementById("year").textContent =
  new Date().getFullYear();

// GALERI LIGHTBOX
const galleryImages = document.querySelectorAll(".gallery-img");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeLightbox = document.getElementById("closeLightbox");

galleryImages.forEach(image => {
  image.addEventListener("click", () => {
    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt;
    lightbox.classList.add("open");
    document.body.style.overflow = "hidden";
  });
});

function hideLightbox() {
  lightbox.classList.remove("open");
  document.body.style.overflow = "";
}

closeLightbox.addEventListener("click", hideLightbox);

lightbox.addEventListener("click", event => {
  if (event.target === lightbox) {
    hideLightbox();
  }
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    hideLightbox();
  }
});

// FORMULIR PENDAFTARAN WHATSAPP
const registrationForm =
  document.getElementById("registrationForm");

registrationForm.addEventListener("submit", event => {
  event.preventDefault();

  if (!registrationForm.reportValidity()) return;

  const formData = new FormData(registrationForm);

  const message = `
ASSALAMUALAIKUM
PENDAFTARAN SANTRI BARU
PONDOK PESANTREN ARROZQIYAH

Nama Santri: ${formData.get("nama")}
Jenis Kelamin: ${formData.get("gender")}
Tempat/Tanggal Lahir: ${formData.get("ttl") || "-"}
Asal Sekolah: ${formData.get("sekolah") || "-"}
Alamat: ${formData.get("alamat")}
Nama Orang Tua/Wali: ${formData.get("wali")}
Nomor WhatsApp: ${formData.get("wa")}
Pilihan Program: ${formData.get("program") || "-"}
Pesan: ${formData.get("pesan") || "-"}

Mohon informasi mengenai proses
pendaftaran santri baru selanjutnya.

Terima kasih.
`;

  const url =
    `https://wa.me/${6281219870327}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank", "noopener,noreferrer");

  document.getElementById("formStatus").textContent =
    "WhatsApp telah dibuka. Silakan periksa dan kirim pesan pendaftaran.";
});

// TOMBOL WHATSAPP UTAMA
document.getElementById("contactWA").href =
  `https://wa.me/${6281219870327}`;
