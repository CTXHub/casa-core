/* eslint-disable no-useless-constructor */
import { Request, Response } from 'express'
import { DeleteStadiumUseCase } from './DeleteStadiumUseCase'

export class DeleteStadiumController {
  constructor (
   private deleteStadiumUseCase: DeleteStadiumUseCase
  ) {}

  static async handle (request: Request, response: Response): Promise<Response> {
    const id = request.params.stadiumId
    try {
      await DeleteStadiumUseCase.execute({
        id
      })

      return response.status(201).json({ result: 'Stadium is Deleted' })
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}
