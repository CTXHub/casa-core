import { Router, Request, Response, NextFunction } from 'express'
import middlewares from '../middlewares'

import { ListUsersController } from '../../UseCases/Users/ListUsers/ListUsersController'
import { CreateUserController } from '../../UseCases/Users/CreateUser/CreateUserController'
import { DeleteUserController } from '../../UseCases/Users/DeleteUser/DeleteUserController'
import { GetUserDetailController } from '../../UseCases/Users/GetUserDetail/GetUserDetailController'
import { UpdateUserController } from '../../UseCases/Users/UpdateUser/UpdateUserController'

const UserRouter = Router()

UserRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
  return ListUsersController.handle(req, res)
}
)
UserRouter.get('/:UserId', middlewares.isAuth, (req: Request, res: Response, next: NextFunction) => {
  //return GetUserDetailController.handle(req, res)
  return 'OK'
})

UserRouter.post('/', middlewares.isAuth, (req: Request, res: Response, next: NextFunction) => {
  return CreateUserController.handle(req, res)
})

UserRouter.patch('/:UserId', middlewares.isAuth, (req: Request, res: Response, next: NextFunction) => {
  //return UpdateUserController.handle(req, res)
  return 'OK'
})

UserRouter.delete('/:UserId', middlewares.isAuth, (req: Request, res: Response, next: NextFunction) => {
  //return DeleteUserController.handle(req, res)
  return 'OK'
})

export { UserRouter }
