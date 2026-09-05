/** Shared flag paths so every page uses the same country artwork. */
const FLAG_FILE = {
  usa: 'usa',
  uk: 'uk',
  canada: 'canada',
  australia: 'australia',
  germany: 'germany',
  france: 'france',
  ireland: 'ie',
  ie: 'ie',
  taiwan: 'tw',
  tw: 'tw',
  italy: 'it',
  it: 'it',
  japan: 'jp',
  jp: 'jp',
  newzealand: 'nz',
  nz: 'nz',
  netherlands: 'nl',
  nl: 'nl'
};

export function flagSrc(countryKey) {
  const file = FLAG_FILE[String(countryKey || '').toLowerCase()] || countryKey;
  return `/flags/${file}.svg`;
}

export default flagSrc;
