import { Router, Request, Response, NextFunction } from 'express'
import middlewares from '../middlewares'

const categoryRouter = Router()

categoryRouter.get('/', (req: Request, res: Response, next: NextFunction) =>
  res.send('return Category list')
)
categoryRouter.get('/:categoryId', middlewares.isAuth, (req: Request, res: Response, next: NextFunction) => {
  const pid = req.params.categoryId
  res.send(pid)
})

categoryRouter.post('/', middlewares.isAuth, (req: Request, res: Response, next: NextFunction) =>
  res.send(req.body)
)

categoryRouter.patch('/:categoryId', middlewares.isAuth, (req: Request, res: Response, next: NextFunction) => {
  const pid = req.params.categoryId
  res.send(pid)
})

categoryRouter.delete('/', middlewares.isAuth, (req: Request, res: Response, next: NextFunction) =>
  res.send(req.body)
)

export { categoryRouter }
