module.exports = (library, options) => {
  const items = JSON.parse(options.items)
  for (const id of items) {
    const pin = library.getObject(id)
    if (!pin) {
      throw new Error('invalid-id')
    }
    pin.name = options.name
  }
  library.writeSupplementalData()
}
