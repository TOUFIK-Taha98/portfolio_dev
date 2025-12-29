'use client';

import { motion } from 'framer-motion';
import { Check, ShoppingCart, Globe, Zap, Package, Clock, RefreshCw } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

// Taux de conversion (base: Euro)
const CURRENCY_RATES = {
  EUR: 1,
  USD: 1.09, // 1 EUR = 1.09 USD
  SAR: 4.08, // 1 EUR = 4.08 SAR
};

// Symboles de devises
const CURRENCY_SYMBOLS = {
  fr: { symbol: '€', code: 'EUR' },
  en: { symbol: '$', code: 'USD' },
  ar: { symbol: 'ر.س', code: 'SAR' },
};

export default function Pricing() {
  const { t, language } = useLanguage();

  // Fonction pour convertir et formatter le prix
  const formatPrice = (priceInEur: number) => {
    const currency = CURRENCY_SYMBOLS[language as keyof typeof CURRENCY_SYMBOLS];
    const rate = CURRENCY_RATES[currency.code as keyof typeof CURRENCY_RATES];
    const convertedPrice = Math.round(priceInEur * rate);
    
    // Formatage selon la langue
    if (language === 'ar') {
      return `${convertedPrice.toLocaleString('ar-SA')} ${currency.symbol}`;
    }
    return `${currency.symbol}${convertedPrice.toLocaleString()}`;
  };

  const pricingPlans = [
    {
      id: 'showcase',
      icon: Globe,
      color: 'from-blue-500 to-cyan-500',
      priceEur: 799,
      popular: false,
      isRecurring: false,
    },
    {
      id: 'ecommerce',
      icon: ShoppingCart,
      color: 'from-purple-500 to-pink-500',
      priceEur: 1299,
      popular: true,
      isRecurring: false,
    },
    {
      id: 'maintenance',
      icon: Package,
      color: 'from-green-500 to-emerald-500',
      priceEur: 99,
      popular: false,
      isRecurring: true,
    },
    {
      id: 'hourly',
      icon: Clock,
      color: 'from-amber-500 to-orange-500',
      priceEur: 20,
      popular: false,
      isRecurring: true,
      isHourly: true,
    },
    {
      id: 'redesign_showcase',
      icon: RefreshCw,
      color: 'from-cyan-500 to-blue-500',
      priceEur: 699,
      popular: false,
      isRecurring: false,
    },
    {
      id: 'redesign_ecommerce',
      icon: RefreshCw,
      color: 'from-violet-500 to-purple-500',
      priceEur: 1199,
      popular: false,
      isRecurring: false,
    },
    {
      id: 'custom',
      icon: Zap,
      color: 'from-orange-500 to-red-500',
      priceEur: null, // Prix sur mesure
      popular: false,
      isRecurring: false,
    },
  ];

  return (
    <section id="pricing" className="relative flex items-center justify-center py-20 w-full z-10">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="gradient-text">
              {t('pricing.title')} {t('pricing.title_highlight')}
            </span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t('pricing.subtitle')}
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {pricingPlans.map((plan, idx) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group w-full"
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                    {t('pricing.popular')}
                  </span>
                </div>
              )}

              {/* Card */}
              <div
                className={`relative h-full bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-3xl border-2 transition-all duration-300 p-8 ${
                  plan.popular
                    ? 'border-indigo-500 dark:border-indigo-500 shadow-xl shadow-indigo-500/20'
                    : 'border-gray-200 dark:border-white/10 hover:border-indigo-500 dark:hover:border-indigo-500'
                } group-hover:shadow-xl group-hover:shadow-indigo-500/10`}
              >
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <plan.icon className="text-white w-10 h-10" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">
                  {t(`pricing.plans.${plan.id}.name`)}
                </h3>

                {/* Description */}
                <p className="text-center text-gray-600 dark:text-gray-400 mb-6">
                  {t(`pricing.plans.${plan.id}.description`)}
                </p>

                {/* Price */}
                <div className="text-center mb-8">
                  {plan.priceEur ? (
                    <>
                      <div className="text-base md:text-lg text-gray-500 dark:text-gray-400 mb-1 font-medium">
                        {t('pricing.starting_from')}
                      </div>
                      <div className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                        {formatPrice(plan.priceEur)}
                        {plan.isRecurring && !plan.isHourly && <span className="text-2xl text-gray-600 dark:text-gray-400">/mois</span>}
                        {plan.isHourly && <span className="text-2xl text-gray-600 dark:text-gray-400">/h</span>}
                      </div>
                    </>
                  ) : (
                    <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                      {t('pricing.custom_price')}
                    </div>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {Array.isArray(t(`pricing.plans.${plan.id}.features`)) && 
                    (t(`pricing.plans.${plan.id}.features`) as string[]).map((feature: string, featureIdx: number) => (
                      <li key={featureIdx} className="flex items-start gap-3">
                        <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))
                  }
                </ul>

                {/* CTA Button */}
                <a
                  href="https://wa.me/33766491893?text=Bonjour%2C%20je%20suis%20int%C3%A9ress%C3%A9%20par%20votre%20offre"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full py-4 rounded-xl font-semibold transition-all duration-300 text-center ${
                    plan.popular
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:shadow-lg hover:shadow-indigo-500/50'
                      : 'bg-gray-200 hover:bg-gray-300 dark:bg-white/10 dark:hover:bg-white/20 text-gray-900 dark:text-white'
                  }`}
                >
                  {t('pricing.cta_button')}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full border border-indigo-500/20">
            <Package className="w-6 h-6 text-indigo-500" />
            <p className="text-lg text-gray-700 dark:text-gray-300 font-medium">
              {t('pricing.note')}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
