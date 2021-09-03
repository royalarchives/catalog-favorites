module.exports = (catalog, options) => {
  return catalog.getObjects(catalog.favorites, options)
}
