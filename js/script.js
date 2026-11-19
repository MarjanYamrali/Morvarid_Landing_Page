(function () {
  "use strict";

  var STORAGE_LANG = "morvarid-lang";
  var STORAGE_THEME = "morvarid-theme";
  var STORAGE_CART = "morvarid-cart";
  var STORAGE_WISHLIST = "morvarid-wishlist";

  var products = [
    {
      id: "silk-dress",
      category: "fashion",
      price: 289,
      image: "images/product-silk-dress.jpg",
      name: { en: "Pearl Silk Evening Dress", fa: "پیراهن شام ابریشم مروارید" },
      description: {
        en: "A fluid silk gown with a quiet neckline and a hem that moves like water. Designed for evenings that ask for presence, not noise.",
        fa: "پیراهنی روان از ابریشم با یقه آرام و دامنی که مثل آب حرکت می‌کند. برای شب‌هایی که حضور می‌خواهند، نه هیاهو."
      }
    },
    {
      id: "cashmere-coat",
      category: "fashion",
      price: 420,
      image: "images/product-cashmere-coat.jpg",
      name: { en: "Sand Cashmere Wrap Coat", fa: "پالتو کشمیر شن‌رنگ" },
      description: {
        en: "A wrap coat in warm sand cashmere. Soft architecture for city mornings and late dinners alike.",
        fa: "پالتویی کیمونو‌مانند از کشمیر گرم شن‌رنگ. معماری نرم برای صبح‌های شهری و شام‌های دیرهنگام."
      }
    },
    {
      id: "silk-blouse",
      category: "fashion",
      price: 168,
      image: "images/product-silk-blouse.jpg",
      name: { en: "Ivory Silk Blouse", fa: "بلوز ابریشم عاجی" },
      description: {
        en: "An ivory blouse cut from matte silk. Pair it with jewelry or wear it as the quiet center of a look.",
        fa: "بلوزی عاجی از ابریشم مات. آن را با جواهر همراه کنید یا به‌عنوان نقطه آرام استایل بپوشید."
      }
    },
    {
      id: "leather-tote",
      category: "bags",
      price: 245,
      image: "images/product-leather-tote.jpg",
      name: { en: "Atelier Leather Tote", fa: "کیف دوشی چرم آتلیه" },
      description: {
        en: "A structured leather tote with room for a day and a night. The hardware is brushed, never loud.",
        fa: "کیف چرمی ساخت‌یافته با فضای کافی برای روز و شب. یراق‌آلات مات هستند، هرگز پرصدا نیستند."
      }
    },
    {
      id: "crossbody",
      category: "bags",
      price: 186,
      image: "images/product-crossbody.jpg",
      name: { en: "Mini Pearl Crossbody", fa: "کیف کراس‌بادی مروارید" },
      description: {
        en: "A compact crossbody for evenings. The silhouette is sculptural, the leather is butter-soft.",
        fa: "کیف جمع‌وجور برای شب. فرم مجسمه‌گونه است و چرم، نرم و لطیف."
      }
    },
    {
      id: "satin-heels",
      category: "shoes",
      price: 198,
      image: "images/product-satin-heels.jpg",
      name: { en: "Nude Satin Heels", fa: "کفش پاشنه‌دار ساتن نود" },
      description: {
        en: "Satin heels in a skin-warm nude. A refined line that lengthens the silhouette without effort.",
        fa: "کفش ساتن با رنگ گرم پوست. خطی ظریف که بدون اغراق، اندام را کشیده‌تر نشان می‌دهد."
      }
    },
    {
      id: "suede-boots",
      category: "shoes",
      price: 232,
      image: "images/product-suede-boots.jpg",
      name: { en: "Sage Suede Ankle Boots", fa: "بوت کوتاه جیر مریم‌گلی" },
      description: {
        en: "Ankle boots in sage suede with a modest heel. Made for galleries, gardens, and long walks.",
        fa: "بوت کوتاه از جیر مریم‌گلی با پاشنه‌ای متعادل. مناسب گالری، باغ و پیاده‌روی‌های طولانی."
      }
    },
    {
      id: "pearl-necklace",
      category: "jewelry",
      price: 156,
      image: "images/product-pearl-necklace.jpg",
      name: { en: "Lumen Pearl Necklace", fa: "گردنبند مروارید لومن" },
      description: {
        en: "A single luminous strand. The pearls are irregular enough to feel alive, regular enough to feel classic.",
        fa: "یک رشته درخشان. مرواریدها آن‌قدر نامنظم‌اند که زنده به نظر برسند و آن‌قدر منظم که کلاسیک بمانند."
      }
    },
    {
      id: "gold-earrings",
      category: "jewelry",
      price: 98,
      image: "images/product-gold-earrings.jpg",
      name: { en: "Soft Gold Drop Earrings", fa: "گوشواره قطره‌ای طلایی ملایم" },
      description: {
        en: "Drop earrings in a warm gold tone. They catch candlelight and daylight with the same softness.",
        fa: "گوشواره‌های آویز با رنگ طلایی گرم. نور شمع و نور روز را با همان نرمی بازمی‌تابانند."
      }
    },
    {
      id: "crystal-bracelet",
      category: "jewelry",
      price: 124,
      image: "images/product-crystal-bracelet.jpg",
      name: { en: "Crystal Ribbon Bracelet", fa: "دستبند روبان کریستال" },
      description: {
        en: "A slender bracelet of crystals on a soft ribbon setting. Delicate on the wrist, certain in a room.",
        fa: "دستبندی باریک از کریستال روی نشستنگاهی نرم. روی مچ ظریف است و در جمع، مطمئن."
      }
    },
    {
      id: "rose-serum",
      category: "beauty",
      price: 72,
      image: "images/product-rose-serum.jpg",
      name: { en: "Rose Atelier Serum", fa: "سرم رز آتلیه" },
      description: {
        en: "A rose-infused serum with a glass-skin finish. A beauty ritual that feels like jewelry for the complexion.",
        fa: "سرمی با رایحه رز و پایانی شیشه‌ای. آیینی زیبایی که حس جواهر را برای پوست می‌آورد."
      }
    },
    {
      id: "velvet-lip",
      category: "beauty",
      price: 38,
      image: "images/product-velvet-lip.jpg",
      name: { en: "Velvet Lip Collection", fa: "مجموعه لب مخملی" },
      description: {
        en: "A velvet lip color in a muted berry. One stroke, a finished face, no performance required.",
        fa: "رنگ لب مخملی در ته‌رنگ توت ملایم. یک حرکت، چهره‌ای کامل، بدون نمایش."
      }
    }
  ];

  var i18n = {
    en: {
      skip: "Skip to content",
      "nav.home": "Home",
      "nav.categories": "Categories",
      "nav.products": "Products",
      "nav.about": "About",
      "nav.contact": "Contact",
      "aria.home": "MORVARID home",
      "aria.theme": "Switch color theme",
      "aria.cart": "Open shopping cart",
      "aria.menu": "Open menu",
      "aria.closeCart": "Close cart",
      "aria.closeModal": "Close quick view",
      "cart.title": "Your Selection",
      "cart.total": "Total",
      "cart.checkout": "Review Selection",
      "cart.demo": "This cart is a frontend demonstration. No real checkout is processed.",
      "cart.empty": "Your selection is empty.",
      "cart.remove": "Remove",
      "hero.eyebrow": "Luxury Fashion & Beauty",
      "hero.title": "Beauty in Every Detail.",
      "hero.lead": "A modern boutique for women who collect quiet luxury: refined fashion, sculptural bags, jewelry, and beauty crafted with intention.",
      "hero.explore": "Explore Collection",
      "hero.discover": "Discover More",
      "categories.eyebrow": "The Boutique",
      "categories.title": "Shop by Category",
      "categories.intro": "Five curated worlds, one signature aesthetic. Choose a category and enter the collection.",
      "categories.shop": "View pieces",
      "cat.fashion": "Fashion",
      "cat.bags": "Bags",
      "cat.shoes": "Shoes",
      "cat.jewelry": "Jewelry",
      "cat.beauty": "Beauty",
      "products.eyebrow": "Featured",
      "products.title": "The Collection",
      "products.intro": "A considered edit of signature pieces. Filter by category or open a quick view to see more detail.",
      "products.empty": "No pieces found in this category.",
      "products.add": "Add to Cart",
      "products.quick": "Quick View",
      "products.wishlistAdd": "Add to wishlist",
      "products.wishlistRemove": "Remove from wishlist",
      "filter.all": "All",
      "about.eyebrow": "Our Story",
      "about.title": "About MORVARID",
      "about.p1": "MORVARID was imagined as a modern pearl: luminous, restrained, and composed of countless quiet details. We design an online boutique for women who want luxury without noise.",
      "about.p2": "Every garment, bag, jewel, and beauty ritual is chosen for material honesty, silhouette, and the way it feels in daily life. The experience is slow, considered, and personal.",
      "about.p3": "From the first glance at a fabric to the last clasp of a necklace, our philosophy is simple: beauty lives in the details you return to.",
      "about.stat1": "Ateliers",
      "about.stat2": "Signature Pieces",
      "about.stat3": "Private Clients",
      "benefits.eyebrow": "The Experience",
      "benefits.title": "Why Choose Us",
      "benefits.qualityTitle": "Premium Quality",
      "benefits.qualityText": "Silks, leathers, and gold-tone finishes are selected for longevity, not trends that fade after a season.",
      "benefits.designTitle": "Elegant Designs",
      "benefits.designText": "Soft architecture, feminine lines, and a palette of pearl, sage, and sand create a coherent wardrobe.",
      "benefits.secureTitle": "Secure Shopping",
      "benefits.secureText": "This demonstration highlights a calm, protected checkout experience. No real payments are taken here.",
      "benefits.supportTitle": "Customer Support",
      "benefits.supportText": "Styling notes, size guidance, and thoughtful replies — support that feels like a private atelier visit.",
      "testimonials.eyebrow": "Client Voices",
      "testimonials.title": "Testimonials",
      "testimonials.note": "Sample / demo testimonials created for this frontend assignment. They do not represent real customers.",
      "testimonials.t1": "“The silk dress arrived as if it had been made for a gallery opening. Quiet, precise, and completely unforgettable.”",
      "testimonials.t2": "“I keep returning for the jewelry. The pearl necklace is the piece I wear when I want to feel composed.”",
      "testimonials.t3": "“From the beauty ritual to the leather tote, everything feels considered. MORVARID understands modern luxury.”",
      "testimonials.n1": "Elena Voss",
      "testimonials.n2": "Sara Nouri",
      "testimonials.n3": "Amelia Hart",
      "testimonials.r1": "Sample review · Fashion",
      "testimonials.r2": "Sample review · Jewelry",
      "testimonials.r3": "Sample review · Beauty",
      "newsletter.eyebrow": "Private List",
      "newsletter.title": "Subscribe to the Atelier Notes",
      "newsletter.intro": "Seasonal edits, early access, and styling letters. This subscription is a frontend demonstration only.",
      "newsletter.label": "Email address",
      "newsletter.placeholder": "Your email address",
      "newsletter.submit": "Subscribe",
      "newsletter.demo": "No emails are stored or sent. Validation runs entirely in the browser.",
      "newsletter.required": "Please enter your email address.",
      "newsletter.invalid": "Please enter a valid email address.",
      "newsletter.success": "Thank you. This is a demo confirmation — no email was sent.",
      "contact.eyebrow": "Atelier Desk",
      "contact.title": "Contact",
      "contact.intro": "Write to the boutique with styling questions or press inquiries. This form is a demonstration and does not send real messages.",
      "contact.addressLabel": "Address",
      "contact.address": "12 Pearl Atelier Lane, District 3, Sample City",
      "contact.phoneLabel": "Phone",
      "contact.phone": "+1 (000) 555-0148",
      "contact.emailLabel": "Email",
      "contact.hoursLabel": "Hours",
      "contact.hours": "Sat–Thu, 10:00–19:00",
      "contact.name": "Full Name",
      "contact.email": "Email Address",
      "contact.subject": "Subject",
      "contact.message": "Message",
      "contact.submit": "Send Message",
      "contact.demo": "Messages stay in your browser. Nothing is emailed or saved on a server.",
      "contact.nameError": "Please enter your full name.",
      "contact.emailError": "Please enter your email address.",
      "contact.emailInvalid": "Please enter a valid email address.",
      "contact.subjectError": "Please enter a subject.",
      "contact.messageError": "Please write a short message.",
      "contact.success": "Message validated. This is a demo — no email was sent.",
      "footer.blurb": "A modern luxury boutique for fashion, bags, shoes, jewelry, and beauty. Beauty in every detail.",
      "footer.nav": "Navigation",
      "footer.categories": "Categories",
      "footer.connect": "Connect",
      "footer.rights": "All rights reserved. Fictional brand for a frontend assignment.",
      "toast.cart": "Added to your selection.",
      "toast.wishlistOn": "Saved to wishlist.",
      "toast.wishlistOff": "Removed from wishlist.",
      "toast.checkout": "Checkout is a frontend demonstration only.",
      "social.instagram": "Instagram",
      "social.pinterest": "Pinterest",
      "social.facebook": "Facebook",
      documentTitle: "MORVARID | Beauty in Every Detail"
    },
    fa: {
      skip: "رفتن به محتوا",
      "nav.home": "خانه",
      "nav.categories": "دسته‌بندی‌ها",
      "nav.products": "محصولات",
      "nav.about": "درباره ما",
      "nav.contact": "تماس",
      "aria.home": "خانه مروارید",
      "aria.theme": "تغییر حالت روشن یا تیره",
      "aria.cart": "باز کردن سبد خرید",
      "aria.menu": "باز کردن منو",
      "aria.closeCart": "بستن سبد",
      "aria.closeModal": "بستن مشاهده سریع",
      "cart.title": "انتخاب شما",
      "cart.total": "جمع",
      "cart.checkout": "بازبینی انتخاب",
      "cart.demo": "این سبد یک نمایش فرانت‌اند است و پرداخت واقعی انجام نمی‌شود.",
      "cart.empty": "هنوز قطعه‌ای انتخاب نشده است.",
      "cart.remove": "حذف",
      "hero.eyebrow": "مد و زیبایی لوکس",
      "hero.title": "زیبایی در هر جزئیات.",
      "hero.lead": "بوتیکی مدرن برای زنانی که لوکسِ آرام را جمع می‌کنند: مد ظریف، کیف‌های مجسمه‌گونه، جواهر و زیبایی با نیت.",
      "hero.explore": "مشاهده مجموعه",
      "hero.discover": "کشف بیشتر",
      "categories.eyebrow": "بوتیک",
      "categories.title": "خرید بر اساس دسته",
      "categories.intro": "پنج جهان گزیده، یک زیبایی‌شناسی واحد. یک دسته را انتخاب کنید و وارد مجموعه شوید.",
      "categories.shop": "مشاهده قطعات",
      "cat.fashion": "مد",
      "cat.bags": "کیف",
      "cat.shoes": "کفش",
      "cat.jewelry": "جواهر",
      "cat.beauty": "زیبایی",
      "products.eyebrow": "منتخب",
      "products.title": "مجموعه",
      "products.intro": "ویرایشی سنجیده از قطعات شاخص. بر اساس دسته فیلتر کنید یا مشاهده سریع را باز کنید.",
      "products.empty": "در این دسته قطعه‌ای یافت نشد.",
      "products.add": "افزودن به سبد",
      "products.quick": "مشاهده سریع",
      "products.wishlistAdd": "افزودن به علاقه‌مندی",
      "products.wishlistRemove": "حذف از علاقه‌مندی",
      "filter.all": "همه",
      "about.eyebrow": "داستان ما",
      "about.title": "درباره مروارید",
      "about.p1": "مروارید همچون مرواریدی مدرن تصور شد: درخشان، خویشتن‌دار و ساخته‌شده از جزئیات آرام. بوتیکی آنلاین برای زنانی که لوکس بدون هیاهو می‌خواهند.",
      "about.p2": "هر لباس، کیف، جواهر و آیین زیبایی به‌خاطر صداقت ماده، فرم و حس آن در زندگی روزمره انتخاب می‌شود. تجربه آهسته، سنجیده و شخصی است.",
      "about.p3": "از نخستین نگاه به پارچه تا آخرین قفل گردنبند، فلسفه ما ساده است: زیبایی در جزئیاتی است که به آن‌ها بازمی‌گردید.",
      "about.stat1": "آتلیه‌ها",
      "about.stat2": "قطعات شاخص",
      "about.stat3": "مشتریان خصوصی",
      "benefits.eyebrow": "تجربه",
      "benefits.title": "چرا مروارید",
      "benefits.qualityTitle": "کیفیت ممتاز",
      "benefits.qualityText": "ابریشم، چرم و پرداخت‌های طلایی برای دوام انتخاب می‌شوند، نه برای ترندهایی که یک فصل بعد محو می‌شوند.",
      "benefits.designTitle": "طراحی‌های ظریف",
      "benefits.designText": "معماری نرم، خطوط زنانه و پالت مروارید، مریم‌گلی و شن، کمدی هماهنگ می‌سازند.",
      "benefits.secureTitle": "خرید امن",
      "benefits.secureText": "این نمایش، تجربه‌ای آرام و محافظت‌شده از خرید را نشان می‌دهد. پرداخت واقعی در اینجا انجام نمی‌شود.",
      "benefits.supportTitle": "پشتیبانی مشتری",
      "benefits.supportText": "نکته‌های استایل، راهنمایی اندازه و پاسخ‌های دقیق — پشتیبانی شبیه بازدید خصوصی از آتلیه.",
      "testimonials.eyebrow": "صدای مشتریان",
      "testimonials.title": "نظرات",
      "testimonials.note": "نظرات نمونه / نمایشی برای این تمرین فرانت‌اند ساخته شده‌اند و مشتریان واقعی نیستند.",
      "testimonials.t1": "«پیراهن ابریشم طوری رسید که انگار برای افتتاح یک گالری دوخته شده بود. آرام، دقیق و کاملاً فراموش‌نشدنی.»",
      "testimonials.t2": "«برای جواهر بازمی‌گردم. گردنبند مروارید همان قطعه‌ای است که وقتی آرامش می‌خواهم می‌پوشم.»",
      "testimonials.t3": "«از آیین زیبایی تا کیف چرمی، همه چیز سنجیده است. مروارید لوکس مدرن را می‌فهمد.»",
      "testimonials.n1": "النا ووس",
      "testimonials.n2": "سارا نوری",
      "testimonials.n3": "آملیا هارت",
      "testimonials.r1": "نظر نمونه · مد",
      "testimonials.r2": "نظر نمونه · جواهر",
      "testimonials.r3": "نظر نمونه · زیبایی",
      "newsletter.eyebrow": "فهرست خصوصی",
      "newsletter.title": "عضویت در یادداشت‌های آتلیه",
      "newsletter.intro": "ویرایش‌های فصلی، دسترسی زودهنگام و نامه‌های استایل. این عضویت فقط یک نمایش فرانت‌اند است.",
      "newsletter.label": "نشانی ایمیل",
      "newsletter.placeholder": "نشانی ایمیل شما",
      "newsletter.submit": "عضویت",
      "newsletter.demo": "ایمیلی ذخیره یا ارسال نمی‌شود. اعتبارسنجی فقط در مرورگر انجام می‌شود.",
      "newsletter.required": "لطفاً نشانی ایمیل را وارد کنید.",
      "newsletter.invalid": "لطفاً یک ایمیل معتبر وارد کنید.",
      "newsletter.success": "سپاس. این یک تأیید نمایشی است و ایمیلی ارسال نشد.",
      "contact.eyebrow": "میز آتلیه",
      "contact.title": "تماس",
      "contact.intro": "برای پرسش استایل یا درخواست مطبوعاتی بنویسید. این فرم نمایشی است و پیام واقعی ارسال نمی‌کند.",
      "contact.addressLabel": "نشانی",
      "contact.address": "خیابان آتلیه مروارید ۱۲، منطقه ۳، شهر نمونه",
      "contact.phoneLabel": "تلفن",
      "contact.phone": "+1 (000) 555-0148",
      "contact.emailLabel": "ایمیل",
      "contact.hoursLabel": "ساعت کاری",
      "contact.hours": "شنبه تا پنجشنبه، ۱۰:۰۰ تا ۱۹:۰۰",
      "contact.name": "نام کامل",
      "contact.email": "نشانی ایمیل",
      "contact.subject": "موضوع",
      "contact.message": "پیام",
      "contact.submit": "ارسال پیام",
      "contact.demo": "پیام‌ها در مرورگر می‌مانند. چیزی ایمیل یا روی سرور ذخیره نمی‌شود.",
      "contact.nameError": "لطفاً نام کامل را وارد کنید.",
      "contact.emailError": "لطفاً ایمیل را وارد کنید.",
      "contact.emailInvalid": "لطفاً یک ایمیل معتبر وارد کنید.",
      "contact.subjectError": "لطفاً موضوع را وارد کنید.",
      "contact.messageError": "لطفاً پیام کوتاهی بنویسید.",
      "contact.success": "پیام معتبر است. این یک نمایش است و ایمیلی ارسال نشد.",
      "footer.blurb": "بوتیک لوکس مدرن برای مد، کیف، کفش، جواهر و زیبایی. زیبایی در هر جزئیات.",
      "footer.nav": "پیمایش",
      "footer.categories": "دسته‌ها",
      "footer.connect": "ارتباط",
      "footer.rights": "همه حقوق محفوظ است. برند تخیلی برای تمرین فرانت‌اند.",
      "toast.cart": "به انتخاب شما افزوده شد.",
      "toast.wishlistOn": "به علاقه‌مندی‌ها اضافه شد.",
      "toast.wishlistOff": "از علاقه‌مندی‌ها حذف شد.",
      "toast.checkout": "پرداخت فقط یک نمایش فرانت‌اند است.",
      "social.instagram": "اینستاگرام",
      "social.pinterest": "پینترست",
      "social.facebook": "فیسبوک",
      documentTitle: "مروارید | زیبایی در هر جزئیات"
    }
  };

  var state = {
    lang: "en",
    theme: "light",
    filter: "all",
    cart: [],
    wishlist: [],
    activeProductId: null
  };

  var els = {};

  function qs(selector) {
    return document.querySelector(selector);
  }

  function t(key) {
    var table = i18n[state.lang] || i18n.en;
    return table[key] || i18n.en[key] || key;
  }

  function toPersianDigits(value) {
    return String(value).replace(/[0-9]/g, function (digit) {
      return "۰۱۲۳۴۵۶۷۸۹"[digit];
    });
  }

  function formatPrice(amount) {
    if (state.lang === "fa") {
      return toPersianDigits(amount) + " دلار";
    }
    return "$" + amount;
  }

  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  function saveState() {
    localStorage.setItem(STORAGE_LANG, state.lang);
    localStorage.setItem(STORAGE_THEME, state.theme);
    localStorage.setItem(STORAGE_CART, JSON.stringify(state.cart));
    localStorage.setItem(STORAGE_WISHLIST, JSON.stringify(state.wishlist));
  }

  function loadState() {
    var savedLang = localStorage.getItem(STORAGE_LANG);
    var savedTheme = localStorage.getItem(STORAGE_THEME);
    var savedCart = localStorage.getItem(STORAGE_CART);
    var savedWishlist = localStorage.getItem(STORAGE_WISHLIST);

    if (savedLang === "fa" || savedLang === "en") {
      state.lang = savedLang;
    }

    if (savedTheme === "dark" || savedTheme === "light") {
      state.theme = savedTheme;
    } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      state.theme = "dark";
    }

    try {
      state.cart = savedCart ? JSON.parse(savedCart) : [];
      if (!Array.isArray(state.cart)) state.cart = [];
    } catch (error) {
      state.cart = [];
    }

    try {
      state.wishlist = savedWishlist ? JSON.parse(savedWishlist) : [];
      if (!Array.isArray(state.wishlist)) state.wishlist = [];
    } catch (error) {
      state.wishlist = [];
    }
  }

  function applyLanguage() {
    var html = document.documentElement;
    html.lang = state.lang;
    html.dir = state.lang === "fa" ? "rtl" : "ltr";
    document.title = t("documentTitle");

    document.querySelectorAll("[data-i18n]").forEach(function (node) {
      node.textContent = t(node.getAttribute("data-i18n"));
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (node) {
      node.setAttribute("placeholder", t(node.getAttribute("data-i18n-placeholder")));
    });

    document.querySelectorAll("[data-i18n-aria]").forEach(function (node) {
      node.setAttribute("aria-label", t(node.getAttribute("data-i18n-aria")));
    });

    els.langEnBtn.classList.toggle("is-active", state.lang === "en");
    els.langFaBtn.classList.toggle("is-active", state.lang === "fa");
    els.langEnBtn.setAttribute("aria-pressed", String(state.lang === "en"));
    els.langFaBtn.setAttribute("aria-pressed", String(state.lang === "fa"));

    renderProducts();
    renderCart();
    refreshModalLanguage();
  }

  function applyTheme() {
    document.documentElement.setAttribute("data-theme", state.theme);
    els.themeToggle.setAttribute("aria-pressed", String(state.theme === "dark"));
  }

  function setLanguage(lang) {
    state.lang = lang;
    saveState();
    applyLanguage();
  }

  function toggleTheme() {
    state.theme = state.theme === "dark" ? "light" : "dark";
    saveState();
    applyTheme();
  }

  function cartCount() {
    return state.cart.reduce(function (sum, item) {
      return sum + item.qty;
    }, 0);
  }

  function cartTotal() {
    return state.cart.reduce(function (sum, item) {
      var product = findProduct(item.id);
      return sum + (product ? product.price * item.qty : 0);
    }, 0);
  }

  function findProduct(id) {
    return products.find(function (product) {
      return product.id === id;
    });
  }

  function addToCart(id) {
    var existing = state.cart.find(function (item) {
      return item.id === id;
    });
    if (existing) {
      existing.qty += 1;
    } else {
      state.cart.push({ id: id, qty: 1 });
    }
    saveState();
    renderCart();
    showToast(t("toast.cart"));
  }

  function changeQty(id, delta) {
    var item = state.cart.find(function (entry) {
      return entry.id === id;
    });
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) {
      state.cart = state.cart.filter(function (entry) {
        return entry.id !== id;
      });
    }
    saveState();
    renderCart();
  }

  function removeFromCart(id) {
    state.cart = state.cart.filter(function (item) {
      return item.id !== id;
    });
    saveState();
    renderCart();
  }

  function toggleWishlist(id) {
    var index = state.wishlist.indexOf(id);
    if (index === -1) {
      state.wishlist.push(id);
      showToast(t("toast.wishlistOn"));
    } else {
      state.wishlist.splice(index, 1);
      showToast(t("toast.wishlistOff"));
    }
    saveState();
    renderProducts();
  }

  function setFilter(filter) {
    state.filter = filter;
    document.querySelectorAll(".filter-btn").forEach(function (button) {
      button.classList.toggle("is-active", button.getAttribute("data-filter") === filter);
    });
    renderProducts();
    document.getElementById("products").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function renderProducts() {
    var list = products.filter(function (product) {
      return state.filter === "all" || product.category === state.filter;
    });

    els.productGrid.innerHTML = "";
    els.productEmpty.hidden = list.length > 0;

    list.forEach(function (product) {
      var wished = state.wishlist.indexOf(product.id) !== -1;
      var card = document.createElement("article");
      card.className = "product-card";
      card.innerHTML =
        '<div class="product-media">' +
          '<img src="' + product.image + '" alt="' + escapeHtml(product.name[state.lang]) + '" width="900" height="1200">' +
          '<button type="button" class="wishlist-btn' + (wished ? " is-active" : "") + '" data-wish="' + product.id + '" aria-label="' + (wished ? t("products.wishlistRemove") : t("products.wishlistAdd")) + '" aria-pressed="' + wished + '">' +
            '<svg viewBox="0 0 24 24" fill="' + (wished ? "currentColor" : "none") + '" stroke="currentColor" stroke-width="1.6"><path d="M12 20s-7-4.3-7-10a4.5 4.5 0 0 1 8-2.5A4.5 4.5 0 0 1 19 10c0 5.7-7 10-7 10z"/></svg>' +
          "</button>" +
        "</div>" +
        '<div class="product-body">' +
          '<span class="product-category">' + t("cat." + product.category) + "</span>" +
          "<h3>" + escapeHtml(product.name[state.lang]) + "</h3>" +
          '<p class="product-price">' + formatPrice(product.price) + "</p>" +
          '<div class="product-actions">' +
            '<button type="button" class="btn btn-primary" data-add="' + product.id + '">' + t("products.add") + "</button>" +
            '<button type="button" class="btn btn-outline" data-view="' + product.id + '">' + t("products.quick") + "</button>" +
          "</div>" +
        "</div>";
      els.productGrid.appendChild(card);
    });
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function renderCart() {
    var count = cartCount();
    els.cartCount.textContent = state.lang === "fa" ? toPersianDigits(count) : String(count);
    els.cartTotal.textContent = formatPrice(cartTotal());

    if (state.cart.length === 0) {
      els.cartItems.innerHTML = '<p class="empty-state">' + t("cart.empty") + "</p>";
      return;
    }

    els.cartItems.innerHTML = state.cart.map(function (item) {
      var product = findProduct(item.id);
      if (!product) return "";
      var qtyLabel = state.lang === "fa" ? toPersianDigits(item.qty) : String(item.qty);
      return (
        '<article class="cart-item">' +
          '<img src="' + product.image + '" alt="' + escapeHtml(product.name[state.lang]) + '">' +
          "<div>" +
            "<h3>" + escapeHtml(product.name[state.lang]) + "</h3>" +
            "<p>" + formatPrice(product.price) + "</p>" +
            '<div class="qty-control">' +
              '<button type="button" data-qty="' + product.id + '" data-delta="-1" aria-label="-">−</button>' +
              "<span>" + qtyLabel + "</span>" +
              '<button type="button" data-qty="' + product.id + '" data-delta="1" aria-label="+">+</button>' +
            "</div>" +
          "</div>" +
          '<button type="button" class="remove-item" data-remove="' + product.id + '">' + t("cart.remove") + "</button>" +
        "</article>"
      );
    }).join("");
  }

  function openCart() {
    els.cartDrawer.classList.add("is-open");
    els.cartDrawer.setAttribute("aria-hidden", "false");
    document.body.classList.add("drawer-open");
    els.pageOverlay.hidden = false;
  }

  function closeCart() {
    els.cartDrawer.classList.remove("is-open");
    els.cartDrawer.setAttribute("aria-hidden", "true");
    document.body.classList.remove("drawer-open");
    if (!document.body.classList.contains("menu-open") && !document.body.classList.contains("modal-open")) {
      els.pageOverlay.hidden = true;
    }
  }

  function openMenu() {
    els.mainNav.classList.add("is-open");
    els.header.classList.add("menu-open");
    els.menuToggle.setAttribute("aria-expanded", "true");
    document.body.classList.add("menu-open");
    document.documentElement.classList.add("menu-open");
  }

  function closeMenu() {
    els.mainNav.classList.remove("is-open");
    els.header.classList.remove("menu-open");
    els.menuToggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
    document.documentElement.classList.remove("menu-open");
    if (!document.body.classList.contains("drawer-open") && !document.body.classList.contains("modal-open")) {
      els.pageOverlay.hidden = true;
    }
  }

  function openQuickView(id) {
    var product = findProduct(id);
    if (!product) return;
    state.activeProductId = id;
    els.modalImage.src = product.image;
    els.modalImage.alt = product.name[state.lang];
    els.modalTitle.textContent = product.name[state.lang];
    els.modalPrice.textContent = formatPrice(product.price);
    els.modalDescription.textContent = product.description[state.lang];
    els.modalCategory.textContent = t("cat." + product.category);
    els.modal.hidden = false;
    document.body.classList.add("modal-open");
    els.pageOverlay.hidden = false;
    els.modalClose.focus();
  }

  function refreshModalLanguage() {
    if (els.modal.hidden || !state.activeProductId) return;
    openQuickView(state.activeProductId);
  }

  function closeQuickView() {
    els.modal.hidden = true;
    document.body.classList.remove("modal-open");
    state.activeProductId = null;
    if (!document.body.classList.contains("drawer-open") && !document.body.classList.contains("menu-open")) {
      els.pageOverlay.hidden = true;
    }
  }

  function showToast(message) {
    var toast = document.createElement("div");
    toast.className = "toast";
    toast.textContent = message;
    els.toastRegion.appendChild(toast);
    setTimeout(function () {
      toast.remove();
    }, 2800);
  }

  function handleNewsletter(event) {
    event.preventDefault();
    var email = els.newsletterEmail.value.trim();
    els.newsletterError.textContent = "";
    els.newsletterSuccess.hidden = true;

    if (!email) {
      els.newsletterError.textContent = t("newsletter.required");
      els.newsletterEmail.focus();
      return;
    }
    if (!isValidEmail(email)) {
      els.newsletterError.textContent = t("newsletter.invalid");
      els.newsletterEmail.focus();
      return;
    }

    els.newsletterSuccess.textContent = t("newsletter.success");
    els.newsletterSuccess.hidden = false;
    els.newsletterForm.reset();
  }

  function handleContact(event) {
    event.preventDefault();
    var name = els.contactName.value.trim();
    var email = els.contactEmail.value.trim();
    var subject = els.contactSubject.value.trim();
    var message = els.contactMessage.value.trim();
    var valid = true;

    els.contactNameError.textContent = "";
    els.contactEmailError.textContent = "";
    els.contactSubjectError.textContent = "";
    els.contactMessageError.textContent = "";
    els.contactSuccess.hidden = true;

    if (!name) {
      els.contactNameError.textContent = t("contact.nameError");
      valid = false;
    }
    if (!email) {
      els.contactEmailError.textContent = t("contact.emailError");
      valid = false;
    } else if (!isValidEmail(email)) {
      els.contactEmailError.textContent = t("contact.emailInvalid");
      valid = false;
    }
    if (!subject) {
      els.contactSubjectError.textContent = t("contact.subjectError");
      valid = false;
    }
    if (!message) {
      els.contactMessageError.textContent = t("contact.messageError");
      valid = false;
    }

    if (!valid) return;

    els.contactSuccess.textContent = t("contact.success");
    els.contactSuccess.hidden = false;
    els.contactForm.reset();
  }

  function cacheElements() {
    els.header = qs("#siteHeader");
    els.mainNav = qs("#mainNav");
    els.menuToggle = qs("#menuToggle");
    els.themeToggle = qs("#themeToggle");
    els.langEnBtn = qs("#langEnBtn");
    els.langFaBtn = qs("#langFaBtn");
    els.cartToggle = qs("#cartToggle");
    els.cartClose = qs("#cartClose");
    els.cartDrawer = qs("#cartDrawer");
    els.cartItems = qs("#cartItems");
    els.cartCount = qs("#cartCount");
    els.cartTotal = qs("#cartTotal");
    els.checkoutBtn = qs("#checkoutBtn");
    els.pageOverlay = qs("#pageOverlay");
    els.productGrid = qs("#productGrid");
    els.productEmpty = qs("#productEmpty");
    els.modal = qs("#quickViewModal");
    els.modalClose = qs("#modalClose");
    els.modalImage = qs("#modalImage");
    els.modalTitle = qs("#modalTitle");
    els.modalPrice = qs("#modalPrice");
    els.modalDescription = qs("#modalDescription");
    els.modalCategory = qs("#modalCategory");
    els.modalAddToCart = qs("#modalAddToCart");
    els.toastRegion = qs("#toastRegion");
    els.newsletterForm = qs("#newsletterForm");
    els.newsletterEmail = qs("#newsletterEmail");
    els.newsletterError = qs("#newsletterError");
    els.newsletterSuccess = qs("#newsletterSuccess");
    els.contactForm = qs("#contactForm");
    els.contactName = qs("#contactName");
    els.contactEmail = qs("#contactEmail");
    els.contactSubject = qs("#contactSubject");
    els.contactMessage = qs("#contactMessage");
    els.contactNameError = qs("#contactNameError");
    els.contactEmailError = qs("#contactEmailError");
    els.contactSubjectError = qs("#contactSubjectError");
    els.contactMessageError = qs("#contactMessageError");
    els.contactSuccess = qs("#contactSuccess");
  }

  function bindEvents() {
    els.langEnBtn.addEventListener("click", function () {
      setLanguage("en");
    });
    els.langFaBtn.addEventListener("click", function () {
      setLanguage("fa");
    });
    els.themeToggle.addEventListener("click", toggleTheme);
    els.menuToggle.addEventListener("click", function () {
      if (els.mainNav.classList.contains("is-open")) closeMenu();
      else openMenu();
    });
    els.cartToggle.addEventListener("click", function () {
      if (els.cartDrawer.classList.contains("is-open")) closeCart();
      else {
        closeMenu();
        openCart();
      }
    });
    els.cartClose.addEventListener("click", closeCart);
    els.pageOverlay.addEventListener("click", function () {
      closeMenu();
      closeCart();
      closeQuickView();
    });
    els.checkoutBtn.addEventListener("click", function () {
      showToast(t("toast.checkout"));
    });

    els.mainNav.addEventListener("click", function (event) {
      var link = event.target.closest("a");
      if (link) {
        var href = link.getAttribute("href") || "";
        closeMenu();
        if (href.charAt(0) === "#") {
          event.preventDefault();
          var target = document.querySelector(href);
          if (target) {
            window.setTimeout(function () {
              target.scrollIntoView({ behavior: "smooth", block: "start" });
              if (history.replaceState) {
                history.replaceState(null, "", href);
              } else {
                window.location.hash = href;
              }
            }, 10);
          }
        }
        return;
      }
      if (event.target === els.mainNav) {
        closeMenu();
      }
    }, true);

    document.querySelectorAll('.logo[href^="#"]').forEach(function (logoLink) {
      logoLink.addEventListener("click", function () {
        closeMenu();
      });
    });

    window.addEventListener("hashchange", function () {
      closeMenu();
    });

    document.addEventListener("click", function (event) {
      var filterEl = event.target.closest("[data-filter]");
      if (filterEl) {
        if (filterEl.tagName === "A") event.preventDefault();
        closeMenu();
        setFilter(filterEl.getAttribute("data-filter"));
      }

      var addBtn = event.target.closest("[data-add]");
      if (addBtn) addToCart(addBtn.getAttribute("data-add"));

      var viewBtn = event.target.closest("[data-view]");
      if (viewBtn) openQuickView(viewBtn.getAttribute("data-view"));

      var wishBtn = event.target.closest("[data-wish]");
      if (wishBtn) toggleWishlist(wishBtn.getAttribute("data-wish"));

      var qtyBtn = event.target.closest("[data-qty]");
      if (qtyBtn) changeQty(qtyBtn.getAttribute("data-qty"), Number(qtyBtn.getAttribute("data-delta")));

      var removeBtn = event.target.closest("[data-remove]");
      if (removeBtn) removeFromCart(removeBtn.getAttribute("data-remove"));
    });

    els.modalClose.addEventListener("click", closeQuickView);
    els.modalAddToCart.addEventListener("click", function () {
      if (state.activeProductId) addToCart(state.activeProductId);
    });
    els.modal.addEventListener("click", function (event) {
      if (event.target === els.modal) closeQuickView();
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closeMenu();
        closeCart();
        closeQuickView();
      }
    });

    window.addEventListener("scroll", function () {
      els.header.classList.toggle("is-scrolled", window.scrollY > 12);
    });

    els.newsletterForm.addEventListener("submit", handleNewsletter);
    els.contactForm.addEventListener("submit", handleContact);
  }

  function init() {
    cacheElements();
    loadState();
    document.getElementById("year").textContent = String(new Date().getFullYear());
    applyTheme();
    applyLanguage();
    bindEvents();
    els.header.classList.toggle("is-scrolled", window.scrollY > 12);
  }

  document.addEventListener("DOMContentLoaded", init);
})();
