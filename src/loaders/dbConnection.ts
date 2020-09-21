
import 'reflect-metadata'
import { createConnection } from 'typeorm'

createConnection().then(connection => {
  console.log('📦[TypeORM]: Connection is OK!')
  // here you can start to work with your entities
}).catch(error => console.log(error))
