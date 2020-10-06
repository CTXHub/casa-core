/* eslint-disable no-useless-constructor */
import { Request, Response } from 'express'
import { ListStadiumUseCase } from './ListStadiumsUseCase'

export class ListStadiumsController {
  constructor (
   private listStadiumsUseCase: ListStadiumUseCase
  ) {}

  static async handle (request: Request, response: Response): Promise<Response> {
    try {
      const results = await ListStadiumUseCase.execute()
      return response.status(200).json({
        count: results.length,
        results: results.map(result => {
          return {
            name: result.name,
            description: result.description,
            location: result.location,
            image: 'http://localhost:8888/uploads/' + result.stadiumImage,
            request: {
              type: 'GET',
              url: 'http://localhost:8888/v1/stadium/' + result.id
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
