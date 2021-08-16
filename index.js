
module.exports = {
  load: library => {
    library.favorites = library.favorites || []
    library.api.favorites = {
      create: require('./api/favorites.add.js'),
      get: require('./api/favorites.get.js'),
      list: require('./api/favorites.list.js'),
      remove: require('./api/favorites.remove.js'),
      rename: require('./api/favorites.rename.js'),
      reorder: require('./api/favorites.reorder.js')
    }
    return library
  }
}
