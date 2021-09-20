import * as Contants from './contants'
import * as format from './format'
import * as generals from './generals'
import * as localStorages from './localStorages'

export const Utils = {
  Creator: {
    Classes: generals.generatorClasses
  },
  LocalStorage: {
    Set: localStorages.setLocalStorage,
    Get: localStorages.getLocalStorage,
    Clear: localStorages.clearLocalStorage,
    Remove: localStorages.removeLocalStorage
  }
}
