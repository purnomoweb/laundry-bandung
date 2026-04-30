// ==========================================
// DATABASE HARGA LAUNDRY (MUDAH DIEDIT)
// ==========================================
const priceDatabase = [
    {
        title: "Daily Kiloan",
        subtitle: "(Min. 3kg)",
        icon: "fa-basket-shopping",
        items: [
            // Format: name: "Nama Item", unit: "/kg", reguler: Harga, oneday: Harga, express: Harga, quick: Harga
            { name: "Cuci Kering Lipat", unit: "/kg", reguler: 5000, oneday: 8000, express: 10000, quick: 15000 },
            { name: "Cuci Kering Gosok", unit: "/kg", reguler: 8000, oneday: 12000, express: 16000, quick: 25000 },
            { name: "Setrika Kiloan", unit: "/kg", reguler: 5000, oneday: 10000, express: 12000, quick: 15000 }
        ]
    },
    {
        title: "Premium Satuan",
        subtitle: "",
        icon: "fa-user-tie",
        items: [
            // Gunakan null jika layanan tersebut tidak tersedia di kecepatan tertentu
            { name: "Tops <span class='text-[10px] text-gray-400 font-light'>(Kemeja/Batik)</span>", unit: "", reguler: 15000, oneday: 25000, express: 30000, quick: null },
            { name: "Bottoms <span class='text-[10px] text-gray-400 font-light'>(Celana/Rok)</span>", unit: "", reguler: 20000, oneday: 30000, express: 40000, quick: null },
            { name: "Alat Ibadah <span class='text-[10px] text-gray-400 font-light'>(Mukena/Sarung/Sajadah)</span>", unit: "", reguler: 10000, oneday: 15000, express: 20000, quick: null },
            { name: "Suits <span class='text-[10px] text-gray-400 font-light'>(Jaket/Blazer/Jas)</span>", unit: "", reguler: 30000, oneday: 45000, express: 60000, quick: null },
            { name: "Jaket <span class='text-[10px] text-gray-400 font-light'>(Jeans/Hoodie/Sweater)</span>", unit: "", reguler: 30000, oneday: 45000, express: 60000, quick: null },
            { name: "2pcs Suit / Jumpsuit", unit: "", reguler: 100000, oneday: null, express: null, quick: null },
            { name: "Dress <span class='text-[10px] text-gray-400 font-light'>(Baju Muslim/Long Dress)</span>", unit: "", reguler: 30000, oneday: 45000, express: 65000, quick: null },
            { name: "Gown <span class='text-[10px] text-gray-400 font-light'>(Gaun Pesta/Gaun Variasi)</span>", unit: "", reguler: 70000, oneday: null, express: null, quick: null },
            { name: "Coat <span class='text-[10px] text-gray-400 font-light'>(Mantel/Jaket Tebal)</span>", unit: "", reguler: 80000, oneday: null, express: null, quick: null }
        ]
    },
    {
        title: "Households",
        subtitle: "",
        icon: "fa-bed",
        items: [
            { name: "Bed Cover Single", unit: "", reguler: 25000, oneday: 40000, express: 50000, quick: null },
            { name: "Bed Cover Double", unit: "", reguler: 40000, oneday: 60000, express: 80000, quick: null },
            { name: "Pillow Case <span class='text-[10px] text-gray-400 font-light'>(Sarung Bantal)</span>", unit: "", reguler: 5000, oneday: 7000, express: 10000, quick: null },
            { name: "Blanket <span class='text-[10px] text-gray-400 font-light'>(Selimut)</span>", unit: "", reguler: 20000, oneday: 30000, express: 40000, quick: null },
            { name: "Bed Sheet Single <span class='text-[10px] text-gray-400 font-light'>(Sprei)</span>", unit: "", reguler: 15000, oneday: 25000, express: 30000, quick: null },
            { name: "Bed Sheet Double <span class='text-[10px] text-gray-400 font-light'>(Sprei)</span>", unit: "", reguler: 20000, oneday: 30000, express: 40000, quick: null },
            { name: "Doormats <span class='text-[10px] text-gray-400 font-light'>(Keset)</span>", unit: "", reguler: 15000, oneday: 25000, express: 30000, quick: null },
            { name: "Tablecloth <span class='text-[10px] text-gray-400 font-light'>(Taplak Meja)</span>", unit: "", reguler: 15000, oneday: 20000, express: 30000, quick: null },
            { name: "Towel <span class='text-[10px] text-gray-400 font-light'>(Handuk)</span>", unit: "", reguler: 10000, oneday: 15000, express: 20000, quick: null }
        ]
    },
    {
        title: "Shoes & Bags",
        subtitle: "",
        icon: "fa-shoe-prints fa-bag-shopping",
        items: [
            { name: "Nylon, Canvas, Rubber", unit: "", reguler: 40000, oneday: null, express: null, quick: null },
            { name: "Leather & Suede", unit: "", reguler: 50000, oneday: null, express: null, quick: null },
            { name: "Tas Non-Leather <span class='text-[10px] text-gray-400 font-light'>(Kecil)</span>", unit: "", reguler: 50000, oneday: null, express: null, quick: null },
            { name: "Tas Non-Leather <span class='text-[10px] text-gray-400 font-light'>(Besar)</span>", unit: "", reguler: 70000, oneday: null, express: null, quick: null },
            { name: "Tas Leather <span class='text-[10px] text-gray-400 font-light'>(Kecil) 7-10 Hari</span>", unit: "", reguler: 100000, oneday: null, express: null, quick: null },
            { name: "Tas Leather <span class='text-[10px] text-gray-400 font-light'>(Besar) 7-10 Hari</span>", unit: "", reguler: 120000, oneday: null, express: null, quick: null }
        ]
    }
];

// Fungsi untuk merubah angka menjadi format Rupiah
function formatRupiah(number) {
    return "Rp " + number.toLocaleString('id-ID');
}

// Fungsi untuk merender HTML dari Database
function renderPricelist() {
    // Pengaturan warna per tab
    const tabsData = [
        { id: 'tab-reguler', key: 'reguler', colorClass: 'text-blue-600', iconClass: 'text-blue-500' },
        { id: 'tab-oneday', key: 'oneday', colorClass: 'text-orange-500', iconClass: 'text-orange-500' },
        { id: 'tab-express', key: 'express', colorClass: 'text-red-500', iconClass: 'text-red-500' },
        { id: 'tab-quick', key: 'quick', colorClass: 'text-purple-500', iconClass: 'text-purple-500' }
    ];

    tabsData.forEach(tab => {
        const container = document.getElementById(tab.id);
        if (!container) return;
        
        let htmlContent = '<div class="grid grid-cols-1 lg:grid-cols-2 gap-6">';
        
        priceDatabase.forEach(category => {
            const allItems = category.items;
            
            if (allItems.length > 0) {
                // PERBAIKAN: Memecah string icon (jika ada lebih dari 1) dan menyejajarkannya
                const iconsHtml = category.icon.split(' ').map(ic => `<i class="fa-solid ${ic}"></i>`).join('');

                htmlContent += `
                <div class="bg-gray-50 border border-gray-200 rounded-2xl p-6">
                    <h4 class="font-bold text-brand-dark mb-4 border-b border-gray-200 pb-2 flex items-center">
                        <span class="${tab.iconClass} mr-2 flex gap-1.5 text-lg">${iconsHtml}</span>
                        <span class="flex-1">
                            ${category.title} 
                            ${category.subtitle ? `<span class="text-[10px] text-gray-400 font-normal ml-1">${category.subtitle}</span>` : ''}
                        </span>
                    </h4>
                    <div class="space-y-3">
                `;
                
                allItems.forEach(item => {
                    const isAvailable = item[tab.key] !== null;
                    const opacityClass = isAvailable ? '' : 'opacity-60 bg-gray-50/50';
                    
                    let priceDisplay = '';
                    if (isAvailable) {
                        priceDisplay = `<span class="text-sm font-bold ${tab.colorClass} shrink-0 whitespace-nowrap text-right">${formatRupiah(item[tab.key])}${item.unit ? `<span class="text-[10px] text-gray-400 font-normal ml-1">${item.unit}</span>` : ''}</span>`;
                    } else {
                        priceDisplay = `<span class="text-xs font-medium text-gray-400 italic shrink-0 whitespace-nowrap text-right">- Tidak Tersedia -</span>`;
                    }

                    htmlContent += `
                        <div class="flex justify-between items-center bg-white p-3 rounded-xl shadow-sm border border-gray-100 hover:border-gray-300 transition gap-3 ${opacityClass}">
                            <span class="text-[13px] font-semibold text-gray-700 flex-1 leading-snug">${item.name}</span>
                            ${priceDisplay}
                        </div>
                    `;
                });
                
                htmlContent += `</div></div>`;
            }
        });
        
        htmlContent += '</div>';
        
        container.innerHTML = htmlContent;
    });
}

// ==========================================
// DATABASE & LOGIKA TESTIMONI (GOOGLE MAPS)
// ==========================================
const reviews = [
    {
        name: "Anita Wijaya",
        rating: 5,
        time: "Seminggu yang lalu",
        text: "Layanan terbaik untuk wisatawan di Bandung! Baju kotor dijemput ke hotel dan balik sudah rapi wangi dalam hitungan jam.",
        label: "Local Guide"
    },
    {
        name: "Budi Setiawan",
        rating: 5,
        time: "Sebulan yang lalu",
        text: "Puas banget sama paket Express-nya. Cuma 6 jam beneran kelar. Kurirnya ramah dan bisa bayar pake QRIS di lobi hotel.",
        label: "Local Guide"
    },
    {
        name: "Siska Pratama",
        rating: 5,
        time: "3 hari yang lalu",
        text: "Cucian wangi banget dan gak bau apek. Packingnya rapi, bedcover double saya jadi kayak baru lagi. Recomended!",
        label: ""
    },
    {
        name: "Rian Hidayat",
        rating: 4,
        time: "2 minggu yang lalu",
        text: "Sangat membantu buat yang lagi staycation di Bandung. Proses booking lewat WA cepat banget responnya.",
        label: "Local Guide"
    }
];

function renderTestimonials() {
    const track = document.getElementById('marquee-track');
    if (!track) return;

    // Template HTML kartu ulasan tanpa foto profil
    const createCard = (review) => `
        <div class="google-review-card">
            <div class="mb-3">
                <h5 class="text-sm font-bold text-gray-800 flex items-center gap-1">
                    ${review.name} ${review.label ? `<i class="fa-solid fa-circle-check text-blue-500 text-[10px]"></i>` : ''}
                </h5>
                <p class="text-[10px] text-gray-400 font-light">${review.label ? 'Local Guide • ' : ''}${review.time}</p>
            </div>
            <div class="flex text-yellow-400 text-[10px] mb-2">
                ${Array(review.rating).fill('<i class="fa-solid fa-star"></i>').join('')}
            </div>
            <p class="text-[12px] text-gray-600 leading-relaxed font-light">"${review.text}"</p>
        </div>
    `;

    // Gabungkan semua review menjadi satu string panjang
    const content = reviews.map(createCard).join('');

    // Masukkan dua kali (Double content) agar loop tidak terputus di akhir
    track.innerHTML = content + content;
}

// ==========================================
// 11. HOTEL LOGO MARQUEE (Infinite Scroll)
// ==========================================

// Data Hotel
const hotelData = [
    { src: "Assets/Hotel/amaris.png", alt: "Amaris Hotel" },
    { src: "Assets/Hotel/aston-tropicana.png", alt: "Aston Tropicana" },
    { src: "Assets/Hotel/courtyard.png", alt: "Courtyard by Marriott" },
    { src: "Assets/Hotel/fave-cihampelas.png", alt: "Favehotel Cihampelas" },
    { src: "Assets/Hotel/grand-tjokro.png", alt: "Grand Tjokro" },
    { src: "Assets/Hotel/hemangini.png", alt: "Hemangini Hotel" },
    { src: "Assets/Hotel/hilton.png", alt: "Hilton Bandung" },
    { src: "Assets/Hotel/moritz.png", alt: "Moritz Hotel" },
    { src: "Assets/Hotel/moxy.png", alt: "Moxy Bandung" },
    { src: "Assets/Hotel/novotel.png", alt: "Novotel Bandung" },
    { src: "Assets/Hotel/parahyangan-golf.png", alt: "Parahyangan Golf" },
    { src: "Assets/Hotel/prime-park.png", alt: "Prime Park Hotel" },
    { src: "Assets/Hotel/promenade.png", alt: "Hotel Promenade" },
    { src: "Assets/Hotel/savoy-homann.png", alt: "Savoy Homann" },
    { src: "Assets/Hotel/sensa.png", alt: "Sensa Hotel" },
    { src: "Assets/Hotel/serela.png", alt: "Serela Hotel" },
    { src: "Assets/Hotel/travello.png", alt: "Travello Hotel" },
    { src: "Assets/Hotel/zest.png", alt: "Zest Hotel" },
    { src: "Assets/Hotel/hemangini.png", alt: "Hemangini Hotel" }, // Data ganda dari sebelumnya tetap dipertahankan
];

const trackEl = document.getElementById('hotel-track');

if (trackEl) {
    let logoHTML = '';
    
    // Loop untuk membuat kotak logo menggunakan hotelData
    hotelData.forEach(hotel => {
        // Perhatikan perubahan pada pemanggilan ${hotel.src} dan ${hotel.alt}
        logoHTML += `
            <div class="flex-shrink-0 w-32 md:w-40 h-16 md:h-20 rounded-xl flex items-center justify-center p-3 hover:opacity-100 transition-all duration-300">
                <img src="${hotel.src}" alt="${hotel.alt}" class="max-h-full max-w-full object-contain">
            </div>
        `;
    });

    // Menggandakan data (print 2 kali) agar animasi scroll tidak putus
    trackEl.innerHTML = logoHTML + logoHTML;
}

// Tambahkan ke event listener DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    renderPricelist(); // Fungsi harga sebelumnya
    renderTestimonials(); // Fungsi testimoni baru
});

// Jalankan fungsi render saat website selesai diload
document.addEventListener('DOMContentLoaded', renderPricelist);

// 1. Inisialisasi Animasi Scroll (AOS)
AOS.init({ once: true, offset: 50 });

// 2. Toggle Menu Mobile (Smooth Animation & Change Icon)
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenuIcon = mobileMenuBtn.querySelector('i'); // Mengambil elemen <i> icon di dalam tombol

mobileMenuBtn.addEventListener('click', () => {
    // Menukar kelas menu agar terbuka/tertutup
    mobileMenu.classList.toggle('max-h-0');
    mobileMenu.classList.toggle('opacity-0');
    mobileMenu.classList.toggle('max-h-96');
    mobileMenu.classList.toggle('opacity-100');

    // Menukar icon garis tiga menjadi tanda silang (dan sebaliknya)
    mobileMenuIcon.classList.toggle('fa-bars');
    mobileMenuIcon.classList.toggle('fa-xmark');
});

// Fungsi untuk menutup menu saat salah satu link diklik
function toggleMenu() { 
    // Sembunyikan menu
    mobileMenu.classList.add('max-h-0', 'opacity-0'); 
    mobileMenu.classList.remove('max-h-96', 'opacity-100'); 
    
    // Kembalikan icon menjadi garis tiga
    mobileMenuIcon.classList.add('fa-bars');
    mobileMenuIcon.classList.remove('fa-xmark');
}

// 3. Logika Tabs Menu Pricelist (Dengan Warna Dinamis)
function openPricelistTab(evt, tabName, bgColorClass, borderColorClass) {
    // Sembunyikan semua konten tab
    const tabcontent = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    
    // Reset semua tombol tab ke style default (Putih/Abu)
    const tablinks = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < tablinks.length; i++) {
        // Hapus warna aktif
        tablinks[i].classList.remove('bg-blue-500', 'bg-orange-500', 'bg-red-500', 'bg-purple-500', 'text-white', 'border-blue-500', 'border-orange-500', 'border-red-500', 'border-purple-500', 'shadow-md');
        // Tambahkan style default
        tablinks[i].classList.add('bg-white', 'text-gray-600', 'border-gray-200');
    }
    
    // Tampilkan konten tab yang dipilih
    document.getElementById(tabName).style.display = "block";
    
    // Terapkan warna spesifik ke tombol yang di-klik
    const clickedBtn = evt.currentTarget;
    clickedBtn.classList.remove('bg-white', 'text-gray-600', 'border-gray-200');
    clickedBtn.classList.add(bgColorClass, 'text-white', borderColorClass, 'shadow-md');
}

// 4. Logika Accordion FAQ
function toggleFaq(button) {
    const content = button.nextElementSibling;
    const icon = button.querySelector('.faq-icon');
    content.classList.toggle('open');
    if (content.classList.contains('open')) {
        icon.classList.add('rotate-180');
    } else {
        icon.classList.remove('rotate-180');
    }
}

// 5. Logika Modal Pop Up
function openModal(id) {
    const modal = document.getElementById(id);
    modal.classList.remove('hidden');
    setTimeout(() => {
        modal.children[0].classList.remove('scale-95');
        modal.children[0].classList.add('scale-100');
    }, 10);
}

function closeModal(id) {
    const modal = document.getElementById(id);
    modal.children[0].classList.remove('scale-100');
    modal.children[0].classList.add('scale-95');
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 200); 
}

// 6. Logika Custom Dropdown Formulir
function toggleDropdown(id) {
    document.querySelectorAll('ul[id^="drop-"]').forEach(el => {
        if(el.id !== id) el.classList.add('hidden');
    });
    const dropdown = document.getElementById(id);
    dropdown.classList.toggle('hidden');
}

function selectOption(inputId, value) {
    const input = document.getElementById(inputId);
    input.value = value;
    
    const textSpan = document.getElementById('text-' + inputId);
    textSpan.textContent = value;
    textSpan.classList.remove('text-gray-400');
    textSpan.classList.add('text-brand-dark', 'font-medium');

    document.getElementById('drop-' + inputId).classList.add('hidden');
}

// Menutup dropdown dan modal jika klik di area luar
window.onclick = function(event) {
    if (event.target.id === 'modalSnk') closeModal('modalSnk');
    if (event.target.id === 'modalPrivasi') closeModal('modalPrivasi');

    if (!event.target.closest('.custom-dropdown')) {
        document.querySelectorAll('ul[id^="drop-"]').forEach(el => {
            el.classList.add('hidden');
        });
    }
}

// 7. Handle Submit Form ke WhatsApp
function handleOrder(e) {
    e.preventDefault();
    
    const nama = document.getElementById('nama').value;
    const alamat = document.getElementById('alamat').value;
    const wa = document.getElementById('wa').value;
    const waktu = document.getElementById('waktu').value;
    
    const paket = document.getElementById('paket').value;
    const layanan = document.getElementById('layanan').value;
    const proses = document.getElementById('proses').value;
    const berharga = document.getElementById('berharga').value;
    const tas = document.getElementById('tas').value;
    const luntur = document.getElementById('luntur').value;
    
    // Validasi Manual Dropdown
    if(!paket) return alert("Silakan Pilih Paket Kiloan terlebih dahulu.");
    if(!layanan) return alert("Silakan Pilih Layanan Kecepatan terlebih dahulu.");
    if(!proses) return alert("Silakan Pilih Proses Cuci terlebih dahulu.");
    if(!berharga) return alert("Silakan Pilih Ada Barang Berharga terlebih dahulu.");
    if(!tas) return alert("Silakan Pilih opsi Tas Cucian terlebih dahulu.");
    if(!luntur) return alert("Silakan Pilih opsi Ada Yang Luntur terlebih dahulu.");

    const satuan = document.getElementById('satuan').value || "-";
    const jumlah = document.getElementById('jumlah').value;
    const catatan = document.getElementById('catatan').value || "-";

    const adminNum = "6285187270055"; 

    let msg = `Form Pickup laundrybandung.com%2C%0A%0A`;
    msg += `*IDENTITAS*%0A`;
    msg += `- Nama Lengkap : ${nama}%0A`;
    msg += `- Alamat Pickup: (sebutkan no kamar jika di kost/hotel) : ${alamat}%0A`;
    msg += `- No. WhatsApp : ${wa}%0A`;
    msg += `- Waktu Pickup: ${waktu}%0A%0A`;
    
    msg += `*DETAIL CUCIAN*%0A`;
    msg += `- Paket Kiloan : ${paket}%0A`;
    msg += `- Cuci Satuan: ${satuan}%0A`;
    msg += `- Jumlah: ${jumlah}%0A`;
    msg += `- Proses Cuci: ${proses}%0A`;
    msg += `- Ada Barang Berharga: ${berharga}%0A`;
    msg += `- Tas Cucian: ${tas}%0A`;
    msg += `- Ada Yang Luntur : ${luntur}%0A`;
    msg += `- Layanan : ${layanan}%0A`;
    msg += `- Catatan (Jika ada) : ${catatan}%0A%0A`;
    
    msg += `*PERINGATAN*:%0A`;
    msg += `Dengan order artinya *menyetujui Syarat dan Ketentuan yang berlaku*. Pembayaran 100% *Cashless*. Estimasi waktu dimulai setelah pembayaran lunas. Kami tidak bertanggung jawab atas transfer di luar sistem resmi. Komplain wajib *Video Unboxing*.`;

    window.open(`https://api.whatsapp.com/send/?phone=${adminNum}&text=${msg}`, '_blank');
}

// ==========================================
// 10. FAKE SALES NOTIFICATION (FOMO)
// ==========================================
const notifNames = ["Budi", "Siska", "Rian", "Anita", "Dimas", "Putri", "Hendra", "Maya", "Dinda", "Reza", "Tari", "Kiki"];

// Daftar hotel yang sudah disesuaikan dengan database logo hotel
const notifLocations = [
    "Amaris Hotel", "Aston Tropicana", "Courtyard by Marriott", "Favehotel Cihampelas",
    "Grand Tjokro", "Hemangini Hotel", "Hilton Bandung", "Moritz Hotel", "Moxy Bandung",
    "Novotel Bandung", "Parahyangan Golf", "Prime Park Hotel", "Hotel Promenade",
    "Savoy Homann", "Sensa Hotel", "Serela Hotel", "Travello Hotel", "Zest Hotel"
];

// Paket disesuaikan sedikit agar konsisten dengan layanan "Quick 3 Jam"
const notifPackages = ["Order Layanan Quick 3 Jam", "Order One Day Service", "Order Cuci Kering Lipat", "Order Cuci Sepatu", "Order Cuci Bedcover", "Order Cuci Jas Satuan"];

function showNotification() {
    const notifEl = document.getElementById('sales-notification');
    if (!notifEl) return;

    // Generate Data Acak
    const name = notifNames[Math.floor(Math.random() * notifNames.length)];
    const location = notifLocations[Math.floor(Math.random() * notifLocations.length)];
    const pkg = notifPackages[Math.floor(Math.random() * notifPackages.length)];
    
    // Angka menit acak (1 - 59 menit yang lalu)
    const timeCalc = Math.floor(Math.random() * 59) + 1; 

    // Update Teks di HTML
    document.getElementById('notif-time').innerText = `${timeCalc} menit yang lalu`;
    document.getElementById('notif-desc').innerHTML = `${name} dari ${location} <br><span class="text-brand-blue font-semibold text-[11px]">${pkg}</span>`;

    // Jalankan Animasi Masuk (Slide Up & Fade In)
    notifEl.classList.remove('translate-y-20', 'opacity-0');
    notifEl.classList.add('translate-y-0', 'opacity-100');

    // Sembunyikan kembali setelah 4 detik
    setTimeout(() => {
        notifEl.classList.remove('translate-y-0', 'opacity-100');
        notifEl.classList.add('translate-y-20', 'opacity-0');
    }, 4000);

    // Atur jadwal notifikasi berikutnya muncul secara acak (antara 10 sampai 25 detik)
    const nextTime = Math.floor(Math.random() * (25000 - 10000 + 1)) + 10000;
    setTimeout(showNotification, nextTime);
}

// Mulai loop notifikasi setelah pengunjung berada di website selama 5 detik
setTimeout(showNotification, 5000);