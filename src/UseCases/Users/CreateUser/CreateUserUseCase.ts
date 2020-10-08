/* eslint-disable no-useless-constructor */
import { Equal, getRepository } from 'typeorm'
import { validate } from 'class-validator'
import { User } from '../../../entities/User'
import { ICreateUserRequestDTO } from './CreateUserDTO'

export class CreateUserUseCase {
  static async execute (data: ICreateUserRequestDTO) {
    const usersRepository = getRepository(User)

    const userAlreadyExists = await usersRepository.findOne({ username: Equal(data.username) })

    if (userAlreadyExists) {
      throw new Error('username already exists.')
    }

    const user = usersRepository.create(data)

    const errors = await validate(user)
    if (errors.length > 0) {
      throw new Error('Validation Error')
    } else {
      await usersRepository.save(user)
      return user
    }
  }
}
