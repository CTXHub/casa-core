import { Router, Request, Response, NextFunction } from 'express'
import { ListLocationsController } from '../../UseCases/Locations/ListLocations/ListLocationsController'
import { CreateLocationController } from '../../UseCases/Locations/CreateLocation/CreateLocationController'
import middlewares from '../middlewares'
import { UpdateLocationController } from '../../UseCases/Locations/UpdateLocation/UpdateLocationController'
import { DeleteLocationController } from '../../UseCases/Locations/DeleteLocation/DeleteLocationController'
import { GetLocationController } from '../../UseCases/Locations/GetLocation/GetLocationController'

const locationRouter = Router()

locationRouter.get('/', middlewares.isAuth, (req: Request, res: Response, next: NextFunction) => {
  return ListLocationsController.handle(req, res)
})
locationRouter.get('/:locationId', middlewares.isAuth, (req: Request, res: Response, next: NextFunction) => {
  return GetLocationController.handle(req, res)
})

locationRouter.post('/', middlewares.isAuth, (req: Request, res: Response) => {
  return CreateLocationController.handle(req, res)
})

locationRouter.patch('/:locationId', middlewares.isAuth, (req: Request, res: Response) => {
  return UpdateLocationController.handle(req, res)
})

locationRouter.delete('/:locationId', middlewares.isAuth, (req: Request, res: Response, next: NextFunction) => {
  return DeleteLocationController.handle(req, res)
})

export { locationRouter }
