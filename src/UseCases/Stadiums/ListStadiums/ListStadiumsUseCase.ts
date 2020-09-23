/* eslint-disable no-useless-constructor */

import { getRepository } from 'typeorm'
import { Stadium } from '../../../entities/Stadium'

export class ListStadiumUseCase {
  static async execute () {
    const stadiumsRepository = getRepository(Stadium)

    const stadiumList = await stadiumsRepository.find()

    return stadiumList
  }
}
