/* eslint-disable no-useless-constructor */

import { Equal, getRepository } from 'typeorm'
import { Stadium } from '../../../entities/Stadium'
import { IDeleteStadiumRequestDTO } from './DeleteStadiumDTO'

export class DeleteStadiumUseCase {
  static async execute (data: IDeleteStadiumRequestDTO) {
    const stadiumsRepository = getRepository(Stadium)

    const stadium = await stadiumsRepository.findOne({ id: Equal(data.id) })

    if (!stadium) {
      throw new Error('Stadium not found')
    }

    await stadiumsRepository.delete(stadium.id)
  }
}
