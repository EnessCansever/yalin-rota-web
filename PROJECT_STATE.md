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

## Current Task

- Header ve hero bölümünün geliştirilmesi

## Next

- DESIGN_SYSTEM.md kararlarının temel başlangıç stilleri üzerine aşamalı olarak uygulanması
- Header / navigation geliştirilmesi
- Hero bölümünün geliştirilmesi
- Hizmetler bölümünün geliştirilmesi
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
- Teknik kurulum tamamlandı; uygulamada yalnızca geçici Yalın Rota başlığı bulunuyor, ana sayfa bölümleri henüz geliştirilmedi
- React 19, TypeScript 7, Vite 8 ve Tailwind CSS 4 kuruldu; kesin bağımlılık sürümleri package-lock.json içinde tutuluyor
- Tailwind CSS resmi @tailwindcss/vite eklentisiyle bağlandı; ayrı PostCSS veya Tailwind yapılandırma dosyası gerekmedi
- Global CSS yalnızca Tailwind importu, box-sizing, body margin, sistem fontu ve temel zemin/metin renklerini içeriyor
- npm run build önce TypeScript kontrolünü, ardından production build işlemini çalıştırıyor; npm run dev ve npm run preview komutları mevcut
- README ve Vite demo içerikleri oluşturulmadı; mevcut planlama belgeleri korundu

## Known Issues

- Fixora ve JobFit TR için açıklamalar, kurucunun katkısı, görseller ve varsa bağlantılar henüz paylaşılmadı; içerik hazırlanırken kullanıcıdan alınacak
