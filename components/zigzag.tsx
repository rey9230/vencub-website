'use client'

import Image from 'next/image'

import FeatImage01 from '@/public/images/features-03-image-01.png'
import FeatImage02 from '@/public/images/features-03-image-02.png'
import FeatImage03 from '@/public/images/features-03-image-03.png'
import {useTranslation} from "react-i18next";

export default function Zigzag() {
  const { t } = useTranslation();
  return (
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20 border-t border-gray-800">

            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">{t('green_header')}</div>
              <h1 className="h2 mb-4">{t('header_title')}</h1>
              <p className="text-xl text-gray-400">{t('header_subtitle')}</p>
            </div>

            {/* Items */}
            <div className="grid gap-20">

              {/* 1st item */}
              <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                {/* Image */}
                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                  <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage01} width={540} height={405} alt="Preparación de Taxes" />
                </div>
                {/* Content */}
                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                  <div className="md:pr-4 lg:pr-12 xl:pr-16">
                    <div className="font-architects-daughter text-xl text-purple-600 mb-2">{t('point_1')}</div>
                    <h3 className="h3 mb-3">{t('point_2')}</h3>
                    <p className="text-xl text-gray-400 mb-4">{t('point_3')}</p>
                    <ul className="text-lg text-gray-400 -mb-2">
                      <li className="flex items-center mb-2">
                        <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>{t('point_4')}</span>
                      </li>
                      <li className="flex items-center mb-2">
                        <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>{t('point_5')}</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>{t('point_6')}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 2nd item */}
              <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                {/* Image */}
                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                  <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage02} width={540} height={405} alt="Reparación de Créditos" />
                </div>
                {/* Content */}
                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                  <div className="md:pl-4 lg:pl-12 xl:pl-16">
                    <div className="font-architects-daughter text-xl text-purple-600 mb-2">{t('joint_1')}</div>
                    <h3 className="h3 mb-3">{t('joint_2')}</h3>
                    <p className="text-xl text-gray-400 mb-4">{t('joint_3')}</p>
                    <ul className="text-lg text-gray-400 -mb-2">
                      <li className="flex items-center mb-2">
                        <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>{t('joint_4')}</span>
                      </li>
                      <li className="flex items-center mb-2">
                        <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>{t('joint_5')}</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>{t('joint_6')}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 3rd item */}
              <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                {/* Image */}
                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                  <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage03} width={540} height={405} alt="Servicios de Notaría" />
                </div>
                {/* Content */}
                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                  <div className="md:pr-4 lg:pr-12 xl:pr-16">
                    <div className="font-architects-daughter text-xl text-purple-600 mb-2">{t('koint_1')}</div>
                    <h3 className="h3 mb-3">{t('koint_2')}</h3>
                    <p className="text-xl text-gray-400 mb-4">{t('koint_3')}</p>
                    <ul className="text-lg text-gray-400 -mb-2">
                      <li className="flex items-center mb-2">
                        <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>{t('koint_4')}</span>
                      </li>
                      <li className="flex items-center mb-2">
                        <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>{t('koint_5')}</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>{t('koint_6')}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
  )
}
