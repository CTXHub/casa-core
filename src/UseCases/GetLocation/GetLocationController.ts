/* eslint-disable no-useless-constructor */
import { Request, Response } from 'express'
import { GetLocationUseCase } from './GetLocationUseCase'

export class GetLocationController {
  constructor (
   private getLocationUseCase: GetLocationUseCase
  ) {}

  static async handle (request: Request, response: Response): Promise<Response> {
    const id = request.params.locationId

    try {
      await GetLocationUseCase.execute({
        id
      })

      return response.status(201).json({ result: 'OK' })
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}
