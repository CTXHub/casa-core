import { Router, Request, Response, NextFunction } from 'express'
import { ListLocationsController } from '../../UseCases/ListLocations/ListLocationsController'
import { CreateLocationController } from '../../UseCases/CreateLocation/CreateLocationController'
import middlewares from '../middlewares'
import { UpdateLocationController } from '../../UseCases/UpdateLocation/UpdateLocationController'

const locationRouter = Router()

locationRouter.get('/', middlewares.isAuth, (req: Request, res: Response, next: NextFunction) => {
  return ListLocationsController.handle(req, res)
})
locationRouter.get('/:locationId', middlewares.isAuth, (req: Request, res: Response, next: NextFunction) => {
  const pid = req.params.categoryId
  res.send(pid)
})

locationRouter.post('/', middlewares.isAuth, (req: Request, res: Response) => {
  return CreateLocationController.handle(req, res)
})

locationRouter.patch('/', middlewares.isAuth, (req: Request, res: Response) => {
  return UpdateLocationController.handle(req, res)
})

locationRouter.delete('/:locationId', middlewares.isAuth, (req: Request, res: Response, next: NextFunction) =>
  res.send(req.body)
)

export { locationRouter }
