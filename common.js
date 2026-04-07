// ============================================
// نظام الحماية الأمنية
// ============================================
window.sanitizeText = function(str) {
    if (!str) return '';
    return str.replace(/[&<>]/g, function(m) {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        return m;
    }).replace(/[\\'"]/g, function(m) {
        if (m === "'") return '&#39;';
        if (m === '"') return '&quot;';
        return m;
    });
};

// منع الـ iframing
if (window.top !== window.self) {
    window.top.location = window.self.location;
}

// ============================================
// الترجمة (i18n)
// ============================================
const translations = {
    ar: {
        "hours": "السبت - الخميس: 09:00 - 17:00",
        "logo-title": "دليل التأمين",
        "nav-home": "الرئيسية",
        "nav-services": "خدماتنا",
        "nav-stats": "الإحصائيات",
        "nav-booking": "حجز موعد",
        "nav-about": "من نحن",
        "nav-companies": "الشركات",
        "nav-team": "الخبراء",
        "nav-contact": "اتصل بنا",
        "booking-name": "الاسم الكامل",
        "booking-phone": "رقم الهاتف",
        "booking-email": "البريد الإلكتروني",
        "wilaya-default": "اختر الولاية",
        "insurance-type-default": "نوع التأمين",
        "time-default": "اختر الوقت المناسب",
        "book-btn": "📅 احجز موعدك الآن",
        "read-more": "اقرأ المزيد",
        "stat1": "وكالة تأمين",
        "stat2": "ولاية مغطاة",
        "stat3": "خبير معتمد",
        "stat4": "عميل شهرياً",
        "footer-title": "دليل التأمين الجزائر",
        "footer-desc": "منصتكم الشاملة للبحث عن وكالات التأمين في الجزائر",
        "footer-links-title": "روابط سريعة",
        "footer-home": "الرئيسية",
        "footer-services": "خدماتنا",
        "footer-stats": "الإحصائيات",
        "footer-booking": "حجز موعد",
        "footer-about": "من نحن",
        "footer-companies": "الشركات",
        "footer-team": "الخبراء",
        "footer-contact": "اتصل بنا",
        "footer-insurance-title": "أنواع التأمين",
        "footer-car": "تأمين السيارات",
        "footer-health": "تأمين الصحة",
        "footer-home-ins": "تأمين السكن",
        "footer-travel": "تأمين السفر",
        "footer-social-title": "تابعنا",
        "copyright": "© 2025 دليل وكالات التأمين في الجزائر - جميع الحقوق محفوظة",
        "chat-title": "المساعد الذكي للتأمين",
        "chat-welcome": "مرحباً! أنا المساعد الذكي للتأمين. كيف يمكنني مساعدتك اليوم؟",
        "chat-placeholder": "اسأل عن التأمين..."
    },
    fr: {
        "hours": "Samedi - Jeudi: 09:00 - 17:00",
        "logo-title": "Guide Assurance",
        "nav-home": "Accueil",
        "nav-services": "Services",
        "nav-stats": "Statistiques",
        "nav-booking": "Rendez-vous",
        "nav-about": "À Propos",
        "nav-companies": "Sociétés",
        "nav-team": "Experts",
        "nav-contact": "Contact",
        "booking-name": "Nom complet",
        "booking-phone": "Téléphone",
        "booking-email": "E-mail",
        "wilaya-default": "Choisir la wilaya",
        "insurance-type-default": "Type d'assurance",
        "time-default": "Choisir l'horaire",
        "book-btn": "📅 Réserver maintenant",
        "read-more": "Lire plus",
        "stat1": "Agences",
        "stat2": "Wilayas",
        "stat3": "Experts",
        "stat4": "Clients/mois",
        "footer-title": "Guide Assurance Algérie",
        "footer-desc": "Plateforme complète pour les assurances en Algérie",
        "footer-links-title": "Liens rapides",
        "footer-home": "Accueil",
        "footer-services": "Services",
        "footer-stats": "Statistiques",
        "footer-booking": "Rendez-vous",
        "footer-about": "À Propos",
        "footer-companies": "Sociétés",
        "footer-team": "Experts",
        "footer-contact": "Contact",
        "footer-insurance-title": "Types d'assurance",
        "footer-car": "Assurance Auto",
        "footer-health": "Assurance Santé",
        "footer-home-ins": "Assurance Habitation",
        "footer-travel": "Assurance Voyage",
        "footer-social-title": "Suivez-nous",
        "copyright": "© 2025 Guide des Assurances Algérie - Tous droits réservés",
        "chat-title": "Assistant intelligent",
        "chat-welcome": "Bonjour! Je suis l'assistant assurance. Comment puis-je vous aider?",
        "chat-placeholder": "Posez votre question..."
    }
};

let currentLang = 'ar';

function escapeHtml(text) {
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function getSmartResponse(message) {
    const msg = message.toLowerCase();
    if(msg.includes('سيارة') || msg.includes('auto') || msg.includes('automobile')) {
        return currentLang === 'ar' ? '🚗 تأمين السيارات إلزامي في الجزائر. نوفر عروضاً من ALLIANCE, SAA, CAAT. الأسعار تبدأ من 8000 دج سنوياً. احجز استشارة مجانية!' : '🚗 Assurance auto obligatoire. Offres à partir de 8000 DA/an. Réservez un rendez-vous!';
    }
    else if(msg.includes('صح') || msg.includes('santé') || msg.includes('health')) {
        return currentLang === 'ar' ? '🏥 تأمين الصحة يغطي الاستشارات والاستشفاء والأدوية. عقود مرنة للأفراد والعائلات من 15000 دج سنوياً.' : '🏥 Assurance santé à partir de 15000 DA/an.';
    }
    else if(msg.includes('سكن') || msg.includes('habitation') || msg.includes('maison')) {
        return currentLang === 'ar' ? '🏠 تأمين السكن يحمي منزلك من الحرائق والسرقة. أسعار خاصة تبدأ من 5000 دج سنوياً.' : '🏠 Assurance habitation à partir de 5000 DA/an.';
    }
    else if(msg.includes('سعر') || msg.includes('prix') || msg.includes('price') || msg.includes('تكلفة')) {
        return currentLang === 'ar' ? '💰 الأسعار التقريبية: تأمين السيارات من 8000 دج، الصحة من 15000 دج، السكن من 5000 دج سنوياً. للحصول على عرض دقيق، احجز استشارة مجانية.' : '💰 Prix approximatifs: Auto à partir de 8000 DA, Santé 15000 DA, Habitation 5000 DA/an.';
    }
    else {
        return currentLang === 'ar' ? '📋 شكراً لتواصلك! يمكنني مساعدتك في معلومات عن تأمين السيارات، الصحة، السكن، أو السفر. يمكنك أيضاً حجز موعد استشارة مجانية من قسم "حجز موعد".' : '📋 Merci! Je peux vous aider avec les assurances auto, santé, habitation ou voyage. Réservez un rendez-vous gratuit.';
    }
}

function toggleChat() {
    const chatWindow = document.getElementById('chatWindow');
    if(chatWindow) chatWindow.classList.toggle('active');
}

function sendChatMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();
    if(!message) return;
    const messagesContainer = document.getElementById('chatMessages');
    const userMsgDiv = document.createElement('div');
    userMsgDiv.className = 'message user';
    userMsgDiv.innerHTML = `<div class="message-content">${escapeHtml(message)}</div>`;
    messagesContainer.appendChild(userMsgDiv);
    input.value = '';
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message bot';
    typingDiv.id = 'typingIndicator';
    typingDiv.innerHTML = `<div class="message-content">${currentLang === 'ar' ? 'جاري الكتابة...' : 'En train d\'écrire...'}</div>`;
    messagesContainer.appendChild(typingDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    setTimeout(() => {
        document.getElementById('typingIndicator')?.remove();
        const response = getSmartResponse(message);
        const botMsgDiv = document.createElement('div');
        botMsgDiv.className = 'message bot';
        botMsgDiv.innerHTML = `<div class="message-content">${response}</div>`;
        messagesContainer.appendChild(botMsgDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }, 800);
}

function applyTranslation(lang) {
    currentLang = lang;
    document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang === 'ar' ? 'ar' : 'fr';
    
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if(translations[lang][key]) {
            if(element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else if(element.tagName === 'OPTION') {
                element.textContent = translations[lang][key];
            } else {
                element.innerHTML = translations[lang][key];
            }
        }
    });
    
    document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        if(translations[lang][key]) element.placeholder = translations[lang][key];
    });
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    
    localStorage.setItem('preferred_language', lang);
}

function initLanguage() {
    const savedLang = localStorage.getItem('preferred_language');
    const initialLang = (savedLang === 'ar' || savedLang === 'fr') ? savedLang : 'ar';
    applyTranslation(initialLang);
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => applyTranslation(btn.dataset.lang));
    });
}

// ============================================
// القائمة المتنقلة للهاتف
// ============================================
function initMobileMenu() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinksMenu = document.querySelector('.nav-links');
    
    if(menuBtn && navLinksMenu) {
        menuBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            navLinksMenu.classList.toggle('active');
            document.body.classList.toggle('menu-open');
            document.body.style.overflow = document.body.classList.contains('menu-open') ? 'hidden' : '';
        });
        
        navLinksMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinksMenu.classList.remove('active');
                document.body.classList.remove('menu-open');
                document.body.style.overflow = '';
            });
        });
        
        document.addEventListener('click', function(event) {
            if (navLinksMenu.classList.contains('active') && 
                !navLinksMenu.contains(event.target) && !menuBtn.contains(event.target)) {
                navLinksMenu.classList.remove('active');
                document.body.classList.remove('menu-open');
                document.body.style.overflow = '';
            }
        });
    }
}

// ============================================
// زر العودة للأعلى
// ============================================
function initScrollTop() {
    const scrollBtn = document.querySelector('.scroll-top');
    if(scrollBtn) {
        window.addEventListener('scroll', () => {
            scrollBtn.classList.toggle('active', window.scrollY > 300);
        });
        scrollBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}

// ============================================
// التمرير السلس للروابط
// ============================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if(href === "#") return;
            const targetId = href.substring(1);
            const target = document.getElementById(targetId);
            if(target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
                const navLinksMenu = document.querySelector('.nav-links');
                if(navLinksMenu) {
                    navLinksMenu.classList.remove('active');
                    document.body.classList.remove('menu-open');
                    document.body.style.overflow = '';
                }
            }
        });
    });
}

// ============================================
// تهيئة كل شيء عند تحميل الصفحة
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    initLanguage();
    initMobileMenu();
    initScrollTop();
    initSmoothScroll();
});