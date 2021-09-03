module.exports = (catalog, options) => {
  const pin = catalog.getObject(options.id)
  if (!pin) {
    throw new Error('invalid-id')
  }
  return pin
}
