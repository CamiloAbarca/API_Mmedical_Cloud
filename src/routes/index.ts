import { Router } from 'express'
import healthRoutes from './healthRoutes'
import equipoRouters from './equipoRoutes'
import authRoutes from './authRoutes'
import tokenValidator from '../middlewares/tokenValidator'



const apiRoutes = Router()
const cors = require('cors');
equipoRouters.use(cors());

apiRoutes.use('/', healthRoutes)
apiRoutes.use('/equipos', tokenValidator(), equipoRouters)
apiRoutes.use('/auth', authRoutes)

export default apiRoutes
