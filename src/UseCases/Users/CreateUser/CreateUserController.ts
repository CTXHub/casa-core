/* eslint-disable no-useless-constructor */
import { Request, Response } from 'express'
import { CreateUserUseCase } from './CreateUserUseCase'

export class CreateUserController {
  constructor (
   private createUserUseCase: CreateUserUseCase
  ) {}

  static async handle (request: Request, response: Response): Promise<Response> {
    const { username, email, password, role } = request.body

    try {
      const results = await CreateUserUseCase.execute({
        username: username,
        email: email,
        password: password,
        role: role
      })

      return response.status(201).json({
        message: 'User creation successfull',
        results: {
          username: results.username,
          email: results.email,
          role: results.role,
          request: {
            type: 'GET',
            url: 'http://localhost:8888/v1/user/' + results.id
          }
        }
      })
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}
