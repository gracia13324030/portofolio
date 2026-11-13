const IP_ESP32 = "http://10.12.128.96"; // Tetap pertahankan IP dari ESP32 kamu

// KONTROL MESIN MANUAL
function kontrolManual(aksi) {
  fetch(`${IP_ESP32}/motor/${aksi}`)
    .then(() => updateUI())
    .catch(err => console.error("Gagal konek manual."));
}

// KALKULATOR PINTAR
function hitungEstimasi() {
  const gram = document.getElementById('inputGram').value;
  const teksKalkulasi = document.getElementById('estimasiWaktu');
  if (gram > 0) {
    const detikTotal = Math.ceil((gram * 180) / 500);
    let m = Math.floor(detikTotal / 60);
    let s = detikTotal % 60;
    teksKalkulasi.innerHTML = `⏱️ Durasi Kerja: <strong>${m > 0 ? m + " Menit " : ""}${s} Detik</strong>`;
    teksKalkulasi.style.color = "#10b981";
  } else {
    teksKalkulasi.innerText = "Menunggu input sampah...";
    teksKalkulasi.style.color = "#fbbf24";
  }
}

function setGram(nilai) {
  document.getElementById('inputGram').value = nilai;
  hitungEstimasi(); 
}

function prosesGram() {
  const gram = parseInt(document.getElementById('inputGram').value);
  if (gram > 0) {
    fetch(`${IP_ESP32}/motor/target?gram=${gram}`)
      .then(() => {
        document.getElementById('inputGram').value = '';
        document.getElementById('estimasiWaktu').innerText = "✅ Perintah berhasil dieksekusi.";
        updateUI();
      })
      .catch(err => alert("Koneksi gagal. Pastikan terhubung ke WiFi ESP32."));
  } else {
    alert("Masukkan berat sampah yang valid!");
  }
}

// SINKRONISASI DATA ESP32 (Satu script untuk 3 halaman)
function updateUI() {
  fetch(`${IP_ESP32}/status`)
    .then(response => response.json())
    .then(data => {
      
      // -- Update Elemen di Halaman index.html (Home) --
      const statKoneksi = document.getElementById('koneksiUtama');
      if (statKoneksi) {
        statKoneksi.innerText = "🟢 Terhubung ke ESP32";
        statKoneksi.className = "status-online";
      }

      // -- Update Elemen di Halaman mesin.html --
      const statEl = document.getElementById('statusMotor');
      if (statEl) {
        if (data.motor === 1) {
          statEl.innerText = "BEROPERASI ⚙️";
          statEl.className = "nyala";
        } else {
          statEl.innerText = "STANDBY ⚪";
          statEl.className = "mati";
        }

        const cdEl = document.getElementById('countdown');
        if (data.timer > 0) {
          cdEl.innerText = `⏳ Menyelesaikan dalam: ${data.timer} detik`;
        } else {
          cdEl.innerText = "";
        }

        document.getElementById('totalSiklus').innerText = data.siklus;
        document.getElementById('totalGram').innerText = data.totalGram;
      }

      // -- Update Elemen di Halaman sensor.html --
      const suhuUdaraEl = document.getElementById('valSuhuUdara');
      if (suhuUdaraEl) {
        const suhuUdaraStr = data.suhuUdara > 0 ? data.suhuUdara + " °C" : "-- °C";
        suhuUdaraEl.innerText = suhuUdaraStr;
        document.getElementById('valKelembapanUdara').innerText = data.kelembapanUdara + " %";
        document.getElementById('valSuhuReaktor').innerText = data.suhuReaktor + " °C";
        document.getElementById('valKelembapanTanah').innerText = data.kelembapanTanah + " %";
      }
    })
    .catch(err => {
      const statKoneksi = document.getElementById('koneksiUtama');
      if (statKoneksi) {
        statKoneksi.innerText = "🔴 Sistem Offline (Terputus)";
        statKoneksi.className = "status-offline";
      }
    });
}

setInterval(updateUI, 1000);
updateUI();