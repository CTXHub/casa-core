/* eslint-disable no-useless-constructor */
import { Request, Response } from 'express'
import { UpdateLocationUseCase } from './UpdateLocationUseCase'

export class UpdateLocationController {
  constructor (
   private updateLocationUseCase: UpdateLocationUseCase
  ) {}

  static async handle (request: Request, response: Response): Promise<Response> {
    const { id, name, description } = request.body

    try {
      await UpdateLocationUseCase.execute({
        id,
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
