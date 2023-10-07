import { library, IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';

/**
 * Adds the specified icon to the font awesome library.
 * @param icon - The icon definition to be added.
 */
function addIconToLibrary(icon: IconDefinition): void {
  library.add(icon);
}

addIconToLibrary(faLanguage);