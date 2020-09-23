/* eslint-disable no-useless-constructor */
import { Request, Response } from 'express'
import { Location } from '../../../entities/Location'
import { Equal, getRepository } from 'typeorm'
import { UpdateStadiumUseCase } from './UpdateStadiumUseCase'

export class UpdateStadiumController {
  constructor (
   private updateStadiumUseCase: UpdateStadiumUseCase
  ) {}

  static async handle (request: Request, response: Response): Promise<Response> {
    const id = request.params.stadiumId
    const { name, description, locationName } = request.body

    const locationsRepository = getRepository(Location)
    const location = await locationsRepository.findOne({ name: Equal(locationName) })

    try {
      const results = await UpdateStadiumUseCase.execute({
        id,
        name,
        description,
        location
      })

      return response.status(201).json({
        message: 'Location updated successfull',
        results: {
          name: results.name,
          description: results.description,
          location: results.location,
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
