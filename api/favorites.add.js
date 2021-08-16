module.exports = (library, options) => {
  const items = JSON.parse(options.items)
  const newItems = []
  for (const item of items) {
    item.id = `pin_${library.favorites.length + 1}`
    item.name = item.genre || item.composer || item.artist || item.folder || item.station || item.name || item.title
    library.favorites.push(item)
    newItems.push(item)
  }
  library.indexArray(newItems)
  library.writeSupplementalData()
}
