/* eslint-disable no-useless-constructor */
import { Request, Response } from 'express'
import { GetStadiumDetailUseCase } from './GetStadiumDetailUseCase'

export class GetStadiumDetailController {
  constructor (
   private getStadiumUseCase: GetStadiumDetailUseCase
  ) {}

  static async handle (request: Request, response: Response): Promise<Response> {
    const id = request.params.stadiumId

    try {
      const results = await GetStadiumDetailUseCase.execute({
        id
      })

      return response.status(201).json({ results })
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}
