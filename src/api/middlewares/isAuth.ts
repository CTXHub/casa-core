import { Request, Response, NextFunction } from 'express'

function isAuth (req:Request, res:Response, next:NextFunction) {
  // TODO: needs to create the authentication method here
  console.log('This is an authenticated route')
  next()
}
export { isAuth }
