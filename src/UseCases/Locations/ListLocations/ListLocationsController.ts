/* eslint-disable no-useless-constructor */
import { Request, Response } from 'express'
import { ListLocationsUseCase } from './ListLocationsUseCase'

export class ListLocationsController {
  constructor (
   private listLocationsUseCase: ListLocationsUseCase
  ) {}

  static async handle (request: Request, response: Response): Promise<Response> {
    try {
      const results = await ListLocationsUseCase.execute()

      return response.status(200).json({ results })
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}
