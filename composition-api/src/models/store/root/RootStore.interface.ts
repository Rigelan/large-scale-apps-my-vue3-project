import {
  // GEN-IMPORTS
  ItemsStateInterface,
  LocalesStateInterface
} from '@/models/store'

//import { RootStateInterface } from './RootState.interface'

/**
 * @name RootStoreInterface
 * @description
 * Wraps together each store module interface in one place
 */
export interface RootStoreInterface {
  //extends RootStateInterface {
  // GEN-INTERFACE-PROPS
  itemsState: ItemsStateInterface
  localesState: LocalesStateInterface
  // additional domain-specific module interfaces we’ll be added here in the next book chapters
}
