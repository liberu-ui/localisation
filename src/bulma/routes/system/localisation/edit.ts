/**
 * This type represents the path for a language edit
 */
type LanguageEditPath = string;

/**
 * This interface represents the metadata for a language edit
 */
interface LanguageEditMeta {
    breadcrumb: string;
    title: string;
}

/**
 * This type represents the Language Edit component
 */
type LanguageEditComponent = any; // replace `any` with the actual component type

/**
 * This interface represents the Localisation Edit route
 */
interface LocalisationEditRoute {
    name: string;
    path: LanguageEditPath;
    component: LanguageEditComponent;
    meta: LanguageEditMeta;
}

/**
 * This function lazily imports the Localisation Edit route
 * @returns {Promise} A promise that resolves to the Localisation Edit route
 */
const importLocalisationEdit = (): Promise<LocalisationEditRoute> => import('../../../pages/localisation/Edit.vue');

/**
 * This default export defines the Localisation Edit route
 */
export default {
    name: 'system.localisation.edit',
    path: ':language/edit',
    component: LocalisationEdit,
    meta: {
        breadcrumb: 'edit',
        title: 'Edit Language',
    },
} as LocalisationEditRoute;