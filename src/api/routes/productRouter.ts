import { Router, Request, Response, NextFunction } from 'express'
import middlewares from '../middlewares'

const productRouter = Router()

productRouter.get('/', (req: Request, res: Response, next: NextFunction) =>
  res.send('return Product list')
)
productRouter.get('/:productId', middlewares.isAuth, (req: Request, res: Response, next: NextFunction) => {
  const pid = req.params.productId
  res.send(pid)
})

productRouter.post('/', middlewares.isAuth, (req: Request, res: Response, next: NextFunction) =>
  res.send(req.body)
)

productRouter.patch('/:productId', middlewares.isAuth, (req: Request, res: Response, next: NextFunction) => {
  const pid = req.params.productId
  res.send(pid)
})

productRouter.delete('/', middlewares.isAuth, (req: Request, res: Response, next: NextFunction) =>
  res.send(req.body)
)

export { productRouter }
