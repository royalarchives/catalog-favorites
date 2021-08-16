module.exports = (library, options) => {
  const items = JSON.parse(options.items)
  for (const id of items) {
    const pin = library.getObject(id)
    if (!pin) {
      throw new Error('invalid-id')
    }
    library.favorites.splice(library.favorites.indexOf(pin), 1)
  }
  library.writeSupplementalData()
}
