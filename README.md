# Rast Mobile - Sosyal Medya Yönetim Uygulaması

Bu proje, sosyal medya verilerini görüntüleyen, arama yapabilen ve yeni sosyal medya hesapları ekleyebilen bir web uygulamasını içermektedir. Proje, React kullanılarak geliştirilmiş ve verileri tablo formatında göstermek için DevExtreme React Grid kullanılmıştır ve JSON Server ile oluşturulan bir API üzerinden sosyal medya verilerini yönetmektedir.

## Özellikler

- Sosyal medya verilerini görüntüleme.
- Sosyal medya adı, link veya açıklama gibi kriterlere göre arama yapabilme.
- Yeni sosyal medya hesapları ekleyebilme.

  ## Kullanılan Teknolojiler

- React
- DevExtreme React Grid
- Axios
- CSS
- JSON Server
- react-toastify

## Proje Yapısı

Proje, aşağıdaki bileşenleri içermektedir:

- **Navbar:** Uygulama başlığı ve sayfa gezinimini içeren bileşen.
- **GridCard:** Sayfa içeriğini saran genel kart bileşeni.
- **SearchBar:** Sosyal medya verilerini aramak için kullanılan bileşen.
- **DataGridTable:** Sosyal medya verilerini tablo formatında gösteren bileşen.
- **TableFooter:** Tablonun altında yer alan sayfalama ve satır sayısı kontrolünü sağlayan bileşen.
- **NewAccount:** Yeni sosyal medya hesapları eklemek için kullanılan modal bileşen.(Eklenen veriler kullanıcının localinde kayıt edilir.)
  
## Kullanım

- Navbar üzerinden farklı sayfalara gidilebilir.
- SearchBar ile sosyal medya verileri aranabilir. Arama sonuçları eğer varsa görüntülenir.
- "+ Yeni Hesap Ekle" butonu ile yeni sosyal medya hesapları eklenip görüntülenebilir.
- DataGridTable, sosyal medya verilerini tablo formatında gösterir. Tablo başlıkları "Sosyal Medya Linki", "Sosyal Medya Adı" ve "Açıklama"dır.
- TableFooter ile görüntülenen satır sayısını artırma veya azaltma işlemleri ve sayfa arası geçişler yapılabilir. 


  ## Kurulum

1. Projeyi bilgisayarınıza klonlayın:

    ```bash
    git clone https://github.com/MelikeDemiralayy/rast-mobile-task.git
    ```
2. Proje klasörüne gidin:

    ```bash
    cd rast-mobile-task
    ```
3. Bağımlılıkları yükleyin:

    ```bash
    npm install
    ```
5. JSON Server'ı başlatın:

    ```bash
    npx json-server --watch db.json --port 5174
    ```
    JSON Server, http://localhost:5174/socialMediaData adresinde çalışacaktır.

6. Projeyi başlatın:

    ```bash
    npm run dev
    ```
   Tarayıcınızda http://localhost:5173 adresine giderek projeyi görüntüleyin.
   

# Proje Linki

Projeyi canlı olarak incelemek için https://rast-mobile-task-steel.vercel.app/ adresini ziyaret edebilirsiniz.
