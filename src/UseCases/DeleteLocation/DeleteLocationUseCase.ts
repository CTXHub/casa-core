/* eslint-disable no-useless-constructor */

import { Equal, getRepository } from 'typeorm'
import { Location } from '../../entities/Location'
import { IDeleteLocationRequestDTO } from '../DeleteLocation/DeleteLocationDTO'

export class DeleteLocationUseCase {
  static async execute (data: IDeleteLocationRequestDTO) {
    const locationsRepository = getRepository(Location)

    const location = await locationsRepository.findOne({ id: Equal(data.id) })

    if (!location) {
      throw new Error('Location not found')
    }

    await locationsRepository.delete(location)
  }
}
