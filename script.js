// ========== Mobile Menu Toggle ==========
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }


// ========== Projects Filter Tabs ==========
// Initialize now (we are already inside a DOMContentLoaded wrapper above)
const tabs = document.querySelectorAll('.proj-tab');
const cards = document.querySelectorAll('.projects-grid .project-card');
if (tabs.length && cards.length) {
  tabs.forEach(btn => {
    btn.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('is-active'));
      btn.classList.add('is-active');
      const f = btn.dataset.filter || 'all';
      cards.forEach(card => {
        const cat = card.getAttribute('data-cat');
        const show = (f === 'all') || (cat === f);
        card.style.display = show ? '' : 'none';
      });
    });
  });
}

// ========== I18N (Arabic/English Toggle) ==========
(function(){
  const DICT = {
    ar: {
      'brand.name': 'مكتب أيــــــــوان ',
      'brand.tagline': 'للاستشارات الهندسية',
      'nav.home': 'الرئيسية',
      'nav.about': 'من نحن',
      'nav.services': 'الخدمات',
      'nav.projects': 'الأعمال',
      'nav.contact': 'اتصل بنا',
      'nav.quote': 'طلب عرض سعر',
      // Hero
      'hero.headline': 'تصميم المستقبل برؤية هندسية دقيقة',
      'hero.cta': 'تواصل معنا الآن',
      'quote.title': 'طلب عرض سعر',
      'form.name': 'اسمك',
      'form.email': 'بريدك الإلكتروني',
      'form.phone': 'رقم الهاتف',
      'form.message': 'وصف المشروع',
      'form.submit': 'إرسال الطلب',
      'svc.contactTitle': 'اتصل بنا اليوم',
      'svc.contactLead': 'أدخل بياناتك وسنتواصل معك لشرح التفاصيل وتقديم عرض سعر مناسب.',
      // About
      'about.title': 'من نحن',
      'about.p1': 'مكتب ايوان  للاستشارات الهندسية هو مكتب  رائد في تقدم حلول هندسية متكاملة، تأسس لتلبية احتياجات العملاء من خلال فريق متخصص ذو خبرة.',
      'about.p2': 'من خدماتنا: التصميم الهندسي، الإشراف على المشاريع، دراسات الجدوى، والتصميم المعماري وخدمات المساحة.',
      'about.p3': 'نعمل مع القطاعين الحكومي والخاص، ملتزمين بالجودة والابتكار ونفخر بسجلنا في إنجاز المشاريع وبناء شراكات طويلة الأمد.',
      'about.vision.title': 'رؤيتنا',
      'about.vision.p': ' مكتب ايوان للاستشارات الهندسية، نهدف إلى أن نكون رائدين في تقديم الحلول الهندسية المبتكرة والمستدامة:',
      'about.vision.li1': 'تقديم خدمات هندسية متطورة تلبي احتياجات العملاء',
      'about.vision.li2': 'اعتماد أحدث التقنيات لتعزيز الكفاءة والجودة',
      'about.vision.li3': 'تعزيز ثقافة الابتكار والتحسين المستمر',
      'about.vision.li4': 'تشجيع التصميم المستدام والمسؤولية البيئية',
      'about.vision.li5': 'إقامة شراكات قوية لمواجهة التحديات',
      // Objectives
      'obj.title': 'أهدافنا',
      'obj.excellence': 'التميز',
      'obj.excellence_desc': 'تقديم خدمات بمستويات عالية من الجودة والاحترافية',
      'obj.innovation': 'الابتكار',
      'obj.innovation_desc': 'استخدام أحدث التقنيات والحلول الهندسية المبتكرة',
      'obj.sustainability': 'الاستدامة',
      'obj.sustainability_desc': 'التركيز على التصاميم المستدامة والمسؤولية البيئية',
      'obj.community': 'التنمية المجتمعية',
      'obj.community_desc': 'المساهمة في تطوير المجتمع والاقتصاد المحلي',
      // Services overview
      'services.title': 'خدماتنا',
      'services.electrical.title': 'التصميم الكهربائي',
      'services.electrical.desc': 'تصميم الأنظمة الكهربائية المتطورة والآمنة للمشاريع السكنية والتجارية',
      'services.survey.title': 'الخدمات المساحية',
      'services.survey.desc': 'خدمات المساحة والتقييم الجيوديسي للمشاريع الهندسية',
      'services.safety.title': 'خدمات الأمن والسلامة',
      'services.safety.desc': 'تصميم واعتماد مخططات الإخلاء والسلامة المعمارية',
      'services.interior.title': 'التصميم الداخلي',
      'services.interior.desc': 'تصميم داخلي احترافي يجمع بين الجمال والوظيفة',
      'services.exterior.title': 'التصميم الخارجي',
      'services.exterior.desc': 'تصميم واجهات معمارية عصرية وجذابة',
      'services.safety_projects.title': 'مشاريع الأمن والسلامة',
      'services.safety_projects.desc': 'تنفيذ مشاريع الأمن والسلامة وفقاً للمعايير الدولية',
      // Modern tiles
      'services.urban.title': 'التخطيط العمراني',
      'services.pm.title': 'إدارة المشاريع',
      // Consulting grids and titles
      'consult.title': 'خدمات الاستشارات الهندسية',
      'card.license-issue': 'إصدار رخص البناء',
      'card.license-renew': 'تجديد وتعديل رخص البناء',
      'card.civil-defense': 'إصدار رخصة الدفاع المدني',
      'card.architectural-design': 'التصميم المعماري',
      'card.site-coordination': 'تنسيق المواقع',
      'card.demolition-license': 'إصدار رخص الهدم',
      'card.engineering-supervision': 'الإشراف الهندسي',
      'card.transfer-building-license': 'نقل ملكية رخصة بناء',
      'card.facade-exterior-design': 'التصميم الخارجي وتصميم الواجهات',
      'card.interior-design': 'التصميم الداخلي',
      'card.structural-design': 'التصميم الإنشائي',
      'card.mechanical-design': 'التصميم الميكانيكي',
      'card.electrical-design': 'التصميم الكهربائي',
      'card.landscape-design': 'تخطيط المساحات الخضراء (لاندسكيب)',
      'survey.title': 'الخدمات المساحية',
      'card.survey-topographic': 'الرفع المساحي',
      'card.survey-subdivision-merge': 'تجزئة ودمج الأراضي',
      'card.survey-deed-update': 'تحديث الصكوك',
      'card.survey-deed-amend': 'تعديل الصكوك',
      'card.survey-reports': 'إعداد التقارير المساحية',
      'card.survey-land-staking': 'توقيع الأراضي',
      'card.survey-quantity-takeoff': 'حصر الكميات',
      'card.survey-unit-subdivision': 'فرز الوحدات السكني',
      'safety.title': 'خدمات الأمن والسلامة التفصيلية',
      'card.safety-evacuation-plans': 'تصميم واعتماد مخططات الإخلاء والسلامة المعمارية',
      'card.safety-fire-prevention-report': 'إعداد تقارير ملائمة لأنظمة الوقاية من الحريق',
      'card.safety-civil-defense-license': 'إصدار ترخيص الدفاع المدني وترخيص السلامة',
      'card.safety-report-approval': 'إصدار تقرير السلامة والحصول على الاعتماد',
      'card.safety-drawings-review': 'مراجعة مخططات الأمن والسلامة واعتمادها',
      'card.safety-fire-sector-report': 'إصدار تقرير قطاع حريق مستقل',
      'card.safety-license-renewal': 'تجديد ترخيص الدفاع المدني',
      'card.safety-site-handover': 'تسليم المواقع للدفاع المدني',
      'card.safety-receipt-certificate': 'إصدار شهادة استلام من المكتب الهندسي',
      // Contact
      'contact.title': 'تواصل معنا',
      'contact.phone': 'الهاتف',
      'contact.email': 'البريد الإلكتروني',
      'contact.whatsapp': 'واتس آب',
      // Extra service page labels
      'svc.why': 'لماذا هذه الخدمة؟',
      'svc.steps': 'خطوات تنفيذ الخدمة',
      // Projects
      'projects.title': 'أعمالنا',
      'projects.subtitle': 'نختار أفضل المشاريع التي أنجزناها',
      'projects.residential': 'مشروع سكني',
      'projects.commercial': 'مشروع تجاري',
      'projects.industrial': 'مشروع صناعي',
      'projects.administrative': 'مشروع إداري',
      'projects.filter.all': 'الكل',
      'projects.filter.residential': 'سكني',
      'projects.filter.commercial': 'تجاري',
      'projects.filter.administrative': 'إداري',
      // Named project cards
      'projects.res.1': 'فلل سكنية حديثة',
      'projects.res.2': 'مجمع شقق حضري',
      'projects.res.3': 'بيت سكني منفصل',
      'projects.com.1': 'مركز تجاري عصري',
      'projects.com.2': 'مجمع مكاتب ومحلات',
      'projects.com.3': 'مول تسوق متوسط',
      'projects.adm.1': 'مبنى إداري للشركات',
      'projects.adm.2': 'مركز إداري حكومي',
      'projects.adm.3': 'مقر شركة رئيسي',
      // Galleries
      'interior.title': 'التصميم الداخلي',
      'exterior.title': 'التصميم الخارجي',
      // Clients
      'clients.title': 'عملاؤنا',
      'clients.subtitle': 'نفخر بالعمل مع أفضل الشركات والمؤسسات',
      // Testimonials
      'testimonials.title': 'آراء عملاؤنا',
      'testimonials.q1': '"خدمات متميزة واحترافية جداً، فريق عمل متخصص وملتزم بالجودة"',
      'testimonials.c1': '- عميل راضٍ',
      'testimonials.q2': '"تعاملنا مع مكتب ايوان كان تجربة رائعة، أنصح بهم بشدة"',
      'testimonials.c2': '- عميل مميز',
      // Branches
      'branches.title': 'موقعنا',
      'branches.riyadh_granada.title': 'الرياض - فرع غرناطة',
      'branches.riyadh_granada.addr': 'حي غرناطة - طريق الإمام سعود',
      'branches.riyadh_rawdha.title': 'الرياض - فرع الروضة',
      'branches.riyadh_rawdha.addr': 'حي الروضة - شارع حفصة بنت عمر',
      'branches.jeddah_aziziyah.title': 'جدة - فرع العزيزية',
      'branches.jeddah_aziziyah.addr': 'حي العزيزية - طريق الملك فهد',
      // Footer
      'footer.links': 'روابط مهمة',
      'footer.contact': 'تواصل معنا',
      'footer.follow': 'تابعنا',
      'footer.hours': 'اوقات الدوام',
      'footer.hours.weekdays': 'من السبت إلى الخميس: <span class="accent">9 صباحاً</span> - <span class="accent">9 مساءً</span>',
      'footer.hours.friday': 'الجمعة: <span class="accent">مغلق</span>',
      'footer.copy': 'جميع الحقوق محفوظة لـ مكتب ايوان للاستشارات الهندسية | تصميم وتطوير'
    },
    en: {
      'brand.name': 'Ewan Office',
      'brand.tagline': 'Engineering Consultations',
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.services': 'Services',
      'nav.projects': 'Projects',
      'nav.contact': 'Contact',
      'nav.quote': 'Get a Quote',
      // Hero
      'hero.headline': 'Designing the future with precise engineering vision',
      'hero.cta': 'Contact Us Now',
      'quote.title': 'Request a Quote',
      'form.name': 'Your Name',
      'form.email': 'Your Email',
      'form.phone': 'Phone Number',
      'form.message': 'Project Description',
      'form.submit': 'Send Request',
      'svc.contactTitle': 'Contact Us Today',
      'svc.contactLead': 'Enter your details and we will contact you to explain and provide a suitable quote.',
      // About
      'about.title': 'About Us',
      'about.p1': 'Ewan Engineering Consultancy is a leading firm offering integrated engineering solutions, established to meet client needs by an experienced specialized team.',
      'about.p2': 'Our services include: engineering design, project supervision, feasibility studies, architectural design, and surveying services.',
      'about.p3': 'We work with both public and private sectors, committed to quality and innovation, with a proud record of completed projects and long-term partnerships.',
      'about.vision.title': 'Our Vision',
      'about.vision.p': 'At Ewan Engineering Consultancy, we aim to lead in delivering innovative and sustainable engineering solutions:',
      'about.vision.li1': 'Provide advanced engineering services that meet client needs',
      'about.vision.li2': 'Adopt the latest technologies to boost efficiency and quality',
      'about.vision.li3': 'Promote a culture of innovation and continuous improvement',
      'about.vision.li4': 'Encourage sustainable design and environmental responsibility',
      'about.vision.li5': 'Build strong partnerships to face challenges',
      // Objectives
      'obj.title': 'Our Objectives',
      'obj.excellence': 'Excellence',
      'obj.excellence_desc': 'Deliver services with high levels of quality and professionalism',
      'obj.innovation': 'Innovation',
      'obj.innovation_desc': 'Use the latest technologies and innovative engineering solutions',
      'obj.sustainability': 'Sustainability',
      'obj.sustainability_desc': 'Focus on sustainable designs and environmental responsibility',
      'obj.community': 'Community Development',
      'obj.community_desc': 'Contribute to the development of the community and local economy',
      // Services overview
      'services.title': 'Our Services',
      'services.electrical.title': 'Electrical Design',
      'services.electrical.desc': 'Design advanced and safe electrical systems for residential and commercial projects',
      'services.survey.title': 'Surveying Services',
      'services.survey.desc': 'Surveying and geodetic evaluation for engineering projects',
      'services.safety.title': 'Safety & Security Services',
      'services.safety.desc': 'Design and approval of evacuation and architectural safety plans',
      'services.interior.title': 'Interior Design',
      'services.interior.desc': 'Professional interior design combining beauty and function',
      'services.exterior.title': 'Exterior Design',
      'services.exterior.desc': 'Modern and attractive architectural facades design',
      'services.safety_projects.title': 'Safety Projects',
      'services.safety_projects.desc': 'Implement safety projects according to international standards',
      // Modern tiles
      'services.urban.title': 'Urban Planning',
      'services.pm.title': 'Project Management',
      // Consulting grids and titles
      'consult.title': 'Engineering Consulting Services',
      'card.license-issue': 'Building License Issuance',
      'card.license-renew': 'Building License Renewal/Modification',
      'card.civil-defense': 'Civil Defense License',
      'card.architectural-design': 'Architectural Design',
      'card.site-coordination': 'Site Coordination',
      'card.demolition-license': 'Demolition License',
      'card.engineering-supervision': 'Engineering Supervision',
      'card.transfer-building-license': 'Transfer Building License',
      'card.facade-exterior-design': 'Exterior and Facade Design',
      'card.interior-design': 'Interior Design',
      'card.structural-design': 'Structural Design',
      'card.mechanical-design': 'Mechanical Design',
      'card.electrical-design': 'Electrical Design',
      'card.landscape-design': 'Landscape Planning',
      'survey.title': 'Surveying Services',
      'card.survey-topographic': 'Topographic Survey',
      'card.survey-subdivision-merge': 'Subdivision and Merge of Lands',
      'card.survey-deed-update': 'Deed Update',
      'card.survey-deed-amend': 'Deed Amendment',
      'card.survey-reports': 'Surveying Reports',
      'card.survey-land-staking': 'Land Staking',
      'card.survey-quantity-takeoff': 'Quantity Takeoff',
      'card.survey-unit-subdivision': 'Residential Unit Subdivision',
      'safety.title': 'Detailed Safety Services',
      'card.safety-evacuation-plans': 'Design and Approval of Evacuation and Architectural Safety Plans',
      'card.safety-fire-prevention-report': 'Prepare Reports for Fire Prevention Systems',
      'card.safety-civil-defense-license': 'Civil Defense and Safety Licensing',
      'card.safety-report-approval': 'Safety Report Issuance and Approval',
      'card.safety-drawings-review': 'Review and Approve Safety Drawings',
      'card.safety-fire-sector-report': 'Independent Fire Sector Report',
      'card.safety-license-renewal': 'Civil Defense License Renewal',
      'card.safety-site-handover': 'Site Handover to Civil Defense',
      'card.safety-receipt-certificate': 'Engineering Office Receipt Certificate',
      // Contact
      'contact.title': 'Contact Us',
      'contact.phone': 'Phone',
      'contact.email': 'Email',
      'contact.whatsapp': 'WhatsApp',
      // Extra service page labels
      'svc.why': 'Why this service?',
      'svc.steps': 'Service steps',
      // Projects
      'projects.title': 'Our Projects',
      'projects.subtitle': 'We showcase a selection of our best completed projects',
      'projects.residential': 'Residential Project',
      'projects.commercial': 'Commercial Project',
      'projects.industrial': 'Industrial Project',
      'projects.administrative': 'Administrative Project',
      'projects.filter.all': 'All',
      'projects.filter.residential': 'Residential',
      'projects.filter.commercial': 'Commercial',
      'projects.filter.administrative': 'Administrative',
      // Named project cards
      'projects.res.1': 'Modern Residential Villas',
      'projects.res.2': 'Urban Apartments Complex',
      'projects.res.3': 'Detached Family House',
      'projects.com.1': 'Contemporary Commercial Center',
      'projects.com.2': 'Offices and Retail Complex',
      'projects.com.3': 'Mid-size Shopping Mall',
      'projects.adm.1': 'Corporate Office Building',
      'projects.adm.2': 'Government Administration Center',
      'projects.adm.3': 'Headquarter Building',
      // Galleries
      'interior.title': 'Interior Design',
      'exterior.title': 'Exterior Design',
      // Clients
      'clients.title': 'Our Clients',
      'clients.subtitle': 'Proud to work with top companies and institutions',
      // Testimonials
      'testimonials.title': 'What Our Clients Say',
      'testimonials.q1': '"Outstanding services and professionalism; a specialized team committed to quality"',
      'testimonials.c1': '- Satisfied Client',
      'testimonials.q2': '"Working with Ewan Office was a great experience; highly recommended"',
      'testimonials.c2': '- Valued Client',
      // Branches
      'branches.title': 'Location',
      'branches.riyadh_granada.title': 'Riyadh - Granada Branch',
      'branches.riyadh_granada.addr': 'Granada District - Imam Saud Road',
      'branches.riyadh_rawdha.title': 'Riyadh - Al Rawdha Branch',
      'branches.riyadh_rawdha.addr': 'Al Rawdha District - Hafsa Bint Omar Street',
      'branches.jeddah_aziziyah.title': 'Jeddah - Al Aziziyah Branch',
      'branches.jeddah_aziziyah.addr': 'Al Aziziyah District - King Fahd Road',
      // Footer
      'footer.links': 'Useful Links',
      'footer.contact': 'Contact Us',
      'footer.follow': 'Follow Us',
      'footer.hours': 'Working Hours',
      'footer.hours.weekdays': 'Saturday to Thursday: <span class="accent">9 AM</span> - <span class="accent">9 PM</span>',
      'footer.hours.friday': 'Friday: <span class="accent">Closed</span>',
      'footer.copy': 'All rights reserved © Ewan Engineering Consultancy | Design & Development'
    }
  };

  const STORAGE_KEY = 'site_lang';
  function getLang(){
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'en' || saved === 'ar') return saved;
    // default based on document lang
    const docLang = document.documentElement.lang || 'ar';
    return docLang.startsWith('en') ? 'en' : 'ar';
  }
  function setLang(lang){
    localStorage.setItem(STORAGE_KEY, lang);
  }

  function applyDir(lang){
    const isAr = lang === 'ar';
    document.documentElement.lang = isAr ? 'ar' : 'en';
    document.documentElement.dir = isAr ? 'rtl' : 'ltr';
  }

  function t(lang, key){
    return (DICT[lang] && DICT[lang][key]) || (DICT.ar[key]) || key;
  }

  function applyI18n(lang){
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = t(lang, key);
      if (!val) return;
      // Use innerHTML to support translations that include markup (e.g., spans)
      el.innerHTML = val;
    });
    // placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      const val = t(lang, key);
      if (val) el.setAttribute('placeholder', val);
    });
    // button label shows the target language to switch to
    const btn = document.getElementById('lang-toggle');
    if (btn) btn.textContent = lang === 'ar' ? 'EN' : 'AR';
  }

  function initLang(){
    const lang = getLang();
    applyDir(lang);
    applyI18n(lang);
    const btn = document.getElementById('lang-toggle');
    if (btn && !btn._bound) {
      btn.addEventListener('click', () => {
        const next = getLang() === 'ar' ? 'en' : 'ar';
        setLang(next);
        applyDir(next);
        applyI18n(next);
        try { window.dispatchEvent(new CustomEvent('langchange', { detail: { lang: next } })); } catch (e) {}
      });
      btn._bound = true;
    }
  }

  // We're already inside a DOMContentLoaded handler above, so call directly
  initLang();
})();

// ========== Hero Slider ==========
function initHeroSlider() {
    const wrap = document.querySelector('.hero-image');
    if (!wrap) return;
    const slides = Array.from(wrap.querySelectorAll('img'));
    if (slides.length === 0) return;

    slides.forEach((img, i) => img.classList.toggle('is-active', i === 0));

    const btnPrev = document.createElement('button');
    btnPrev.className = 'hero-arrow left';
    btnPrev.type = 'button';
    btnPrev.setAttribute('aria-label', 'السابق');
    btnPrev.innerHTML = '<i class="fa-solid fa-chevron-right"></i>';

    const btnNext = document.createElement('button');
    btnNext.className = 'hero-arrow right';
    btnNext.type = 'button';
    btnNext.setAttribute('aria-label', 'التالي');
    btnNext.innerHTML = '<i class="fa-solid fa-chevron-left"></i>';

    const dotsWrap = document.createElement('div');
    dotsWrap.className = 'hero-dots';
    const dots = slides.map((_, i) => {
        const d = document.createElement('span');
        d.className = 'hero-dot' + (i === 0 ? ' active' : '');
        d.addEventListener('click', () => go(i));
        dotsWrap.appendChild(d);
        return d;
    });

    wrap.appendChild(btnPrev);
    wrap.appendChild(btnNext);
    wrap.appendChild(dotsWrap);

    let idx = 0;
    function go(n) {
        if (n === idx) return;
        slides[idx].classList.remove('is-active');
        idx = (n + slides.length) % slides.length;
        slides[idx].classList.add('is-active');
        dots.forEach((d, i) => d.classList.toggle('active', i === idx));
        restart();
    }
    function next() { go(idx + 1); }
    function prev() { go(idx - 1); }

    btnNext.addEventListener('click', next);
    btnPrev.addEventListener('click', prev);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') next();
        if (e.key === 'ArrowRight') prev();
    });

    let timer = null;
    function start() { timer = setInterval(next, 6000); }
    function stop() { if (timer) clearInterval(timer); timer = null; }
    function restart() { stop(); start(); }
    start();

    wrap.addEventListener('mouseenter', stop);
    wrap.addEventListener('mouseleave', start);

    let startX = null;
    wrap.addEventListener('touchstart', (e) => { startX = e.touches[0].clientX; }, { passive: true });
    wrap.addEventListener('touchend', (e) => {
        if (startX == null) return;
        const dx = e.changedTouches[0].clientX - startX;
        if (Math.abs(dx) > 40) { if (dx > 0) prev(); else next(); }
        startX = null;
    });
}

    // Close menu when a link is clicked
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // ========== Hero Slider Init ==========
    initHeroSlider();
    // ========== Interior Lightbox Init ==========
    initInteriorLightbox();
});

// ========== Smooth Scroll for Anchor Links ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ========== Form Submission ==========
document.addEventListener('DOMContentLoaded', function() {
    const quoteForm = document.querySelector('.quote-form');
    if (!quoteForm) return;
    // If form posts to backend (has action), let the browser submit normally
    if (quoteForm.hasAttribute('action')) return;
    // Fallback client-only handler (no backend)
    quoteForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const phone = this.querySelector('input[type="tel"]').value;
        const message = this.querySelector('textarea').value;
        if (name && email && phone && message) {
            alert('شكراً لك! تم استقبال طلبك بنجاح. سنتواصل معك قريباً.');
            this.reset();
            console.log({ name, email, phone, message, timestamp: new Date() });
        } else {
            alert('الرجاء ملء جميع الحقول المطلوبة');
        }
    });
});

// ========== Scroll Animation for Elements (class-based) ==========
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
        }
    });
}, observerOptions);

// Register elements for reveal
const revealSelectors = [
    '.about-card',
    '.service-card',
    '.project-card',
    '.branch-card',
    '.safety-item',
    '.contact-item',
    '.client-logo',
    '.testimonial-card',
    'section h2',
    '.objective-card'
].join(', ');

document.querySelectorAll(revealSelectors).forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
});

// ========== Navbar Background on Scroll ==========
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// ========== Counter Animation ==========
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    
    const counter = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(counter);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// ========== Testimonials Carousel (Optional) ==========
// Show 3 testimonials at a time with auto-rotation
const testimonials = Array.from(document.querySelectorAll('.testimonial-card'));
const PAGE_SIZE = 3;
let testiStart = 0;

function showTestimonialsWindow(startIdx) {
    testimonials.forEach((el, i) => {
        const inWindow = i >= startIdx && i < startIdx + PAGE_SIZE;
        el.style.display = inWindow ? 'block' : 'none';
    });
}

if (testimonials.length) {
    showTestimonialsWindow(0);
    if (testimonials.length > PAGE_SIZE) {
        setInterval(() => {
            testiStart = (testiStart + PAGE_SIZE) % testimonials.length;
            showTestimonialsWindow(testiStart);
        }, 5000);
    }
}

// ========== Active Navigation Link ==========
window.addEventListener('scroll', function() {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ========== Add Active Link Styling ==========
const style = document.createElement('style');
style.textContent = `
    .nav-menu a.active {
        color: var(--accent-color) !important;
        border-bottom: 2px solid var(--accent-color);
    }
`;
document.head.appendChild(style);

// ========== Lazy Loading Images ==========
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ========== Print Current Year in Footer ==========
document.addEventListener('DOMContentLoaded', function() {
    const year = new Date().getFullYear();
    const footerText = document.querySelector('.footer-bottom p');
    if (footerText) {
        footerText.textContent = `© ${year} جميع الحقوق محفوظة لـ مكتب ايوان للاستشارات الهندسية | تصميم وتطوير`;
    }
});

// ========== Utility Functions ==========

// Scroll to top button
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        
    );
}

// Add click to call functionality
document.addEventListener('DOMContentLoaded', function() {
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
    phoneLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                e.preventDefault();
                alert('للاتصال، يرجى استخدام هاتفك المحمول');
            }
        });
    });
});

// ========== WhatsApp Integration ==========
function openWhatsApp() {
    const phoneNumber = '966542464234';
    const message = 'مرحباً، أود الاستفسار عن خدماتكم';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// ========== Email Integration ==========
function sendEmail() {
    const email = 'info@m-aldiar.com';
    const subject = 'استفسار عن الخدمات';
    const body = 'مرحباً، أود الاستفسار عن خدماتكم';
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

console.log('Script loaded successfully');

// ========== Interior Gallery Lightbox ==========
function initInteriorLightbox() {
    const overlay = document.getElementById('lightbox');
    if (!overlay) return;
    const imgs = Array.from(document.querySelectorAll('.interior-grid img'));
    const imgEl = overlay.querySelector('.lightbox-image');
    const btnClose = overlay.querySelector('.lightbox-close');
    const btnNext = overlay.querySelector('.lightbox-nav.next');
    const btnPrev = overlay.querySelector('.lightbox-nav.prev');

    let idx = 0;
    function show(n) {
        idx = (n + imgs.length) % imgs.length;
        imgEl.src = imgs[idx].src;
    }
    function open(n=0) {
        show(n);
        overlay.classList.add('is-open');
        overlay.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }
    function close() {
        overlay.classList.remove('is-open');
        overlay.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }
    function next() { show(idx + 1); }
    function prev() { show(idx - 1); }

    imgs.forEach((im, i) => {
        im.style.cursor = 'zoom-in';
        im.addEventListener('click', () => open(i));
    });
    btnClose && btnClose.addEventListener('click', close);
    btnNext && btnNext.addEventListener('click', next);
    btnPrev && btnPrev.addEventListener('click', prev);
    overlay.querySelector('.lightbox-backdrop')?.addEventListener('click', close);
    document.addEventListener('keydown', (e) => {
        if (!overlay.classList.contains('is-open')) return;
        if (e.key === 'Escape') close();
        if (e.key === 'ArrowLeft') next();
        if (e.key === 'ArrowRight') prev();
    });
}

