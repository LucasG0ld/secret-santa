'use client';

import i18next from 'i18next';
import { initReactI18next, useTranslation as useTranslationOrg } from 'react-i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { getOptions, languages, cookieName } from './settings';

const runsOnServerSide = typeof window === 'undefined';

i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(resourcesToBackend((language: string, namespace: string) => import(`../../public/locales/${language}/${namespace}.json`)))
    .init({
        ...getOptions(),
        lng: undefined, // let detect the language on client side
        detection: {
            order: ['htmlTag', 'cookie', 'navigator'],
        },
        preload: runsOnServerSide ? languages : [],
    });

export function useTranslation(ns?: string, options?: any) {
    return useTranslationOrg(ns, options);
}
