import { Router } from 'express'
import healthRoutes from './healthRoutes'
import equipoRouters from './equipoRoutes'
import authRoutes from './authRoutes'
import tokenValidator from '../middlewares/tokenValidator'
import cors from 'cors'


const apiRoutes = Router()
equipoRouters.use(cors());

apiRoutes.use('/', healthRoutes)
apiRoutes.use('/equipos', tokenValidator(), equipoRouters)
apiRoutes.use('/auth', authRoutes)

export default apiRoutes
