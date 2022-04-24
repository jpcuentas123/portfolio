module.exports = {
  keySeparator: false,
  locales: ['en', 'es'],
  defaultNamespace: 'translation',
  namespaceSeparator: '::',
  output: 'src/locales/$LOCALE/$NAMESPACE.json',
  createOldCatalogs: false,
  failOnWarnings: true,
  sort: true
};
