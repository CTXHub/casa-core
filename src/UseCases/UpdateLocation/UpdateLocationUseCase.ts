/* eslint-disable no-useless-constructor */

import { Equal, getRepository } from 'typeorm'
import { Location } from '../../entities/Location'
import { IUpdateLocationRequestDTO } from './UpdateLocationDTO'

export class UpdateLocationUseCase {
  static async execute (data: IUpdateLocationRequestDTO) {
    const locationsRepository = getRepository(Location)

    const location = await locationsRepository.findOne({ id: Equal(data.id) })
    console.log(data.id)
    if (!location) {
      throw new Error('Location not found')
    }

    await locationsRepository.merge(location, data)

    await locationsRepository.save(location)
  }
}
