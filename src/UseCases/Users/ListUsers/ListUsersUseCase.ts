/* eslint-disable no-useless-constructor */

import { getRepository } from 'typeorm'
import { User } from '../../../entities/User'

export class ListUsersUseCase {
  static async execute () {
    const usersRepository = getRepository(User)

    const usersList = await usersRepository.find()

    return usersList
  }
}
