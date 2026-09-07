# Proje çalışma kuralları

## Amaç ve kapsam

- Yalın Rota gerçek ticari amaçlı bir kurumsal web sitesi projesidir; eğitim veya demo projesi değildir.
- Öncelik, Türkiye'deki küçük ve orta ölçekli işletmelerden ilk gerçek ücretli müşteriyi mümkün olduğunca kısa sürede kazanmaktır.
- Her özellik için şu soruyu sor: “Bu değişiklik ilk müşteriyi kazanmamızı veya müşterinin bize güvenmesini anlamlı şekilde kolaylaştırıyor mu?” Cevap hayırsa ilk sürüme ekleme, backlog'a bırak.
- Markayı tek kişi tarafından yürütülen profesyonel bir web geliştirme stüdyosu olarak konumlandır. Kalabalık bir ajans veya ekip izlenimi verme.

## Çalışma biçimi

- Her görevden önce mevcut proje durumunu ve PROJECT_STATE.md dosyasını kontrol et; yapılacak işi kısaca açıkla.
- Büyük işleri küçük, anlamlı milestone'lara böl. Yalnızca istenen kapsamda değişiklik yap.
- Milestone sonunda değişen dosyaları, önemli teknik kararları ve varsa doğrulama sonuçlarını bildir; ardından dur.
- Kullanıcı açıkça istemeden sonraki milestone'a geçme.
- Önemli milestone'larda gerektiğinde PROJECT_STATE.md ve TODO.md dosyalarını güncelle. Küçük değişikliklerde sebepsiz güncelleme yapma.
- Git commit veya push yapma. GitHub repository oluşturma; kullanıcıdan habersiz branch oluşturma.
- Her anlamlı milestone sonunda yapılan işi anlatan kısa, doğal bir İngilizce commit mesajı öner. Uygun olduğunda Conventional Commits kullan. Commit ve push işlemleri kullanıcıya aittir.

## Teknik yaklaşım

- React, TypeScript, Vite ve Tailwind CSS kullanılacak.
- İlk sürümde backend, database, authentication, admin panel veya CMS olmayacak.
- Gereksiz dependency, abstraction ve overengineering ekleme. Standart React, TypeScript veya CSS yeterliyse yeni paket kullanma.
- Kod junior geliştiricinin okuyup anlayabileceği kadar açık olsun. Önemli React ve TypeScript mantıklarını okunabilir tut; gereksiz clever code kullanma.
- Codex üretimi hızlandırmak için kullanılabilir. Uygun küçük ve öğretici bölümlerde “Bu kısmı kendin yazman faydalı olur.” diye belirt; eğitim amacıyla teslimatı yavaşlatma.

## Tasarım ve içerik

- Tasarım sade, ferah, modern, güvenilir, ulaşılabilir ve profesyonel olsun; kurumsal ama soğuk olmasın.
- Güçlü tipografi, yeterli boşluk, net iletişim çağrıları, hız ve erişilebilirlik önceliklidir.
- Mobil öncelikli çalış. Mobil deneyim masaüstü kadar kaliteli olmalıdır.
- Jenerik AI startup görünümü, aşırı gradient, neon renkler, gereksiz glassmorphism, yoğun animasyon ve uçuşan kartlardan kaçın.
- İçerik Türkçe, kısa, doğrudan, abartısız ve küçük işletme sahiplerinin anlayacağı dilde olsun.
- Teknolojileri ana satış mesajı yapma. Profesyonel görünüm, internette bulunabilirlik, kolay iletişim ve hızlı çalışan güvenilir bir web sitesi gibi müşteri ihtiyaçlarına odaklan.
- Sahte istatistik, müşteri yorumu, referans, müşteri logosu veya ekip üyesi kullanma. Klişe ve abartılı vaatlerden kaçın.
- İlk sürüm hizmetlerini BUSINESS.md kapsamıyla sınırla; gelecekteki hizmetlerle siteyi şişirme.

## Proje hafızası

- BUSINESS.md: marka, hizmetler, konumlandırma ve ticari hedefler.
- PROJECT_STATE.md: tamamlanan işler, mevcut görev, sıradaki işler, kararlar ve bilinen problemler için ana durum kaydı.
- TODO.md: mantıklı geliştirme sırasıyla kısa, yüksek seviyeli yapılacaklar listesi.
