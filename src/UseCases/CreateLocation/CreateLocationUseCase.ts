/* eslint-disable no-useless-constructor */

import { Equal, getRepository } from 'typeorm'
import { Location } from '../../entities/Location'
import { ICreateLocationRequestDTO } from './CreateLocationDTO'

export class CreateLocationUseCase {
  static async execute (data: ICreateLocationRequestDTO) {
    const locationsRepository = getRepository(Location)

    const locationAlreadyExists = await locationsRepository.findOne({ name: Equal(data.name) })

    if (locationAlreadyExists) {
      throw new Error('User already exists.')
    }

    const location = await locationsRepository.create(data)

    await locationsRepository.save(location)
  }
}
