/* eslint-disable no-useless-constructor */
import { Request, Response } from 'express'
import { ListUsersUseCase } from './ListUsersUseCase'

export class ListUsersController {
  constructor (
   private listUsersUseCase: ListUsersUseCase
  ) {}

  static async handle (request: Request, response: Response): Promise<Response> {
    try {
      const results = await ListUsersUseCase.execute()
      return response.status(200).json({
        count: results.length,
        results: results.map(result => {
          return {
            name: result.username,
            description: result.email,
            location: result.role,
            request: {
              type: 'GET',
              url: 'http://localhost:8888/v1/user/' + result.id
            }
          }
        })
      })
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}
