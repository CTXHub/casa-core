/* eslint-disable no-useless-constructor */
import { Request, Response } from 'express'
import { DeleteLocationUseCase } from './DeleteLocationUseCase'

export class DeleteLocationController {
  constructor (
   private deleteLocationUseCase: DeleteLocationUseCase
  ) {}

  static async handle (request: Request, response: Response): Promise<Response> {
    const id = request.params.locationId
    try {
      await DeleteLocationUseCase.execute({
        id
      })

      return response.status(201).json({ result: 'Location is Deleted' })
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}
