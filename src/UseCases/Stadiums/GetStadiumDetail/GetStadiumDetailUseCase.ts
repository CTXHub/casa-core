/* eslint-disable no-useless-constructor */

import { Equal, getRepository } from 'typeorm'
import { Stadium } from '../../../entities/Stadium'
import { IGetStadiumDetailRequestDTO } from './GetStadiumDetailDTO'

export class GetStadiumDetailUseCase {
  static async execute (data: IGetStadiumDetailRequestDTO) {
    const stadiumsRepository = getRepository(Stadium)

    const stadium = await stadiumsRepository.findOne({ id: Equal(data.id) })

    if (!stadium) {
      throw new Error('Stadium not found')
    }

    return stadium
  }
}
