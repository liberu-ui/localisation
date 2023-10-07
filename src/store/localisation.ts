```typescript
/**
 * The state object.
 */
export const state: {
    i18n: Record<string, Record<string, string>>;
    languages: string[];
    rtl: string[];
    keyCollector: boolean;
    missingKeys: string[];
} = {
    i18n: {},
    languages: [],
    rtl: [],
    keyCollector: false,
    missingKeys: [],
};

/**
 * The getters object.
 */
export const getters: {
    documentTitle: (
        state: typeof state,
        getters: typeof getters,
        rootState: any
    ) => (title: string) => string;
    i18n: (
        state: typeof state,
        getters: typeof getters,
        rootState: any
    ) => (key: string) => string;
    isRtl: (state: typeof state) => (lang: string) => boolean;
    ready: (state: typeof state) => boolean;
    rtl: (state: typeof state, getters: typeof getters, rootState: any) => boolean;
} = {
    documentTitle: (state, getters, rootState) => (title) =>
        rootState.meta.extendedDocumentTitle
            ? `${getters.i18n(title)} | ${rootState.meta.appName}`
            : getters.i18n(title),
    i18n: (state, getters, rootState) => (key) => {
        const { lang } = rootState.preferences.global;
        return state.i18n[lang] ? state.i18n[lang][key] : key;
    },
    isRtl: (state) => (lang) => state.rtl.includes(lang),
    ready: (state) => Object.keys(state.i18n).length > 0,
    rtl: (state, getters, rootState) =>
        state.rtl.includes(rootState.preferences.global.lang),
};

/**
 * The mutations object.
 */
export const mutations: {
    configure: (
        state: typeof state,
        payload: { i18n: Record<string, Record<string, string>>; languages: string[]; rtl: string[] }
    ) => void;
    setI18n: (state: typeof state, i18n: Record<string, Record<string, string>>) => void;
    setLanguages: (state: typeof state, languages: string[]) => void;
    setRtl: (state: typeof state, rtl: string[]) => void;
    addKey: (state: typeof state, key: string) => void;
    setKeyCollector: (state: typeof state, status: boolean) => void;
    clearMissingKeys: (state: typeof state) => void;
    addMissingKey: (state: typeof state, key: string) => void;
} = {
    configure: (state, { i18n, languages, rtl }) => {
        state.i18n = i18n;
        state.languages = languages;
        state.rtl = rtl;
    },
    setI18n: (state, i18n) => (state.i18n = i18n),
    setLanguages: (state, languages) => (state.languages = languages),
    setRtl: (state, rtl) => (state.rtl = rtl),
    addKey: (state, key) => {
        Object.keys(state.i18n).forEach((lang) => {
            state.i18n[lang][key] = '';
        });
    },
    setKeyCollector: (state, status) => {
        if (status === false) {
            state.missingKeys = [];
        }

        state.keyCollector = status;
    },
    clearMissingKeys: (state) => (state.missingKeys = []),
    addMissingKey: (state, key) => {
        if (!state.missingKeys.includes(key)) {
            state.missingKeys.push(key);
        }
    },
};
```