import { Router, Request, Response, NextFunction } from 'express'
import { ListStadiumsController } from '../../UseCases/Stadiums/ListStadiums/ListStadiumsController'
import { CreateStadiumController } from '../../UseCases/Stadiums/CreateStadium/CreateStadiumController'
import middlewares from '../middlewares'

const stadiumRouter = Router()

stadiumRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
  return ListStadiumsController.handle(req, res)
}
)
stadiumRouter.get('/:stadiumId', middlewares.isAuth, (req: Request, res: Response, next: NextFunction) => {
  const pid = req.params.stadiumId
  res.send(pid)
})

stadiumRouter.post('/', middlewares.isAuth, (req: Request, res: Response, next: NextFunction) => {
  return CreateStadiumController.handle(req, res)
}

)

stadiumRouter.patch('/:stadiumId', middlewares.isAuth, (req: Request, res: Response, next: NextFunction) => {
  const pid = req.params.stadiumId
  res.send(pid)
})

stadiumRouter.delete('/', middlewares.isAuth, (req: Request, res: Response, next: NextFunction) =>
  res.send(req.body)
)

export { stadiumRouter }
