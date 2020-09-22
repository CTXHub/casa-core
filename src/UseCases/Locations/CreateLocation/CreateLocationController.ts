/* eslint-disable no-useless-constructor */
import { Request, Response } from 'express'
import { CreateLocationUseCase } from './CreateLocationUseCase'

export class CreateLocationController {
  constructor (
   private createLocationUseCase: CreateLocationUseCase
  ) {}

  static async handle (request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body

    try {
      await CreateLocationUseCase.execute({
        name,
        description
      })

      return response.status(201).json({ result: 'OK' })
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}
