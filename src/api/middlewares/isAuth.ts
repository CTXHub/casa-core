import { Request, Response, NextFunction } from 'express'

function isAuth (req:Request, res:Response, next:NextFunction) {
  console.log('This is an authenticated route')
  next()
}
export { isAuth }
