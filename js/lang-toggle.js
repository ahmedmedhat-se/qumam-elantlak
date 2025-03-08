document.addEventListener("DOMContentLoaded", function () {
    const langToggle = document.getElementById("lang-toggle");
    const langItem = document.getElementById("lang-item");

    const translations = {
        en: {
            qumamElantlakBrand: "Qumam ElAntlak",
            qumamElantlakFullName: "Qumam ElAntlak Technical Services",
            home: "Home",
            brief: "Brief",
            about: "About",
            aboutDescription: "Reach out to us for inquiries, consultations, or emergency support. Our team is always available to assist you.",
            button: "🌐 عربي",
            welcome: "Welcome to Qumam ElAntlak Technical Services!",
            description: "We are the Qumam ElAntlak Company for technical services for repairing and maintaining air conditioners.",
            services: "Services",
            servicesDescription: "We are a dedicated technical services company specializing in AC maintenance and repair. Our expert team ensures efficient cooling, reliable performance, and top-quality service for all your air conditioning needs.",
            products: "Products",
            readMore: "Read More",
            findUs: "Find Us",
            commentsArea: "Comments Area",
            comments: "Comments",
            feedbacks: "Qumam ElAntlak Feedbacks",
            usefulLinks: "Useful Links",
            contact: "Contact",
            copyright: "Copyright: qumam-ac.com",
            facebookPage: "Facebook Page",
            instagram: "Instagram",
            x: "X",
            information: "Information",
            abuDhabi: "Abu Dhabi, UAE",
            whatsapp: "+971502013618",
            whatsappTitle: "Whatsapp",
            phone: "+971503701830",
            phoneTitle: "Phone",
        },
        ar: {
            qumamElantlakBrand: " قمم الانطلاق",
            qumamElantlakFullName: "شركة قمم الانطلاق للخدمات الفنية",
            home: "الرئيسية",
            products: "منتجاتنا",
            brief: "لمحه",
            about: "معلومات عنا",
            aboutDescription: "تواصل معنا للاستفسارات أو الاستشارات أو الدعم في حالات الطوارئ. فريقنا متاح دائمًا لمساعدتك",
            button: "🌐 English",
            welcome: "مرحباً بكم في خدمات قمم الانطلاق الفنية!",
            description: "نحن شركة قمم الانطلاق للخدمات الفنية المتخصصة في إصلاح وصيانة مكيفات الهواء.",
            services: "خدماتنا",
            servicesDescription: "نحن شركة متخصصة في الخدمات الفنية لصيانة وإصلاح مكيفات الهواء. يضمن فريقنا الخبير تبريدًا فعالاً وأداءً موثوقًا وخدمة عالية الجودة لجميع احتياجات تكييف الهواء الخاصة بك.",
            readMore: "اقرأ المزيد",
            findUs: "ابحث عنا",
            commentsArea: "منطقة التعليقات",
            comments: "التعليقات",
            feedbacks: "تعليقات قمم الانطلاق",
            usefulLinks: "روابط مفيدة",
            contact: "اتصل بنا",
            copyright: "qumam-ac.com حقوق النشر",
            facebookPage: "صفحة الفيسبوك",
            instagram: "إنستغرام",
            x: "أكس",
            information: "معلومات",
            abuDhabi: "أبو ظبي، الإمارات العربية المتحدة",
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