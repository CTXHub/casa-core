/* eslint-disable no-useless-constructor */

import { getRepository } from 'typeorm'
import { Location } from '../../entities/Location'

export class ListLocationsUseCase {
  static async execute () {
    const locationsRepository = getRepository(Location)

    const locationList = await locationsRepository.find()

    return locationList
  }
}
