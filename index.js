
module.exports = {
  load: catalog => {
    catalog.favorites = catalog.favorites || []
    catalog.api.favorites = {
      create: require('./api/favorites.add.js'),
      get: require('./api/favorites.get.js'),
      list: require('./api/favorites.list.js'),
      remove: require('./api/favorites.remove.js'),
      rename: require('./api/favorites.rename.js'),
      reorder: require('./api/favorites.reorder.js')
    }
    return catalog
  }
}
