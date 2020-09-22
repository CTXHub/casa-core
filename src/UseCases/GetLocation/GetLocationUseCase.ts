/* eslint-disable no-useless-constructor */

import { Equal, getRepository } from 'typeorm'
import { Location } from '../../entities/Location'
import { IGetLocationRequestDTO } from './GetLocationDTO'

export class GetLocationUseCase {
  static async execute (data: IGetLocationRequestDTO) {
    const locationsRepository = getRepository(Location)

    const location = await locationsRepository.findOne({ id: Equal(data.id) })

    if (!location) {
      throw new Error('Location not found')
    }
  }
}
