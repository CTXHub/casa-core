import { Router, Request, Response, NextFunction } from 'express'
import { locationRouter } from './locationRouter'
import { stadiumRouter } from './stadiumRouter'
import { UserRouter } from './userRouter'

interface IResponseError extends Error {
    status?: number;
  }

const router = Router()

router.use('/v1/stadium', stadiumRouter)
router.use('/v1/location', locationRouter)
router.use('/v1/user', UserRouter)

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
