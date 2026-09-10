# Project State

## Completed

- İlk özgün hizmet landing page'i hazırlandı: kurumsal web sitesi için sekiz bölüm, ana sayfadan bağlantı, sayfaya özel ilk HTML metadata'sı ve sitemap kaydı eklendi
- Landing page TypeScript/build, dev ve production preview doğrudan URL/refresh, 320/375/430/768/1024/1280/1440 px taşma, klavye/odak, reduced-motion ve bağlantı kontrolleri geçti; console/network hatası görülmedi. Bu değişiklikler henüz yayınlanmadı
- Yalın Rota marka adı belirlendi
- @yalinrota Instagram hesabı oluşturuldu
- Yalın Rota için ayrı Google hesabı oluşturuldu
- Proje kuralları ve hafızası için AGENTS.md, BUSINESS.md, PROJECT_STATE.md ve TODO.md oluşturuldu
- GitHub repository oluşturuldu ve ilk proje dokümantasyonu push edildi
- Site bilgi mimarisi ve içerik akışı belirlendi
- Yalın Rota görsel yönü ve temel design system belirlendi
- React + TypeScript + Vite frontend projesi oluşturuldu
- Tailwind CSS yapılandırıldı
- İlk production build doğrulandı
- TypeScript kontrolü, geliştirme sunucusu ve temel .gitignore kuralları doğrulandı
- Header ve responsive navigation geliştirildi
- Hero bölümü geliştirildi
- Header ve hero sonrasında TypeScript kontrolü ve production build başarılı oldu
- Hizmetler bölümü geliştirildi
- Hizmetler sonrasında TypeScript kontrolü ve production build başarılı oldu; mobil/masaüstü yerleşim kuralları kod üzerinden incelendi
- Neden Yalın Rota bölümü geliştirildi
- Çalışma süreci bölümü geliştirildi
- Neden Yalın Rota ve süreç sonrasında TypeScript kontrolü ve production build başarılı oldu; mobil/masaüstü yerleşim kuralları kod üzerinden incelendi
- Seçilmiş çalışmalar bölümü geliştirildi
- Çalışmalar sonrasında TypeScript ve production build doğrulandı; Chrome'da 320, 375, 768, 1024 ve 1440 px yerleşim/taşma, mobil anchor, dış bağlantı öznitelikleri ve reduced-motion kontrolleri geçti
- SSS bölümü geliştirildi
- İletişim bölümü geliştirildi
- Footer geliştirildi
- Milestone 9 TypeScript ve production build kontrolleri geçti; Chrome'da FAQ Enter/Space/Tab, tek açık yanıt, ARIA/id, görünür odak, mailto/Instagram bağlantıları, header/hero anchor'ları, reduced-motion ve 320–1440 px taşma kontrolleri doğrulandı
- Ana sayfa içerik geliştirmesi tamamlandı
- Responsive ve accessibility QA tamamlandı: Chrome production preview'da 320, 375, 430, 768, 1024, 1280 ve 1440 px genişliklerde yatay taşma/kırpılan metin bulunmadı; açık mobil menü ve altı FAQ yanıtı da kontrol edildi
- Tek H1, heading sırası, landmark'lar, ARIA/id ilişkileri, Tab/Enter/Space/Escape, skip link, görünür odak ve prefers-reduced-motion doğrulandı; ölçülen görünür metin kontrastları AA eşiklerini karşıladı
- Tüm iç anchor hedefleri ve header/hero etkileşimleri doğrulandı; Fixora/JobFit TR canlı ve GitHub adresleri, Instagram ve Gmail hedefleri HTTP 200 döndü. Gmail oturum açılmadığında giriş ekranına yönlendiriyor; oturum içindeki compose ekranı test edilmedi
- Temel SEO yapılandırıldı: Türkçe title/description, theme-color ve URL gerektirmeyen Open Graph alanları eklendi; lang ve viewport doğrulandı
- README hazırlandı
- Milestone 10 TypeScript kontrolü ve production build doğrulandı; JS 210.08 kB (gzip 65.26 kB), CSS 19.75 kB (gzip 4.46 kB). Gereksiz paket, import veya Vite demo asset'i bulunmadı; mevcut UI korundu

- Fixora ve JobFit TR gerçek proje screenshot’ları Vite asset import ile entegre edildi; temsili JSX/CSS ve visualVariant kaldırıldı
- Projects görsel polish tamamlandı; TypeScript ve production build geçti. Chrome’da 320, 375, 430, 768, 1024 ve 1440 px görsel yüklenmesi, doğal oran, taşma, alt metin, dönüşümlü düzen, dış bağlantı öznitelikleri ve reduced-motion doğrulandı; yeni console hatası/uyarısı bulunmadı

- Milestone 12 branding/favicon entegrasyonu tamamlandı: onaylanmış logo header ve footer’da Vite import ile kullanılıyor; kaynak PNG dosyalarının değişmediği SHA-256 ile doğrulandı
- Mark alpha maskesinden beyaz sembollü petrol yeşili favicon seti üretildi: 16/32 PNG, 16/32/48 ICO, 180 Apple, 192/512 Android ikonları ve minimal webmanifest
- Yedi genişlikte (320, 375, 430, 768, 1024, 1280, 1440 px) logo oranı, taşma, menü ve top anchor doğrulandı; dev/production yüklemesinde layout shift kaydedilmedi
- Favicon 404 giderildi; Chrome favicon isteği ve tüm ikon/manifest adresleri dev ve production’da doğru MIME ile 200 döndü. Manifest hatası ve console error/warning yok; FAQ ve iki screenshot lightbox kontrolü geçti
- Milestone 12 TypeScript ve production build doğrulandı
- Milestone 13 final release QA Chrome'da tamamlandı: 320, 360, 375, 390, 430, 768, 1024, 1280 ve 1440 px genişliklerde yatay taşma, kırpılan metin veya bozuk görsel bulunmadı
- Mobil menü açma/kapatma, Escape, bağlantı sonrası odak ve genişlik değişimi; iki screenshot lightbox için Enter/Space, kapatma butonu, Escape, backdrop, görsel tıklaması, Tab/Shift+Tab, odak dönüşü ve scroll lock doğrulandı
- FAQ klavye davranışı, tek H1 ve heading sırası, landmark'lar, benzersiz id/ARIA ilişkileri, görünür odak ve reduced-motion kontrol edildi; ölçülen görünür metinlerde en düşük kontrast 5.74:1 oldu
- İç anchor ve CTA akışları, dış bağlantı güvenlik öznitelikleri ve hedefleri doğrulandı. Gmail alıcısı korunuyor; oturum içindeki compose ekranı test edilmedi
- Dev ve production preview'da console error/warning, beklenmeyen ağ hatası veya layout shift kaydedilmedi; yedi favicon/manifest dosyası doğru MIME ile 200 döndü, manifest ve SEO alanları doğrulandı
- Milestone 13 TypeScript ve production build geçti: JS 209.96 kB (gzip 65.52 kB), CSS 19.71 kB (gzip 4.53 kB); dist içindeki HTML asset hedefleri mevcut
- Secret/API key, kişisel telefon, demo kalıntısı, kullanılmayan import/CSS veya gereksiz dependency tespit edilmedi; doğrulanmış bir uygulama sorunu bulunmadığından mevcut UI ve kaynak kod korundu
- Standart static deployment hazırlığı doğrulandı; hosting sağlayıcısı seçilmedi ve yayın yapılmadı

## Current Task

- Kurumsal web sitesi landing page'inin yayın sonrası URL ve SEO doğrulaması

## Next

- Yeni /kurumsal-web-sitesi sayfasını kullanıcı yayını sonrasında Vercel'de doğrudan açılış, refresh, redirect, canonical ve sitemap açısından doğrula
- Gerçek cihazlar, Safari/Firefox ve ekran okuyucuyla ek yayın kontrolü
- Hosting sağlayıcısının belirlenmesi ve production deployment
- yalinrota.com.tr domaininin satın alınması ve bağlanması (henüz satın alınmadı / bağlanmadı)
- Canlı yayında HTTPS, asset, anchor ve iletişim bağlantılarının kontrolü
- Gerçek Open Graph paylaşım görselinin hazırlanması
- Aktif production domainiyle canonical, og:url ve gerçek paylaşım görseliyle og:image yapılandırılması
- Search Console ve indexing kontrolü

## Decisions

- İlk hizmet landing page'i /kurumsal-web-sitesi için ayrı Vite HTML girişi kullanılıyor. Metadata ilk HTML'de, görünür içerik React ile render ediliyor; router veya yeni dependency eklenmedi
- Header/Footer homePath prop'u ile paylaşılıyor. Landing page iletişim ve ortak navigasyon bağlantıları ana sayfaya dönüyor; SSS native details/summary kullanıyor
- Vercel yalnızca yeni temiz URL'yi ilgili HTML dosyasına rewrite ediyor; .html ve sondaki slash varyantları temiz URL'ye kalıcı yönleniyor. Canlı doğrulama deployment sonrasında yapılacak
- React kullanılacak
- TypeScript kullanılacak
- Vite kullanılacak
- Tailwind CSS kullanılacak
- İlk sürümde backend olmayacak
- İlk sürümde database olmayacak
- İlk sürümde authentication, admin panel ve CMS olmayacak
- İçerik Türkçe olacak
- Mobil deneyim öncelikli olacak
- Sahte müşteri/referans kullanılmayacak
- Domain site yayınlanmaya hazır hale geldikten sonra satın alınacak
- Geliştirme küçük milestone'larla ilerleyecek; sonraki aşama kullanıcının açık talebiyle başlayacak
- Commit ve push işlemleri kullanıcı tarafından manuel yapılacak
- İlk sürüm tek sayfalı olacak; bilgi mimarisi ve içerik taslakları SITE_PLAN.md içinde tutulacak
- Güven/değer önerisi ve Neden Yalın Rota içeriği tek bölümde birleştirilecek
- Seçilmiş Çalışmalar bölümünde kurucunun geliştirdiği Fixora ve JobFit TR sınırlı biçimde sunulacak; Yalın Rota müşteri işi olmadıkları açıkça belirtilecek
- İlk sürüm iletişim kanalları Instagram @yalinrota ve e-posta yalinrota@gmail.com olacak
- WhatsApp numarası henüz belirlenmedi; ilk sürümde zorunlu olmayacak ve uydurulmayacak
- İlk sürümde iletişim formu kullanılmayacak
- Görsel kararlar DESIGN_SYSTEM.md içinde tutulacak; açık nötr zemin ve tek accent olarak koyu petrol yeşili kullanılacak
- Sistem sans-serif fontu korunuyor; header/footer artık onaylanmış yatay PNG logoyu kullanıyor. Mobil header 144 px, desktop 162 px, footer 138 px; doğal 3:1 oran ve intrinsic boyutlar korunuyor
- Hero tipografi ağırlıklı; masaüstünde dekoratif HTML/CSS browser önizlemesiyle iki kolon, mobilde yalnızca metin ve CTA'lar kullanılıyor
- Header normal sayfa akışında olacak; mobil navigasyon altında açılan basit bir liste olarak uygulanacak
- Ana sayfa, gerçek screenshot entegrasyonu, branding, temel SEO, README ve Milestone 13 Chrome release QA tamamlandı; ek tarayıcı/cihaz kontrolleri ve yayın işlemleri sırada
- Standart static yayın için build komutu npm run build, çıktı dizini dist/ olacak. Mevcut asset yolları site kökünde yayın varsayıyor; anchor tabanlı tek sayfa için uygulama sunucusu, ortam değişkeni veya route rewrite gerekmiyor. Hosting sağlayıcısı henüz seçilmedi
- Milestone 9 talebine göre Faq.tsx altı soruyu aynı anda tek yanıt açılan React state kontrollü accordion olarak sunuyor; önceki açık soru-cevap taslağının yerini aldı
- Contact.tsx petrol yeşili yüzeyde Gmail compose ve Instagram profil bağlantılarını yeni sekmede sunuyor; footer e-postası mailto olarak kaldı. Form, telefon ve WhatsApp eklenmedi
- Footer.tsx marka, beş bölüm bağlantısı, gerçek iletişim kanalları ve JavaScript ile güncel yılı gösteriyor
- sss ve iletisim id'leri mevcut navigasyon ve hero CTA'larına bağlandı; eski bileşenlerde değişiklik gerekmedi
- React 19, TypeScript 7, Vite 8 ve Tailwind CSS 4 kuruldu; kesin bağımlılık sürümleri package-lock.json içinde tutuluyor
- Tailwind CSS resmi @tailwindcss/vite eklentisiyle bağlandı; ayrı PostCSS veya Tailwind yapılandırma dosyası gerekmedi
- Global CSS temel ayarlara ek olarak header, mobil menü, hero, hizmetler, ortak CTA ve görünür odak stillerini içeriyor
- Hizmetler Services.tsx içinde bir veri dizisinden map ile üretiliyor; mobilde tek kolon, 48rem ve üzerinde 2×2 grid kullanılıyor
- Hizmetler bölümü hizmetler id'siyle mevcut header ve hero bağlantılarına bağlandı; bölüm H2, hizmet adları H3 olarak düzenlendi
- WhyUs.tsx dört çalışma ilkesini hafif nötr yüzey, kısa sol accent işaretleri ve beyaz hover yüzeyiyle sunuyor; 64rem ve üzerinde giriş ve liste iki kolona ayrılıyor
- Process.tsx dört adımı dikey timeline olarak sunuyor; 48rem ve üzerinde her adımın başlığı ve açıklaması yan yana yerleşiyor. Son node'dan sonra çizgi devam etmiyor
- Bölüm id'leri neden-yalin-rota ve surec; mevcut Süreç bağlantısı yeni bölüme bağlandı. Sahte güven verisi ve yeni CTA eklenmedi
- Projects.tsx, kullanıcı tarafından sağlanan Fixora ve JobFit TR içeriklerini Project tipi ve map ile sunuyor; müşteri işi olmadıkları girişte açıklanıyor, her projede Kurucu projesi etiketi bulunuyor
- Çalışmalar calismalar id'sine bağlı; projeler geniş bloklarda, 64rem ve üzerinde dönüşümlü görsel/bilgi düzeninde, mobilde bilgi önce olacak şekilde sunuluyor
- Projects görselleri src/assets/projects içindeki kullanıcı tarafından sağlanan PNG dosyalarından import ediliyor; açıklayıcı alt metin, gerçek width/height, lazy loading ve async decoding kullanılıyor. Görseller width: 100% / height: auto ile kırpılmadan gösteriliyor; placeholder ve visualVariant kaldırıldı. Masaüstünde çift sıradaki proje CSS nth-child(even) ile ters yerleşiyor
- Canlıyı Gör ve GitHub bağlantıları kullanıcı tarafından verilen adresleri kullanıyor; yeni sekmede noopener noreferrer ile açılıyor
- Milestone 5 kullanıcı talebine göre menü Hizmetler, Çalışmalar, Süreç ve SSS bağlantılarından oluşuyor; CTA İletişime Geç
- Milestone 5 hero başlığı İşletmenize yakışan bir web sitesi olarak uygulandı; Web & Dijital Çözümler üst metni kullanıldı
- Header ve Hero ayrı bileşenlerde; menü tek bağlantı dizisi, useState ve odak yönetimi için useRef kullanıyor
- Mobil menü 64rem altında açılan liste; hero CTA'ları 30rem altında alt alta, içerik en fazla 70rem genişliğinde
- npm run build önce TypeScript kontrolünü, ardından production build işlemini çalıştırıyor; npm run dev ve npm run preview komutları mevcut
- README geliştirici odaklı kısa kurulum/build bilgilerini içeriyor; Vite demo içerikleri bulunmuyor
- Aktif domain ve paylaşım görseli hazır olmadan canonical, og:url ve og:image eklenmeyecek; favicon seti ve manifest Milestone 12’de eklendi
- Header ve footer marka bağlantıları #top hedefine gider; mevcut navigasyon, içerikler ve lightbox korunur
- Favicon türevleri mevcut Pillow ile üretildi; Y şekli kaynak alpha kanalından gelir. Beyaz sembol, #176B55 yuvarlatılmış kare içinde yaklaşık %70 genişlik kaplar. Kaynak logo/mark PNG’leri değiştirilmedi

## Known Issues

- Test edilen kapsamda yayını engelleyen bir uygulama hatası bulunmadı
- Chrome kontrolleri gerçek cihaz, Safari/Firefox veya ekran okuyucu testi yerine geçmez; bu ek kontroller henüz tamamlanmadı
- Production deployment ve domain satın alma/bağlantısı henüz yapılmadı; canonical, og:url ve gerçek paylaşım görseline bağlı og:image bekliyor
