/* eslint-disable no-useless-constructor */

import { Equal, getRepository } from 'typeorm'
import { validate } from 'class-validator'
import { Location } from '../../../entities/Location'
import { ICreateLocationRequestDTO } from './CreateLocationDTO'

export class CreateLocationUseCase {
  static async execute (data: ICreateLocationRequestDTO) {
    const locationsRepository = getRepository(Location)

    const locationAlreadyExists = await locationsRepository.findOne({ name: Equal(data.name) })

    if (locationAlreadyExists) {
      throw new Error('Location already exists.')
    }

    const location = await locationsRepository.create(data)

    const errors = await validate(location)
    if (errors.length > 0) {
      throw new Error('Validation Error')
    } else {
      await locationsRepository.save(location)
      return location
    }
  }
}
