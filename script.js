/**
 * JANZI Export Company — script.js
 * Features: sticky header, mobile nav, product tabs,
 *           multilingual i18n, scroll-spy, form handling
 */

'use strict';

/* ═══════════════════════════════════════════════════
   1. TRANSLATIONS
═══════════════════════════════════════════════════ */
const TRANSLATIONS = {
  en: {
    "nav.home":        "Home",
    "nav.about":       "About Us",
    "nav.products":    "Products",
    "nav.markets":     "Export Markets",
    "nav.certs":       "Certificates",
    "nav.contact":     "Contact",
    "nav.inquiry":     "Get Quote",
    "hero.eyebrow":    "South Khorasan, Iran · Est. 2010",
    "hero.title":      "From the Fields of Iran<br /><em>To the World's Tables</em>",
    "hero.subtitle":   "Premium saffron, dried fruits &amp; fresh produce — exported with integrity to Russia, CIS, the Gulf and Europe.",
    "hero.cta1":       "Explore Products",
    "hero.cta2":       "Request a Sample",
    "hero.stat1":      "Years Experience",
    "hero.stat2":      "Export Countries",
    "hero.stat3":      "Annual Capacity",
    "hero.stat4":      "Certified",
    "about.eyebrow":   "Who We Are",
    "about.title":     "A Trusted Partner in Agricultural Excellence",
    "about.p1":        "JANZI is a premier agricultural export company headquartered in South Khorasan — the heartland of Iran's legendary saffron production. We bridge the gap between Iran's fertile harvests and discerning buyers across Russia, Central Asia, the Gulf, and Europe.",
    "about.p2":        "From harvest to your warehouse, every step of our supply chain is governed by rigorous quality protocols, international certifications, and a genuine commitment to long-term partnership.",
    "about.founded":   "Founded",
    "about.mission.title": "Our Mission",
    "about.mission.text":  "To deliver nature's finest products with full traceability, compliance, and consistency — building lasting global partnerships.",
    "about.vision.title":  "Our Vision",
    "about.vision.text":   "To be the most trusted name in Iranian agricultural exports, recognised worldwide for quality and integrity.",
    "about.cap1": "✓ Full export documentation &amp; customs clearance",
    "about.cap2": "✓ Cold-chain logistics &amp; temperature-controlled storage",
    "about.cap3": "✓ Custom packaging &amp; private label available",
    "about.cap4": "✓ Minimum order flexibility for all markets",
    "products.eyebrow": "Our Portfolio",
    "products.title":   "Premium Products for Global Markets",
    "products.subtitle":"Four core categories, all sourced directly from Iranian farms and processed to international standards.",
    "products.tab1": "Saffron",
    "products.tab2": "Dried Fruits",
    "products.tab3": "Freeze Dried",
    "products.tab4": "Fresh Produce",
    "saffron.heading": "Iranian Saffron — The Red Gold",
    "saffron.desc":    "South Khorasan produces over 90% of the world's saffron. JANZI sources exclusively from trusted farmers in Qaen and Birjand — regions celebrated for incomparable aroma and coloring power.",
    "spec.origin":  "Origin:",
    "spec.color":   "Coloring (ISO):",
    "spec.moisture":"Moisture:",
    "spec.packing": "Packing:",
    "spec.process": "Process:",
    "spec.shelf":   "Shelf Life:",
    "spec.sulfur":  "Sulfur:",
    "spec.moq":     "MOQ:",
    "spec.cert":    "Phyto:",
    "prod.negin":          "Negin Saffron",
    "prod.negin.desc":     "Long, thick threads with rich red color. High crocin content and intense aroma. Ideal for retail and food-service buyers.",
    "prod.supernegin":     "Super Negin Saffron",
    "prod.supernegin.desc":"The finest grade — uniformly long, all-red threads, zero style tips. Coloring strength 270+. For luxury retail and export premium markets.",
    "prod.driedkiwi":      "Dried Kiwi",
    "prod.driedkiwi.desc": "Vibrant green slices with tangy-sweet flavour. Rich in Vitamin C and antioxidants.",
    "prod.driedapple":     "Dried Apple",
    "prod.driedapple.desc":"Crisp rings or slices from premium Iranian apple varieties. Natural sweetness preserved.",
    "prod.driedmango":     "Dried Mango",
    "prod.driedmango.desc":"Sweet tropical flavour, chewy texture. Available sulphured or organic sulphur-free.",
    "prod.driedbanana":    "Dried Banana",
    "prod.driedbanana.desc":"Naturally sweet slices. High-energy snack staple for retail &amp; food-service.",
    "prod.driedorange":    "Dried Orange",
    "prod.driedorange.desc":"Decorative and culinary-grade dried orange wheels. Citrus aroma, beautiful appearance.",
    "prod.fdstrawberry":       "Freeze Dried Strawberry",
    "prod.fdstrawberry.desc":  "Vibrant red whole or sliced. Intense flavour and aroma. Premium snacking and ingredient use.",
    "prod.fdapple":            "Freeze Dried Apple",
    "prod.fdapple.desc":       "Light, crispy chunks. Retains natural colour and fresh apple taste. Popular for muesli and cereals.",
    "prod.fdbanana":           "Freeze Dried Banana",
    "prod.fdbanana.desc":      "Sweet, crunchy banana crisps. Excellent for trail mix, baby food and health snacks.",
    "prod.fdkiwi":             "Freeze Dried Kiwi",
    "prod.fdkiwi.desc":        "Striking green rounds with tropical flavour burst. Visually distinctive for premium packaging.",
    "prod.kiwi.desc":   "Grown in northern Iran. Excellent Brix, green and golden varieties available.",
    "prod.apple.desc":  "Multiple varieties: Red Delicious, Fuji, Granny Smith. Calibrated and graded.",
    "prod.onion.desc":  "Yellow, red, white. Long shelf-life. Popular in CIS and Middle East markets.",
    "prod.garlic.desc": "Fresh, dried and peeled options. Strong aroma, clean bulbs, consistent sizing.",
    "prod.citrus.desc": "Southern Iranian citrus — high juice content, beautiful skin. Seasonal availability.",
    "dried.heading": "Premium Dried Fruits",
    "dried.desc":    "Sun-dried and oven-dried using minimal processing to preserve natural color, taste and nutritional value. No artificial colors or preservatives.",
    "freeze.heading":"Freeze Dried Products",
    "freeze.desc":   "State-of-the-art freeze drying preserves 97% of nutrients, original shape and colour. Ideal for premium snack brands, pharmaceutical and functional food sectors.",
    "fresh.heading": "Fresh Fruits &amp; Vegetables",
    "fresh.desc":    "Harvested to order and shipped via refrigerated transport. JANZI works directly with farms to ensure freshness, correct sizing and phytosanitary compliance for each destination market.",
    "fresh.seasonal":"<strong>Seasonal Produce:</strong> JANZI also exports seasonal Iranian produce including pomegranate, fig, date, pistachio and herb selections. Contact us for current availability.",
    "badge.popular":   "Popular",
    "badge.premium":   "Premium",
    "badge.bestseller":"Best Seller",
    "tag.grade1":  "Grade A",
    "tag.topgrade":"Top Grade",
    "btn.inquire": "Inquire",
    "why.eyebrow": "Why Choose Us",
    "why.title":   "The JANZI Advantage",
    "why.q1.title":"Source-Direct Procurement",
    "why.q1.text": "We own the supply chain. Direct farmer relationships in South Khorasan eliminate middlemen and guarantee traceability from field to shipment.",
    "why.q2.title":"Certified Quality Systems",
    "why.q2.text": "ISO 22000, HACCP, and health &amp; phytosanitary certifications ensure your imports clear customs without delay in every target market.",
    "why.q3.title":"Custom Packaging",
    "why.q3.text": "Private label, co-branding and bespoke packaging across all SKUs. We adapt to your market's regulatory and aesthetic requirements.",
    "why.q4.title":"Export Documentation",
    "why.q4.text": "Full document support: Certificate of Origin, phytosanitary certificates, health certificates, fumigation, packing list, commercial invoice — in your language.",
    "why.q5.title":"Logistics Expertise",
    "why.q5.text": "FCL &amp; LCL shipping. Cold-chain solutions. Experience with CIS land routes, Gulf sea routes and European air freight for saffron.",
    "why.q6.title":"Dedicated Account Management",
    "why.q6.text": "A named account manager for every customer. Responsive in English, Russian, Arabic and Persian — 6 days a week.",
    "markets.eyebrow": "Global Reach",
    "markets.title":   "Our Export Markets",
    "markets.subtitle":"Established trade relationships and compliant documentation for every destination.",
    "market.russia":      "Russia",
    "market.russia.desc": "Our largest market. Regular FCL shipments of saffron, dried fruits and garlic. Russian-language support and Cyrillic labelling available.",
    "market.kz":      "Kazakhstan",
    "market.kz.desc": "CIS transit hub. Road freight via Caspian Sea route. Compliant with EEU sanitary standards.",
    "market.uz":      "Uzbekistan",
    "market.uz.desc": "Growing demand for premium saffron and freeze-dried products in Tashkent's food industry.",
    "market.by":      "Belarus",
    "market.by.desc": "Regular supply contracts for saffron and dried fruits to Minsk-based importers.",
    "market.uae":      "UAE",
    "market.uae.desc": "Dubai re-export hub. Luxury saffron packaging for retail chains and premium gifting sector.",
    "market.sa":      "Saudi Arabia",
    "market.sa.desc": "SFDA-compliant products. Arabic labelling and halal documentation provided on request.",
    "market.om":      "Oman",
    "market.om.desc": "Muscat-based distribution partnerships. Sea freight via Bandar Abbas–Muscat corridor.",
    "market.eu":      "Europe",
    "market.eu.desc": "EU-compliant documentation. Air freight for saffron to Germany, France, Spain and the Netherlands.",
    "certs.eyebrow":  "Quality Assurance",
    "certs.title":    "Certifications &amp; Standards",
    "certs.subtitle": "Every shipment backed by internationally recognised quality documents.",
    "cert.iso.title":    "ISO 22000",
    "cert.iso.desc":     "Food Safety Management System covering the entire supply chain from farm to export.",
    "cert.haccp.title":  "HACCP",
    "cert.haccp.desc":   "Hazard Analysis Critical Control Points — systematic preventive approach to food safety.",
    "cert.health.title": "Health Certificate",
    "cert.health.desc":  "Issued by Iran's Ministry of Health. Required for CIS, Gulf and European imports.",
    "cert.phyto.title":  "Phytosanitary Certificate",
    "cert.phyto.desc":   "Issued by Iran's Ministry of Agriculture. Confirms produce is free from pests and diseases.",
    "cert.coo.title":    "Certificate of Origin",
    "cert.coo.desc":     "Authenticated by Iran Chamber of Commerce. Essential for customs clearance and duty calculations.",
    "cert.saffron.title":"ISO 3632 — Saffron",
    "cert.saffron.desc": "International standard for saffron quality grading. JANZI saffron consistently tests at Category I.",
    "cert.valid":   "Valid &amp; Current",
    "cert.perdoc":  "Per Shipment",
    "certs.note":   "All certificates are available for review upon request. Lab test reports can be provided for each lot prior to shipment confirmation.",
    "contact.eyebrow":       "Get In Touch",
    "contact.title":         "Start Your Trade Inquiry",
    "contact.intro":         "Whether you are a first-time buyer or an established importer, our team is ready to provide specifications, samples, pricing and logistics information.",
    "contact.email.label":   "Email",
    "contact.phone.label":   "Phone / WhatsApp",
    "contact.address.label": "Address",
    "contact.address.text":  "South Khorasan Province, Iran",
    "contact.whatsapp":      "Chat on WhatsApp",
    "contact.map":           "South Khorasan, Iran",
    "contact.map.sub":       "Interactive map available on request",
    "form.title":    "Trade Inquiry Form",
    "form.name":     "Full Name *",
    "form.company":  "Company Name *",
    "form.email":    "Email Address *",
    "form.country":  "Country",
    "form.product":  "Product of Interest",
    "form.volume":   "Estimated Volume / Order Size",
    "form.message":  "Message *",
    "form.select":   "Select...",
    "form.submit":   "Send Inquiry",
    "form.note":     "We respond to all inquiries within 24 hours on business days.",
    "form.success":  "✓ Thank you! Your inquiry has been received. We'll be in touch shortly.",
    "footer.tagline":        "Premium Agricultural Exports\nfrom South Khorasan, Iran",
    "footer.nav.title":      "Navigation",
    "footer.products.title": "Products",
    "footer.contact.title":  "Contact",
    "footer.copy":           "© 2025 JANZI Export Company. All rights reserved."
  },

  ru: {
    "nav.home":     "Главная",
    "nav.about":    "О нас",
    "nav.products": "Продукция",
    "nav.markets":  "Рынки экспорта",
    "nav.certs":    "Сертификаты",
    "nav.contact":  "Контакты",
    "nav.inquiry":  "Запрос цены",
    "hero.eyebrow": "Провинция Южный Хорасан, Иран · с 2010 года",
    "hero.title":   "С полей Ирана<br /><em>на столы всего мира</em>",
    "hero.subtitle":"Шафран премиум-класса, сухофрукты и свежие продукты — надёжный экспорт в Россию, СНГ, Ближний Восток и Европу.",
    "hero.cta1":    "Каталог продукции",
    "hero.cta2":    "Запросить образец",
    "hero.stat1":   "Лет опыта",
    "hero.stat2":   "Стран экспорта",
    "hero.stat3":   "Годовой объём",
    "hero.stat4":   "Сертифицировано",
    "about.eyebrow":"О компании",
    "about.title":  "Надёжный партнёр в сфере агроэкспорта",
    "about.p1":     "JANZI — ведущая компания по экспорту сельскохозяйственной продукции, базирующаяся в Южном Хорасане — центре производства иранского шафрана. Мы связываем богатые урожаи Ирана с требовательными покупателями в России, Центральной Азии, странах Персидского залива и Европе.",
    "about.p2":     "От сбора урожая до вашего склада — каждый этап цепочки поставок регулируется строгими протоколами качества, международными сертификатами и искренней приверженностью долгосрочному партнёрству.",
    "about.founded":"Год основания",
    "about.mission.title":"Наша миссия",
    "about.mission.text": "Поставлять лучшую продукцию природы с полной прослеживаемостью, соответствием стандартам и стабильным качеством — выстраивая прочные глобальные партнёрства.",
    "about.vision.title": "Наше видение",
    "about.vision.text":  "Стать самым надёжным именем в иранском агроэкспорте, признанным во всём мире за качество и честность.",
    "about.cap1": "✓ Полное оформление экспортной документации и таможенная очистка",
    "about.cap2": "✓ Холодовая цепь и температурное хранение",
    "about.cap3": "✓ Индивидуальная упаковка и частная торговая марка",
    "about.cap4": "✓ Гибкие минимальные объёмы заказа для любых рынков",
    "products.eyebrow": "Наш ассортимент",
    "products.title":   "Продукция премиум-класса для мировых рынков",
    "products.subtitle":"Четыре основных категории, напрямую с иранских ферм, переработанные по международным стандартам.",
    "products.tab1": "Шафран",
    "products.tab2": "Сухофрукты",
    "products.tab3": "Сублимированные",
    "products.tab4": "Свежие продукты",
    "saffron.heading": "Иранский шафран — Красное золото",
    "saffron.desc":    "Южный Хорасан производит более 90% мирового шафрана. JANZI закупает исключительно у проверенных фермеров в Каине и Бирдженде — регионах, прославленных непревзойдённым ароматом и красящей силой.",
    "spec.origin":  "Происхождение:",
    "spec.color":   "Окраска (ISO):",
    "spec.moisture":"Влажность:",
    "spec.packing": "Упаковка:",
    "spec.process": "Обработка:",
    "spec.shelf":   "Срок хранения:",
    "spec.sulfur":  "Диоксид серы:",
    "spec.moq":     "МОЗ:",
    "spec.cert":    "Фито:",
    "prod.negin":         "Шафран Негин",
    "prod.negin.desc":    "Длинные толстые нити насыщенного красного цвета. Высокое содержание крокина и интенсивный аромат. Идеален для розничных и профессиональных покупателей.",
    "prod.supernegin":     "Шафран Супер Негин",
    "prod.supernegin.desc":"Высший сорт — однородно длинные, полностью красные нити без примеси белых тычинок. Красящая сила 270+. Для люксового ритейла и экспортных премиум-рынков.",
    "prod.driedkiwi":      "Сушёный киви",
    "prod.driedkiwi.desc": "Ярко-зелёные ломтики с кисло-сладким вкусом. Богат витамином C и антиоксидантами.",
    "prod.driedapple":     "Сушёные яблоки",
    "prod.driedapple.desc":"Хрустящие кольца или ломтики из лучших иранских сортов яблок. Натуральная сладость сохранена.",
    "prod.driedmango":     "Сушёное манго",
    "prod.driedmango.desc":"Тропический сладкий вкус, жевательная текстура. Доступен с сульфитами и без.",
    "prod.driedbanana":    "Сушёные бананы",
    "prod.driedbanana.desc":"Натурально сладкие ломтики. Высококалорийный снек для ритейла и HoReCa.",
    "prod.driedorange":    "Сушёные апельсины",
    "prod.driedorange.desc":"Декоративные и кулинарные колёса сушёного апельсина. Цитрусовый аромат, красивый вид.",
    "prod.fdstrawberry":      "Сублимированная клубника",
    "prod.fdstrawberry.desc": "Яркие красные ягоды целые или нарезанные. Интенсивный вкус и аромат. Для снеков и ингредиентов.",
    "prod.fdapple":           "Сублимированные яблоки",
    "prod.fdapple.desc":      "Лёгкие хрустящие кусочки. Сохраняет натуральный цвет и свежий вкус яблока. Для мюсли и злаков.",
    "prod.fdbanana":          "Сублимированные бананы",
    "prod.fdbanana.desc":     "Сладкие хрустящие банановые чипсы. Для трейл-микса, детского питания и здоровых снеков.",
    "prod.fdkiwi":            "Сублимированный киви",
    "prod.fdkiwi.desc":       "Выразительные зелёные кружочки с тропическим взрывом вкуса. Визуально привлекательны для премиальной упаковки.",
    "prod.kiwi.desc":   "Выращен на севере Ирана. Отличный Брикс, зелёные и золотые сорта.",
    "prod.apple.desc":  "Несколько сортов: Ред Делишес, Фуджи, Гренни Смит. Калиброванные и отсортированные.",
    "prod.onion.desc":  "Жёлтый, красный, белый. Длительный срок хранения. Популярен в СНГ и на Ближнем Востоке.",
    "prod.garlic.desc": "Свежий, сушёный и очищенный. Сильный аромат, чистые луковицы, стабильный размер.",
    "prod.citrus.desc": "Цитрусовые южного Ирана — высокое содержание сока, красивая кожура. Сезонные поставки.",
    "dried.heading": "Сухофрукты премиум-класса",
    "dried.desc":    "Сушка на солнце и в духовке с минимальной обработкой для сохранения натурального цвета, вкуса и питательной ценности. Без искусственных красителей и консервантов.",
    "freeze.heading":"Сублимированные продукты",
    "freeze.desc":   "Современная сублимационная сушка сохраняет 97% питательных веществ, форму и цвет. Идеально для премиальных снек-брендов, фармацевтики и функциональных продуктов питания.",
    "fresh.heading": "Свежие фрукты и овощи",
    "fresh.desc":    "Собирается под заказ и отправляется рефрижераторным транспортом. JANZI работает напрямую с фермами для обеспечения свежести, правильной сортировки и фитосанитарного соответствия каждому рынку.",
    "fresh.seasonal":"<strong>Сезонные продукты:</strong> JANZI также экспортирует сезонную иранскую продукцию: гранат, инжир, финики, фисташки и травы. Свяжитесь с нами для уточнения текущего наличия.",
    "badge.popular":   "Популярный",
    "badge.premium":   "Премиум",
    "badge.bestseller":"Хит продаж",
    "tag.grade1":  "Сорт А",
    "tag.topgrade":"Высший сорт",
    "btn.inquire": "Запрос",
    "why.eyebrow": "Почему мы",
    "why.title":   "Преимущества JANZI",
    "why.q1.title":"Прямые закупки у фермеров",
    "why.q1.text": "Мы контролируем всю цепочку поставок. Прямые отношения с фермерами в Южном Хорасане исключают посредников и гарантируют прослеживаемость от поля до отгрузки.",
    "why.q2.title":"Сертифицированные системы качества",
    "why.q2.text": "Сертификаты ISO 22000, HACCP, санитарные и фитосанитарные гарантируют беспрепятственное прохождение таможни на всех целевых рынках.",
    "why.q3.title":"Индивидуальная упаковка",
    "why.q3.text": "Частная торговая марка, совместный брендинг и уникальная упаковка для всех SKU. Мы адаптируемся к регуляторным и эстетическим требованиям вашего рынка.",
    "why.q4.title":"Экспортная документация",
    "why.q4.text": "Полный пакет документов: сертификат происхождения, фитосанитарные, санитарные сертификаты, фумигация, упаковочный лист, коммерческий инвойс — на вашем языке.",
    "why.q5.title":"Логистическая экспертиза",
    "why.q5.text": "FCL и LCL перевозки. Решения холодовой цепи. Опыт наземных маршрутов через СНГ, морских путей через Персидский залив и авиафрахта шафрана в Европу.",
    "why.q6.title":"Персональный менеджер",
    "why.q6.text": "Выделенный менеджер для каждого клиента. Работаем на английском, русском, арабском и персидском языках — 6 дней в неделю.",
    "markets.eyebrow": "Глобальный охват",
    "markets.title":   "Рынки экспорта",
    "markets.subtitle":"Устойчивые торговые отношения и соответствующая документация для каждого направления.",
    "market.russia":      "Россия",
    "market.russia.desc": "Наш крупнейший рынок. Регулярные FCL-отгрузки шафрана, сухофруктов и чеснока. Русскоязычная поддержка и кириллическая маркировка.",
    "market.kz":      "Казахстан",
    "market.kz.desc": "Транзитный хаб СНГ. Автогруз через маршрут Каспийского моря. Соответствие санитарным стандартам ЕАЭС.",
    "market.uz":      "Узбекистан",
    "market.uz.desc": "Растущий спрос на премиальный шафран и сублимированные продукты в пищевой промышленности Ташкента.",
    "market.by":      "Беларусь",
    "market.by.desc": "Регулярные контракты на поставку шафрана и сухофруктов минским импортёрам.",
    "market.uae":      "ОАЭ",
    "market.uae.desc": "Дубай как реэкспортный хаб. Люксовая упаковка шафрана для розничных сетей и премиального подарочного сегмента.",
    "market.sa":      "Саудовская Аравия",
    "market.sa.desc": "Продукция соответствует стандартам SFDA. Арабская маркировка и халяльная документация по запросу.",
    "market.om":      "Оман",
    "market.om.desc": "Партнёрства по дистрибуции в Маскате. Морской фрахт по маршруту Бендер-Аббас — Маскат.",
    "market.eu":      "Европа",
    "market.eu.desc": "Документация по стандартам ЕС. Авиафрахт шафрана в Германию, Францию, Испанию и Нидерланды.",
    "certs.eyebrow":  "Контроль качества",
    "certs.title":    "Сертификаты и стандарты",
    "certs.subtitle": "Каждая партия подкреплена международно признанными документами о качестве.",
    "cert.iso.title":    "ISO 22000",
    "cert.iso.desc":     "Система менеджмента безопасности пищевых продуктов, охватывающая всю цепочку поставок от фермы до экспорта.",
    "cert.haccp.title":  "ХАССП",
    "cert.haccp.desc":   "Анализ рисков и критические контрольные точки — системный превентивный подход к безопасности пищевых продуктов.",
    "cert.health.title": "Санитарный сертификат",
    "cert.health.desc":  "Выдаётся Министерством здравоохранения Ирана. Обязателен для импорта в СНГ, страны Залива и Европу.",
    "cert.phyto.title":  "Фитосанитарный сертификат",
    "cert.phyto.desc":   "Выдаётся Министерством сельского хозяйства Ирана. Подтверждает отсутствие вредителей и болезней.",
    "cert.coo.title":    "Сертификат происхождения",
    "cert.coo.desc":     "Заверяется Торгово-промышленной палатой Ирана. Необходим для таможенного оформления и расчёта пошлин.",
    "cert.saffron.title":"ISO 3632 — Шафран",
    "cert.saffron.desc": "Международный стандарт классификации качества шафрана. Шафран JANZI стабильно соответствует категории I.",
    "cert.valid":  "Действителен",
    "cert.perdoc": "На каждую партию",
    "certs.note":  "Все сертификаты предоставляются по запросу. Протоколы лабораторных испытаний могут быть предоставлены для каждой партии до подтверждения отгрузки.",
    "contact.eyebrow":       "Связаться с нами",
    "contact.title":         "Оставьте торговый запрос",
    "contact.intro":         "Являетесь ли вы новым покупателем или опытным импортёром, наша команда готова предоставить спецификации, образцы, цены и логистическую информацию.",
    "contact.email.label":   "Электронная почта",
    "contact.phone.label":   "Телефон / WhatsApp",
    "contact.address.label": "Адрес",
    "contact.address.text":  "Провинция Южный Хорасан, Иран",
    "contact.whatsapp":      "Написать в WhatsApp",
    "contact.map":           "Южный Хорасан, Иран",
    "contact.map.sub":       "Интерактивная карта по запросу",
    "form.title":    "Форма торгового запроса",
    "form.name":     "Полное имя *",
    "form.company":  "Название компании *",
    "form.email":    "Адрес электронной почты *",
    "form.country":  "Страна",
    "form.product":  "Интересующий продукт",
    "form.volume":   "Предполагаемый объём / размер заказа",
    "form.message":  "Сообщение *",
    "form.select":   "Выберите...",
    "form.submit":   "Отправить запрос",
    "form.note":     "Мы отвечаем на все запросы в течение 24 часов в рабочие дни.",
    "form.success":  "✓ Спасибо! Ваш запрос получен. Мы свяжемся с вами в ближайшее время.",
    "footer.tagline":        "Экспорт сельскохозяйственной продукции\nиз Южного Хорасана, Иран",
    "footer.nav.title":      "Навигация",
    "footer.products.title": "Продукция",
    "footer.contact.title":  "Контакты",
    "footer.copy":           "© 2025 JANZI Export Company. Все права защищены."
  },

  ar: {
    "nav.home":     "الرئيسية",
    "nav.about":    "من نحن",
    "nav.products": "المنتجات",
    "nav.markets":  "أسواق التصدير",
    "nav.certs":    "الشهادات",
    "nav.contact":  "اتصل بنا",
    "nav.inquiry":  "طلب عرض سعر",
    "hero.eyebrow": "خراسان الجنوبية، إيران · تأسست 2010",
    "hero.title":   "من حقول إيران<br /><em>إلى موائد العالم</em>",
    "hero.subtitle":"زعفران فاخر، فواكه مجففة ومنتجات طازجة — تصدير بأمانة إلى روسيا، رابطة الدول المستقلة، الخليج وأوروبا.",
    "hero.cta1":    "استعرض المنتجات",
    "hero.cta2":    "اطلب عينة",
    "hero.stat1":   "سنوات خبرة",
    "hero.stat2":   "دولة تصدير",
    "hero.stat3":   "الطاقة السنوية",
    "hero.stat4":   "معتمد دولياً",
    "about.eyebrow":"من نحن",
    "about.title":  "شريك موثوق في التميز الزراعي",
    "about.p1":     "جانزي هي شركة تصدير زراعية رائدة مقرها في خراسان الجنوبية — قلب إنتاج الزعفران الإيراني الأسطوري. نحن نربط حصاد إيران الغني بالمشترين المميزين في روسيا وآسيا الوسطى والخليج وأوروبا.",
    "about.p2":     "من الحصاد إلى مستودعكم، كل خطوة في سلسلة التوريد تحكمها بروتوكولات جودة صارمة وشهادات دولية والتزام حقيقي بالشراكة طويلة الأمد.",
    "about.founded":"تأسست عام",
    "about.mission.title": "مهمتنا",
    "about.mission.text":  "تقديم أفضل منتجات الطبيعة بإمكانية التتبع الكاملة والامتثال والاتساق — بناء شراكات عالمية دائمة.",
    "about.vision.title":  "رؤيتنا",
    "about.vision.text":   "أن نكون الاسم الأكثر ثقة في صادرات إيران الزراعية، معترفاً به عالمياً من حيث الجودة والنزاهة.",
    "about.cap1": "✓ توثيق تصدير كامل وتخليص جمركي",
    "about.cap2": "✓ لوجستيات السلسلة الباردة والتخزين المتحكم بالحرارة",
    "about.cap3": "✓ تغليف مخصص والعلامة التجارية الخاصة متاحة",
    "about.cap4": "✓ مرونة الحد الأدنى للطلب لجميع الأسواق",
    "products.eyebrow": "محفظتنا",
    "products.title":   "منتجات متميزة للأسواق العالمية",
    "products.subtitle":"أربع فئات رئيسية، كلها مصدرها مباشرة من المزارع الإيرانية ومعالجة وفق المعايير الدولية.",
    "products.tab1": "الزعفران",
    "products.tab2": "الفواكه المجففة",
    "products.tab3": "مجفف بالتجميد",
    "products.tab4": "المنتجات الطازجة",
    "saffron.heading": "الزعفران الإيراني — الذهب الأحمر",
    "saffron.desc":    "تنتج خراسان الجنوبية أكثر من 90٪ من زعفران العالم. تشتري جانزي حصراً من مزارعين موثوقين في قاين وبيرجند — مناطق مشهورة بأرومة لا مثيل لها وقوة تلوين فائقة.",
    "spec.origin":  "المنشأ:",
    "spec.color":   "التلوين (ISO):",
    "spec.moisture":"الرطوبة:",
    "spec.packing": "التعبئة:",
    "spec.process": "المعالجة:",
    "spec.shelf":   "مدة الصلاحية:",
    "spec.sulfur":  "الكبريت:",
    "spec.moq":     "الحد الأدنى للطلب:",
    "spec.cert":    "الشهادة النباتية:",
    "prod.negin":          "زعفران نجين",
    "prod.negin.desc":     "خيوط طويلة سميكة بلون أحمر غني. محتوى عالي من الكروسين وأرومة مكثفة. مثالي لمشتري التجزئة والخدمة الغذائية.",
    "prod.supernegin":     "زعفران سوبر نجين",
    "prod.supernegin.desc":"الدرجة الأرقى — خيوط طويلة بشكل موحد، حمراء بالكامل، صفر نصائح أسلوب. قوة التلوين 270+. للتجزئة الفاخرة والأسواق المتميزة.",
    "prod.driedkiwi":      "كيوي مجفف",
    "prod.driedkiwi.desc": "شرائح خضراء زاهية بنكهة حلوة حامضة. غني بفيتامين C ومضادات الأكسدة.",
    "prod.driedapple":     "تفاح مجفف",
    "prod.driedapple.desc":"حلقات أو شرائح مقرمشة من أفضل أصناف التفاح الإيرانية. الحلاوة الطبيعية محفوظة.",
    "prod.driedmango":     "مانجو مجففة",
    "prod.driedmango.desc":"نكهة استوائية حلوة، قوام مضغ. متاح بالكبريت أو عضوي بدون كبريت.",
    "prod.driedbanana":    "موز مجفف",
    "prod.driedbanana.desc":"شرائح حلوة طبيعياً. وجبة خفيفة عالية الطاقة للتجزئة والخدمة الغذائية.",
    "prod.driedorange":    "برتقال مجفف",
    "prod.driedorange.desc":"عجلات برتقال مجففة للزينة والطهي. أرومة حمضيات ومظهر جميل.",
    "prod.fdstrawberry":      "فراولة مجففة بالتجميد",
    "prod.fdstrawberry.desc": "كاملة أو مشرحة باللون الأحمر الزاهي. نكهة وأرومة مكثفة. للوجبات الخفيفة الفاخرة.",
    "prod.fdapple":           "تفاح مجفف بالتجميد",
    "prod.fdapple.desc":      "قطع خفيفة مقرمشة. تحتفظ باللون الطبيعي وطعم التفاح الطازج. شعبي للموسلي والحبوب.",
    "prod.fdbanana":          "موز مجفف بالتجميد",
    "prod.fdbanana.desc":     "رقائق موز حلوة مقرمشة. ممتازة لمزيج المسالك وغذاء الأطفال والوجبات الصحية.",
    "prod.fdkiwi":            "كيوي مجفف بالتجميد",
    "prod.fdkiwi.desc":       "دوائر خضراء لافتة مع انفجار نكهة استوائية. مميز بصرياً للتغليف المتميز.",
    "prod.kiwi.desc":   "مزروع في شمال إيران. بريكس ممتاز، أصناف خضراء وذهبية متاحة.",
    "prod.apple.desc":  "أصناف متعددة: ريد ديليشس، فوجي، غراني سميث. معايرة ومصنفة.",
    "prod.onion.desc":  "أصفر، أحمر، أبيض. مدة صلاحية طويلة. شعبي في رابطة الدول المستقلة والشرق الأوسط.",
    "prod.garlic.desc": "خيارات طازجة ومجففة ومقشرة. رائحة قوية، بصيلات نظيفة، مقاسات متسقة.",
    "prod.citrus.desc": "حمضيات جنوب إيران — محتوى عصير عالٍ، قشرة جميلة. توفر موسمي.",
    "dried.heading": "فواكه مجففة فاخرة",
    "dried.desc":    "تجفيف شمسي وفرني مع معالجة دنيا للحفاظ على اللون الطبيعي والطعم والقيمة الغذائية. بدون ألوان أو مواد حافظة اصطناعية.",
    "freeze.heading":"منتجات مجففة بالتجميد",
    "freeze.desc":   "يحافظ التجفيف بالتجميد المتطور على 97٪ من العناصر الغذائية والشكل الأصلي واللون. مثالي لعلامات الوجبات الخفيفة الفاخرة والأدوية والأغذية الوظيفية.",
    "fresh.heading": "فواكه وخضروات طازجة",
    "fresh.desc":    "تُحصد حسب الطلب وتُشحن عبر النقل المبرد. تعمل جانزي مباشرة مع المزارع لضمان الطازجية والمقاسات الصحيحة والامتثال الصحي النباتي لكل سوق مقصد.",
    "fresh.seasonal":"<strong>المنتجات الموسمية:</strong> تصدر جانزي أيضاً المنتجات الإيرانية الموسمية بما فيها الرمان والتين والتمر والفستق والأعشاب. تواصل معنا للتحقق من التوفر الحالي.",
    "badge.popular":   "الأكثر طلباً",
    "badge.premium":   "فاخر",
    "badge.bestseller":"الأكثر مبيعاً",
    "tag.grade1":  "درجة A",
    "tag.topgrade":"أعلى درجة",
    "btn.inquire": "استفسار",
    "why.eyebrow": "لماذا تختارنا",
    "why.title":   "مزايا جانزي",
    "why.q1.title":"شراء مباشر من المصدر",
    "why.q1.text": "نحن نمتلك سلسلة التوريد. العلاقات المباشرة مع المزارعين في خراسان الجنوبية تلغي الوسطاء وتضمن إمكانية التتبع من الحقل إلى الشحنة.",
    "why.q2.title":"أنظمة جودة معتمدة",
    "why.q2.text": "تضمن شهادات ISO 22000 وHACCP والصحة النباتية أن وارداتك تتجاوز الجمارك دون تأخير في كل سوق مستهدف.",
    "why.q3.title":"تغليف مخصص",
    "why.q3.text": "علامة تجارية خاصة وعلامة مشتركة وتغليف مخصص لجميع المنتجات. نتكيف مع المتطلبات التنظيمية والجمالية لسوقك.",
    "why.q4.title":"وثائق التصدير",
    "why.q4.text": "دعم توثيق كامل: شهادة منشأ، شهادات صحة نباتية، شهادات صحية، تبخير، قائمة تعبئة، فاتورة تجارية — بلغتك.",
    "why.q5.title":"خبرة لوجستية",
    "why.q5.text": "شحن FCL وLCL. حلول السلسلة الباردة. خبرة في طرق البر عبر رابطة الدول المستقلة وطرق البحر عبر الخليج والشحن الجوي للزعفران إلى أوروبا.",
    "why.q6.title":"إدارة حسابات مخصصة",
    "why.q6.text": "مدير حساب مسمى لكل عميل. متجاوب بالإنجليزية والروسية والعربية والفارسية — 6 أيام في الأسبوع.",
    "markets.eyebrow": "حضور عالمي",
    "markets.title":   "أسواق التصدير",
    "markets.subtitle":"علاقات تجارية راسخة ووثائق متوافقة لكل وجهة.",
    "market.russia":      "روسيا",
    "market.russia.desc": "أكبر سوق لنا. شحنات FCL منتظمة من الزعفران والفواكه المجففة والثوم. دعم باللغة الروسية والتسمية بالأبجدية السيريلية متاحة.",
    "market.kz":      "كازاخستان",
    "market.kz.desc": "مركز عبور رابطة الدول المستقلة. شحن بري عبر مسار بحر قزوين. متوافق مع المعايير الصحية لاتحاد أوراسيا الاقتصادي.",
    "market.uz":      "أوزبكستان",
    "market.uz.desc": "طلب متزايد على الزعفران الفاخر والمنتجات المجففة بالتجميد في صناعة الغذاء بطشقند.",
    "market.by":      "بيلاروسيا",
    "market.by.desc": "عقود توريد منتظمة للزعفران والفواكه المجففة للمستوردين في مينسك.",
    "market.uae":      "الإمارات",
    "market.uae.desc": "دبي كمركز إعادة تصدير. تغليف زعفران فاخر للتجزئة ومتاجر الهدايا المتميزة.",
    "market.sa":      "المملكة العربية السعودية",
    "market.sa.desc": "منتجات متوافقة مع SFDA. التسمية العربية والوثائق الحلال متاحة عند الطلب.",
    "market.om":      "عُمان",
    "market.om.desc": "شراكات توزيع في مسقط. شحن بحري عبر ممر بندر عباس-مسقط.",
    "market.eu":      "أوروبا",
    "market.eu.desc": "وثائق متوافقة مع الاتحاد الأوروبي. شحن جوي للزعفران إلى ألمانيا وفرنسا وإسبانيا وهولندا.",
    "certs.eyebrow":  "ضمان الجودة",
    "certs.title":    "الشهادات والمعايير",
    "certs.subtitle": "كل شحنة مدعومة بوثائق جودة معترف بها دولياً.",
    "cert.iso.title":    "ISO 22000",
    "cert.iso.desc":     "نظام إدارة سلامة الغذاء يغطي سلسلة التوريد بأكملها من المزرعة إلى التصدير.",
    "cert.haccp.title":  "HACCP",
    "cert.haccp.desc":   "تحليل المخاطر ونقاط التحكم الحرجة — نهج وقائي منهجي لسلامة الغذاء.",
    "cert.health.title": "شهادة صحية",
    "cert.health.desc":  "صادرة عن وزارة الصحة الإيرانية. مطلوبة لواردات رابطة الدول المستقلة والخليج وأوروبا.",
    "cert.phyto.title":  "شهادة صحة نباتية",
    "cert.phyto.desc":   "صادرة عن وزارة الزراعة الإيرانية. تؤكد خلو المنتج من الآفات والأمراض.",
    "cert.coo.title":    "شهادة المنشأ",
    "cert.coo.desc":     "موثقة من غرفة التجارة الإيرانية. ضرورية للتخليص الجمركي وحسابات الرسوم.",
    "cert.saffron.title":"ISO 3632 — الزعفران",
    "cert.saffron.desc": "المعيار الدولي لتصنيف جودة الزعفران. يجتاز زعفران جانزي باستمرار الفئة الأولى.",
    "cert.valid":  "صالحة وحالية",
    "cert.perdoc": "لكل شحنة",
    "certs.note":  "جميع الشهادات متاحة للمراجعة عند الطلب. يمكن تقديم تقارير الاختبارات المعملية لكل دفعة قبل تأكيد الشحن.",
    "contact.eyebrow":       "تواصل معنا",
    "contact.title":         "ابدأ استفسارك التجاري",
    "contact.intro":         "سواء كنت مشترياً لأول مرة أو مستورداً معتمداً، فريقنا جاهز لتقديم المواصفات والعينات والأسعار والمعلومات اللوجستية.",
    "contact.email.label":   "البريد الإلكتروني",
    "contact.phone.label":   "هاتف / واتساب",
    "contact.address.label": "العنوان",
    "contact.address.text":  "محافظة خراسان الجنوبية، إيران",
    "contact.whatsapp":      "تواصل عبر واتساب",
    "contact.map":           "خراسان الجنوبية، إيران",
    "contact.map.sub":       "خريطة تفاعلية متاحة عند الطلب",
    "form.title":    "نموذج الاستفسار التجاري",
    "form.name":     "الاسم الكامل *",
    "form.company":  "اسم الشركة *",
    "form.email":    "البريد الإلكتروني *",
    "form.country":  "الدولة",
    "form.product":  "المنتج المطلوب",
    "form.volume":   "الحجم المقدر / حجم الطلب",
    "form.message":  "الرسالة *",
    "form.select":   "اختر...",
    "form.submit":   "إرسال الاستفسار",
    "form.note":     "نرد على جميع الاستفسارات خلال 24 ساعة في أيام العمل.",
    "form.success":  "✓ شكراً لك! تم استلام استفسارك. سنتواصل معك قريباً.",
    "footer.tagline":        "تصدير منتجات زراعية فاخرة\nمن خراسان الجنوبية، إيران",
    "footer.nav.title":      "التنقل",
    "footer.products.title": "المنتجات",
    "footer.contact.title":  "اتصل بنا",
    "footer.copy":           "© 2025 شركة جانزي للتصدير. جميع الحقوق محفوظة."
  },

  fa: {
    "nav.home":     "خانه",
    "nav.about":    "درباره ما",
    "nav.products": "محصولات",
    "nav.markets":  "بازارهای صادراتی",
    "nav.certs":    "گواهینامه‌ها",
    "nav.contact":  "تماس با ما",
    "nav.inquiry":  "درخواست قیمت",
    "hero.eyebrow": "خراسان جنوبی، ایران · تاسیس ۱۳۸۹",
    "hero.title":   "از مزارع ایران<br /><em>به سفره‌های جهان</em>",
    "hero.subtitle":"زعفران درجه یک، میوه‌های خشک و محصولات تازه — صادرات با صداقت به روسیه، کشورهای مشترک‌المنافع، خلیج فارس و اروپا.",
    "hero.cta1":    "مشاهده محصولات",
    "hero.cta2":    "درخواست نمونه",
    "hero.stat1":   "سال تجربه",
    "hero.stat2":   "کشور صادراتی",
    "hero.stat3":   "ظرفیت سالانه",
    "hero.stat4":   "گواهی‌دار",
    "about.eyebrow":"درباره ما",
    "about.title":  "شریک مطمئن در تعالی کشاورزی",
    "about.p1":     "جانزی یک شرکت برتر صادرات کشاورزی با مقر در خراسان جنوبی — قلب تپنده تولید زعفران افسانه‌ای ایران است. ما پل ارتباطی بین برداشت‌های غنی ایران و خریداران دقیق در روسیه، آسیای مرکزی، خلیج فارس و اروپا هستیم.",
    "about.p2":     "از برداشت تا انبار شما، هر مرحله از زنجیره تأمین ما با پروتکل‌های کیفی دقیق، گواهینامه‌های بین‌المللی و تعهد واقعی به مشارکت بلندمدت اداره می‌شود.",
    "about.founded":"سال تاسیس",
    "about.mission.title": "ماموریت ما",
    "about.mission.text":  "ارائه بهترین محصولات طبیعت با قابلیت ردیابی کامل، انطباق و ثبات — ایجاد مشارکت‌های جهانی پایدار.",
    "about.vision.title":  "چشم‌انداز ما",
    "about.vision.text":   "تبدیل شدن به معتمدترین نام در صادرات کشاورزی ایران، شناخته‌شده در سراسر جهان به دلیل کیفیت و صداقت.",
    "about.cap1": "✓ اسناد صادراتی کامل و ترخیص گمرکی",
    "about.cap2": "✓ لجستیک زنجیر سرما و انبارداری کنترل‌شده دما",
    "about.cap3": "✓ بسته‌بندی سفارشی و برچسب خصوصی موجود است",
    "about.cap4": "✓ انعطاف حداقل سفارش برای تمام بازارها",
    "products.eyebrow": "سبد محصولات",
    "products.title":   "محصولات برتر برای بازارهای جهانی",
    "products.subtitle":"چهار دسته اصلی، همه مستقیم از مزارع ایرانی و فرآوری‌شده با استانداردهای بین‌المللی.",
    "products.tab1": "زعفران",
    "products.tab2": "میوه خشک",
    "products.tab3": "فریز درایر",
    "products.tab4": "محصولات تازه",
    "saffron.heading": "زعفران ایرانی — طلای سرخ",
    "saffron.desc":    "خراسان جنوبی بیش از ۹۰ درصد زعفران جهان را تولید می‌کند. جانزی منحصراً از کشاورزان مورد اعتماد در قاین و بیرجند تهیه می‌کند — مناطقی مشهور به عطر بی‌نظیر و قدرت رنگ‌دهی استثنایی.",
    "spec.origin":  "مبدأ:",
    "spec.color":   "رنگ‌دهی (ISO):",
    "spec.moisture":"رطوبت:",
    "spec.packing": "بسته‌بندی:",
    "spec.process": "فرآوری:",
    "spec.shelf":   "ماندگاری:",
    "spec.sulfur":  "گوگرد:",
    "spec.moq":     "حداقل سفارش:",
    "spec.cert":    "گواهی بهداشت نباتی:",
    "prod.negin":          "زعفران نگین",
    "prod.negin.desc":     "رشته‌های بلند و ضخیم با رنگ قرمز غنی. میزان بالای کروسین و عطر شدید. ایده‌آل برای خریداران خرده‌فروشی و خدمات غذایی.",
    "prod.supernegin":     "زعفران سوپر نگین",
    "prod.supernegin.desc":"بهترین درجه — رشته‌های یکنواخت بلند، کاملاً قرمز، بدون ریشه سفید. قدرت رنگ‌دهی ۲۷۰+. برای خرده‌فروشی لوکس و بازارهای صادراتی ممتاز.",
    "prod.driedkiwi":      "کیوی خشک",
    "prod.driedkiwi.desc": "برش‌های سبز درخشان با طعم شیرین و ترش. سرشار از ویتامین C و آنتی‌اکسیدان.",
    "prod.driedapple":     "سیب خشک",
    "prod.driedapple.desc":"حلقه‌ها یا برش‌های ترد از بهترین ارقام سیب ایرانی. شیرینی طبیعی حفظ شده.",
    "prod.driedmango":     "انبه خشک",
    "prod.driedmango.desc":"طعم استوایی شیرین، بافت جویدنی. با سولفیت یا بدون سولفیت ارگانیک موجود است.",
    "prod.driedbanana":    "موز خشک",
    "prod.driedbanana.desc":"برش‌های طبیعاً شیرین. تنقلات پرانرژی برای خرده‌فروشی و خدمات غذایی.",
    "prod.driedorange":    "پرتقال خشک",
    "prod.driedorange.desc":"چرخ‌های پرتقال خشک تزئینی و آشپزی. عطر مرکبات، ظاهر زیبا.",
    "prod.fdstrawberry":      "توت‌فرنگی فریز درایر",
    "prod.fdstrawberry.desc": "کامل یا برش‌خورده به رنگ قرمز درخشان. طعم و عطر شدید. برای تنقلات لوکس و مواد اولیه.",
    "prod.fdapple":           "سیب فریز درایر",
    "prod.fdapple.desc":      "تکه‌های سبک و ترد. رنگ طبیعی و طعم سیب تازه حفظ می‌شود. محبوب برای موسلی و غلات.",
    "prod.fdbanana":          "موز فریز درایر",
    "prod.fdbanana.desc":     "چیپس موز شیرین و ترد. عالی برای مخلوط تنقلات، غذای کودک و میان‌وعده‌های سالم.",
    "prod.fdkiwi":            "کیوی فریز درایر",
    "prod.fdkiwi.desc":       "دایره‌های سبز چشم‌نواز با انفجار طعم استوایی. از نظر بصری برای بسته‌بندی ممتاز متمایز است.",
    "prod.kiwi.desc":   "پرورش‌یافته در شمال ایران. بریکس عالی، ارقام سبز و طلایی موجود.",
    "prod.apple.desc":  "ارقام متعدد: رد دلیشس، فوجی، گرنی اسمیت. کالیبره‌شده و درجه‌بندی‌شده.",
    "prod.onion.desc":  "زرد، قرمز، سفید. ماندگاری بالا. محبوب در بازارهای کشورهای مشترک‌المنافع و خاورمیانه.",
    "prod.garlic.desc": "گزینه‌های تازه، خشک و پوست‌کنده. عطر قوی، پیازچه‌های تمیز، اندازه یکنواخت.",
    "prod.citrus.desc": "مرکبات جنوب ایران — محتوای آب‌میوه بالا، پوست زیبا. عرضه فصلی.",
    "dried.heading": "میوه‌های خشک درجه یک",
    "dried.desc":    "خشک کردن آفتابی و فر با حداقل فرآوری برای حفظ رنگ، طعم و ارزش غذایی طبیعی. بدون رنگ‌های مصنوعی یا نگهدارنده‌ها.",
    "freeze.heading":"محصولات فریز درایر",
    "freeze.desc":   "فریز درایر پیشرفته ۹۷ درصد مواد مغذی، شکل اصلی و رنگ را حفظ می‌کند. ایده‌آل برای برندهای تنقلات ممتاز، دارویی و بخش غذاهای کارکردی.",
    "fresh.heading": "میوه و سبزیجات تازه",
    "fresh.desc":    "به سفارش برداشت‌شده و از طریق حمل‌ونقل یخچال‌دار ارسال می‌شود. جانزی مستقیماً با مزارع همکاری می‌کند تا تازگی، اندازه صحیح و انطباق بهداشت نباتی برای هر بازار مقصد تضمین شود.",
    "fresh.seasonal":"<strong>محصولات فصلی:</strong> جانزی همچنین محصولات فصلی ایرانی از جمله انار، انجیر، خرما، پسته و انواع گیاهان دارویی را صادر می‌کند. برای موجودی فعلی با ما تماس بگیرید.",
    "badge.popular":   "پرطرفدار",
    "badge.premium":   "ممتاز",
    "badge.bestseller":"پرفروش‌ترین",
    "tag.grade1":  "درجه A",
    "tag.topgrade":"بالاترین درجه",
    "btn.inquire": "استعلام",
    "why.eyebrow": "چرا ما را انتخاب کنید",
    "why.title":   "مزیت‌های جانزی",
    "why.q1.title":"تهیه مستقیم از منبع",
    "why.q1.text": "ما مالک زنجیره تأمین هستیم. روابط مستقیم کشاورزی در خراسان جنوبی واسطه‌ها را حذف و قابلیت ردیابی از مزرعه تا حمل را تضمین می‌کند.",
    "why.q2.title":"سیستم‌های کیفیت گواهی‌دار",
    "why.q2.text": "گواهینامه‌های ISO 22000، HACCP و بهداشت و بهداشت نباتی تضمین می‌کنند که واردات شما بدون تأخیر در هر بازار هدف از گمرک ترخیص شود.",
    "why.q3.title":"بسته‌بندی سفارشی",
    "why.q3.text": "برچسب خصوصی، برندینگ مشترک و بسته‌بندی اختصاصی برای تمام SKUها. ما با الزامات نظارتی و زیبایی‌شناختی بازار شما انطباق پیدا می‌کنیم.",
    "why.q4.title":"اسناد صادراتی",
    "why.q4.text": "پشتیبانی کامل اسناد: گواهی منشأ، گواهینامه‌های بهداشت نباتی، گواهینامه‌های بهداشتی، دود دادن، لیست بسته‌بندی، فاکتور تجاری — به زبان شما.",
    "why.q5.title":"تخصص لجستیکی",
    "why.q5.text": "حمل FCL و LCL. راهکارهای زنجیر سرما. تجربه در مسیرهای زمینی کشورهای مشترک‌المنافع، مسیرهای دریایی خلیج فارس و حمل هوایی زعفران به اروپا.",
    "why.q6.title":"مدیریت حساب اختصاصی",
    "why.q6.text": "یک مدیر حساب اختصاصی برای هر مشتری. پاسخگو به انگلیسی، روسی، عربی و فارسی — ۶ روز در هفته.",
    "markets.eyebrow": "حضور جهانی",
    "markets.title":   "بازارهای صادراتی",
    "markets.subtitle":"روابط تجاری مستحکم و اسناد مطابق با استانداردها برای هر مقصد.",
    "market.russia":      "روسیه",
    "market.russia.desc": "بزرگ‌ترین بازار ما. حمل‌های منظم FCL از زعفران، میوه‌های خشک و سیر. پشتیبانی به روسی و برچسب‌گذاری سیریلیک موجود است.",
    "market.kz":      "قزاقستان",
    "market.kz.desc": "مرکز ترانزیت کشورهای مشترک‌المنافع. حمل زمینی از مسیر دریای خزر. مطابق با استانداردهای بهداشتی اتحادیه اوراسیا.",
    "market.uz":      "ازبکستان",
    "market.uz.desc": "تقاضای رو به رشد برای زعفران درجه یک و محصولات فریز درایر در صنعت غذایی تاشکند.",
    "market.by":      "بلاروس",
    "market.by.desc": "قراردادهای منظم تأمین زعفران و میوه‌های خشک برای واردکنندگان مینسک.",
    "market.uae":      "امارات",
    "market.uae.desc": "دبی به عنوان مرکز صادرات مجدد. بسته‌بندی لوکس زعفران برای زنجیره‌های خرده‌فروشی و بخش هدایای ممتاز.",
    "market.sa":      "عربستان سعودی",
    "market.sa.desc": "محصولات مطابق با SFDA. برچسب‌گذاری عربی و مستندات حلال در صورت درخواست ارائه می‌شود.",
    "market.om":      "عُمان",
    "market.om.desc": "مشارکت‌های توزیع در مسقط. حمل دریایی از طریق کریدور بندرعباس-مسقط.",
    "market.eu":      "اروپا",
    "market.eu.desc": "اسناد مطابق با EU. حمل هوایی زعفران به آلمان، فرانسه، اسپانیا و هلند.",
    "certs.eyebrow":  "تضمین کیفیت",
    "certs.title":    "گواهینامه‌ها و استانداردها",
    "certs.subtitle": "هر محموله با اسناد کیفی معتبر بین‌المللی پشتیبانی می‌شود.",
    "cert.iso.title":    "ISO 22000",
    "cert.iso.desc":     "سیستم مدیریت ایمنی غذا که کل زنجیره تأمین از مزرعه تا صادرات را پوشش می‌دهد.",
    "cert.haccp.title":  "HACCP",
    "cert.haccp.desc":   "تجزیه و تحلیل خطر و نقاط کنترل بحرانی — رویکرد پیشگیرانه سیستماتیک برای ایمنی غذا.",
    "cert.health.title": "گواهی بهداشتی",
    "cert.health.desc":  "صادره توسط وزارت بهداشت ایران. برای واردات به کشورهای مشترک‌المنافع، خلیج فارس و اروپا الزامی است.",
    "cert.phyto.title":  "گواهینامه بهداشت نباتی",
    "cert.phyto.desc":   "صادره توسط وزارت جهاد کشاورزی ایران. تأیید می‌کند که محصول عاری از آفات و بیماری‌ها است.",
    "cert.coo.title":    "گواهی منشأ",
    "cert.coo.desc":     "تأییدشده توسط اتاق بازرگانی ایران. برای ترخیص گمرکی و محاسبه حقوق گمرکی ضروری است.",
    "cert.saffron.title":"ISO 3632 — زعفران",
    "cert.saffron.desc": "استاندارد بین‌المللی درجه‌بندی کیفیت زعفران. زعفران جانزی به طور مستمر در دسته یک قرار می‌گیرد.",
    "cert.valid":  "معتبر و جاری",
    "cert.perdoc": "برای هر محموله",
    "certs.note":  "تمام گواهینامه‌ها در صورت درخواست برای بررسی در دسترس هستند. گزارش‌های آزمایشگاهی می‌توانند قبل از تأیید محموله برای هر لات ارائه شوند.",
    "contact.eyebrow":       "ارتباط با ما",
    "contact.title":         "استعلام تجاری خود را شروع کنید",
    "contact.intro":         "چه خریدار اول باشید چه واردکننده باتجربه، تیم ما آماده ارائه مشخصات، نمونه‌ها، قیمت‌گذاری و اطلاعات لجستیکی است.",
    "contact.email.label":   "ایمیل",
    "contact.phone.label":   "تلفن / واتساپ",
    "contact.address.label": "آدرس",
    "contact.address.text":  "استان خراسان جنوبی، ایران",
    "contact.whatsapp":      "چت در واتساپ",
    "contact.map":           "خراسان جنوبی، ایران",
    "contact.map.sub":       "نقشه تعاملی در صورت درخواست موجود است",
    "form.title":    "فرم استعلام تجاری",
    "form.name":     "نام کامل *",
    "form.company":  "نام شرکت *",
    "form.email":    "آدرس ایمیل *",
    "form.country":  "کشور",
    "form.product":  "محصول مورد نظر",
    "form.volume":   "حجم / اندازه سفارش تخمینی",
    "form.message":  "پیام *",
    "form.select":   "انتخاب کنید...",
    "form.submit":   "ارسال استعلام",
    "form.note":     "ما در روزهای کاری ظرف ۲۴ ساعت به تمام استعلام‌ها پاسخ می‌دهیم.",
    "form.success":  "✓ متشکریم! استعلام شما دریافت شد. به زودی با شما تماس خواهیم گرفت.",
    "footer.tagline":        "صادرات محصولات کشاورزی درجه یک\nاز خراسان جنوبی، ایران",
    "footer.nav.title":      "ناوبری",
    "footer.products.title": "محصولات",
    "footer.contact.title":  "تماس",
    "footer.copy":           "© ۱۴۰۴ شرکت صادراتی جانزی. تمامی حقوق محفوظ است."
  }
};

/* ═══════════════════════════════════════════════════
   2. STATE
═══════════════════════════════════════════════════ */
let currentLang = 'en';
let mobileNavOpen = false;

/* ═══════════════════════════════════════════════════
   3. STICKY HEADER
═══════════════════════════════════════════════════ */
function initStickyHeader() {
  const header = document.getElementById('site-header');
  if (!header) return;

  function onScroll() {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ═══════════════════════════════════════════════════
   4. MOBILE NAV
═══════════════════════════════════════════════════ */
function initMobileNav() {
  const hamburger  = document.getElementById('hamburger');
  const mobileNav  = document.getElementById('mobile-nav');
  if (!hamburger || !mobileNav) return;

  function toggleNav(force) {
    mobileNavOpen = (force !== undefined) ? force : !mobileNavOpen;
    hamburger.classList.toggle('open', mobileNavOpen);
    hamburger.setAttribute('aria-expanded', String(mobileNavOpen));
    mobileNav.classList.toggle('open', mobileNavOpen);
    mobileNav.setAttribute('aria-hidden', String(!mobileNavOpen));
    document.body.style.overflow = mobileNavOpen ? 'hidden' : '';
  }

  hamburger.addEventListener('click', () => toggleNav());

  // Close on link click
  mobileNav.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => toggleNav(false));
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (mobileNavOpen && !mobileNav.contains(e.target) && !hamburger.contains(e.target)) {
      toggleNav(false);
    }
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileNavOpen) toggleNav(false);
  });
}

/* ═══════════════════════════════════════════════════
   5. SMOOTH SCROLL & ACTIVE NAV
═══════════════════════════════════════════════════ */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const headerH = parseInt(getComputedStyle(document.documentElement)
        .getPropertyValue('--header-h'), 10) || 72;
      const offsetTop = target.getBoundingClientRect().top + window.scrollY - headerH;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    });
  });
}

function initScrollSpy() {
  const sections  = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.nav-link');
  if (!sections.length || !navLinks.length) return;

  const headerH = parseInt(
    getComputedStyle(document.documentElement).getPropertyValue('--header-h'), 10
  ) || 72;

  function onScroll() {
    let current = '';
    sections.forEach(section => {
      const top = section.getBoundingClientRect().top;
      if (top <= headerH + 60) current = section.id;
    });
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      link.classList.toggle('active', href === '#' + current);
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ═══════════════════════════════════════════════════
   6. PRODUCT TABS
═══════════════════════════════════════════════════ */
function initProductTabs() {
  const tabBtns   = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');
  if (!tabBtns.length) return;

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;

      tabBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      tabPanels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const panel = document.getElementById('tab-' + target);
      if (panel) panel.classList.add('active');
    });
  });
}

/* ═══════════════════════════════════════════════════
   7. INTERNATIONALISATION (i18n)
═══════════════════════════════════════════════════ */
function applyTranslations(lang) {
  const t = TRANSLATIONS[lang];
  if (!t) return;

  // Update HTML lang + dir
  const rtlLangs = ['ar', 'fa'];
  document.documentElement.lang = lang;
  document.documentElement.dir  = rtlLangs.includes(lang) ? 'rtl' : 'ltr';

  // Translate all [data-i18n] elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (!t[key]) return;

    const val = t[key];

    // Inputs / textareas: use placeholder
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      // labels stay as text
    } else if (el.tagName === 'OPTION') {
      el.textContent = val;
    } else {
      el.innerHTML = val;
    }
  });

  // Translate placeholder attributes on form inputs
  const placeholders = {
    'f-name':    { en: 'John Smith',              ru: 'Иван Иванов',          ar: 'محمد أحمد',     fa: 'محمد احمدی' },
    'f-company': { en: 'ABC Imports Ltd',         ru: 'ООО "Импорт Плюс"',    ar: 'شركة ABC للاستيراد', fa: 'شرکت واردات ABC' },
    'f-email':   { en: 'you@company.com',         ru: 'you@company.com',      ar: 'you@company.com', fa: 'you@company.com' },
    'f-volume':  { en: 'e.g. 50 kg saffron / 5 MT dried fruits',
                   ru: 'напр. 50 кг шафрана / 5 MT сухофруктов',
                   ar: 'مثل: ٥٠ كجم زعفران / ٥ طن فواكه مجففة',
                   fa: 'مثلاً ۵۰ کیلو زعفران / ۵ تن میوه خشک' },
    'f-message': { en: 'Please describe your requirements, target pricing, delivery timeline or any questions.',
                   ru: 'Опишите ваши требования, целевую цену, сроки поставки или любые вопросы.',
                   ar: 'يرجى وصف متطلباتك وأسعارك المستهدفة والجدول الزمني للتسليم أو أي أسئلة.',
                   fa: 'لطفاً نیازهای خود، قیمت هدف، زمان‌بندی تحویل یا هر سوالی را توضیح دهید.' }
  };
  Object.entries(placeholders).forEach(([id, vals]) => {
    const el = document.getElementById(id);
    if (el && vals[lang]) el.placeholder = vals[lang];
  });

  // Update page title
  const titles = {
    en: 'JANZI | Premium Agricultural Exports from Iran',
    ru: 'JANZI | Экспорт сельскохозяйственной продукции из Ирана',
    ar: 'جانزي | صادرات زراعية ممتازة من إيران',
    fa: 'جانزی | صادرات محصولات کشاورزی درجه یک از ایران'
  };
  document.title = titles[lang] || titles.en;

  // Update meta description
  const descriptions = {
    en: 'JANZI is a leading Iranian agricultural export company supplying premium saffron, dried fruits, freeze-dried products and fresh produce to Russia, CIS, UAE, Saudi Arabia and Europe.',
    ru: 'JANZI — ведущая иранская компания по экспорту сельскохозяйственной продукции, поставляющая шафран, сухофрукты, сублимированные продукты и свежие овощи в Россию, СНГ, ОАЭ, Саудовскую Аравию и Европу.',
    ar: 'جانزي هي شركة إيرانية رائدة في تصدير المنتجات الزراعية تزود روسيا ودول الخليج وأوروبا بالزعفران والفواكه المجففة والمنتجات الطازجة.',
    fa: 'جانزی یک شرکت برتر صادرات کشاورزی ایرانی است که زعفران، میوه‌های خشک، محصولات فریز درایر و محصولات تازه را به روسیه، کشورهای مشترک‌المنافع، امارات، عربستان و اروپا عرضه می‌کند.'
  };
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', descriptions[lang] || descriptions.en);
}

function initLanguageSwitcher() {
  // All lang buttons (header desktop, header mobile, footer)
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.lang-btn');
    if (!btn) return;

    const lang = btn.dataset.lang;
    if (!lang || lang === currentLang) return;

    currentLang = lang;

    // Update all lang buttons
    document.querySelectorAll('.lang-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.lang === lang);
    });

    applyTranslations(lang);

    // Update canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', `https://janzico.com/${lang}/`);
  });
}

/* ═══════════════════════════════════════════════════
   8. INQUIRY FORM
═══════════════════════════════════════════════════ */
function initContactForm() {
  const form    = document.getElementById('inquiry-form');
  const success = document.getElementById('form-success');
  if (!form) return;

  form.addEventListener('submit', function(e) {
    // e.preventDefault();

    // Basic validation
    let valid = true;
    const required = form.querySelectorAll('[required]');
    required.forEach(field => {
      field.style.borderColor = '';
      if (!field.value.trim()) {
        field.style.borderColor = 'var(--error)';
        valid = false;
      }
    });

    // Email validation
    const emailField = form.querySelector('#f-email');
    if (emailField && emailField.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailField.value)) {
      emailField.style.borderColor = 'var(--error)';
      valid = false;
    }

    if (!valid) return;

  });

  // Clear error styling on input
  form.querySelectorAll('input, textarea, select').forEach(field => {
    field.addEventListener('input', () => { field.style.borderColor = ''; });
  });
}

/* ═══════════════════════════════════════════════════
   9. REVEAL ON SCROLL (lightweight IntersectionObserver)
═══════════════════════════════════════════════════ */
function initRevealOnScroll() {
  if (!('IntersectionObserver' in window)) return;

  // Add reveal class to cards and section headers
  const targets = document.querySelectorAll(
    '.product-card, .why-card, .market-card, .cert-card, .mv-card, .section-header, .stat-item'
  );

  targets.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = `opacity 0.5s ease ${(i % 6) * 0.07}s, transform 0.5s ease ${(i % 6) * 0.07}s`;
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  targets.forEach(el => observer.observe(el));
}

/* ═══════════════════════════════════════════════════
   10. DETECT BROWSER LANGUAGE
═══════════════════════════════════════════════════ */
function detectBrowserLanguage() {
  // Check URL path first
  const path = window.location.pathname;
  const langFromPath = path.match(/\/(en|ru|ar|fa)\//);
  if (langFromPath && TRANSLATIONS[langFromPath[1]]) {
    return langFromPath[1];
  }

  // Check browser language
  const browserLang = (navigator.language || navigator.userLanguage || 'en').slice(0, 2).toLowerCase();
  if (TRANSLATIONS[browserLang]) return browserLang;

  return 'en';
}

/* ═══════════════════════════════════════════════════
   11. INIT
═══════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  // Detect starting language
  currentLang = detectBrowserLanguage();

  // Init all modules
  initStickyHeader();
  initMobileNav();
  initSmoothScroll();
  initScrollSpy();
  initProductTabs();
  initLanguageSwitcher();
  initContactForm();
  initRevealOnScroll();

  // Apply initial translations
  applyTranslations(currentLang);

  // Mark correct lang button as active
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === currentLang);
  });
});
