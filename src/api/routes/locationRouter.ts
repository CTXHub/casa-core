import { Router, Request, Response, NextFunction } from 'express'
import { ListLocationsController } from '../../UseCases/ListLocations/ListLocationsController'
import { CreateLocationController } from '../../UseCases/CreateLocation/CreateLocationController'
import middlewares from '../middlewares'
import { UpdateLocationController } from '../../UseCases/UpdateLocation/UpdateLocationController'
import { DeleteLocationController } from '../../UseCases/DeleteLocation/DeleteLocationController'

const locationRouter = Router()

locationRouter.get('/', middlewares.isAuth, (req: Request, res: Response, next: NextFunction) => {
  return ListLocationsController.handle(req, res)
})
locationRouter.get('/:locationId', middlewares.isAuth, (req: Request, res: Response, next: NextFunction) => {
  return GetLocationController.hande(req, res)
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
