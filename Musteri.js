class Musteri extends MigrosBase {
  constructor(isim, soyisim, kartVarmi, urunler) {
    super(isim, soyisim, kartVarmi, urunler); //migrosBase sınıfından alıyoruz
  }
  hesapla() {
    return super.hesapla(); //üst sınıf olan migrosBase den aldım
  }
}
