import catalogs from '../data/catalog.json'

export function getCatalogs() {
    return Promise.resolve(catalogs)
}

export function getCatalogById(catalogId) {
  return Promise.resolve(catalogs.find(e => e.id === catalogId))
}
