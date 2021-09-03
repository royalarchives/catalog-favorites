module.exports = (catalog, options) => {
  const items = JSON.parse(options.items)
  for (const id of items) {
    const pin = catalog.getObject(id)
    if (!pin) {
      throw new Error('invalid-id')
    }
    catalog.favorites.splice(catalog.favorites.indexOf(pin), 1)
  }
  catalog.writeSupplementalData()
}
