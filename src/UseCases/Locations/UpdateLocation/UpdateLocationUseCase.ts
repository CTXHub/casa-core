/* eslint-disable no-useless-constructor */

import { validate } from 'class-validator'
import { Equal, getRepository } from 'typeorm'
import { Location } from '../../../entities/Location'
import { IUpdateLocationRequestDTO } from './UpdateLocationDTO'

export class UpdateLocationUseCase {
  static async execute (data: IUpdateLocationRequestDTO) {
    const locationsRepository = getRepository(Location)

    const location = await locationsRepository.findOne({ id: Equal(data.id) })

    if (!location) {
      throw new Error('Location not found')
    }

    const locationAlreadyExists = await locationsRepository.findOne({ name: Equal(data.name) })

    if (locationAlreadyExists) {
      if (locationAlreadyExists.id !== data.id) {
        throw new Error('Location name already exists.')
      }
    }

    await locationsRepository.merge(location, data)

    const errors = await validate(location)
    if (errors.length > 0) {
      throw new Error('Validation Error')
    } else {
      await locationsRepository.save(location)
      return location
    }
  }
}
