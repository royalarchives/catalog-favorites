module.exports = (catalog, options) => {
  const newArray = []
  const newOrder = JSON.parse(options.items)
  for (const id of newOrder) {
    const pin = catalog.getObject(id)
    if (!pin) {
      console.log('invalid id', options.id)
      throw new Error('invalid-id')
    }
    newArray.push(pin)
  }
  catalog.favorites.length = 0
  for (const pin of newArray) {
    catalog.favorites.push(pin)
  }
  catalog.writeSupplementalData()
}
