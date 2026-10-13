
(() => {
  'use strict';

  const translations = {
    en: {
      title: 'Bibek Acharya | Portfolio',
      description: 'Portfolio of Bibek Acharya, a BCA student interested in cybersecurity, web development, UI/UX and technology.',
      skipLink: 'Skip to main content',
      mainNav: 'Main navigation',
      navHome: 'Home',
      navAbout: 'About',
      navEducation: 'Education',
      navProjects: 'Projects',
      navSkills: 'Skills',
      navContact: 'Contact',
      contactDetails: 'Contact details',
      langChange: 'Change language',
      menuToggle: 'Menu',
      heroEyebrow: "Hello, I'm",
      heroRole: 'BCA student and aspiring cybersecurity professional',
      heroDesc: "I'm a BCA student who enjoys building websites and learning how systems work. Right now I'm building my skills in web development, programming and cybersecurity.",
      heroProjects: 'View projects',
      heroContact: 'Contact me',
      aboutTitle: 'About me',
      aboutP1: "I'm Bibek Acharya, a BCA student at SRM University Sikkim. I come from a vocational IT background and enjoy learning about computers, programming, web development and cybersecurity.",
      aboutP2: "I learn best by building things, not only by reading theory. Right now I'm exploring web technologies, programming, UI/UX and cybersecurity through small projects.",
      aboutP3: 'My long-term goal is a career in cybersecurity. I want to gain professional experience in India and eventually explore opportunities abroad.',
      factLocationLabel: 'Location:',
      factLocation: 'Sikkim, India',
      factEducationLabel: 'Education:',
      factEducation: 'BCA, SRM University Sikkim',
      factFocusLabel: 'Focus:',
      factFocus: 'Cybersecurity, web development, UI/UX',
      factLanguagesLabel: 'Languages:',
      factLanguages: 'English, Hindi, Nepali',
      educationTitle: 'Education',
      eduBcaDate: 'Current',
      eduBcaTitle: 'Bachelor of Computer Applications (BCA)',
      eduBcaOrg: 'SRM University Sikkim',
      eduBcaDesc: 'Studying programming, web development and cybersecurity, and building small projects alongside the course.',
      eduVocDate: '2026',
      eduVocTitle: 'Vocational IT',
      eduVocOrg: 'Central Pendam Sr.Sec School',
      eduVocDesc: 'Learned the basics of web development, Java and database management with SQL.',
      projectsTitle: 'Featured projects',
      project1Title: 'Personal portfolio website',
      project1Desc: "A personal portfolio website where I share my projects, what I'm learning and my interest in technology.",
      project2Title: 'Programming and networking projects',
      project2Desc: 'Small projects and experiments from learning programming, networking and the basics of how computer systems work.',
      screenshotSlot: 'Screenshot to be added',
      skillsTitle: 'Skills',
      skillsIntro: "Technologies and topics I'm learning and working with.",
      skillsWeb: 'Web development',
      skillsProgramming: 'Programming',
      skillsExploring: 'Also exploring',
      skillNetworking: 'Networking',
      skillCyber: 'Cybersecurity',
      skillsEditing: 'Editing',
      skillVideo: 'Video editing',
      skillDocumentary: 'Documentary',
      skillMotion: 'Motion graphics',
      skillAnime: 'Anime edits',
      contactTitle: 'Contact',
      contactIntro: 'You can message me about my projects, web development or cybersecurity. The form opens your email app with the message ready to send.',
      labelName: 'Name',
      labelEmail: 'Your email',
      labelMessage: 'Message',
      formSubmit: 'Open in email app',
      formOpened: 'Your email app should open now. If it does not, please email me directly.',
      formNoEmail: 'The contact email address has not been set up yet.',
      footerNav: 'Footer',
      footerContactTitle: 'Contact details',
      footerEmailLabel: 'Email:',
      footerPrivacy: 'Privacy policy',
      footerTerms: 'Terms and conditions'
    },

    hi: {
      title: 'बिबेक आचार्य | पोर्टफोलियो',
      description: 'बिबेक आचार्य का पोर्टफोलियो, जो BCA के छात्र हैं और साइबर सुरक्षा, वेब डेवलपमेंट, UI/UX और तकनीक में रुचि रखते हैं।',
      skipLink: 'मुख्य सामग्री पर जाएँ',
      mainNav: 'मुख्य नेविगेशन',
      navHome: 'होम',
      navAbout: 'परिचय',
      navEducation: 'शिक्षा',
      navProjects: 'प्रोजेक्ट',
      navSkills: 'कौशल',
      navContact: 'संपर्क',
      contactDetails: 'संपर्क विवरण',
      langChange: 'भाषा बदलें',
      menuToggle: 'मेनू',
      heroEyebrow: 'नमस्ते, मैं हूँ',
      heroRole: 'BCA छात्र और साइबर सुरक्षा पेशेवर बनने का इच्छुक',
      heroDesc: 'मैं BCA का छात्र हूँ। मुझे वेबसाइट बनाना और यह समझना अच्छा लगता है कि सिस्टम कैसे काम करते हैं। अभी मैं वेब डेवलपमेंट, प्रोग्रामिंग और साइबर सुरक्षा में अपने कौशल बढ़ा रहा हूँ।',
      heroProjects: 'प्रोजेक्ट देखें',
      heroContact: 'मुझसे संपर्क करें',
      aboutTitle: 'मेरे बारे में',
      aboutP1: 'मैं बिबेक आचार्य हूँ, SRM यूनिवर्सिटी सिक्किम में BCA का छात्र। मेरी पृष्ठभूमि वोकेशनल आईटी की है और मुझे कंप्यूटर, प्रोग्रामिंग, वेब डेवलपमेंट और साइबर सुरक्षा के बारे में सीखना अच्छा लगता है।',
      aboutP2: 'मैं सिर्फ़ सिद्धांत पढ़कर नहीं, चीज़ें बनाकर सबसे अच्छा सीखता हूँ। अभी मैं छोटे प्रोजेक्ट के ज़रिए वेब तकनीक, प्रोग्रामिंग, UI/UX और साइबर सुरक्षा को समझ रहा हूँ।',
      aboutP3: 'मेरा दीर्घकालिक लक्ष्य साइबर सुरक्षा में करियर बनाना है। मैं भारत में पेशेवर अनुभव हासिल करना चाहता हूँ और आगे चलकर विदेश में अवसर तलाशना चाहता हूँ।',
      factLocationLabel: 'स्थान:',
      factLocation: 'सिक्किम, भारत',
      factEducationLabel: 'शिक्षा:',
      factEducation: 'BCA, SRM यूनिवर्सिटी सिक्किम',
      factFocusLabel: 'रुचि का क्षेत्र:',
      factFocus: 'साइबर सुरक्षा, वेब डेवलपमेंट, UI/UX',
      factLanguagesLabel: 'भाषाएँ:',
      factLanguages: 'अंग्रेज़ी, हिन्दी, नेपाली',
      educationTitle: 'शिक्षा',
      eduBcaDate: 'वर्तमान',
      eduBcaTitle: 'बैचलर ऑफ कंप्यूटर एप्लिकेशन्स (BCA)',
      eduBcaOrg: 'SRM यूनिवर्सिटी सिक्किम',
      eduBcaDesc: 'मैं प्रोग्रामिंग, वेब डेवलपमेंट और साइबर सुरक्षा पढ़ रहा हूँ, और कोर्स के साथ छोटे प्रोजेक्ट भी बना रहा हूँ।',
      eduVocDate: '2026',
      eduVocTitle: 'वोकेशनल आईटी',
      eduVocOrg: 'Central Pendam Sr.Sec School',
      eduVocDesc: 'वेब डेवलपमेंट की बुनियादी बातें, Java और SQL के साथ डेटाबेस मैनेजमेंट सीखा।',
      projectsTitle: 'चुनिंदा प्रोजेक्ट',
      project1Title: 'व्यक्तिगत पोर्टफोलियो वेबसाइट',
      project1Desc: 'एक व्यक्तिगत पोर्टफोलियो वेबसाइट, जहाँ मैं अपने प्रोजेक्ट, अपनी सीखने की यात्रा और तकनीक में अपनी रुचि साझा करता हूँ।',
      project2Title: 'प्रोग्रामिंग और नेटवर्किंग प्रोजेक्ट',
      project2Desc: 'प्रोग्रामिंग, नेटवर्किंग और कंप्यूटर सिस्टम की बुनियादी बातें सीखते समय बनाए गए छोटे प्रोजेक्ट और प्रयोग।',
      screenshotSlot: 'स्क्रीनशॉट जल्द जोड़ा जाएगा',
      skillsTitle: 'कौशल',
      skillsIntro: 'वे तकनीकें और विषय जिन्हें मैं सीख रहा हूँ और जिन पर काम कर रहा हूँ।',
      skillsWeb: 'वेब डेवलपमेंट',
      skillsProgramming: 'प्रोग्रामिंग',
      skillsExploring: 'इन्हें भी सीख रहा हूँ',
      skillNetworking: 'नेटवर्किंग',
      skillCyber: 'साइबर सुरक्षा',
      skillsEditing: 'एडिटिंग',
      skillVideo: 'वीडियो एडिटिंग',
      skillDocumentary: 'डॉक्यूमेंट्री',
      skillMotion: 'मोशन ग्राफ़िक्स',
      skillAnime: 'एनीमे एडिट्स',
      contactTitle: 'संपर्क',
      contactIntro: 'आप मुझे मेरे प्रोजेक्ट, वेब डेवलपमेंट या साइबर सुरक्षा के बारे में संदेश भेज सकते हैं। यह फ़ॉर्म आपका ईमेल ऐप खोलता है, जिसमें संदेश भेजने के लिए तैयार रहता है।',
      labelName: 'नाम',
      labelEmail: 'आपका ईमेल',
      labelMessage: 'संदेश',
      formSubmit: 'ईमेल ऐप में खोलें',
      formOpened: 'आपका ईमेल ऐप अब खुलना चाहिए। न खुले तो कृपया मुझे सीधे ईमेल करें।',
      formNoEmail: 'संपर्क ईमेल पता अभी सेट नहीं किया गया है।',
      footerNav: 'फ़ुटर',
      footerContactTitle: 'संपर्क विवरण',
      footerEmailLabel: 'ईमेल:',
      footerPrivacy: 'गोपनीयता नीति',
      footerTerms: 'नियम और शर्तें'
    },

    ne: {
      title: 'बिबेक आचार्य | पोर्टफोलियो',
      description: 'बिबेक आचार्यको पोर्टफोलियो। उनी BCA का विद्यार्थी हुन् र साइबर सुरक्षा, वेब डेभलपमेन्ट, UI/UX र प्रविधिमा रुचि राख्छन्।',
      skipLink: 'मुख्य सामग्रीमा जानुहोस्',
      mainNav: 'मुख्य नेभिगेसन',
      navHome: 'गृहपृष्ठ',
      navAbout: 'परिचय',
      navEducation: 'शिक्षा',
      navProjects: 'परियोजना',
      navSkills: 'सीप',
      navContact: 'सम्पर्क',
      contactDetails: 'सम्पर्क विवरण',
      langChange: 'भाषा परिवर्तन गर्नुहोस्',
      menuToggle: 'मेनु',
      heroEyebrow: 'नमस्ते, म',
      heroRole: 'BCA का विद्यार्थी र साइबर सुरक्षा पेशेवर बन्न चाहने',
      heroDesc: 'म BCA को विद्यार्थी हुँ। मलाई वेबसाइट बनाउन र प्रणालीहरू कसरी काम गर्छन् भनेर सिक्न मन पर्छ। अहिले म वेब डेभलपमेन्ट, प्रोग्रामिङ र साइबर सुरक्षामा आफ्ना सीपहरू बढाउँदै छु।',
      heroProjects: 'परियोजना हेर्नुहोस्',
      heroContact: 'मलाई सम्पर्क गर्नुहोस्',
      aboutTitle: 'मेरो बारेमा',
      aboutP1: 'म बिबेक आचार्य, SRM युनिभर्सिटी सिक्किममा BCA को विद्यार्थी हुँ। मेरो पृष्ठभूमि भोकेसनल आईटीको हो र मलाई कम्प्युटर, प्रोग्रामिङ, वेब डेभलपमेन्ट र साइबर सुरक्षाबारे सिक्न मन पर्छ।',
      aboutP2: 'म सिद्धान्त मात्र पढेर होइन, चीजहरू बनाएर सबैभन्दा राम्रोसँग सिक्छु। अहिले म साना परियोजनामार्फत वेब प्रविधि, प्रोग्रामिङ, UI/UX र साइबर सुरक्षा अन्वेषण गरिरहेको छु।',
      aboutP3: 'मेरो दीर्घकालीन लक्ष्य साइबर सुरक्षामा करियर बनाउनु हो। म भारतमा पेशेवर अनुभव हासिल गर्न चाहन्छु र पछि विदेशमा अवसरहरू खोज्न चाहन्छु।',
      factLocationLabel: 'स्थान:',
      factLocation: 'सिक्किम, भारत',
      factEducationLabel: 'शिक्षा:',
      factEducation: 'BCA, एसआरएम युनिभर्सिटी सिक्किम',
      factFocusLabel: 'रुचिको क्षेत्र:',
      factFocus: 'साइबर सुरक्षा, वेब डेभलपमेन्ट, UI/UX',
      factLanguagesLabel: 'भाषाहरू:',
      factLanguages: 'अंग्रेजी, हिन्दी, नेपाली',
      educationTitle: 'शिक्षा',
      eduBcaDate: 'हाल',
      eduBcaTitle: 'बैचलर अफ कम्प्युटर एप्लिकेसन्स (BCA)',
      eduBcaOrg: 'एसआरएम युनिभर्सिटी सिक्किम',
      eduBcaDesc: 'म प्रोग्रामिङ, वेब डेभलपमेन्ट र साइबर सुरक्षा पढ्दैछु, र कोर्ससँगै साना परियोजनाहरू पनि बनाउँदैछु।',
      eduVocDate: '2026',
      eduVocTitle: 'भोकेसनल आईटी',
      eduVocOrg: 'Central Pendam Sr.Sec School',
      eduVocDesc: 'वेब डेभलपमेन्टको आधारभूत कुरा, Java र SQL सँग डेटाबेस व्यवस्थापन सिकें।',
      projectsTitle: 'चयन गरिएका परियोजनाहरू',
      project1Title: 'व्यक्तिगत पोर्टफोलियो वेबसाइट',
      project1Desc: 'एउटा व्यक्तिगत पोर्टफोलियो वेबसाइट, जहाँ म आफ्ना परियोजना, आफ्नो सिकाइ र प्रविधिप्रतिको रुचि साझा गर्छु।',
      project2Title: 'प्रोग्रामिङ र नेटवर्किङ परियोजनाहरू',
      project2Desc: 'प्रोग्रामिङ, नेटवर्किङ र कम्प्युटर प्रणालीका आधारभूत कुरा सिक्ने क्रममा बनाइएका साना परियोजना र प्रयोगहरू।',
      screenshotSlot: 'स्क्रिनसट छिट्टै थपिनेछ',
      skillsTitle: 'सीपहरू',
      skillsIntro: 'मैले सिक्दै र काम गर्दै गरेका प्रविधि र विषयहरू।',
      skillsWeb: 'वेब डेभलपमेन्ट',
      skillsProgramming: 'प्रोग्रामिङ',
      skillsExploring: 'यी पनि सिक्दै छु',
      skillNetworking: 'नेटवर्किङ',
      skillCyber: 'साइबर सुरक्षा',
      skillsEditing: 'सम्पादन',
      skillVideo: 'भिडियो सम्पादन',
      skillDocumentary: 'डक्युमेन्ट्री',
      skillMotion: 'मोसन ग्राफिक्स',
      skillAnime: 'एनिमे एडिट्स',
      contactTitle: 'सम्पर्क',
      contactIntro: 'तपाईं मलाई मेरा परियोजना, वेब डेभलपमेन्ट वा साइबर सुरक्षाबारे सन्देश पठाउन सक्नुहुन्छ। यो फारमले तपाईंको इमेल एप खोल्छ र सन्देश पठाउन तयार हुन्छ।',
      labelName: 'नाम',
      labelEmail: 'तपाईंको इमेल',
      labelMessage: 'सन्देश',
      formSubmit: 'इमेल एपमा खोल्नुहोस्',
      formOpened: 'तपाईंको इमेल एप अब खुल्नुपर्छ। नखुले कृपया मलाई सिधै इमेल गर्नुहोस्।',
      formNoEmail: 'सम्पर्क इमेल ठेगाना अहिलेसम्म सेट गरिएको छैन।',
      footerNav: 'फुटर',
      footerContactTitle: 'सम्पर्क विवरण',
      footerEmailLabel: 'इमेल:',
      footerPrivacy: 'गोपनीयता नीति',
      footerTerms: 'नियम तथा सर्तहरू'
    }
  };

  const STORAGE_KEY = 'portfolio-language';
  const NAV_QUERY = '(max-width: 860px)';

  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

  let currentLang = 'en';

  const t = (key) => {
    const dict = translations[currentLang] || translations.en;
    return dict[key] !== undefined ? dict[key] : translations.en[key];
  };

  const hamburger = $('.hamburger');
  const navLinks = $('#nav-links');
  const navQuery = window.matchMedia(NAV_QUERY);

  const setMenu = (open) => {
    if (!hamburger || !navLinks) return;
    hamburger.setAttribute('aria-expanded', String(open));
    navLinks.classList.toggle('is-open', open);
  };

  const menuIsOpen = () => hamburger && hamburger.getAttribute('aria-expanded') === 'true';

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      closeLangMenu();
      setMenu(!menuIsOpen());
    });

    navLinks.addEventListener('click', (event) => {
      if (event.target.closest('a')) setMenu(false);
    });

    const onBreakpointChange = () => setMenu(false);
    if (navQuery.addEventListener) {
      navQuery.addEventListener('change', onBreakpointChange);
    } else {
      navQuery.addListener(onBreakpointChange); // older Safari
    }
  }


  const langToggle = $('.lang-toggle');
  const langMenu = $('#lang-menu');
  const langLabel = $('#lang-label');
  const langButtons = $$('[data-lang]');
  const formStatus = $('#form-status');

  function openLangMenu() {
    if (!langToggle || !langMenu) return;
    setMenu(false);
    langMenu.hidden = false;
    langToggle.setAttribute('aria-expanded', 'true');
  }

  function closeLangMenu() {
    if (!langToggle || !langMenu) return;
    langMenu.hidden = true;
    langToggle.setAttribute('aria-expanded', 'false');
  }

  function applyLanguage(code) {
    if (!translations[code]) code = 'en';
    currentLang = code;

    $$('[data-i18n]').forEach((el) => {
      const value = t(el.dataset.i18n);
      if (value !== undefined) el.textContent = value;
    });

    $$('[data-i18n-attr]').forEach((el) => {
      el.dataset.i18nAttr.split(';').forEach((pair) => {
        const [attr, key] = pair.split(':').map((part) => part.trim());
        const value = t(key);
        if (attr && value !== undefined) el.setAttribute(attr, value);
      });
    });

    document.documentElement.lang = code;
    document.title = t('title');
    const meta = $('meta[name="description"]');
    if (meta) meta.setAttribute('content', t('description'));

    if (langLabel) langLabel.textContent = code.toUpperCase();
    langButtons.forEach((button) => {
      if (button.dataset.lang === code) {
        button.setAttribute('aria-current', 'true');
      } else {
        button.removeAttribute('aria-current');
      }
    });

    if (formStatus) formStatus.textContent = '';
  }

  if (langToggle && langMenu) {
    langToggle.addEventListener('click', () => {
      if (langMenu.hidden) {
        openLangMenu();
      } else {
        closeLangMenu();
      }
    });

    langButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const code = button.dataset.lang;
        applyLanguage(code);
        try {
          localStorage.setItem(STORAGE_KEY, code);
        } catch (error) {
    
        }
        closeLangMenu();
        langToggle.focus();
      });
    });
  }

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;
    if (menuIsOpen()) {
      setMenu(false);
      hamburger.focus();
    }
    if (langMenu && !langMenu.hidden) {
      closeLangMenu();
      langToggle.focus();
    }
  });

  document.addEventListener('click', (event) => {
    if (!event.target.closest('.nav-row')) setMenu(false);
    if (!event.target.closest('.lang')) closeLangMenu();
  });


  let savedLang = 'en';
  try {
    savedLang = localStorage.getItem(STORAGE_KEY) || 'en';
  } catch (error) {
    savedLang = 'en';
  }
  applyLanguage(savedLang);


  const sectionIds = ['home', 'about', 'education', 'projects', 'skills', 'contact'];
  const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);

  if ('IntersectionObserver' in window && sections.length) {
    const linkFor = new Map();
    $$('.nav-links a').forEach((link) => linkFor.set(link.hash.slice(1), link));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          linkFor.forEach((link) => link.removeAttribute('aria-current'));
          const active = linkFor.get(entry.target.id);
          if (active) active.setAttribute('aria-current', 'true');
        });
      },
      { rootMargin: '-35% 0px -60% 0px' }
    );

    sections.forEach((section) => observer.observe(section));
  }

  const form = $('#contact-form');

  if (form && formStatus) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const to = (form.getAttribute('action') || '').replace(/^mailto:/i, '').trim();
      if (!to || to.endsWith('@example.com')) {
        formStatus.textContent = t('formNoEmail');
        return;
      }

      const data = new FormData(form);
      const name = String(data.get('name') || '').trim();
      const email = String(data.get('email') || '').trim();
      const message = String(data.get('message') || '').trim();

      const subject = 'Message from the portfolio website: ' + name;
      const body = message + '\n\n' + name + '\n' + email;

      window.location.href =
        'mailto:' + to +
        '?subject=' + encodeURIComponent(subject) +
        '&body=' + encodeURIComponent(body);

      formStatus.textContent = t('formOpened');
    });
  }
})();
