import { Router, Request, Response, NextFunction } from 'express'
import { CreateLocationController } from '../../UseCases/CreateLocation/CreateLocationController'
import middlewares from '../middlewares'

const locationRouter = Router()

locationRouter.get('/', (req: Request, res: Response, next: NextFunction) =>
  res.send('return Location list')
)
locationRouter.get('/:locationId', middlewares.isAuth, (req: Request, res: Response, next: NextFunction) => {
  const pid = req.params.categoryId
  res.send(pid)
})

locationRouter.post('/', middlewares.isAuth, (req: Request, res: Response) => {
  return CreateLocationController.handle(req, res)
})

locationRouter.patch('/:locationId', middlewares.isAuth, (req: Request, res: Response, next: NextFunction) => {
  const pid = req.params.categoryId
  res.send(pid)
})

locationRouter.delete('/:locationId', middlewares.isAuth, (req: Request, res: Response, next: NextFunction) =>
  res.send(req.body)
)

export { locationRouter }
