const { Controller, Response } = require("pepesan");
const f = require("../utils/Formatter");

module.exports = class BotController extends Controller {
  async introduction(request) {
    return Response.menu.fromArrayOfString(
      [
        f("menu.dasarHukum"),
        f("menu.tataTempat"),
        f("menu.tataUpacara"),
        f("menu.tataPenghormatan"),
        f("menu.kegiatanKeprotokolan"),
        f("menu.pejabatPertama"),
        f("menu.bupatiWalikota"),
        f("menu.perjanjianKerjasama"),
        f("menu.peresmian"),
        // f("menu.kunjunganKerja"),
        f("menu.kontakADC"),
        f("menu.pleacing"),
      ],
      f("intro", [request.name]),
      f("template.menu"),
      f("footer")
    );
  }

  async dasarHukum(request) {
    return Response.menu.fromArrayOfString(
      [
        f("menu.DH1"),
        f("menu.DH2"),
        f("menu.DH3"),
        f("menu.DH4"),
        f("menu.DH5"),
        f("menu.DH6"),
        f("menu.DH7"),
        f("menu.DH8"),
        f("menu.DH9"),
        f("menu.DH10"),
        f("menu.DH11"),
        f("menu.DH12"),
      ],
      f("dasarHukum"),
      f("template.menu"),
      f("notes")
    );
  }

  async dasarHukumSatu(request) {
    const documentUrl =
      "https://drive.usercontent.google.com/u/0/uc?id=1rOTfwGGUNaFW_E0gVgvsD6rKJBQmcDQ4&export=download";
    const message = "UU Nomor 24 Tahun 2009";
    return this.reply([Response.document.fromURL(documentUrl), message]);
  }

  async dasarHukumDua(request) {
    const documentUrl =
      "https://drive.usercontent.google.com/u/0/uc?id=1hZRsaH_Zij7K0UGA3B9Ew7BiI2Vqa7Qf&export=download";
    const message = "UU No 9 Tahun 2010 TENTANG KEPROTOKOLAN";
    return this.reply([Response.document.fromURL(documentUrl), message]);
  }

  async dasarHukumTiga(request) {
    const documentUrl =
      "https://drive.usercontent.google.com/u/0/uc?id=1lCaKhwf02-sYhbb4XP4il4IkCYuGLXhi&export=download";
    const message = "PP No 40 Tahun 1958";
    return this.reply([Response.document.fromURL(documentUrl), message]);
  }

  async dasarHukumEmpat(request) {
    const documentUrl =
      "https://drive.usercontent.google.com/u/0/uc?id=1cyKC75ljqoSy8x3UP7kW9j37cQlUWxQq&export=download";
    const message = "Perpres Nomor 16 Tahun 2016";
    return this.reply([Response.document.fromURL(documentUrl), message]);
  }

  async dasarHukumLima(request) {
    const documentUrl =
      "https://drive.usercontent.google.com/u/0/uc?id=1KwjbJnqrNBhF8wHXyGDsT-Ol_jMIpvSx&export=download";
    const message = "PP Nomor 39 Tahun 2018";
    return this.reply([Response.document.fromURL(documentUrl), message]);
  }

  async dasarHukumEnam(request) {
    const documentUrl =
      "https://drive.usercontent.google.com/u/0/uc?id=1JZY9V5jiyg3AttVcsI4eqsrOj9ucSFfw&export=download";
    const message = "PP Nomor 56 Tahun 2019";
    return this.reply([Response.document.fromURL(documentUrl), message]);
  }

  async dasarHukumTujuh(request) {
    const documentUrl =
      "https://drive.usercontent.google.com/u/0/uc?id=1WRrF37USgk4YdFxj_pIgC9DU89X9AEOF&export=download";
    const message = "Perpres Nomor 71 Tahun 2018";
    return this.reply([Response.document.fromURL(documentUrl), message]);
  }

  async dasarHukumDelapan(request) {
    const documentUrl =
      "https://drive.usercontent.google.com/u/0/uc?id=1tW69y0V4LNBZO4e14emwAcvPZbmMk0jU&export=download";
    const message = "PERMENPAN Nomor 18 Tahun 2014";
    return this.reply([Response.document.fromURL(documentUrl), message]);
  }

  async dasarHukumSembilan(request) {
    const documentUrl =
      "https://drive.usercontent.google.com/u/0/uc?id=17HVx7l1vQ2AlUsUZY8z39phv_UwWeSQP&export=download";
    const message =
      "Peraturan Kepala LAN No 40 Tahun 2015 Tentang Pedoman Keprotokolan di Lingkungan LAN";
    return this.reply([Response.document.fromURL(documentUrl), message]);
  }

  async dasarHukumSepuluh(request) {
    const documentUrl =
      "https://drive.usercontent.google.com/u/0/uc?id=1QiV5cX9MULVuYliVjn7-2hRCb_ut8clq&export=download";
    const message =
      "Peraturan BKN No 21 Tahun 2017 Tentang Perubahan atas Peraturan Kepala Badan Kepegawaian Negara";
    return this.reply([Response.document.fromURL(documentUrl), message]);
  }

  async dasarHukumSebelas(request) {
    const documentUrl =
      "https://drive.usercontent.google.com/u/0/uc?id=1flsp6dwiLUJGZY3tOXkGZz6bZAtutoJP&export=download";
    const message =
      "Permendikbudristek RI No 42 Tahun 2022 Tentang Keprotokolan";
    return this.reply([Response.document.fromURL(documentUrl), message]);
  }

  async dasarHukumDuaBelas(request) {
    const documentUrl =
      "https://drive.usercontent.google.com/u/0/uc?id=1SfLTQmMVpFBzvb8dvwH3yd284vliBAUG&export=download";
    const message = "Perka BKN No 7 Tahun 2017";
    return this.reply([Response.document.fromURL(documentUrl), message]);
  }

  async tataTempat(request) {
    return Response.menu.fromArrayOfString(
      [f("menu.TT2")],
      f("tataTempat"),
      f("template.menu"),
      f("notes")
    );
  }

  async fkpJateng(request) {
    return Response.menu.fromArrayOfString(
      [
        f("menu.FKP1"),
        f("menu.FKP2"),
        f("menu.FKP3"),
        f("menu.FKP4"),
        f("menu.FKP5"),
      ],
      f("fkp"),
      f("template.menu"),
      f("notes")
    );
  }

  async fkpJatengSatu(request) {
    const imageUrl =
      "https://drive.google.com/uc?export=download&id=1rUFv9CCKE998wPt8qkpknGDaprjloakY";
    const message = "Pak Kajati Andi Herman";
    return this.reply([Response.image.fromURL(imageUrl), message]);
  }

  async fkpJatengDua(request) {
    const imageUrl =
      "https://drive.google.com/uc?export=download&id=1MEgwMrsMp7sQ6dzkxTiItuwM5p7iUwT5";
    const message = "Nana Sudjana (Pj Gubernur Jawa Tengah)";
    return this.reply([Response.image.fromURL(imageUrl), message]);
  }

  async fkpJatengTiga(request) {
    const imageUrl =
      "https://drive.google.com/uc?export=download&id=1QWG1wNhSzeM-iNoMTNFr5pb8qaFYq8Cy";
    const message = "Kapolda Jateng";
    return this.reply([Response.image.fromURL(imageUrl), message]);
  }

  async fkpJatengEmpat(request) {
    const imageUrl =
      "https://drive.google.com/uc?export=download&id=1f214aybzph52uX39p5Hbv4tn9jkQSZlw";
    const message = "H. Sumanto S.H";
    return this.reply([Response.image.fromURL(imageUrl), message]);
  }

  async fkpJatengLima(request) {
    const imageUrl =
      "https://drive.google.com/uc?export=download&id=1Z5ZH9LSobQZVzO8csAc6sFf7r-4oWLeB";
    const message = "Danjen Kopassus Mayjen TNI Deddy Suryadi (PANGDAM)";
    return this.reply([Response.image.fromURL(imageUrl), message]);
  }

  async tataTempatDoc(request) {
    const documentUrl =
      "https://drive.google.com/uc?export=download&id=1RrUZeMQ3XzBkDYjk5IjrRNNzbc92Oczg";
    const message = "TATA TEMPAT";
    return this.reply([Response.document.fromURL(documentUrl), message]);
  }

  async tataUpacara(request) {
    const documentUrl =
      "https://drive.google.com/uc?export=download&id=16dVsKGp_PtfyECdZeWYyN7GJ4bRL7p-0";
    const message = "TATA UPACARA";
    return this.reply([Response.document.fromURL(documentUrl), message]);
  }

  async tataPenghormatan(request) {
    const documentUrl =
      "https://drive.google.com/uc?export=download&id=1jra8Fa6ZLyprwnqsMfaqiomHBwqj3kKP";
    const message = "DOKUMEN TATA PENGHORMATAN";
    return this.reply([Response.document.fromURL(documentUrl), message]);
  }

  async kegiatanKeprotokolan(request) {
    const documentUrl =
      "https://drive.google.com/uc?export=download&id=1J8kBZ-zves2HYRo85I3gq3wzVrGkjFXE";
    const message = "KEGIATAN KEPROTOKOLAN";
    return this.reply([Response.document.fromURL(documentUrl), message]);
  }

  async pejabatPertama(request) {
    const documentUrl =
      "https://drive.google.com/uc?export=download&id=1wqwvYK-JLq3u_d4Vg2KFe33MVH5i3k4m";
    const message =
      "KEGIATAN PELANTIKAN DAN PENGAMBILAN SUMPAH PEJABAT PERTAMA";
    return this.reply([Response.document.fromURL(documentUrl), message]);
  }

  async bupatiWalikota(request) {
    const documentUrl =
      "https://drive.google.com/uc?export=download&id=1xxQIzYnRe8h5tAfEWDq-pf6krZrTVwmp";
    const message =
      "KEGIATAN PELANTIKAN DAN PENGAMBILAN SUMPAH JABATAN DAN PELANTIKAN BUPATI/WALIKOTA";
    return this.reply([Response.document.fromURL(documentUrl), message]);
  }

  async perjanjianKerjasama(request) {
    const documentUrl =
      "https://drive.google.com/uc?export=download&id=1Lkhb1ht6_7hPgVtQC5GrW8G_qL9NR01l";
    const message =
      "KEGIATAN PENANDATANGANAN KESEPAKATAN BERSAMA ATAU PERJANJIAN KERJASAMA";
    return this.reply([Response.document.fromURL(documentUrl), message]);
  }

  async peresmian(request) {
    const documentUrl =
      "https://drive.google.com/uc?export=download&id=1zj5LnpfFCXB3KoUG63hwEzSfut75nyk0";
    const message = "KEGIATAN PELETAKAN BATU PERTAMA DAN PERESMIAN GEDUNG";
    return this.reply([Response.document.fromURL(documentUrl), message]);
  }

  async kontakADC(request) {
    return Response.menu.fromArrayOfString(
      [
        f("menu.ADC1"),
        f("menu.ADC2"),
        f("menu.ADC3"),
        f("menu.ADC4"),
        f("menu.ADC5"),
        f("menu.ADC6"),
      ],
      f("adc"),
      f("template.menu"),
      f("notes")
    );
  }

  async kontakADCSatu(request) {
    const documentUrl =
      "https://docs.google.com/spreadsheets/d/1S3P5pS9v-jH03ASpRy_M3S2rYhZmli9q/edit?usp=sharing&ouid=115675429210404886176&rtpof=true&sd=true";
    const message = "Daftar Nama Pejabat VIP Provinsi Jawa Tengah";
    return this.reply([documentUrl, message]);
  }

  async kontakADCDua(request) {
    const documentUrl =
      "https://docs.google.com/spreadsheets/d/1yX-1jH-UZ7lwxrYpk8MJVsAyCdwbF7Lu/edit?usp=sharing&ouid=115675429210404886176&rtpof=true&sd=true";
    const message = "Daftar Nama Pejabat OPD Provinsi Jawa Tengah";
    return this.reply([documentUrl, message]);
  }

  async kontakADCTiga(request) {
    const documentUrl =
      "https://docs.google.com/spreadsheets/d/1whG_tW1-Md5t1nflXyooPl3Q_ZmDXjP6/edit?usp=sharing&ouid=115675429210404886176&rtpof=true&sd=true";
    const message = "Daftar Nama Forkopimda Provinsi Jawa Tengah";
    return this.reply([documentUrl, message]);
  }

  async kontakADCEmpat(request) {
    const documentUrl =
      "https://docs.google.com/spreadsheets/d/1O0Yel-kcLx96y5rpmXAfrjqfQ13R3aAY/edit?usp=sharing&ouid=115675429210404886176&rtpof=true&sd=true";
    const message = "Daftar Kontak Adc Kementrian";
    return this.reply([documentUrl, message]);
  }

  async kontakADCLima(request) {
    const documentUrl =
      "https://docs.google.com/spreadsheets/d/1uXWFKWCR_-a7JTFF4Rtg6kO9zfbHt0TK/edit?usp=sharing&ouid=115675429210404886176&rtpof=true&sd=true";
    const message = "Daftar Bupati Walikota dan Adc";
    return this.reply([documentUrl, message]);
  }

  async kontakADCEnam(request) {
    const documentUrl =
      "https://docs.google.com/spreadsheets/d/1AS6k4lRybsG5Xws1d24AtR0VYNaybjKlsSdmn2-aH68/edit?usp=sharing";
    const message = "Daftar Adc Gubernur Indonesia";
    return this.reply([documentUrl, message]);
  }

  async pleacing(request) {
    return Response.menu.fromArrayOfString(
      [f("menu.P1"), f("menu.P2"), f("menu.P3"), f("menu.P4")],
      f("pleacing"),
      f("template.menu")
    );
  }

  async pleacingSatu(request) {
    const documentUrl =
      "https://docs.google.com/document/d/11od42F1r76HQ58PY0qwdJMtpyzf6Ek71/edit?usp=sharing&ouid=115675429210404886176&rtpof=true&sd=true";
    const message = "PLESING MEJA TERBARU";
    return this.reply([documentUrl, message]);
  }

  async pleacingDua(request) {
    const documentUrl =
      "https://docs.google.com/document/d/1iMlQqdoPU1Y-0cT8zm_0I_krdpPEDg7X/edit?usp=sharing&ouid=115675429210404886176&rtpof=true&sd=true";
    const message = "PLESING KURSI SINGGEL";
    return this.reply([documentUrl, message]);
  }

  async pleacingTiga(request) {
    const documentUrl =
      "https://docs.google.com/document/d/13P0dLVonvo1sMlXu27tMNus9qbtcQdjZ/edit?usp=sharing&ouid=115675429210404886176&rtpof=true&sd=true";
    const message = "PLESING DOUBLE PANAH PANAH";
    return this.reply([documentUrl, message]);
  }

  async pleacingEmpat(request) {
    const documentUrl =
      "https://docs.google.com/document/d/13OrKY8ZdFlR9nhNoWoSP846L_cJJxfl2/edit?usp=sharing&ouid=115675429210404886176&rtpof=true&sd=true";
    const message = "PLESING ROUND TABEL KECIL CAP";
    return this.reply([documentUrl, message]);
  }
};
