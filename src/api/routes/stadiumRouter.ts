import { Router, Request, Response, NextFunction } from 'express'
import middlewares from '../middlewares'

import { ListStadiumsController } from '../../UseCases/Stadiums/ListStadiums/ListStadiumsController'
import { CreateStadiumController } from '../../UseCases/Stadiums/CreateStadium/CreateStadiumController'
import { DeleteStadiumController } from '../../UseCases/Stadiums/DeleteStadium/DeleteStadiumController'
import { GetStadiumDetailController } from '../../UseCases/Stadiums/GetStadiumDetail/GetStadiumDetailController'
import { UpdateStadiumController } from '../../UseCases/Stadiums/UpdateStadium/UpdateStadiumController'

const stadiumRouter = Router()

stadiumRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
  return ListStadiumsController.handle(req, res)
}
)
stadiumRouter.get('/:stadiumId', middlewares.isAuth, (req: Request, res: Response, next: NextFunction) => {
  return GetStadiumDetailController.handle(req, res)
})

stadiumRouter.post('/', middlewares.isAuth, (req: Request, res: Response, next: NextFunction) => {
  return CreateStadiumController.handle(req, res)
})

stadiumRouter.patch('/:stadiumId', middlewares.isAuth, (req: Request, res: Response, next: NextFunction) => {
  return UpdateStadiumController.handle(req, res)
})

stadiumRouter.delete('/:stadiumId', middlewares.isAuth, (req: Request, res: Response, next: NextFunction) => {
  return DeleteStadiumController.handle(req, res)
})

export { stadiumRouter }
