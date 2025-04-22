import {
  ChildIcon,
  HeartCrackIcon,
  HeartIcon,
  MedicalTestIcon,
  UsersIcon,
  LightbulbIcon,
  BookOpenIcon,
} from "@/components/icons";
import { IServiceItem } from "@/types/shared-types";

export const SERVICES_ITEMS: IServiceItem[] = [
  {
    id: "bireysel",
    title: "Bireysel Danışmanlık",
    shortDescription:
      "Kişisel sorunlarınızı çözmek ve kendinizi daha iyi anlamak için bire bir danışmanlık seansları.",
    longDescription:
      "Bireysel danışmanlık, kişisel zorluklar, duygusal sıkıntılar veya davranış sorunları yaşayan bireylere özel olarak tasarlanmış bir danışmanlık türüdür. Uzman psikologlarımız, depresyon, kaygı bozuklukları, travma sonrası stres bozukluğu, öfke kontrolü, özgüven sorunları ve kişisel gelişim gibi çeşitli konularda destek sağlar. Güvenli ve yargısız bir ortamda, düşüncelerinizi ve duygularınızı keşfetmenize, zorlukların üstesinden gelmenize ve daha sağlıklı başa çıkma mekanizmaları geliştirmenize yardımcı oluruz.",
    image: "/images/home/hero/profesyonel-destek.jpg",
    icon: UsersIcon,
    benefits: [
      "Duygusal zorlukların üstesinden gelme",
      "Özgüven ve öz-farkındalık geliştirme",
      "Stres ve kaygıyı azaltma teknikleri",
      "Sağlıklı ilişkiler kurma becerileri",
      "Kişisel hedeflere ulaşma desteği",
    ],
    approaches: [
      "Bilişsel Davranışçı Danışmanlık",
      "Şema Danışmanlık",
      "Psikodinamik Danışmanlık",
      "Mindfulness Temelli Yaklaşımlar",
      "Kabul ve Kararlılık Danışmanlığı",
    ],
    duration: "45-50 dakika",
    frequency: "Haftada bir veya danışanın ihtiyacına göre",
  },
  {
    id: "cift",
    title: "Çift Danışmanlığı",
    shortDescription:
      "İlişkinizi güçlendirmek ve iletişim sorunlarını çözmek için profesyonel destek.",
    longDescription:
      "Çift danışmanlığı, ilişkilerinde zorluk yaşayan çiftlere yardımcı olmak için tasarlanmıştır. İletişim sorunları, güven eksikliği, çatışma çözümü, yakınlık sorunları veya yaşam değişiklikleri gibi konularda uzmanlaşmış danışmanlarımız, ilişkinizi güçlendirmenize ve daha sağlıklı bir bağ kurmanıza yardımcı olur. Destek sürecinde, her iki tarafın da duyulduğu ve anlaşıldığı güvenli bir ortam sağlayarak, çiftlerin birbirlerini daha iyi anlamalarını ve ilişkilerindeki zorlukları birlikte aşmalarını destekleriz.",
    image: "/images/home/hero/profesyonel-destek.jpg",
    icon: HeartIcon,
    benefits: [
      "Etkili iletişim becerilerini geliştirme",
      "Çatışmaları sağlıklı bir şekilde çözme",
      "Duygusal bağı güçlendirme",
      "Güven ve saygıyı yeniden inşa etme",
      "Ortak hedefler belirleme ve ilişkiyi yenileme",
    ],
    approaches: [
      "Gottman Metodu",
      "Duygu Odaklı Danışmanlık (EFT)",
      "İmago İlişki Danışmanlığı",
      "Çözüm Odaklı Kısa Danışmanlık",
      "Sistemik Danışmanlık",
    ],
    duration: "60-75 dakika",
    frequency: "Haftada bir veya iki haftada bir",
  },
  {
    id: "aile",
    title: "Aile Danışmanlığı",
    shortDescription:
      "Aile içi ilişkileri güçlendirmek ve çatışmaları çözmek için aile odaklı danışmanlık.",
    longDescription:
      "Aile danışmanlığı, aile üyeleri arasındaki ilişkileri iyileştirmek ve aile içi sorunları çözmek için tasarlanmış bir danışmanlık yaklaşımıdır. Aile dinamikleri, ebeveyn-çocuk ilişkileri, kardeş çatışmaları, ergenlik sorunları, boşanma süreci veya yeni bir aile üyesinin katılımı gibi konularda uzmanlaşmış danışmanlarımız, ailenizin daha sağlıklı iletişim kurmasına ve zorlukları birlikte aşmasına yardımcı olur. Destek sürecinde, her aile üyesinin sesinin duyulduğu ve değer gördüğü bir ortam yaratarak, ailenin bir bütün olarak güçlenmesini hedefleriz.",
    image: "/images/home/hero/profesyonel-destek.jpg",
    icon: UsersIcon,
    benefits: [
      "Aile içi iletişimi güçlendirme",
      "Çatışmaları yapıcı bir şekilde çözme",
      "Aile bağlarını kuvvetlendirme",
      "Ebeveynlik becerilerini geliştirme",
      "Zorlu yaşam geçişlerinde destek sağlama",
    ],
    approaches: [
      "Yapısal Aile Danışmanlığı",
      "Stratejik Aile Danışmanlığı",
      "Sistemik Aile Danışmanlığı",
      "Çözüm Odaklı Aile Danışmanlığı",
      "Anlatı Danışmanlığı",
    ],
    duration: "60-75 dakika",
    frequency: "Haftada bir veya iki haftada bir",
  },
  {
    id: "cocuk",
    title: "Çocuk ve Ergen Danışmanlığı",
    shortDescription:
      "Çocukların ve ergenlerin duygusal ve davranışsal sorunlarına yönelik özel danışmanlık.",
    longDescription:
      "Çocuk ve ergen danışmanlığı, çocukların ve gençlerin duygusal, davranışsal ve gelişimsel zorluklarını ele almak için özel olarak tasarlanmıştır. Uzman çocuk psikologlarımız, dikkat eksikliği ve hiperaktivite bozukluğu (DEHB), kaygı, depresyon, davranış sorunları, okul zorlukları, akran ilişkileri, travma ve aile değişiklikleri gibi çeşitli konularda destek sağlar. Çocuğunuzun yaşına ve ihtiyaçlarına uygun oyun danışmanlığı, sanat danışmanlığı ve bilişsel davranışçı danışmanlık gibi çeşitli teknikler kullanarak, çocuğunuzun duygusal iyilik halini ve sağlıklı gelişimini destekleriz.",
    image: "/images/home/hero/profesyonel-destek.jpg",
    icon: ChildIcon,
    benefits: [
      "Duygusal ifade becerilerini geliştirme",
      "Özgüven ve öz-saygıyı artırma",
      "Sosyal becerileri güçlendirme",
      "Davranış sorunlarını azaltma",
      "Akademik başarıyı destekleme",
    ],
    approaches: [
      "Oyun Danışmanlığı",
      "Sanat Danışmanlığı",
      "Bilişsel Davranışçı Danışmanlık (BDT)",
      "Çözüm Odaklı Danışmanlık",
      "Aile Sistemleri Yaklaşımı",
    ],
    duration: "45-50 dakika",
    frequency: "Haftada bir",
  },
  {
    id: "travma",
    title: "Travma Danışmanlığı",
    shortDescription:
      "Travmatik deneyimlerin üstesinden gelmek için özel danışmanlık teknikleri.",
    longDescription:
      "Travma danışmanlığı, travmatik olayların etkilerini ele almak ve iyileşme sürecini desteklemek için özel olarak tasarlanmıştır. EMDR (Göz Hareketleriyle Duyarsızlaştırma ve Yeniden İşleme), Travma Odaklı Bilişsel Davranışçı Danışmanlık (TF-BDT) ve diğer kanıta dayalı yaklaşımlar konusunda uzmanlaşmış danışmanlarımız, travma sonrası stres bozukluğu (TSSB), kompleks travma, çocukluk çağı travması ve diğer travmatik deneyimlerin üstesinden gelmenize yardımcı olur. Güvenli ve destekleyici bir ortamda, travmatik anıların etkisini azaltmak, tetikleyicilerle başa çıkmak ve yaşam kalitenizi artırmak için sizinle birlikte çalışırız.",
    image: "/images/home/hero/profesyonel-destek.jpg",
    icon: HeartCrackIcon,
    benefits: [
      "Travmatik anıların etkisini azaltma",
      "Tetikleyicilerle başa çıkma stratejileri",
      "Duygusal düzenleme becerilerini geliştirme",
      "Güvenlik ve kontrol hissini yeniden kazanma",
      "Travma sonrası büyüme ve dayanıklılık",
    ],
    approaches: [
      "EMDR (Göz Hareketleriyle Duyarsızlaştırma ve Yeniden İşleme)",
      "Travma Odaklı Bilişsel Davranışçı Danışmanlık (TF-BDT)",
      "Somatik Deneyimleme",
      "Anlatı Maruz Bırakma Danışmanlığı",
      "Duygu Düzenleme Becerileri Eğitimi",
    ],
    duration: "60-90 dakika",
    frequency: "Haftada bir veya danışanın ihtiyacına göre",
  },
  {
    id: "grup",
    title: "Grup Danışmanlığı",
    shortDescription:
      "Benzer sorunları yaşayan kişilerle birlikte iyileşme ve gelişme fırsatı.",
    longDescription:
      "Grup danışmanlığı, benzer zorlukları yaşayan bireylerin bir araya gelerek, profesyonel bir danışman eşliğinde deneyimlerini paylaştıkları ve birbirlerinden öğrendikleri bir danışmanlık türüdür. Kaygı, depresyon, ilişki sorunları, bağımlılık, yas süreci ve kişisel gelişim gibi çeşitli konularda grup görüşmeleri düzenliyoruz. Grup ortamı, yalnız olmadığınızı görmenize, farklı bakış açıları kazanmanıza ve sosyal becerilerinizi geliştirmenize olanak tanır. Grup üyeleri arasındaki destek ve geri bildirimler, iyileşme sürecinizi hızlandırabilir ve kişisel gelişiminize katkıda bulunabilir.",
    image: "/images/home/hero/profesyonel-destek.jpg",
    icon: UsersIcon,
    benefits: [
      "Yalnız olmadığınızı hissetme",
      "Farklı bakış açıları ve çözümler keşfetme",
      "Sosyal becerileri geliştirme",
      "Grup desteği ve dayanışma",
      "Maliyet etkin bir danışmanlık seçeneği",
    ],
    approaches: [
      "Bilişsel Davranışçı Grup Danışmanlığı",
      "Kişilerarası Grup Danışmanlığı",
      "Destekleyici-İfade Edici Grup Danışmanlığı",
      "Psikoeğitim Grupları",
      "Beceri Geliştirme Grupları",
    ],
    duration: "90-120 dakika",
    frequency: "Haftada bir",
  },
  {
    id: "online",
    title: "Online Danışmanlık",
    shortDescription:
      "Evinizin konforunda profesyonel psikolojik destek alma imkanı.",
    longDescription:
      "Online danışmanlık, yüz yüze görüşmeye alternatif olarak, internet üzerinden video görüşmesi yoluyla sunulan profesyonel psikolojik destek hizmetidir. Uzak mesafede yaşayanlar, yoğun iş temposu nedeniyle ofise gelemeyenler, fiziksel engeli olanlar veya evden çıkmakta zorlananlar için ideal bir seçenektir. Online destek sürecinde, yüz yüze destek sürecinde kullanılan aynı danışmanlık teknikleri ve yaklaşımlar uygulanır. Güvenli ve gizli bir platform üzerinden gerçekleştirilen seanslar, ofis ortamında alacağınız görüşmeyle aynı etkinliğe sahiptir. Tek ihtiyacınız olan, internet bağlantısı ve kamera/mikrofon özelliği olan bir cihaz.",
    image: "/images/home/hero/profesyonel-destek.jpg",
    icon: LightbulbIcon,
    benefits: [
      "Zaman ve mekân esnekliği",
      "Seyahat süresi ve maliyetinden tasarruf",
      "Kendi konfor alanınızda danışmanlık alma",
      "Daha geniş danışman seçeneğine erişim",
      "Fiziksel engeller olmadan danışmanlık alma imkanı",
    ],
    approaches: [
      "Bireysel Online Danışmanlık",
      "Çift ve Aile Online Danışmanlığı",
      "Grup Online Danışmanlığı",
      "Kriz Müdahalesi",
      "Takip Seansları",
    ],
    duration: "45-60 dakika",
    frequency: "Haftada bir veya danışanın ihtiyacına göre",
  },
  {
    id: "test",
    title: "Psikolojik Testler",
    shortDescription:
      "Kişilik, zeka ve yetenek değerlendirmeleri için kapsamlı psikolojik testler.",
    longDescription:
      "Psikolojik testler, bireylerin bilişsel yeteneklerini, kişilik özelliklerini, duygusal durumlarını ve davranışsal eğilimlerini değerlendirmek için kullanılan bilimsel araçlardır. Uzman psikologlarımız, zeka testleri, kişilik envanterleri, nöropsikolojik değerlendirmeler, dikkat ve öğrenme bozuklukları değerlendirmeleri gibi çeşitli testler uygulayarak, bireylerin güçlü yönlerini ve gelişim alanlarını belirler. Test sonuçları, doğru tanı konulmasına, etkili tedavi planları oluşturulmasına ve kişisel veya mesleki gelişim için öneriler sunulmasına yardımcı olur.",
    image: "/images/home/hero/profesyonel-destek.jpg",
    icon: MedicalTestIcon,
    benefits: [
      "Doğru tanı ve tedavi planlaması",
      "Güçlü yönleri ve gelişim alanlarını belirleme",
      "Eğitim ve kariyer planlamasına destek",
      "Kişisel farkındalığı artırma",
      "Gelişim sürecini izleme ve değerlendirme",
    ],
    approaches: [
      "Zeka ve Bilişsel Yetenek Testleri",
      "Kişilik Envanterleri",
      "Nöropsikolojik Değerlendirmeler",
      "Dikkat ve Öğrenme Bozuklukları Değerlendirmeleri",
      "Mesleki Yönelim ve Kariyer Testleri",
    ],
    duration: "60-120 dakika",
    frequency: "İhtiyaca göre",
  },
  {
    id: "workshop",
    title: "Atölyeler ve Eğitimler",
    shortDescription:
      "Kişisel gelişim ve ruh sağlığı konularında grup atölyeleri ve eğitimler.",
    longDescription:
      "Zenova Psikoloji olarak, kişisel gelişim ve ruh sağlığı konularında düzenli olarak atölyeler ve eğitimler düzenliyoruz. Stres yönetimi, mindfulness, etkili iletişim, ebeveynlik becerileri, duygusal zeka geliştirme gibi çeşitli konularda uzman psikologlarımız tarafından hazırlanan bu programlar, teorik bilgilerin yanı sıra pratik uygulamalar da içerir. Küçük gruplar halinde düzenlenen atölyelerimiz, hem öğrenme hem de sosyalleşme fırsatı sunar. Ayrıca, kurumlar için özel olarak tasarlanmış eğitim programları da sunmaktayız.",
    image: "/images/home/hero/profesyonel-destek.jpg",
    icon: BookOpenIcon,
    benefits: [
      "Yeni beceriler ve stratejiler öğrenme",
      "Benzer ilgi alanlarına sahip kişilerle tanışma",
      "Teorik bilgileri pratik uygulamalarla pekiştirme",
      "Grup dinamiğinden faydalanma",
      "Maliyet etkin bir gelişim fırsatı",
    ],
    approaches: [
      "Stres Yönetimi Atölyeleri",
      "Mindfulness ve Meditasyon Eğitimleri",
      "Etkili İletişim Becerileri Atölyeleri",
      "Ebeveynlik Becerileri Eğitimleri",
      "Duygusal Zeka Geliştirme Programları",
    ],
    duration: "2-6 saat veya birkaç hafta süren programlar",
    frequency: "Düzenli olarak açılan programlar",
  },
] as const;
