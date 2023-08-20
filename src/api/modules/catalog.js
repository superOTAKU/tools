import catalogs from '../data/catalog.json'

export function getCatalogs() {
    return Promise.resolve(catalogs)
}