import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        about: 'About',
        services: 'Services',
        industries: 'Industries',
        contact: 'Contact',
        getQuote: 'Get Quote'
      },
      hero: {
        title: 'Professional Security Solutions Built for Absolute Protection',
        subtitle: 'Elite, technologically advanced security services for premium B2B and government clients in Saudi Arabia & the GCC.',
        ctaPrimary: 'Request Security Quote',
        ctaSecondary: 'Talk to an Expert'
      },
      home: {
        stats: {
          experience: 'Years Experience',
          personnel: 'Security Personnel',
          clients: 'Corporate Clients',
          ops: 'Operations Center'
        },
        services: {
          title: 'Absolute Protection Services',
          guards: 'Security Guards',
          vip: 'VIP Protection',
          event: 'Event Security',
          cctv: 'CCTV Monitoring',
          rapid: 'Rapid Response',
          audit: 'Audit & Risk'
        }
      },
      trust: {
        licensed: 'Licensed',
        trained: 'Professionally Trained',
        ops: '24/7 Operations',
        response: 'Rapid Response'
      }
    }
  },
  ar: {
    translation: {
      nav: {
        home: 'الرئيسية',
        about: 'من نحن',
        services: 'خدماتنا',
        industries: 'القطاعات',
        contact: 'اتصل بنا',
        getQuote: 'اطلب عرض سعر'
      },
      hero: {
        title: 'حلول أمنية احترافية بنيت للحماية المطلقة',
        subtitle: 'خدمات أمنية نخبوية ومتقدمة تقنياً لعملاء الشركات والقطاع الحكومي في المملكة العربية السعودية ودول الخليج.',
        ctaPrimary: 'اطلب عرض سعر أمني',
        ctaSecondary: 'تحدث مع خبير'
      },
      home: {
        stats: {
          experience: 'سنة خبرة',
          personnel: 'فرد أمن',
          clients: 'عميل شركات',
          ops: 'مركز عمليات'
        },
        services: {
          title: 'خدمات الحماية المطلقة',
          guards: 'حراس أمن',
          vip: 'حماية كبار الشخصيات',
          event: 'تأمين الفعاليات',
          cctv: 'مراقبة الكاميرات',
          rapid: 'استجابة سريعة',
          audit: 'تدقيق ومخاطر'
        }
      },
      trust: {
        licensed: 'مرخص نظامياً',
        trained: 'كوادر مدربة',
        ops: 'عمليات 24/7',
        response: 'استجابة سريعة'
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
