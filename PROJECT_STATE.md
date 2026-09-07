# Project State

## Completed

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

## Current Task

- Neden Yalın Rota ve çalışma süreci bölümlerinin geliştirilmesi

## Next

- DESIGN_SYSTEM.md kararlarının temel başlangıç stilleri üzerine aşamalı olarak uygulanması
- Neden Yalın Rota bölümünün geliştirilmesi
- Süreç bölümünün geliştirilmesi
- Fixora ve JobFit TR içeriklerinin hazırlanması ve Seçilmiş Çalışmalar bölümünün geliştirilmesi
- Sık sorulan sorular bölümünün geliştirilmesi
- İletişim alanının geliştirilmesi
- Footer geliştirilmesi
- Instagram ve yalinrota@gmail.com iletişim bağlantılarının doğrulanması
- Responsive kontrol
- Accessibility kontrol
- SEO temelleri
- Production build kontrolü
- Deployment
- yalinrota.com.tr domaininin satın alınması ve bağlanması

## Decisions

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
- Sistem sans-serif fontu ve tipografik Yalın Rota wordmark kullanılacak; özel font veya logo ilk yayın için gerekmeyecek
- Hero görsel gerektirmeyen, sola hizalı ve tipografi ağırlıklı olacak
- Header normal sayfa akışında olacak; mobil navigasyon altında açılan basit bir liste olarak uygulanacak
- Teknik kurulum, header, hero ve hizmetler tamamlandı; diğer ana sayfa bölümleri henüz geliştirilmedi
- React 19, TypeScript 7, Vite 8 ve Tailwind CSS 4 kuruldu; kesin bağımlılık sürümleri package-lock.json içinde tutuluyor
- Tailwind CSS resmi @tailwindcss/vite eklentisiyle bağlandı; ayrı PostCSS veya Tailwind yapılandırma dosyası gerekmedi
- Global CSS temel ayarlara ek olarak header, mobil menü, hero, hizmetler, ortak CTA ve görünür odak stillerini içeriyor
- Hizmetler Services.tsx içinde bir veri dizisinden map ile üretiliyor; mobilde tek kolon, 48rem ve üzerinde 2×2 grid kullanılıyor
- Hizmetler bölümü hizmetler id'siyle mevcut header ve hero bağlantılarına bağlandı; bölüm H2, hizmet adları H3 olarak düzenlendi
- Milestone 5 kullanıcı talebine göre menü Hizmetler, Çalışmalar, Süreç ve SSS bağlantılarından oluşuyor; CTA İletişime Geç
- Milestone 5 hero başlığı İşletmenize yakışan bir web sitesi olarak uygulandı; Web & Dijital Çözümler üst metni kullanıldı
- Header ve Hero ayrı bileşenlerde; menü tek bağlantı dizisi, useState ve odak yönetimi için useRef kullanıyor
- Mobil menü 64rem altında açılan liste; hero CTA'ları 30rem altında alt alta, içerik en fazla 70rem genişliğinde
- npm run build önce TypeScript kontrolünü, ardından production build işlemini çalıştırıyor; npm run dev ve npm run preview komutları mevcut
- README ve Vite demo içerikleri oluşturulmadı; mevcut planlama belgeleri korundu

## Known Issues

- Çalışmalar, süreç, SSS ve iletişim hedef bölümleri henüz yok; ilgili bağlantılar gelecekteki section id'lerine hazırlandı
- Responsive kurallar kod üzerinden incelendi; tarayıcı test aracı kurulu olmadığından gerçek viewport ve klavye etkileşim testleri henüz yapılmadı
- Fixora ve JobFit TR için açıklamalar, kurucunun katkısı, görseller ve varsa bağlantılar henüz paylaşılmadı; içerik hazırlanırken kullanıcıdan alınacak
