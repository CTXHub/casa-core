/* eslint-disable no-useless-constructor */
import { Request, Response } from 'express'
import { UpdateLocationUseCase } from './UpdateLocationUseCase'

export class UpdateLocationController {
  constructor (
   private updateLocationUseCase: UpdateLocationUseCase
  ) {}

  static async handle (request: Request, response: Response): Promise<Response> {
    const id = request.params.locationId
    const { name, description } = request.body

    try {
      const results = await UpdateLocationUseCase.execute({
        id,
        name,
        description
      })

      return response.status(201).json({
        message: 'Location updated successfull',
        results: {
          name: results.name,
          description: results.description,
          request: {
            type: 'GET',
            url: 'http://localhost:3000/v1/location/' + results.id
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
