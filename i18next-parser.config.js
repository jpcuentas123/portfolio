module.exports = {
  keySeparator: false,
  locales: ['en', 'es'],
  defaultNamespace: 'translation',
  namespaceSeparator: '::',
  output: 'public/locales/$LOCALE/$NAMESPACE.json',
  createOldCatalogs: false,
  failOnWarnings: true,
  sort: true
};
