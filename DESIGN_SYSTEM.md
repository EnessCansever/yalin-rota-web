# Yalın Rota — Design System

## 1. Design Direction

Görsel yön: açık zeminli, güçlü tipografili ve ferah bir kurumsal hizmet sitesi. Koyu petrol yeşili yalnızca önemli eylemleri ve bağlantıları vurgular. Düzenli hizalama, anlaşılır içerik ve ölçülü detaylar; güvenilir, modern ve ulaşılabilir bir izlenim oluşturur.

SITE_PLAN.md içindeki bölüm sırası, metin yaklaşımı ve iletişim kararları korunur. Site tek kişinin yürüttüğü profesyonel bir stüdyoyu temsil eder. İlk sürüm için özel logo gerekmez; sade “Yalın Rota” yazısı yeterlidir.

Bu dosya Milestone 3'ün görsel karar kaydıdır. SITE_PLAN.md içindeki tasarımın henüz belirlenmediğine ilişkin Milestone 2 notunun güncel karşılığı bu dosya ve PROJECT_STATE.md'dir. Henüz tasarım kodlanmadı veya görsel asset üretilmedi.

## 2. Color Palette

Tek accent ailesi ve nötr tonlar kullanılacak; ayrı bir destek rengine ihtiyaç yok.

| Rol | Renk | Kullanım |
| --- | --- | --- |
| Ana zemin | #F7F8F5 | Sayfa, hero ve footer |
| Yüzey | #FFFFFF | Header, hizmet ve çalışma kartları |
| Ana metin | #202B28 | Başlıklar, wordmark ve güçlü metin |
| İkincil metin | #52605A | Açıklamalar, yardımcı metinler ve proje etiketleri |
| Ayırıcı | #D8DFDA | Dekoratif çizgiler ve kart sınırları |
| Accent | #176B55 | Ana CTA, metin bağlantıları ve odak çerçevesi |
| Accent koyu | #10513F | Ana CTA hover/active durumu |

Beyaz metin yalnızca accent ve accent koyu zemin üzerinde kullanılır. Diğer metinler ana zemin veya beyaz yüzey üzerindedir. Soluk gri metin, metin opaklığını düşürme ve gradient kullanılmaz. Ayırıcı rengi etkileşimli bir kontrolün tek görünür sınırı olarak kullanılmaz; ikincil buton sınırı accent rengindedir.

## 3. Typography

Tek sistem sans-serif yaklaşımı: system-ui, ardından işletim sistemine uygun sans-serif ve genel sans-serif yedeği. Google Fonts isteği veya indirilecek font dosyası yok. Böylece ek font yükleme ihtiyacı oluşmaz; işletim sistemleri arasında küçük tipografik farklar kabul edilir.

| Öğe | Mobil | Tablet | Masaüstü | Ağırlık / satır yüksekliği |
| --- | --- | --- | --- | --- |
| H1 | 36 px | 44 px | 56 px | 700 / 1.15 |
| H2 | 28 px | 32 px | 36 px | 700 / 1.2 |
| H3 | 20 px | 22 px | 22 px | 600 / 1.3 |
| Hero açıklaması | 18 px | 18 px | 20 px | 400 / 1.6 |
| Gövde | 16 px | 16 px | 18 px | 400 / 1.6 |
| Yardımcı metin | 14 px | 14 px | 14 px | 400 / 1.5 |
| Buton / navigasyon | 16 px | 16 px | 16 px | 600 / 1.4 |

Ölçüler uygulamada rem karşılıklarıyla tanımlanır; kullanıcının font boyutu tercihi korunur. Başlıklar cümle düzeninde yazılır. H1 ve H2 harf aralığı en fazla -0.02em; diğer metinler normal aralıkta. Tamamı büyük harf, aşırı kalın veya dar font karakteri kullanılmaz. Türkçe karakterler ve uzun kelimeler gerçek içerikle kontrol edilir.

## 4. Layout

- Ana içerik genişliği en fazla 1120 px; ortalanır. Header, bölümler ve footer aynı hizayı izler.
- Sayfa yan boşluğu mobilde 20 px, tablette 32 px, masaüstünde en az 40 px. İçerik genişliği bu boşlukların içinde kalır.
- Mobil: 768 px altı. Tablet: 768–1023 px. Masaüstü: 1024 px ve üzeri. Geçişler uygulamada rem karşılıklarıyla tanımlanır.
- Okuma paragrafları en fazla 65ch, bölüm girişleri en fazla 680 px. Uzun metinler tüm ekran genişliğine yayılmaz.
- Kart aralığı mobilde 16 px, tablet ve masaüstünde 24 px. Sabit kart yüksekliği kullanılmaz.

## 5. Spacing

Temel boşluk ölçeği: 4, 8, 12, 16, 24, 32, 48, 64 ve 96 px. Uygulamada rem karşılıkları kullanılır.

- Ana bölümlerde üst ve alt iç boşluk: mobil 64 px, tablet 80 px, masaüstü 96 px. 80 px yalnızca tablet bölüm boşluğu için ara değerdir.
- Bölüm başlığı ile açıklama: 16 px. Bölüm girişi ile kart/liste: mobil 32 px, geniş ekran 48 px.
- Kart iç boşluğu: mobil 24 px, geniş ekran 32 px. Kart başlığı ile açıklama: 12 px.
- CTA grubu aralığı: 12 px. Açıklama ile CTA grubu: 24 px.
- Footer üst/alt boşluğu: mobil 32 px, geniş ekran 48 px.

## 6. Buttons

- **Ana CTA:** Accent dolgu, beyaz metin, 1 px accent sınır. Hover/active durumunda accent koyu. Aynı eylem grubunda yalnızca bir dolu buton.
- **İkincil CTA:** Beyaz yüzey, accent metin ve 1 px accent sınır. Hover durumunda ana zemin rengi; metin ve sınır accent koyu.
- **Metin bağlantısı:** Accent renk ve alt çizgi. Hover durumunda accent koyu; anlam yalnızca renk değişimine bağlı değil.
- Buton köşeleri 8 px. Minimum yükseklik 48 px, yatay iç boşluk 20 px, dikey iç boşluk 12 px. Uzun metinde buton büyür ve metin satır kırabilir.
- Odakta 3 px accent çerçeve ve 3 px dış boşluk; çerçeve kesilmez. Hover yalnızca renk değiştirir, ölçek veya yukarı kayma yok. Renk geçişi en fazla 150 ms.
- Bölüme veya dış adrese giden CTA'lar bağlantı, menü açma gibi arayüz eylemleri buton olarak uygulanır.

## 7. Cards

Kartlar yalnızca hizmetleri ve çalışmaları gruplamak için kullanılır. Beyaz yüzey, 1 px ayırıcı sınır, 12 px köşe yuvarlama; gölge yok. Büyük yuvarlak kapsüller ve iç içe kartlar kullanılmaz.

Hizmet kartları metin ağırlıklıdır; ikon zorunlu değildir. Tıklanmayan kartlar hover efekti veya el imleci almaz. Çalışma kartında varsa proje bağlantısı açıkça görünür; tüm kartı belirsiz bir tıklama alanına çevirme.

## 8. Header & Navigation

- Beyaz, opak header ve ince alt ayırıcı. İlk sürümde normal sayfa akışında; sticky/fixed davranış, bulanıklık ve gölge yok.
- Geniş ekranda en az 80 px, mobilde en az 72 px yükseklik. Yazı büyütüldüğünde yükseklik içeriğe göre artar.
- Solda ana metin renginde, 24 px ve 700 ağırlığında “Yalın Rota”. Özel sembol veya logo görseli gerekmez. Bağlantı sayfa başına gider.
- Masaüstünde sağda Hizmetler, Yaklaşım, Süreç, Çalışmalar bağlantıları ve dolu “İletişime geç” CTA'sı. Bağlantılar arasında 24 px boşluk.
- 1024 px altında solda wordmark, sağda metin etiketli “Menü” butonu. Menü, header altında normal akışta açılan dikey bağlantı listesi; tam ekran katman veya çekmece değil.
- Mobil menüde aynı bağlantılar ve en altta “İletişime geç” bulunur. Her satır en az 48 px yüksekliğinde. Menü açıldığında sayfa aşağı itilir; içerik örtülmez.
- Menü butonu açık/kapalı durumunu yardımcı teknolojilere bildirir. Kapalı bağlantılar odak sırasına girmez. Escape ile kapanır ve odak menü butonuna döner. Bölüm bağlantısı seçilince menü kapanır ve odak hedef bölüme taşınır. Modal olmadığı için odak tuzağı kullanılmaz.

## 9. Section Styling

### Hero

Ana zemin üzerinde sola hizalı, tek sütunlu ve metin merkezli kompozisyon. Başlık için en fazla 800 px, açıklama için 640 px genişlik. Ana içerik kabı içinde kalan sağ boşluk bilinçli olarak korunur; yer doldurmak için ikinci bir panel veya görsel eklenmez.

SITE_PLAN.md'deki “İşletmeniz için sade, hızlı ve profesyonel web siteleri.” başlığı ana görsel ağırlığı taşır. Altında açıklama, ardından dolu “Projenizi konuşalım” ve altı çizili “Hizmetleri inceleyin” bağlantısı gelir. Başlık tek renktir; kelime bazlı gradient veya rozet yok.

Üst/alt boşluk mobilde 48/64 px, tablette 64/80 px, masaüstünde 80/96 px. Sabit yükseklik veya tam ekran yüksekliği zorlaması yok. Başlık doğal kırılır; cihaza özel zorunlu satır sonları kullanılmaz. 480 px altında CTA'lar alt alta, ana CTA tam genişlik; daha geniş alanda sığdığı sürece yan yana.

### Hizmetler

Dört beyaz kart; mobilde tek sütun, 768 px ve üzerinde iki sütun. Dört kartı tek sıraya sıkıştırma. Her kartta hizmet adı ve kısa açıklama; ayrı görsel veya teknoloji rozeti yok. Ortak “İhtiyacınızı paylaşın” bağlantısı kart grubunun altında bulunur.

### Neden Yalın Rota ve süreç

Neden Yalın Rota beyaz bölüm zemini üzerinde; masaüstünde giriş ve çalışma ilkeleri iki sütunda, mobilde alt alta. İlkeler kart içine alınmaz; başlık ve kısa metin yeterli.

Süreç ana zeminde, 1–4 numaralarıyla düzenli liste. Mobilde tek sütun, tablette iki, masaüstünde dört sütun. Sayılar küçük accent metin olarak kullanılır; animasyonlu çizgi veya zaman tüneli gerekmez.

### Seçilmiş Çalışmalar

Fixora ve JobFit TR için iki kart; mobilde tek, 768 px ve üzerinde iki sütun. Her birinde proje adı, “Kurucunun çalışması — Yalın Rota müşteri işi değildir” açıklaması, sade iş tanımı ve kurucunun katkısı yer alır. Etiket en az 14 px ve ikincil metin renginde; gizli, tooltip içinde veya düşük kontrastlı olmaz.

Gerçek ekran görüntüsü sağlandığında kartın üstünde 16:10 oranlı, nötr zeminli bir alanda görüntünün tamamı korunarak gösterilir. Cihaz maketi, perspektif dönüş veya uydurma ekran kullanılmaz. Görsel henüz yoksa boş görsel kutusu yerine metin düzeni korunur; bölüm gizlenmez. Proje açıklamaları ve bağlantıları sağlanmadan uydurulmaz. Canlı bağlantı varsa “Projeyi inceleyin” metin bağlantısı eklenir.

### Sık sorulan sorular

En fazla 760 px genişliğinde, sola hizalı soru-cevap listesi. Cevaplar ilk sürümde açık görünür; ek açma/kapama etkileşimi gerekmez. Sorular arasında 24 px boşluk ve ince ayırıcı kullanılır.

### İletişim CTA

Beyaz zemin üzerinde üst ayırıcı ile belirginleşen bölüm; büyük renkli kutu veya koyu tam genişlik bant yok. Masaüstünde solda başlık ve açıklama, sağda iletişim seçenekleri; mobilde tek sütun.

“Instagram'dan mesaj gönderin” dolu ana CTA, “E-posta gönderin” ikincil CTA. Altlarında @yalinrota ve yalinrota@gmail.com açık metin olarak görünür. Mobilde butonlar alt alta ve tam genişlik. E-posta adresi gerektiğinde satır kırabilir. Form ve WhatsApp alanı yok.

### Footer

Ana zeminde ince üst ayırıcı; wordmark, tek cümlelik hizmet açıklaması ve SITE_PLAN.md'deki bağlantılar. Masaüstünde marka ve bağlantılar yan yana, mobilde alt alta; gruplar arasında 24 px. Büyük link dizini, müşteri logosu veya dekoratif görsel yok.

## 10. Responsive Principles

- Önce tek sütunlu mobil düzen kurulacak; sütun sayıları yalnızca içerik rahat sığdığında artırılacak.
- 320, 375, 768, 1024 ve 1440 px genişliklerde gerçek Türkçe metinle taşma, kırılma ve CTA erişimi kontrol edilecek.
- Başlık ve kart yükseklikleri sabitlenmez. Uzun bağlantılar kırılabilir; görseller kabını aşmaz. Taşmayı gizleyerek içerik kaybını örtme.
- Hero ana CTA'sı açıklamanın hemen ardından gelir. Sabit alt CTA çubuğu veya mobil ekranı kapatan öğe eklenmez.
- Menü ve kartlar yazı büyütüldüğünde de yeniden akabilmeli. Sayfa genelinde yatay kaydırma olmamalı; içerik kısaltılarak veya kesilerek sığdırılmamalı.

## 11. Accessibility

- Tasarım hedefi: normal metinde en az 4.5:1, büyük metinde en az 3:1; kontrol sınırları ve odak göstergelerinde komşu zemine karşı en az 3:1 kontrast. Uygulamada gerçek renk eşleşmeleri ve etkileşim durumları ölçülecek; bu belge tamamlanmış erişilebilirlik testi değildir.
- Gövde metni en az 16 px; proje türü ve iletişim bilgisi gibi önemli açıklamalar düşük kontrastla geri plana atılmaz.
- Tek H1, bölüm başlıklarında H2, kart başlıklarında H3. Sayfa dili Türkçe; header, navigasyon, ana içerik ve footer anlamlı bölgeler olarak tanımlanır.
- Klavyeyle görünür hale gelen “İçeriğe geç” bağlantısı bulunur. Tüm etkileşimler klavyeden erişilebilir ve görünür odaklı olur.
- Dokunma hedefleri en az 44 × 44 px; ana buton ve mobil menü satırları için 48 px hedeflenir.
- Bilgi yalnızca renkle, hover ile veya ikonla aktarılmaz. Gerçek proje görsellerinin açıklayıcı alternatif metni olur; görsel içindeki yazılar tek bilgi kaynağı değildir.
- Otomatik animasyon yok. Hareket azaltma tercihi etkinse kısa renk geçişleri de kaldırılır. Zorunlu yumuşak kaydırma kullanılmaz.
- Uygulamada yüzde 200 metin büyütme ve yüzde 400 yakınlaştırmada içerik kaybı ve yeniden akış ayrıca kontrol edilir.

## 12. Things to Avoid

- Neon, mor gradient, cyberpunk görünüm, koyu teknoloji teması ve çoklu accent renkleri.
- Glassmorphism, büyük gradient blob'lar, anlamsız 3D objeler ve dekoratif dashboard'lar.
- AI insan görselleri, klişe stock fotoğraflar ve logo hazırlığını yayın koşulu yapmak.
- Uçuşan kartlar, hover büyütmesi, yoğun gölgeler, otomatik kayan içerikler ve giriş animasyonları.
- Sahte müşteri referansları, istatistikler, ekip üyeleri veya Fixora ve JobFit TR'yi müşteri işi gibi sunmak.
- Gereksiz font aileleri, aşırı büyük başlıklar, düşük kontrastlı gri metin ve sabit yüksekliğe sıkıştırılmış içerik.
