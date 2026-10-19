type LegalSection = {
  heading: string
  content: string | string[]
}

type LegalDoc = {
  title: string
  lastUpdated: string
  effectiveDate: string
  sections: LegalSection[]
}

const DISCLAIMER =
  'This policy was drafted for general compliance guidance. We recommend seeking qualified legal advice before relying on this policy for legal purposes.'

export function privacyPolicy(locale: 'en' | 'ar'): LegalDoc {
  if (locale === 'ar') {
    return {
      title: 'سياسة الخصوصية',
      lastUpdated: '٦ يونيو ٢٠٢٦',
      effectiveDate: '٦ يونيو ٢٠٢٦',
      sections: [
        {
          heading: 'مقدمة',
          content:
            'يلتزم موقع djobs.net بحماية خصوصيتك. توضح هذه السياسة كيفية جمع بياناتك الشخصية واستخدامها وحمايتها. ملاحظة: هذه السياسة أُعدّت لأغراض الاسترشاد العام بمتطلبات الامتثال، وننصح بالاستعانة بمستشار قانوني متخصص قبل الاعتماد عليها لأغراض قانونية.',
        },
        {
          heading: 'البيانات التي نجمعها',
          content: [
            'بيانات التحليل: يستخدم الموقع Google Analytics (GA4) لجمع بيانات مجهولة الهوية تشمل الصفحات المُزارة ومصدر الزيارة والبيانات الجغرافية التقريبية.',
            'بيانات نموذج الاتصال: عند تواصلك معنا، نجمع اسمك وعنوان بريدك الإلكتروني وتفاصيل رسالتك.',
            'بيانات النشرة البريدية: عند الاشتراك، نجمع عنوان بريدك الإلكتروني ونحتفظ به عبر Supabase.',
          ],
        },
        {
          heading: 'الأسس القانونية للمعالجة',
          content: [
            'الموافقة: نعالج بيانات التحليل والتسويق بناءً على موافقتك الصريحة عبر أداة إدارة الموافقة.',
            'المصلحة المشروعة: نعالج بيانات التحليل الأساسية لتحسين الموقع وتجربة المستخدمين.',
            'الالتزام التعاقدي: نعالج البيانات اللازمة للرد على استفساراتك وطلبات الخدمة.',
          ],
        },
        {
          heading: 'حقوقك',
          content: [
            'حق الوصول: يمكنك طلب نسخة من بياناتك الشخصية المحتفظ بها لدينا.',
            'حق التصحيح: يمكنك طلب تصحيح أي بيانات غير دقيقة.',
            'حق الحذف: يمكنك طلب حذف بياناتك الشخصية في حالات معينة.',
            'حق النقل: يمكنك طلب استلام بياناتك بصيغة منظمة وقابلة للقراءة آلياً.',
            'حق الاعتراض: يمكنك الاعتراض على معالجة بياناتك القائمة على المصلحة المشروعة.',
            'حق التقييد: يمكنك طلب تقييد معالجة بياناتك في ظروف معينة.',
          ],
        },
        {
          heading: 'الاحتفاظ بالبيانات',
          content:
            'تُحتفظ بيانات التحليل وفق سياسة Google Analytics الافتراضية (26 شهراً). تُحتفظ بيانات الاشتراك في النشرة البريدية طالما كنت مشتركاً. يمكنك إلغاء الاشتراك في أي وقت.',
        },
        {
          heading: 'النقل الدولي للبيانات',
          content:
            'قد تُعالَج بياناتك خارج منطقتك الجغرافية عبر مزودي الخدمة: Google Analytics (الولايات المتحدة)، وSupabase (الولايات المتحدة)، وResend (الولايات المتحدة). يلتزم هؤلاء المزودون بأطر نقل البيانات المعتمدة.',
        },
        {
          heading: 'التواصل معنا',
          content:
            'لممارسة أيٍّ من حقوقك أو للاستفسار عن هذه السياسة، تواصل معنا عبر: contact@djobs.net',
        },
      ],
    }
  }

  return {
    title: 'Privacy Policy',
    lastUpdated: 'June 6, 2026',
    effectiveDate: 'June 6, 2026',
    sections: [
      {
        heading: 'Introduction',
        content: `djobs.net is operated by Ahmed Djobs, an independent digital consultant. This Privacy Policy explains how we collect, use, and protect your personal data when you visit this website or engage with our services. ${DISCLAIMER}`,
      },
      {
        heading: 'Data We Collect',
        content: [
          'Analytics data: We use Google Analytics (GA4) to collect anonymised usage data including pages visited, referral source, approximate geographic location, device type, and session duration. This data does not directly identify you.',
          'Contact form data: When you contact us via email or through booking links, we collect your name, email address, and the content of your message.',
          'Newsletter data: When you subscribe to our newsletter, we collect your email address, which is stored via Supabase, our newsletter platform.',
          'Consent preferences: We store your cookie consent choices in your browser\'s localStorage under the key "djobs_consent_v1".',
        ],
      },
      {
        heading: 'Legal Bases for Processing',
        content: [
          'Consent (GDPR Art. 6(1)(a)): We process analytics, functional, and marketing data only where you have given explicit consent through our consent management tool.',
          'Legitimate interests (GDPR Art. 6(1)(f)): We process essential operational data (e.g. server logs, security monitoring) to maintain website security and performance.',
          'Contractual necessity (GDPR Art. 6(1)(b)): We process data you provide when inquiring about or engaging our consulting services.',
        ],
      },
      {
        heading: 'Your Rights',
        content: [
          'Right of access: You may request a copy of the personal data we hold about you.',
          'Right to rectification: You may request correction of inaccurate or incomplete personal data.',
          'Right to erasure ("right to be forgotten"): You may request deletion of your personal data where there is no compelling reason for its continued processing.',
          'Right to data portability: You may request your data in a structured, commonly used, machine-readable format.',
          'Right to object: You may object to processing based on legitimate interests or for direct marketing purposes.',
          'Right to restriction: You may request that we restrict processing of your data in certain circumstances.',
          'To exercise any of these rights, contact us at contact@djobs.net. We will respond within 30 days.',
        ],
      },
      {
        heading: 'Data Retention',
        content: [
          'Analytics data is retained according to Google Analytics default settings (26 months) and subject to your consent preferences.',
          'Newsletter subscription data is retained until you unsubscribe. You may unsubscribe at any time via the link in any newsletter email.',
          'Contact inquiry data is retained for as long as necessary to respond to and administer your inquiry.',
          'Consent preference records are stored in your browser\'s localStorage and persist until you clear your browser data or change your preferences.',
        ],
      },
      {
        heading: 'Third-Party Services',
        content: [
          'Google Analytics (Google LLC, USA): Website analytics. Google processes data under its own privacy policy and EU-US Data Privacy Framework.',
          'Supabase (Supabase Inc., USA): Newsletter subscription storage. Data is processed under Supabase\'s privacy policy.',
          'Resend (Resend Inc., USA): Transactional email delivery.',
          'Cal.com: Meeting scheduling. When you book a session, Cal.com processes your data under its own privacy policy.',
          'We do not sell personal data to any third party.',
        ],
      },
      {
        heading: 'International Data Transfers',
        content:
          'Our third-party service providers may process your data in countries outside your region, including the United States. These providers operate under approved transfer mechanisms such as Standard Contractual Clauses (SCCs) or the EU-US Data Privacy Framework.',
      },
      {
        heading: 'Cookies',
        content:
          'We use cookies and similar tracking technologies. For detailed information about the cookies we use and how to manage them, please see our Cookie Policy.',
      },
      {
        heading: 'Contact Us',
        content:
          'For any questions about this Privacy Policy or to exercise your data rights, please contact: contact@djobs.net. We aim to respond to all requests within 30 days.',
      },
    ],
  }
}

export function termsAndConditions(locale: 'en' | 'ar'): LegalDoc {
  if (locale === 'ar') {
    return {
      title: 'الشروط والأحكام',
      lastUpdated: '٦ يونيو ٢٠٢٦',
      effectiveDate: '٦ يونيو ٢٠٢٦',
      sections: [
        {
          heading: 'قبول الشروط',
          content:
            'باستخدامك لموقع djobs.net، فإنك توافق على الالتزام بهذه الشروط والأحكام. إذا كنت لا توافق عليها، يُرجى التوقف عن استخدام الموقع. ملاحظة: هذه الشروط أُعدّت لأغراض الاسترشاد العام، وننصح بالاستعانة بمستشار قانوني متخصص قبل الاعتماد عليها.',
        },
        {
          heading: 'طبيعة الموقع',
          content:
            'يُقدّم موقع djobs.net معلومات إعلامية وتعريفية عن خدمات الاستشارات التي يقدمها أحمد جوبس بصفته مستشاراً مستقلاً. المحتوى المنشور على الموقع ذو طابع إعلامي عام، ولا يُشكّل نصيحة مهنية أو قانونية أو مالية ملزمة.',
        },
        {
          heading: 'حقوق الملكية الفكرية',
          content: [
            'جميع محتويات الموقع — بما تشمل النصوص والمقالات والتصاميم والشعارات والرسوم — مملوكة لأحمد جوبس / djobs.net وهي محمية بقوانين حقوق النشر الدولية.',
            'يُحظر إعادة نشر أو نسخ أو توزيع أي محتوى دون إذن مسبق وصريح بالكتابة.',
            'يُسمح باقتباس فقرات قصيرة بشرط الإشارة الصريحة إلى المصدر مع رابط للموقع.',
          ],
        },
        {
          heading: 'إخلاء المسؤولية',
          content: [
            'المحتوى على الموقع يُقدَّم "كما هو" دون أي ضمانات، سواء صريحة أو ضمنية.',
            'لا يتحمل أحمد جوبس أو djobs.net مسؤولية أي أضرار مباشرة أو غير مباشرة تنتج عن استخدام الموقع أو الاعتماد على محتواه.',
            'الارتباطات بمواقع خارجية لا تعني التأييد أو الموافقة على محتواها.',
          ],
        },
        {
          heading: 'شروط الاستخدام',
          content: [
            'يُحظر استخدام الموقع لأي غرض غير مشروع أو ضار.',
            'يُحظر محاولة الوصول غير المصرح به إلى أي جزء من أجزاء الموقع أو أنظمته.',
            'يحق لنا تعليق أو إنهاء وصولك في حال مخالفة هذه الشروط.',
          ],
        },
        {
          heading: 'التعديلات',
          content:
            'نحتفظ بالحق في تعديل هذه الشروط في أي وقت. يُعدّ استمرارك في استخدام الموقع بعد نشر التعديلات قبولاً ضمنياً لها.',
        },
        {
          heading: 'التواصل',
          content: 'للاستفسارات المتعلقة بهذه الشروط: contact@djobs.net',
        },
      ],
    }
  }

  return {
    title: 'Terms and Conditions',
    lastUpdated: 'June 6, 2026',
    effectiveDate: 'June 6, 2026',
    sections: [
      {
        heading: 'Acceptance of Terms',
        content: `By accessing or using djobs.net, you agree to be bound by these Terms and Conditions. If you do not agree, please discontinue use of the website. ${DISCLAIMER}`,
      },
      {
        heading: 'Nature of This Website',
        content:
          'djobs.net is a professional portfolio and informational website operated by Ahmed Djobs, an independent digital consultant. Content published on this site is for informational purposes only and does not constitute professional legal, financial, or technical advice. Any consulting engagement requires a separate written agreement.',
      },
      {
        heading: 'Intellectual Property',
        content: [
          'All content on this website — including but not limited to articles, insights, design elements, logos, graphics, and copy — is owned by Ahmed Djobs / djobs.net and is protected by applicable copyright and intellectual property laws.',
          'You may not reproduce, distribute, republish, or transmit any content from this website without prior written permission.',
          'Short quotations for non-commercial purposes are permitted provided clear attribution is given with a link back to the original content on djobs.net.',
        ],
      },
      {
        heading: 'Consulting Disclaimer',
        content: [
          'The insights, articles, and commentary published on this website are provided for general informational purposes only. They do not constitute professional advice of any kind.',
          'Formal consulting engagements are governed exclusively by separate written agreements between Ahmed Djobs and the client. No obligation arises from website content alone.',
          'Ahmed Djobs makes no warranty that information on this website is current, complete, or accurate at any given time.',
        ],
      },
      {
        heading: 'Limitation of Liability',
        content: [
          'To the fullest extent permitted by law, Ahmed Djobs and djobs.net shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of, or reliance on, this website or its content.',
          'This includes, without limitation, loss of data, loss of revenue, or business interruption.',
          'djobs.net is not responsible for the content of any third-party websites linked from this site.',
        ],
      },
      {
        heading: 'Third-Party Services',
        content: [
          'This website uses Google Analytics for anonymised usage analytics, subject to your consent preferences.',
          'Meeting bookings are handled via Cal.com, which operates under its own terms and privacy policy.',
          'Newsletter subscriptions are processed via Supabase and Resend, subject to their respective policies.',
          'We are not responsible for the availability, content, or practices of these third-party services.',
        ],
      },
      {
        heading: 'Acceptable Use',
        content: [
          'You agree not to use this website for any unlawful purpose or in any way that could damage, disable, or impair the website.',
          'Automated scraping, data harvesting, or any activity that places an unreasonable load on our servers is prohibited without prior written consent.',
          'We reserve the right to suspend or terminate your access if you breach these terms.',
        ],
      },
      {
        heading: 'Governing Law',
        content:
          'These Terms and Conditions are governed by generally accepted principles of international commercial law. Any disputes will be subject to good-faith negotiation as a first resort.',
      },
      {
        heading: 'Changes to These Terms',
        content:
          'We reserve the right to modify these Terms at any time. Changes are effective immediately upon posting. Your continued use of the website constitutes acceptance of the revised Terms.',
      },
      {
        heading: 'Contact',
        content:
          'For any questions regarding these Terms, contact: contact@djobs.net',
      },
    ],
  }
}

export function cookiePolicy(locale: 'en' | 'ar'): LegalDoc {
  if (locale === 'ar') {
    return {
      title: 'سياسة ملفات الارتباط (Cookies)',
      lastUpdated: '٦ يونيو ٢٠٢٦',
      effectiveDate: '٦ يونيو ٢٠٢٦',
      sections: [
        {
          heading: 'ما هي ملفات الارتباط؟',
          content:
            'ملفات الارتباط (Cookies) هي ملفات نصية صغيرة تُخزَّن في متصفحك عند زيارتك لمواقع الويب. تُستخدم لتحسين تجربتك وتذكر تفضيلاتك وجمع بيانات إحصائية. ملاحظة: هذه السياسة أُعدّت لأغراض الاسترشاد العام، وننصح بالاستعانة بمستشار قانوني متخصص قبل الاعتماد عليها.',
        },
        {
          heading: 'ملفات الارتباط الأساسية',
          content: [
            'ملف تفضيل اللغة: يحتفظ بتفضيل اللغة المحددة (العربية أو الإنجليزية) ومدته جلسة واحدة.',
            'ملف موافقة الخصوصية (djobs_consent_v1): يُخزَّن في localStorage ويحتفظ بتفضيلات الموافقة على ملفات الارتباط.',
          ],
        },
        {
          heading: 'ملفات الارتباط التحليلية',
          content: [
            '_ga: ملف Google Analytics الرئيسي لتمييز المستخدمين. مدته سنتان.',
            '_gid: يُعرّف المستخدمين لمدة 24 ساعة.',
            '_ga_[ID]: يحتفظ بحالة الجلسة لـ Google Analytics 4. مدته سنتان.',
            'تُفعَّل هذه الملفات فقط بموافقتك الصريحة. يمكنك سحب موافقتك في أي وقت من إعدادات الخصوصية.',
          ],
        },
        {
          heading: 'ملفات الارتباط الوظيفية',
          content:
            'تُستخدم ملفات الارتباط الوظيفية لتحسين تجربتك وتذكر تفضيلاتك مثل اللغة. حالياً هذه الملفات مدمجة في ملفات الارتباط الأساسية.',
        },
        {
          heading: 'ملفات الارتباط التسويقية',
          content:
            'لا نستخدم ملفات ارتباط تسويقية أو إعلانية حالياً. قد نضيف هذه الميزة مستقبلاً مع إخطارك المسبق.',
        },
        {
          heading: 'كيفية إدارة ملفات الارتباط',
          content: [
            'يمكنك إدارة تفضيلاتك عبر أداة إعدادات الخصوصية في الموقع.',
            'يمكنك أيضاً تعطيل ملفات الارتباط من إعدادات متصفحك، مع العلم أن ذلك قد يؤثر على بعض وظائف الموقع.',
          ],
        },
      ],
    }
  }

  return {
    title: 'Cookie Policy',
    lastUpdated: 'June 6, 2026',
    effectiveDate: 'June 6, 2026',
    sections: [
      {
        heading: 'What Are Cookies?',
        content: `Cookies are small text files placed on your device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners. ${DISCLAIMER}`,
      },
      {
        heading: 'Essential Cookies',
        content: [
          'Language preference: Stores your selected locale (en or ar) to maintain a consistent experience across pages. Duration: session / browser memory.',
          'Consent record (djobs_consent_v1): Stored in browser localStorage (not a cookie in the traditional sense, but serves the same purpose). Records your cookie consent choices. Duration: persistent until cleared by you.',
          'These cannot be disabled as they are necessary for the website to function.',
        ],
      },
      {
        heading: 'Analytics Cookies (Google Analytics)',
        content: [
          '_ga: The main Google Analytics cookie, used to distinguish users. Duration: 2 years.',
          '_gid: Used to identify users for 24 hours. Duration: 24 hours.',
          '_ga_[MEASUREMENT-ID]: Used to maintain session state for Google Analytics 4. Duration: 2 years.',
          'These cookies are only activated if you consent to analytics. You may withdraw consent at any time via the Privacy Settings link in the footer.',
        ],
      },
      {
        heading: 'Functional Cookies',
        content: [
          'Functional cookies enhance your experience by remembering choices you make (such as language preferences).',
          'Currently, functional preferences are managed as part of our essential session handling. No additional third-party functional cookies are set.',
        ],
      },
      {
        heading: 'Marketing Cookies',
        content: [
          'We do not currently use marketing or advertising cookies.',
          'Should we introduce marketing cookies in the future, we will update this policy and request your explicit consent before activating them.',
        ],
      },
      {
        heading: 'Managing Your Cookie Preferences',
        content: [
          'You can manage or withdraw your cookie consent at any time by clicking "Privacy Settings" in the footer of any page.',
          'You can also configure your browser to block or delete cookies. Note that blocking essential cookies may affect website functionality.',
          'For Google Analytics opt-out, you can use the Google Analytics Opt-out Browser Add-on available at tools.google.com/dlpage/gaoptout.',
        ],
      },
      {
        heading: 'Changes to This Policy',
        content:
          'We may update this Cookie Policy from time to time. The "Last Updated" date at the top of this page indicates when the policy was last revised.',
      },
      {
        heading: 'Contact',
        content:
          'For any questions about our use of cookies, contact: contact@djobs.net',
      },
    ],
  }
}
