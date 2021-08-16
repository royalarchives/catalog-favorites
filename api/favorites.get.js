module.exports = (library, options) => {
  const pin = library.getObject(options.id)
  if (!pin) {
    throw new Error('invalid-id')
  }
  return pin
}
