'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import {
  getStoredConsent,
  setStoredConsent,
  type ConsentCategories,
} from '@/lib/consent'

type Prefs = Omit<ConsentCategories, 'essential'>

function updateGtag(prefs: Prefs) {
  if (typeof window === 'undefined') return
  const w = window as Window & { gtag?: (...args: unknown[]) => void }
  if (!w.gtag) return
  w.gtag('consent', 'update', {
    analytics_storage: prefs.analytics ? 'granted' : 'denied',
    ad_storage: prefs.marketing ? 'granted' : 'denied',
    ad_user_data: prefs.marketing ? 'granted' : 'denied',
    ad_personalization: prefs.marketing ? 'granted' : 'denied',
  })
}

const defaultPrefs: Prefs = {
  analytics: false,
  functional: true,
  marketing: false,
}

export function ConsentBanner() {
  const [bannerVisible, setBannerVisible] = useState(false)
  const [preferencesOpen, setPreferencesOpen] = useState(false)
  const [prefs, setPrefs] = useState<Prefs>(defaultPrefs)
  const [isRtl, setIsRtl] = useState(false)
  const [locale, setLocale] = useState<'en' | 'ar'>('en')

  useEffect(() => {
    const dir = document.documentElement.dir
    const lang = document.documentElement.lang
    setIsRtl(dir === 'rtl')
    setLocale(lang === 'ar' ? 'ar' : 'en')

    const stored = getStoredConsent()
    if (stored) {
      updateGtag({
        analytics: stored.categories.analytics,
        functional: stored.categories.functional,
        marketing: stored.categories.marketing,
      })
      setBannerVisible(false)
    } else if (sessionStorage.getItem('djobs_banner_dismissed')) {
      setBannerVisible(false)
    } else {
      setBannerVisible(true)
    }

    const openHandler = () => setPreferencesOpen(true)
    window.addEventListener('djobs:open-consent', openHandler)
    return () => window.removeEventListener('djobs:open-consent', openHandler)
  }, [])

  const dismissBanner = () => {
    sessionStorage.setItem('djobs_banner_dismissed', '1')
    setBannerVisible(false)
  }

  const acceptAll = () => {
    const all: Prefs = { analytics: true, functional: true, marketing: true }
    setStoredConsent(all)
    updateGtag(all)
    setBannerVisible(false)
    setPreferencesOpen(false)
  }

  const rejectNonEssential = () => {
    const minimal: Prefs = { analytics: false, functional: true, marketing: false }
    setStoredConsent(minimal)
    updateGtag(minimal)
    setBannerVisible(false)
    setPreferencesOpen(false)
  }

  const savePreferences = () => {
    setStoredConsent(prefs)
    updateGtag(prefs)
    setBannerVisible(false)
    setPreferencesOpen(false)
  }

  const en = {
    title: 'Your Privacy Choices',
    message:
      'We use cookies and similar technologies to improve your experience, analyse site usage, and personalise content. You can choose which categories to allow.',
    acceptAll: 'Accept All',
    rejectNonEssential: 'Reject Non-Essential',
    managePreferences: 'Manage Preferences',
    privacyPolicy: 'Privacy Policy',
    cookiePolicy: 'Cookie Policy',
    prefTitle: 'Cookie Preferences',
    savePreferences: 'Save Preferences',
    close: 'Close',
    categories: {
      essential: { name: 'Essential', desc: 'Required for the website to function correctly. Cannot be disabled.' },
      analytics: { name: 'Analytics', desc: 'Help us understand how visitors interact with our site (Google Analytics). Anonymised data only.' },
      functional: { name: 'Functional', desc: 'Remember your preferences such as language selection.' },
      marketing: { name: 'Marketing', desc: 'Currently not in use. Reserved for future targeted content or advertising.' },
    },
    alwaysOn: 'Always On',
  }

  const ar = {
    title: 'خيارات الخصوصية',
    message:
      'نستخدم ملفات الارتباط وتقنيات مشابهة لتحسين تجربتك وتحليل استخدام الموقع وتخصيص المحتوى. يمكنك اختيار الفئات التي تسمح بها.',
    acceptAll: 'قبول الكل',
    rejectNonEssential: 'رفض غير الأساسية',
    managePreferences: 'إدارة التفضيلات',
    privacyPolicy: 'سياسة الخصوصية',
    cookiePolicy: 'سياسة ملفات الارتباط',
    prefTitle: 'تفضيلات ملفات الارتباط',
    savePreferences: 'حفظ التفضيلات',
    close: 'إغلاق',
    categories: {
      essential: { name: 'الأساسية', desc: 'ضرورية لعمل الموقع بشكل صحيح. لا يمكن تعطيلها.' },
      analytics: { name: 'التحليل', desc: 'تساعدنا على فهم كيفية تفاعل الزوار مع الموقع (Google Analytics). بيانات مجهولة فقط.' },
      functional: { name: 'الوظيفية', desc: 'تتذكر تفضيلاتك مثل اختيار اللغة.' },
      marketing: { name: 'التسويق', desc: 'غير مستخدمة حالياً. محجوزة للمحتوى المستهدف أو الإعلانات مستقبلاً.' },
    },
    alwaysOn: 'دائمًا مفعّل',
  }

  const t = locale === 'ar' ? ar : en
  const policyLocale = locale
  const dir = isRtl ? 'rtl' : 'ltr'

  return (
    <>
      {/* Consent Banner */}
      {bannerVisible && (
        <div
          dir={dir}
          role="dialog"
          aria-modal="true"
          aria-label={t.title}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="max-w-3xl mx-auto bg-[#0e0e1c] border border-[rgba(255,255,255,0.07)] rounded-2xl p-6 shadow-2xl">
            <div className="flex items-start justify-between gap-4 mb-2">
              <h2 className="text-base font-bold text-[#f0f0fa] font-sans">{t.title}</h2>
              <button
                onClick={dismissBanner}
                aria-label={t.close}
                className="flex-shrink-0 text-[#5a5a7a] hover:text-[#f0f0fa] transition-colors mt-0.5"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
            <p className="text-sm text-[#9898b8] leading-relaxed mb-4">{t.message}</p>
            <div className="flex items-center gap-2 mb-4 text-xs font-mono">
              <Link href={`/${policyLocale}/privacy-policy`} className="text-[#5a5a7a] hover:text-[#9898b8] transition-colors underline underline-offset-2">
                {t.privacyPolicy}
              </Link>
              <span className="text-[#3a3a5a]">·</span>
              <Link href={`/${policyLocale}/cookie-policy`} className="text-[#5a5a7a] hover:text-[#9898b8] transition-colors underline underline-offset-2">
                {t.cookiePolicy}
              </Link>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={acceptAll}
                className="px-4 py-2 rounded-lg bg-[#00c6ff] text-[#080810] text-sm font-bold font-mono hover:bg-[#22d4ff] transition-colors"
              >
                {t.acceptAll}
              </button>
              <button
                onClick={rejectNonEssential}
                className="px-4 py-2 rounded-lg border border-[rgba(255,255,255,0.1)] text-[#9898b8] text-sm font-mono hover:text-[#f0f0fa] hover:border-[rgba(255,255,255,0.2)] transition-colors"
              >
                {t.rejectNonEssential}
              </button>
              <button
                onClick={() => setPreferencesOpen(true)}
                className="px-4 py-2 rounded-lg border border-[rgba(255,255,255,0.1)] text-[#9898b8] text-sm font-mono hover:text-[#f0f0fa] hover:border-[rgba(255,255,255,0.2)] transition-colors"
              >
                {t.managePreferences}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Preference Center Modal */}
      {preferencesOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={t.prefTitle}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-[#080810]/80 backdrop-blur-sm"
            onClick={() => setPreferencesOpen(false)}
          />
          {/* Panel */}
          <div
            dir={dir}
            className="relative bg-[#0e0e1c] border border-[rgba(255,255,255,0.07)] rounded-2xl p-6 w-full max-w-lg shadow-2xl max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-base font-bold text-[#f0f0fa] font-sans">{t.prefTitle}</h2>
              <button
                onClick={() => setPreferencesOpen(false)}
                className="text-[#5a5a7a] hover:text-[#f0f0fa] transition-colors font-mono text-sm"
                aria-label={t.close}
              >
                ✕
              </button>
            </div>

            <div className="flex flex-col gap-4 mb-6">
              {/* Essential */}
              <div className="flex items-start justify-between gap-4 p-4 bg-[#141428] rounded-xl border border-[rgba(255,255,255,0.05)]">
                <div>
                  <p className="text-sm font-bold text-[#f0f0fa] font-sans mb-1">{t.categories.essential.name}</p>
                  <p className="text-xs text-[#9898b8] leading-relaxed">{t.categories.essential.desc}</p>
                </div>
                <span className="text-xs font-mono text-[#00c6ff] whitespace-nowrap mt-1">{t.alwaysOn}</span>
              </div>

              {/* Analytics */}
              <div className="flex items-start justify-between gap-4 p-4 bg-[#141428] rounded-xl border border-[rgba(255,255,255,0.05)]">
                <div>
                  <p className="text-sm font-bold text-[#f0f0fa] font-sans mb-1">{t.categories.analytics.name}</p>
                  <p className="text-xs text-[#9898b8] leading-relaxed">{t.categories.analytics.desc}</p>
                </div>
                <Toggle
                  checked={prefs.analytics}
                  onChange={(v) => setPrefs(p => ({ ...p, analytics: v }))}
                />
              </div>

              {/* Functional */}
              <div className="flex items-start justify-between gap-4 p-4 bg-[#141428] rounded-xl border border-[rgba(255,255,255,0.05)]">
                <div>
                  <p className="text-sm font-bold text-[#f0f0fa] font-sans mb-1">{t.categories.functional.name}</p>
                  <p className="text-xs text-[#9898b8] leading-relaxed">{t.categories.functional.desc}</p>
                </div>
                <Toggle
                  checked={prefs.functional}
                  onChange={(v) => setPrefs(p => ({ ...p, functional: v }))}
                />
              </div>

              {/* Marketing */}
              <div className="flex items-start justify-between gap-4 p-4 bg-[#141428] rounded-xl border border-[rgba(255,255,255,0.05)]">
                <div>
                  <p className="text-sm font-bold text-[#f0f0fa] font-sans mb-1">{t.categories.marketing.name}</p>
                  <p className="text-xs text-[#9898b8] leading-relaxed">{t.categories.marketing.desc}</p>
                </div>
                <Toggle
                  checked={prefs.marketing}
                  onChange={(v) => setPrefs(p => ({ ...p, marketing: v }))}
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={savePreferences}
                className="px-4 py-2 rounded-lg bg-[#00c6ff] text-[#080810] text-sm font-bold font-mono hover:bg-[#22d4ff] transition-colors"
              >
                {t.savePreferences}
              </button>
              <button
                onClick={acceptAll}
                className="px-4 py-2 rounded-lg border border-[rgba(255,255,255,0.1)] text-[#9898b8] text-sm font-mono hover:text-[#f0f0fa] transition-colors"
              >
                {t.acceptAll}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

function Toggle({ checked, onChange }: { checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <button
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={`relative inline-flex h-6 w-11 flex-shrink-0 rounded-full border-2 transition-colors duration-200 focus:outline-none ${
        checked
          ? 'bg-[#00c6ff] border-[#00c6ff]'
          : 'bg-[#1e1e38] border-[rgba(255,255,255,0.1)]'
      }`}
    >
      <span
        className={`pointer-events-none inline-block h-4 w-4 rounded-full bg-white shadow transform transition-transform duration-200 mt-[1px] ${
          checked ? 'translate-x-5' : 'translate-x-0.5'
        }`}
      />
    </button>
  )
}
