/* eslint-disable no-useless-constructor */

import { validate } from 'class-validator'
import { Equal, getRepository } from 'typeorm'
import { Stadium } from '../../../entities/Stadium'
import { IUpdateStadiumRequestDTO } from './UpdateStadiumDTO'

export class UpdateStadiumUseCase {
  static async execute (data: IUpdateStadiumRequestDTO) {
    const stadiumsRepository = getRepository(Stadium)

    const stadium = await stadiumsRepository.findOne({ id: Equal(data.id) })

    if (!stadium) {
      throw new Error('Stadium not found')
    }

    const stadiumAlreadyExists = await stadiumsRepository.findOne({ name: Equal(data.name) })

    if (stadiumAlreadyExists.id !== data.id) {
      throw new Error('Location name already exists.')
    }

    await stadiumsRepository.merge(stadium, data)

    const errors = await validate(stadium)
    if (errors.length > 0) {
      throw new Error('Validation Error')
    } else {
      await stadiumsRepository.save(stadium)
      return stadium
    }
  }
}
