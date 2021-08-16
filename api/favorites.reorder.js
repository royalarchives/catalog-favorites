module.exports = (library, options) => {
  const newArray = []
  const newOrder = JSON.parse(options.items)
  for (const id of newOrder) {
    const pin = library.getObject(id)
    if (!pin) {
      console.log('invalid id', options.id)
      throw new Error('invalid-id')
    }
    newArray.push(pin)
  }
  library.favorites.length = 0
  for (const pin of newArray) {
    library.favorites.push(pin)
  }
  library.writeSupplementalData()
}
