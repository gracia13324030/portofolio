// ===========================================================================
// DATA — Sunting bagian ini untuk mengubah isi portofolio
// ===========================================================================

const PROFILE = {
  name: "Gracia Angelica Sihombing",
  short: "Gracia",
  // TODO: Perbarui dengan kontak asli kamu
  email: "email@contoh.com",
  linkedin: "linkedin.com/in/gracia-angelica",
  github: "github.com/gracia-angelica",
};

const HERO_DESC =
  "Computer Technology student at Institut Teknologi Del passionate about building user-friendly web solutions, intuitive UI/UX design, and reliable software systems.";

const ABOUT = [
  "A 5th-semester <strong>Computer Technology</strong> student at Institut Teknologi Del with a strong interest in <strong>Web Development</strong>, <strong>UI/UX Design</strong>, and <strong>Software Quality Assurance (QA)</strong>. Experienced in developing web applications and IoT systems through academic and hands-on projects.",
  "Familiar with <strong>Linux environments (Debian/Ubuntu)</strong>, server configuration, and <strong>Ansible automation</strong>. Enthusiastic about crafting user-friendly digital solutions while continuously expanding technical skills in modern software engineering and <strong>data analytics</strong>.",
];

const INTERESTS = [
  "Web Development",
  "UI/UX Design",
  "Software QA",
  "Data Analytics",
  "Linux & Systems",
];

// Keahlian dikelompokkan ke 4 pilar terstruktur
const SKILL_CATEGORIES = [
  {
    category: "Web Development",
    icon: "💻",
    items: ["HTML5", "CSS3 / Tailwind", "JavaScript (ES6+)", "React.js", "Node.js / Express", "Laravel (MVC)", "RESTful APIs", "Git & GitHub"],
  },
  {
    category: "UI/UX Design",
    icon: "🎨",
    items: ["Figma", "Wireframing", "Interactive Prototyping", "User Flow", "Design Systems", "Usability Testing", "UI Mockups"],
  },
  {
    category: "Data Analytics",
    icon: "📊",
    items: ["Python", "Pandas", "SQL (MySQL)", "Microsoft Excel / Sheets", "Exploratory Data Analysis", "Data Visualization", "Sales Metrics"],
  },
  {
    category: "QA & System Engineering",
    icon: "🔍",
    items: ["Manual Testing", "Test Scenarios & Cases", "Postman (API Testing)", "Linux (Debian/Ubuntu)", "Ansible Automation", "ESP32 & IoT"],
  },
];

// ===========================================================================
// PROYEK (Dengan Folder Showcase + Case Study Gallery Modal)
// ===========================================================================
const PROJECTS = [
  {
    id: "delshop",
    name: "Del-Shop (DelShoope) — E-Commerce Web Platform",
    folderColor: "color-blue",
    category: "Full-Stack Web App & UI/UX",
    period: "Web App Development · Semester 3 (Team of 3)",
    role: "Lead UI/UX & Frontend Integration",
    shortDesc: "Aplikasi e-commerce lengkap (Laravel MVC) dengan katalog produk, keranjang, transaksi QRIS & COD, ulasan pembeli, live chat, dan dashboard analitik admin.",
    about: "Del-Shop (DelShoope) merupakan platform e-commerce yang dirancang untuk menyediakan wadah jual beli online yang aman, responsif, dan mudah digunakan bagi civitas akademik dan pelaku usaha. Menggunakan arsitektur Laravel MVC terintegrasi MySQL, sistem ini mencakup sisi storefront pelanggan dan sisi manajemen admin yang komprehensif.",
    features: [
      "Storefront & Produk: Pengelompokan kategori (Baju, Celana, Jaket, Kopi, Pin), pencarian barang, detail produk, dan keranjang belanja.",
      "Dual Metode Pembayaran: Dukungan pembayaran instan barcode QRIS serta sistem pemesanan Cash on Delivery (COD) terjadwal.",
      "Interaksi Sosial & Ulasan: Pelanggan dapat memberikan rating bintang ulasan dan berinteraksi melalui chat langsung ke admin/penjual.",
      "Admin Analytics Dashboard: Pemantauan metrik penjualan (Total Penjualan Rp 6.340.000, Produk Terjual, Pelanggan Baru), manajemen pesanan status pending/proses/selesai, serta mode High Contrast.",
      "RESTful API & Security: Middleware autentikasi multi-role, proteksi CSRF, dan endpoint API CRUD terstruktur (GET, POST, PATCH, DELETE)."
    ],
    tags: ["Laravel (MVC)", "PHP 8", "MySQL", "Tailwind CSS", "RESTful APIs", "UI/UX Design", "QRIS & COD", "Admin Dashboard"],
    slides: [
      {
        title: "Admin Dashboard & Sales Analytics Overview",
        caption: "Tampilan dashboard admin Del-Shop: metrik ringkasan total penjualan, produk terjual, pelanggan baru, dan pesanan terbaru.",
        svgType: "dashboard",
      },
      {
        title: "Customer Storefront & Product Catalog",
        caption: "Katalog belanja pelanggan: banner promo, filter kategori (Baju, Celana, Topi, Kopi), dan kartu rekomendasi produk.",
        svgType: "storefront",
      },
      {
        title: "Checkout & QRIS / COD Payment Flow",
        caption: "Alur pembayaran interaktif: pembuatan invoice, simulasi barcode QRIS, dan formulir konfirmasi pesanan COD.",
        svgType: "payment",
      },
      {
        title: "Product Reviews & Live User Chat",
        caption: "Halaman interaksi pelanggan: ulasan dengan rating bintang serta fitur chat langsung antara pembeli dan admin toko.",
        svgType: "chat",
      },
    ],
    resources: [
      {
        label: "Watch Demo Video",
        sub: "YouTube Walkthrough",
        url: "https://youtu.be/PCj2LRLtFeU?si=KJebtWqo8VX3vWPU",
        type: "video",
      },
      {
        label: "Project Report & ERD",
        sub: "Semester 3 Final Report (PDF)",
        url: "#",
        type: "doc",
      },
      {
        label: "Source Code Repository",
        sub: "GitHub Project",
        url: "https://github.com/gracia-angelica",
        type: "code",
      },
    ],
  },
  {
    id: "ansible-linux",
    name: "Automated Multi-Node Linux Server Infrastructure",
    folderColor: "color-cyan",
    category: "DevOps & System Administration",
    period: "System Administration & Networks · Semester 3 (Team of 3)",
    role: "System Engineer & Ansible Playbook Contributor",
    shortDesc: "Infrastruktur server terdistribusi pada 5 VM lintas 3 laptop fisik, diotomatisasi penuh menggunakan Ansible Playbook dengan BIND9 DNS, HAProxy Load Balancer, dan Postfix Mail Server.",
    about: "Proyek ini dirancang untuk mengatasi inefisiensi dan risiko kesalahan manusia dalam konfigurasi server manual berskala besar. Dengan mengadopsi Infrastructure as Code (IaC) via Ansible, arsitektur jaringan 5 node virtual dikonfigurasi secara serentak, idempotent, dan tanpa agen (agentless over SSH).",
    features: [
      "BIND9 DNS Server: Resolusi domain privat flutter.local dan supabase.local beserta record subdomain (ns1, web1, web2, lb, mail).",
      "HAProxy Load Balancing: Distribusi beban HTTP menggunakan algoritma Round Robin ke dua node backend Apache Web Server pada port 8080.",
      "Postfix & Dovecot Mail Server: Sistem email mandiri terverifikasi via Thunderbird dan Telnet untuk protokol SMTP (port 25) dan IMAP (port 143).",
      "Ansible Roles Modular: Struktur playbook site.yml terbagi menjadi 4 roles terpisah (dns, web, mail, loadbalancer) untuk skalabilitas tinggi.",
      "Pengujian Terverifikasi: Uji nslookup multi-host, pengujian beban request 1-4 round robin, dan pengujian berkirim email CC/BCC antar domain."
    ],
    tags: ["Ansible Playbook", "Linux (Ubuntu/CentOS)", "HAProxy Load Balancer", "BIND9 DNS", "Postfix & Dovecot", "Apache HTTP", "Bash Scripting"],
    slides: [
      {
        title: "Network Architecture & Traffic Flow Topology",
        caption: "Topologi 5 VM pada 3 laptop fisik: Alur request client menuju DNS (BIND9), Load Balancer (HAProxy), Web Nodes, dan Mail Server.",
        svgType: "network",
      },
      {
        title: "Ansible Playbook Automation Structure",
        caption: "Struktur direktori roles Ansible (dns, web, mail, loadbalancer) dan eksekusi site.yml secara terotomatisasi.",
        svgType: "ansible",
      },
      {
        title: "HAProxy Round Robin Load Balancing Verification",
        caption: "Pengujian distribusi beban HTTP ke Web Server 1 (IP .40) dan Web Server 2 (IP .97) secara bergantian dan stabil.",
        svgType: "loadbalancer",
      },
      {
        title: "Mail Server Verification via Mozilla Thunderbird",
        caption: "Verifikasi pengiriman dan penerimaan email SMTP/IMAP antara admin@supabase.local dan okto/gracis@flutter.local.",
        svgType: "mailtest",
      },
    ],
    resources: [
      {
        label: "Architecture Slides & Spec",
        sub: "PDF Presentation Slides",
        url: "#",
        type: "doc",
      },
      {
        label: "Ansible Playbook Code",
        sub: "GitHub Repository",
        url: "https://github.com/gracia-angelica",
        type: "code",
      },
    ],
  },
  {
    id: "solar-monitoring",
    name: "Smart EcoSystem — Solar Panel Monitoring System",
    folderColor: "color-amber",
    category: "IoT & Real-Time Web Dashboard",
    period: "IoT & Academic Final Project · Team Project",
    role: "Dashboard Developer & Hardware Tester",
    shortDesc: "Dashboard pemantauan daya panel surya berbasis mikrokontroler ESP32 dan sensor INA219 via protokol WebSocket real-time dengan mode simulasi pengujian.",
    about: "Smart EcoSystem adalah sistem IoT terpadu yang memantau performa pembangkit listrik tenaga surya secara akurat. Data tegangan, arus, daya, dan akumulasi energi ditransmisikan secara kontinu tanpa reload browser berkat komunikasi WebSocket berlatensi rendah.",
    features: [
      "Sensor INA219 Presisi: Pengukuran tegangan (V), arus listrik (A), daya (W), dan perhitungan konsumsi energi kumulatif (Wh/kWh).",
      "Komunikasi WebSocket Real-Time: Pembaruan grafik instan pada antarmuka web tanpa membebani bandwidth jaringan lokal.",
      "Mode Simulasi & QA: Fitur simulasi data tegangan untuk pengujian software dashboard tanpa ketergantungan perangkat keras.",
      "Responsive Monitoring UI: Dashboard interaktif dengan gauge visual dan notifikasi ambang batas daya kritis."
    ],
    tags: ["ESP32", "Sensor INA219", "WebSocket", "JavaScript", "C++ (Arduino IDE)", "Data Visualization", "IoT Dashboard"],
    slides: [
      {
        title: "Live Solar Energy Dashboard Interface",
        caption: "Dashboard pemantauan metrik tegangan, kuat arus, daya watt, dan grafik output energi surya secara real-time.",
        svgType: "solardash",
      },
      {
        title: "Hardware Prototype: ESP32 & INA219 Sensor Setup",
        caption: "Integrasi modul mikrokontroler ESP32 dengan sensor arus/tegangan INA219 dan sirkuit panel surya.",
        svgType: "hardware",
      },
    ],
    resources: [
      {
        label: "Hardware & Project Docs",
        sub: "PDF Documentation",
        url: "#",
        type: "doc",
      },
      {
        label: "Firmware & Web Code",
        sub: "GitHub Repository",
        url: "https://github.com/gracia-angelica",
        type: "code",
      },
    ],
  },
  {
    id: "pqc-esp32",
    name: "Post-Quantum Cryptography: ECDH & ML-KEM-512 Evaluation",
    folderColor: "color-purple",
    category: "System Security & Cryptography",
    period: "Final Capstone Project (Tugas Akhir) · In Progress",
    role: "Lead Researcher & Embedded Implementation",
    shortDesc: "Evaluasi dan perbandingan pembentukan kunci kriptografi klasik (ECDH) dan kriptografi pasca-kuantum (ML-KEM-512) langsung pada perangkat ESP32-C6.",
    about: "Menyongsong era komputer kuantum yang mampu memecahkan enkripsi asimetris klasik, Tugas Akhir ini meneliti implementasi langsung algoritma Post-Quantum Cryptography (NIST FIPS 203 ML-KEM-512) pada mikrokontroler hemat energi ESP32-C6.",
    features: [
      "Benchmark Komparatif: Pengukuran waktu eksekusi key encapsulation & decapsulation, memori RAM terpakai, dan ukuran Flash memory.",
      "Implementasi Hardware Nyata: Dijalankan langsung pada arsitektur RISC-V mikrokontroler ESP32-C6.",
      "Protokol Wi-Fi Lokal: Merancang komunikasi aman dua perangkat independen untuk menguji pertukaran kunci secara end-to-end.",
      "Analisis Efisiensi: Menilai kelayakan algoritma standar kuantum NIST untuk ekosistem embedded berdaya rendah."
    ],
    tags: ["ESP32-C6 (RISC-V)", "C / C++", "Post-Quantum Cryptography", "ML-KEM-512", "ECDH", "Memory Profiling", "IoT Security"],
    slides: [
      {
        title: "PQC Benchmark: Execution Time & Memory Footprint",
        caption: "Grafik perbandingan durasi komputasi dan konsumsi RAM antara ECDH klasik vs ML-KEM-512 pada ESP32-C6.",
        svgType: "benchmark",
      },
      {
        title: "Dual Device Secure Handshake Protocol",
        caption: "Arsitektur pertukaran kunci dua mikrokontroler ESP32-C6 melalui komunikasi Wi-Fi lokal.",
        svgType: "handshake",
      },
    ],
    resources: [
      {
        label: "Proposal & Research Paper",
        sub: "Academic PDF",
        url: "#",
        type: "doc",
      },
      {
        label: "Benchmark Source Code",
        sub: "GitHub Repository",
        url: "https://github.com/gracia-angelica",
        type: "code",
      },
    ],
  },
];

const CERTIFICATES = [];

// ===========================================================================
// ICONS & GRAPHICS
// ===========================================================================
const $ = (id) => document.getElementById(id);
const I = {
  mail: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/></svg>',
  in: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V8h4v1.6A6 6 0 0 1 16 8Z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>',
  gh: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/></svg>',
  doc: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>',
  play: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>',
  code: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
  arrow: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>',
  grid: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>',
};

// ===========================================================================
// GENERATOR SVG ILUSTRASI SLIDE (Tampilan Visual Interaktif Mockup)
// ===========================================================================
function getSlideIllustration(svgType, title) {
  if (svgType === "dashboard") {
    return `
      <div class="mockup-frame">
        <div class="mockup-top-bar"><i class="mockup-dot red"></i><i class="mockup-dot yellow"></i><i class="mockup-dot green"></i><span style="font-size:11px;color:var(--muted);margin-left:8px">Del-Shop • Admin Analytics Dashboard</span></div>
        <div class="mockup-body">
          <div style="display:flex;gap:12px;width:100%">
            <div style="flex:1;background:rgba(37,99,235,0.12);padding:14px;border-radius:10px;border:1px solid rgba(37,99,235,0.25)">
              <div style="font-size:11px;color:var(--muted)">Total Penjualan</div>
              <div style="font-size:18px;font-weight:800;color:#38bdf8">Rp 6.340.000</div>
            </div>
            <div style="flex:1;background:rgba(16,185,129,0.12);padding:14px;border-radius:10px;border:1px solid rgba(16,185,129,0.25)">
              <div style="font-size:11px;color:var(--muted)">Produk Terjual</div>
              <div style="font-size:18px;font-weight:800;color:#34d399">35 Item</div>
            </div>
            <div style="flex:1;background:rgba(245,158,11,0.12);padding:14px;border-radius:10px;border:1px solid rgba(245,158,11,0.25)">
              <div style="font-size:11px;color:var(--muted)">Pelanggan Baru</div>
              <div style="font-size:18px;font-weight:800;color:#fbbf24">3 User</div>
            </div>
          </div>
          <div style="width:100%;height:100px;background:var(--panel);border-radius:10px;border:1px solid var(--line);display:flex;align-items:center;justify-content:center;color:var(--muted);font-size:13px">
            📊 Grafik Penjualan & Daftar Pesanan Terverifikasi (Laravel MVC)
          </div>
        </div>
      </div>`;
  }
  if (svgType === "storefront") {
    return `
      <div class="mockup-frame">
        <div class="mockup-top-bar"><i class="mockup-dot red"></i><i class="mockup-dot yellow"></i><i class="mockup-dot green"></i><span style="font-size:11px;color:var(--muted);margin-left:8px">DelShoope • Belanja Cerdas Hidup Berkualitas</span></div>
        <div class="mockup-body">
          <div style="display:flex;gap:8px;margin-bottom:8px">
            <span style="font-size:11px;padding:4px 10px;border-radius:999px;background:var(--accent);color:#fff">Semua</span>
            <span style="font-size:11px;padding:4px 10px;border-radius:999px;background:var(--panel);border:1px solid var(--line)">Baju Del</span>
            <span style="font-size:11px;padding:4px 10px;border-radius:999px;background:var(--panel);border:1px solid var(--line)">Celana</span>
            <span style="font-size:11px;padding:4px 10px;border-radius:999px;background:var(--panel);border:1px solid var(--line)">Kopi</span>
          </div>
          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;width:100%">
            <div style="background:var(--panel);border:1px solid var(--line);border-radius:8px;padding:10px;text-align:center"><div style="height:60px;background:#1e293b;border-radius:6px;margin-bottom:6px"></div><small>Kaos Del Official</small><br><b style="color:#38bdf8">Rp 90.000</b></div>
            <div style="background:var(--panel);border:1px solid var(--line);border-radius:8px;padding:10px;text-align:center"><div style="height:60px;background:#1e293b;border-radius:6px;margin-bottom:6px"></div><small>Jaket Komandan</small><br><b style="color:#38bdf8">Rp 230.000</b></div>
            <div style="background:var(--panel);border:1px solid var(--line);border-radius:8px;padding:10px;text-align:center"><div style="height:60px;background:#1e293b;border-radius:6px;margin-bottom:6px"></div><small>Kopi Arabika Del</small><br><b style="color:#38bdf8">Rp 10.000</b></div>
          </div>
        </div>
      </div>`;
  }
  if (svgType === "network") {
    return `
      <div class="mockup-frame">
        <div class="mockup-top-bar"><i class="mockup-dot red"></i><i class="mockup-dot yellow"></i><i class="mockup-dot green"></i><span style="font-size:11px;color:var(--muted);margin-left:8px">Distributed Network Architecture (5 VMs / 3 Laptops)</span></div>
        <div class="mockup-body" style="font-family:monospace;font-size:12px;color:var(--text)">
          <div style="display:flex;justify-content:space-around;width:100%;text-align:center">
            <div style="background:var(--tag-bg);border:1px solid var(--tag-border);padding:10px;border-radius:8px">DNS (BIND9)<br><small style="color:#38bdf8">10.98.77.139</small></div>
            <div style="background:var(--tag-bg);border:1px solid var(--tag-border);padding:10px;border-radius:8px">HAProxy (LB:8080)<br><small style="color:#38bdf8">10.98.77.230</small></div>
            <div style="background:var(--tag-bg);border:1px solid var(--tag-border);padding:10px;border-radius:8px">Mail (Postfix/Dovecot)<br><small style="color:#38bdf8">10.98.77.186</small></div>
          </div>
          <div style="margin:12px 0;color:var(--muted)">⬇ Round Robin Balancing ⬇</div>
          <div style="display:flex;gap:16px;width:100%;justify-content:center">
            <div style="background:var(--panel);border:1px solid var(--line);padding:8px 16px;border-radius:8px">Web Server 1: 10.98.77.40 (Apache)</div>
            <div style="background:var(--panel);border:1px solid var(--line);padding:8px 16px;border-radius:8px">Web Server 2: 10.98.77.97 (Apache)</div>
          </div>
        </div>
      </div>`;
  }
  if (svgType === "ansible") {
    return `
      <div class="mockup-frame">
        <div class="mockup-top-bar"><i class="mockup-dot red"></i><i class="mockup-dot yellow"></i><i class="mockup-dot green"></i><span style="font-size:11px;color:var(--muted);margin-left:8px">terminal • ansible-playbook site.yml</span></div>
        <div class="mockup-body" style="font-family:monospace;font-size:12px;text-align:left;width:100%;background:#080c14;color:#10b981;padding:16px;border-radius:8px">
          <div>PLAY [Configure DNS, Web, Mail & LoadBalancer] *********************</div>
          <div style="color:#38bdf8">TASK [dns : Install BIND9 DNS Service] ..................... [ok]</div>
          <div style="color:#fbbf24">TASK [web : Deploy Dual Node Apache Configurations] ......... [changed]</div>
          <div style="color:#38bdf8">TASK [mail : Configure Postfix & Dovecot IMAP] .............. [ok]</div>
          <div style="color:#fbbf24">TASK [loadbalancer : Configure HAProxy Round Robin] ......... [changed]</div>
          <div style="margin-top:10px;color:#f8fafc">PLAY RECAP ****************************************************</div>
          <div style="color:#34d399">dns: ok=8 changed=0 | web1: ok=6 changed=1 | lb: ok=5 changed=1</div>
        </div>
      </div>`;
  }
  // Default Generic Clean Frame
  return `
    <div class="mockup-frame">
      <div class="mockup-top-bar"><i class="mockup-dot red"></i><i class="mockup-dot yellow"></i><i class="mockup-dot green"></i><span style="font-size:11px;color:var(--muted);margin-left:8px">${title}</span></div>
      <div class="mockup-body" style="padding:40px 20px">
        <div style="font-size:36px;margin-bottom:12px">⚡</div>
        <div style="font-weight:700;font-size:16px;color:var(--text)">${title}</div>
        <p style="font-size:13px;color:var(--muted);max-width:440px;margin:0">Verified project deliverable and architecture documentation.</p>
      </div>
    </div>`;
}

// ===========================================================================
// RENDER UTAMA
// ===========================================================================
function render() {
  $("heroDesc").textContent = HERO_DESC;
  $("navResumeBtn").href = `mailto:${PROFILE.email}?subject=Internship%20Inquiry%20-%20Gracia%20Angelica`;

  const heroLinksHTML = `
    <a class="pill" href="mailto:${PROFILE.email}">${I.mail} Email Me</a>
    <a class="pill pill-outline" href="https://${PROFILE.linkedin}" target="_blank" rel="noreferrer">${I.in} LinkedIn</a>
    <a class="pill pill-outline" href="https://${PROFILE.github}" target="_blank" rel="noreferrer">${I.gh} GitHub</a>`;
  $("heroLinks").innerHTML = heroLinksHTML;

  const contactLinksHTML = `
    <a class="pill" href="mailto:${PROFILE.email}">${I.mail} Send Email</a>
    <a class="pill" href="https://${PROFILE.linkedin}" target="_blank" rel="noreferrer">${I.in} Connect on LinkedIn</a>
    <a class="pill pill-outline" href="https://${PROFILE.github}" target="_blank" rel="noreferrer">${I.gh} GitHub Profile</a>`;
  $("contactLinks").innerHTML = contactLinksHTML;

  $("aboutBody").innerHTML =
    ABOUT.map((p) => `<p>${p}</p>`).join("") +
    `<div class="tags">${INTERESTS.map((t) => `<span>${t}</span>`).join("")}</div>`;

  // Render Skills Grid
  $("skillsGrid").innerHTML = SKILL_CATEGORIES.map(
    (cat) => `
    <div class="skill-card">
      <div class="skill-card-head">
        <span class="skill-card-icon">${cat.icon}</span>
        <h3>${cat.category}</h3>
      </div>
      <div class="skill-chips">
        ${cat.items.map((item) => `<span class="skill-chip">${item}</span>`).join("")}
      </div>
    </div>`
  ).join("");

  // Render Folder Pocket Cards (Inspirasi 1)
  $("projectsList").innerHTML = PROJECTS.map(
    (p, idx) => `
    <div class="folder-card ${p.folderColor}" onclick="openProjectModal(${idx})">
      <div class="folder-back"></div>
      
      <div class="folder-papers">
        <div class="folder-paper paper-1">
          <div class="paper-img" style="background:linear-gradient(135deg,#1e3a8a,#0f172a)">
            <span>${p.slides[0]?.title || p.name}</span>
          </div>
        </div>
        <div class="folder-paper paper-2">
          <div class="paper-img" style="background:linear-gradient(135deg,#0284c7,#0f172a)">
            <span>${p.slides[1]?.title || "Architecture & System"}</span>
          </div>
        </div>
        <div class="folder-paper paper-3">
          <div class="paper-img" style="background:linear-gradient(135deg,#312e81,#0f172a)">
            <span style="font-weight:700;color:#fff">${p.name}</span>
          </div>
        </div>
      </div>

      <div class="folder-pocket">
        <div>
          <div class="pocket-meta">
            <span class="pocket-badge">${p.category}</span>
            <span class="pocket-count">${p.slides.length} SLIDES & DEMO</span>
          </div>
          <h3 class="pocket-title">${p.name}</h3>
        </div>
        <div class="pocket-footer">
          <span>View Case Study & Resources</span>
          ${I.arrow}
        </div>
      </div>
    </div>`
  ).join("");

  // Render Certificates (Clean state)
  $("certList").innerHTML = CERTIFICATES.length
    ? CERTIFICATES.map((c) => `<div class="project-card"><div><b>${c.name}</b><br><small style="color:var(--muted)">${c.issuer} · ${c.year}</small></div></div>`).join("")
    : `<div class="cert-empty">
        <h4>Academic Credentials & Verified Certifications</h4>
        <p>Certifications in Web Development, Cisco Networking, and Data Analytics are available upon request during recruitment.</p>
      </div>`;

  $("footer").textContent = `© ${new Date().getFullYear()} ${PROFILE.name} — Institut Teknologi Del. All rights reserved.`;

  // Partikel debu melayang di hero
  $("dust").innerHTML = Array.from({ length: 16 }, () => {
    const s = 2 + Math.random() * 2.5;
    return `<span style="left:${Math.random() * 100}%;top:${20 + Math.random() * 70}%;width:${s}px;height:${s}px;animation-duration:${7 + Math.random() * 8}s;animation-delay:${Math.random() * 6}s"></span>`;
  }).join("");
}

// ===========================================================================
// LOGIKA MODAL DETAIL PROYEK & SLIDER (Inspirasi 2)
// ===========================================================================
let activeProjectIdx = 0;
let activeSlideIdx = 0;

function openProjectModal(projectIdx) {
  activeProjectIdx = projectIdx;
  activeSlideIdx = 0;
  const project = PROJECTS[projectIdx];
  const modal = $("projectModal");

  renderModalContent(project);
  modal.removeAttribute("hidden");
  document.body.style.overflow = "hidden";
}

function closeProjectModal() {
  const modal = $("projectModal");
  modal.setAttribute("hidden", "");
  document.body.style.overflow = "";
}

function nextProject() {
  openProjectModal((activeProjectIdx + 1) % PROJECTS.length);
}

function setSlide(slideIdx) {
  activeSlideIdx = slideIdx;
  const project = PROJECTS[activeProjectIdx];
  const slides = document.querySelectorAll(".slide-item");
  const dots = document.querySelectorAll(".slide-dot");
  const captionTitle = $("sliderCaptionTitle");
  const captionDesc = $("sliderCaptionDesc");

  slides.forEach((s, i) => s.classList.toggle("active", i === slideIdx));
  dots.forEach((d, i) => d.classList.toggle("active", i === slideIdx));

  if (captionTitle && project.slides[slideIdx]) {
    captionTitle.textContent = `Slide ${slideIdx + 1} of ${project.slides.length}: ${project.slides[slideIdx].title}`;
    captionDesc.textContent = project.slides[slideIdx].caption;
  }
}

function nextSlide() {
  const project = PROJECTS[activeProjectIdx];
  setSlide((activeSlideIdx + 1) % project.slides.length);
}

function prevSlide() {
  const project = PROJECTS[activeProjectIdx];
  setSlide((activeSlideIdx - 1 + project.slides.length) % project.slides.length);
}

function renderModalContent(p) {
  const container = $("modalContent");
  container.innerHTML = `
    <!-- Top Header & Breadcrumb -->
    <div class="modal-breadcrumb">HOME / PORTFOLIO / CASE STUDY</div>
    <h2 class="modal-main-title">PROJECT</h2>
    <div class="modal-project-name"><strong>Title:</strong> ${p.name}</div>

    <!-- Metadata Bar -->
    <div class="modal-meta-bar">
      <div class="modal-meta-item"><span>📅</span> <strong>Timeline:</strong> ${p.period}</div>
      <div class="modal-meta-item"><span>🏷️</span> <strong>Category:</strong> ${p.category}</div>
      <div class="modal-meta-item"><span>👤</span> <strong>Role:</strong> ${p.role}</div>
    </div>

    <!-- Media Slider / Showcase -->
    <div class="modal-slider-box">
      <div class="modal-slider-viewport">
        ${p.slides.map((s, idx) => `
          <div class="slide-item ${idx === 0 ? "active" : ""}">
            ${s.img ? `<img src="${s.img}" alt="${s.title}" />` : getSlideIllustration(s.svgType, s.title)}
          </div>
        `).join("")}

        ${p.slides.length > 1 ? `
          <button class="slider-ctrl-btn prev" onclick="prevSlide()" aria-label="Previous Slide">‹</button>
          <button class="slider-ctrl-btn next" onclick="nextSlide()" aria-label="Next Slide">›</button>
        ` : ""}
      </div>

      <div class="modal-slider-caption">
        <div>
          <strong id="sliderCaptionTitle">Slide 1 of ${p.slides.length}: ${p.slides[0]?.title || ""}</strong>
          <div id="sliderCaptionDesc" style="font-size:12px;color:var(--muted);margin-top:2px">${p.slides[0]?.caption || ""}</div>
        </div>
        <div class="slide-dots">
          ${p.slides.map((_, idx) => `<span class="slide-dot ${idx === 0 ? "active" : ""}" onclick="setSlide(${idx})"></span>`).join("")}
        </div>
      </div>
    </div>

    <!-- Section 1: ABOUT THIS PROJECT -->
    <div class="modal-section">
      <div class="modal-sec-header">
        <h4 class="modal-sec-title">ABOUT THIS PROJECT</h4>
        <div class="modal-sec-line"></div>
      </div>
      <div class="modal-desc-body">
        <p>${p.about}</p>
        <ul class="modal-features-list">
          ${p.features.map((f) => `<li>${f}</li>`).join("")}
        </ul>
      </div>
    </div>

    <!-- Section 2: TOOLS & TECHNOLOGIES -->
    <div class="modal-section">
      <div class="modal-sec-header">
        <h4 class="modal-sec-title">TOOLS & TECHNOLOGIES</h4>
        <div class="modal-sec-line"></div>
      </div>
      <div class="modal-tools-wrap">
        ${p.tags.map((t) => `<span class="modal-tool-pill">${t}</span>`).join("")}
      </div>
    </div>

    <!-- Section 3: RESOURCES & REFERENCES -->
    <div class="modal-section">
      <div class="modal-sec-header">
        <h4 class="modal-sec-title">RESOURCES & VERIFICATION</h4>
        <div class="modal-sec-line"></div>
      </div>
      <div class="modal-resources-grid">
        ${p.resources.map((res) => `
          <a class="modal-resource-card" href="${res.url}" target="_blank" rel="noreferrer">
            <span class="res-card-icon">${res.type === "video" ? I.play : (res.type === "code" ? I.code : I.doc)}</span>
            <div class="res-card-info">
              <b>${res.label}</b>
              <small>${res.sub}</small>
            </div>
          </a>
        `).join("")}
      </div>
    </div>

    <!-- Bottom Footer Navigation -->
    <div class="modal-footer-nav">
      <button class="nav-grid-btn" onclick="closeProjectModal()">
        ${I.grid} Back to Portfolio
      </button>
      <button class="nav-next-btn" onclick="nextProject()">
        NEXT PROJECT ›
      </button>
    </div>
  `;
}

// ===========================================================================
// TEMA GELAP / TERANG
// ===========================================================================
function initTheme() {
  const root = document.documentElement;
  const apply = (t) => {
    root.dataset.theme = t;
    document.querySelectorAll("#themeToggle button").forEach((b) => b.classList.toggle("on", b.dataset.set === t));
    try { localStorage.setItem("theme", t); } catch (e) {}
  };
  let saved = "dark";
  try { saved = localStorage.getItem("theme") || "dark"; } catch (e) {}
  apply(saved);
  document.querySelectorAll("#themeToggle button").forEach((b) => b.addEventListener("click", () => apply(b.dataset.set)));
}

// ===========================================================================
// LANYARD — Kartu ID Menggantung & Interaktif
// ===========================================================================
function initLanyard() {
  const lan = $("lanyard"), card = $("idCard"), img = $("idImg"), hero = $("home");
  if (!lan || !card || !img || !hero) return;

  const fb = card.querySelector(".id-fallback");
  img.addEventListener("error", () => (img.style.display = "none"));
  img.addEventListener("load", () => { if (fb) fb.style.display = "none"; });

  const REST = 5;
  let th = 0, w = 0, dl = 0, dw = 0, thPrev = 0, wPrev = 0;
  let drag = false, moved = false, px = 0, py = 0, last = 0, running = false;
  let mx = 0, my = 0, mt = 0;

  const wake = () => { if (!running) { running = true; last = performance.now(); requestAnimationFrame(tick); } };

  function tick(t) {
    const dt = Math.min(0.032, (t - last) / 1000 || 0.016);
    last = t;
    if (drag) {
      const hr = hero.getBoundingClientRect();
      const ax = lan.offsetLeft + lan.offsetWidth / 2, ay = lan.offsetTop;
      const target = Math.max(-1.1, Math.min(1.1, Math.atan2(px - hr.left - ax, py - hr.top - ay)));
      const nt = th + (target - th) * Math.min(1, dt * 16);
      w = (nt - th) / dt;
      th = nt;
    } else {
      w += (-18 * Math.sin(th) - 1.25 * w) * dt;
      th += w * dt;
    }
    const acc = (w - wPrev) / dt; wPrev = w;
    dw += (-42 * dl - 3.4 * dw + 0.07 * acc) * dt;
    dl += dw * dt;

    lan.style.transform = `rotate(${-th}rad)`;
    card.style.transform = `rotate(${REST + (dl * 180) / Math.PI}deg)`;

    if (!drag && Math.abs(th) < 0.002 && Math.abs(w) < 0.01 && Math.abs(dl) < 0.002 && Math.abs(dw) < 0.01) {
      running = false;
      return;
    }
    requestAnimationFrame(tick);
  }

  card.addEventListener("pointerdown", (e) => {
    drag = true; moved = false; px = e.clientX; py = e.clientY;
    card.setPointerCapture(e.pointerId);
    wake();
  });
  card.addEventListener("pointermove", (e) => {
    const r = card.getBoundingClientRect();
    card.style.setProperty("--mx", ((e.clientX - r.left) / r.width) * 100 + "%");
    card.style.setProperty("--my", ((e.clientY - r.top) / r.height) * 100 + "%");
    if (drag) { px = e.clientX; py = e.clientY; moved = true; }
  });
  const release = () => { if (!drag) return; drag = false; if (!moved) { w += 3.0; dw += 5.5; } wake(); };
  card.addEventListener("pointerup", release);
  card.addEventListener("pointercancel", release);

  window.addEventListener("pointermove", (e) => {
    if (drag || e.pointerType === "touch") return;
    const now = performance.now(), dtm = Math.max(8, now - mt);
    const vx = (e.clientX - mx) / dtm; mx = e.clientX; my = e.clientY; mt = now;
    const r = card.getBoundingClientRect();
    const dist = Math.hypot(e.clientX - (r.left + r.width / 2), e.clientY - (r.top + r.height / 2));
    const reach = r.width * 0.95;
    if (dist < reach && Math.abs(vx) > 0.05) { w += vx * 0.9 * (1 - dist / reach); wake(); }
  });

  th = 0.8; wake();
}

// ===========================================================================
// NAV, SCROLL-SPY, REVEAL, KURSOR, LOADER
// ===========================================================================
function initPage() {
  const nav = $("nav"), links = [...document.querySelectorAll("#navLinks a")];
  const secs = links.map((a) => document.querySelector(a.getAttribute("href")));
  const onScroll = () => {
    nav.classList.toggle("scrolled", scrollY > 30);
    let cur = 0;
    secs.forEach((s, i) => { if (s && s.getBoundingClientRect().top < innerHeight * 0.45) cur = i; });
    links.forEach((a, i) => a.classList.toggle("active", i === cur));
  };
  addEventListener("scroll", onScroll, { passive: true }); onScroll();

  const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && (e.target.classList.add("in"), io.unobserve(e.target))), { threshold: 0.1 });
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

  const dot = $("cursorDot");
  if (dot) {
    addEventListener("pointermove", (e) => {
      dot.style.left = e.clientX + "px"; dot.style.top = e.clientY + "px";
      dot.classList.toggle("hovering", !!document.elementFromPoint(e.clientX, e.clientY)?.closest("a, button, .id-card, .skill-card, .folder-card, .modal-resource-card"));
    });
  }

  // Listener tombol close modal & keyboard ESC
  $("modalCloseBtn").addEventListener("click", closeProjectModal);
  $("modalBackdrop").addEventListener("click", closeProjectModal);

  window.addEventListener("keydown", (e) => {
    const modal = $("projectModal");
    if (!modal || modal.hasAttribute("hidden")) return;
    if (e.key === "Escape") closeProjectModal();
    if (e.key === "ArrowRight") nextSlide();
    if (e.key === "ArrowLeft") prevSlide();
  });
}

function runLoader() {
  const fill = $("loaderFill"), start = performance.now(), dur = 450;
  (function step(t) {
    const p = Math.min(1, (t - start) / dur);
    if (fill) fill.style.width = p * 100 + "%";
    if (p < 1) return requestAnimationFrame(step);
    setTimeout(() => {
      const loader = $("loader");
      if (loader) loader.classList.add("done");
      document.body.classList.add("ready");
    }, 150);
  })(start);
}

document.addEventListener("DOMContentLoaded", () => {
  render(); initTheme(); initPage(); initLanyard(); runLoader();
});
