class MigrosBase {
  indirimOrani = 20; //migros kartı olanlara indirim yapılacak
  constructor(isim, soyisim, kartVarmi, urunler) {
    this.isim = isim;
    this.soyisim = soyisim;
    this.kartVarmi = kartVarmi;
    this.urunler = urunler;
  }
  hesapla() {
    let odenecekTutar = 0;

    if (this.urunleriKontrolEt(this.urunler)) {
      //sepet dolu
      if (this.kartVarmi) {
        //money karti var
        this.urunler.forEach((urun) => {
          odenecekTutar += urun.fiyat * ((100 - this.indirimOrani) / 100);
        });
      } else {
        this.urunler.forEach((urun) => {
          odenecekTutar += urun.fiyat;
        });
      }
    } else {
      alert("En az bir tane ürün satin almalisiniz.");
    }
    return odenecekTutar;
  }
  urunleriKontrolEt(urunler) {
    if (urunler != null && urunler.length > 0) {
      return true;
    }
    return false;
  }
}
