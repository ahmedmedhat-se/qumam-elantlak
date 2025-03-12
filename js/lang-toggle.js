document.addEventListener("DOMContentLoaded", function () {
    const langToggle = document.getElementById("lang-toggle");
    const langItem = document.getElementById("lang-item");

    const translations = {
        en: {
            // Header Translation
            qumamElantlakBrand: "ALQuma For Technical Services",
            alqumaFullName: "ALQuma For Technical Services",
            home: "Home",

            // Brief Translation
            brief: "Brief",
            briefTitle: "Air Conditioning Installation Services",
            briefDescription: "Are you looking for cooling solutions for your home or office? We are here to help! We provide high-quality air conditioning installation services to meet all your needs.",
            breifServices: "Our Services Include:",
            breifServiceOne: "Installation of split, window, and central air conditioning systems.",
            breifServiceTwo: "Expert consultations to recommend the best AC units for your space.",
            breifServiceThree: "Regular maintenance to ensure optimal performance",
            breifServiceFour: "Warranty on all our services.",
            slogan: "Make your life more comfortable with an efficient air conditioning system. Contact us today for a free consultation!",

            // About Translation
            about: "About",
            aboutDescription: "Reach out to us for inquiries, consultations, or emergency support. Our team is always available to assist you.",
            button: "🌐 عربي",
            welcome: "Welcome to ALQuma For Technology Services!",
            description: "We are the ALQuma Company for technical services for repairing and maintaining air conditioners. Our company provides air conditioning system repair and maintenance services with the highest levels of efficiency and professionalism.",
            services: "Services",
            servicesDescription: "We are a dedicated technical services company specializing in AC maintenance and repair. Our expert team ensures efficient cooling, reliable performance, and top-quality service for all your air conditioning needs.",
            products: "Products",
            readMore: "Read More",
            deviceCheck: "Comprehensive device check.",
            emergencyRepair: "Emergency repair.",
            replacement: "Replacement of damaged parts (warranty on spare parts).",

            // Comments Area Translation
            commentsArea: "Comments Area",
            comments: "Comments",
            feedbacks: "ALQuma For Technology Services Feedbacks",

            // Footer Translation
            findUs: "Find Us",
            usefulLinks: "Useful Links",
            contact: "Contact",
            copyright: "Copyright: qumam-ac.com",
            facebookPage: "Facebook Page",
            instagram: "Instagram",
            x: "X",
            information: "Information",
            UAE: "UAE",
            whatsapp: "+971502013618",
            whatsappTitle: "Whatsapp",
            phone: "+971503701830",
            phoneTitle: "Phone",
        },
        ar: {
            // Header Translation
            qumamElantlakBrand: "شركة القمه للخدمات الفنيه",
            alqumaFullName: "شركة القمه للخدمات الفنية",
            home: "الرئيسية",
            products: "منتجاتنا",

            // Brief Translation
            brief: "لمحه",
            briefTitle: "خدمات تركيب مكيفات الهواء",
            briefDescription: "هل تبحث عن حلول تبريد لمنزلك أو مكتبك؟ نحن هنا لمساعدتك! نحن نقدم خدمات تركيب مكيفات الهواء عالية الجودة لتلبية جميع احتياجاتك",
            breifServices: "تشمل خدماتنا",
            breifServiceOne: "تركيب أنظمة التكييف المنفصلة والنوافذ والمركزية",
            breifServiceTwo: "استشارات الخبراء لتوصية أفضل وحدات التكييف لمساحتك",
            breifServiceThree: "الصيانة الدورية لضمان الأداء الأمثل",
            breifServiceFour: "ضمان على جميع خدماتنا",
            slogan: "اجعل حياتك أكثر راحة مع نظام تكييف الهواء الفعال. اتصل بنا اليوم للحصول على استشارة مجانية",

            // About Translation
            about: "معلومات عنا",
            aboutDescription: "تواصل معنا للاستفسارات أو الاستشارات أو الدعم في حالات الطوارئ. فريقنا متاح دائمًا لمساعدتك",
            button: "🌐 English",
            welcome: "مرحباً بكم في خدمات القمه الفنية!",
            description: "نحن شركة القمه للخدمات الفنية المتخصصة في إصلاح وصيانة مكيفات الهواء تقدم شركتنا خدمات تصليح وصيانة انظمة التكييف باعلي مستويات الكفائة والاحترافية",
            services: "خدماتنا",
            servicesDescription: "نحن شركة متخصصة في الخدمات الفنية لصيانة وإصلاح مكيفات الهواء. يضمن فريقنا الخبير تبريدًا فعالاً وأداءً موثوقًا وخدمة عالية الجودة لجميع احتياجات تكييف الهواء الخاصة بك.",
            readMore: "اقرأ المزيد",
            deviceCheck: "فحص شامل للجهاز",
            emergencyRepair: "اصلاح الاعطال الطارئة",
            replacement: "استبدال الاجزاء التالفة (ضمان علي قطع الغيار)",

            // Comments Area Translation
            commentsArea: "منطقة التعليقات",
            comments: "التعليقات",
            feedbacks: "تعليقات القمه للخدمات الفنيه",

            // Footer Translation
            findUs: "ابحث عنا",
            usefulLinks: "روابط مفيدة",
            contact: "اتصل بنا",
            copyright: "qumam-ac.com حقوق النشر",
            facebookPage: "صفحة الفيسبوك",
            instagram: "إنستغرام",
            x: "أكس",
            information: "معلومات",
            UAE: "الإمارات العربية المتحدة",
            whatsapp: "+971502013618",
            whatsappTitle: "الواتس اب",
            phone: "+971503701830",
            phoneTitle: "الهاتف",
        }
    };

    let currentLang = localStorage.getItem("language") || "en";
    updateLanguage(currentLang);

    langToggle.addEventListener("click", function () {
        currentLang = currentLang === "en" ? "ar" : "en";
        localStorage.setItem("language", currentLang);
        updateLanguage(currentLang);
    });

    function updateLanguage(lang) {
        document.querySelectorAll("[data-key]").forEach(el => {
            const key = el.getAttribute("data-key");
            console.log(`Updating element with data-key="${key}" to:`, translations[lang][key]); // Debugging
            el.textContent = translations[lang][key];
        });

        langToggle.textContent = translations[lang]["button"];
        document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

        if (lang === "ar") {
            langItem.classList.remove("me-2");
            langItem.classList.add("ms-2");
        } else {
            langItem.classList.remove("ms-2");
            langItem.classList.add("me-2");
        }
    }
});