/* eslint-disable no-useless-constructor */

import { Equal, getRepository } from 'typeorm'
import { Location } from '../../../entities/Location'
import { IGetLocationDetailRequestDTO } from './GetLocationDetailDTO'

export class GetLocationDetailUseCase {
  static async execute (data: IGetLocationDetailRequestDTO) {
    const locationsRepository = getRepository(Location)

    const location = await locationsRepository.findOne({ id: Equal(data.id) })

    if (!location) {
      throw new Error('Location not found')
    }

    return location
  }
}
