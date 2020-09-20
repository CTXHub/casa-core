import { Router, Request, Response, NextFunction } from 'express'
import { categoryRouter } from './categoryRouter'
import { productRouter } from './productRouter'

interface IResponseError extends Error {
    status?: number;
  }

const router = Router()

router.use('/v1/product', productRouter)
router.use('/v1/category', categoryRouter)

router.use((req: Request, res: Response, next: NextFunction) => {
  const error = new Error('Not Found') as IResponseError
  error.status = 404
  next(error)
})

router.use((error: IResponseError, req: Request, res: Response, next: NextFunction) => {
  res.status(error.status || 500)
  res.json({
    error: {
      message: error.message
    }
  })
})

export { router }
