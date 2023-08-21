import tools from '../data/tools.json'

export function getTools() {
    return Promise.resolve(tools)
}

export function getToolById(toolId) {
  return Promise.resolve(tools.find(e => e.id === toolId))
}
