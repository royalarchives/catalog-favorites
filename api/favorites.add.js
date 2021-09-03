module.exports = (catalog, options) => {
  const items = JSON.parse(options.items)
  const newItems = []
  for (const item of items) {
    item.id = `pin_${catalog.favorites.length + 1}`
    item.name = item.genre || item.composer || item.artist || item.folder || item.station || item.name || item.title
    catalog.favorites.push(item)
    newItems.push(item)
  }
  catalog.indexArray(newItems)
  catalog.writeSupplementalData()
}
