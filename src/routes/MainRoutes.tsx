import { useRoutes } from 'react-router-dom'

import { Step1 } from '../pages/Step1'
import { Step2 } from '../pages/Step2'
import { Step3 } from '../pages/Step3'

export const MainRoutes = () => {
    return useRoutes([
        {path: '/', element: <Step1/>},
        {path: '/step2', element: <Step2/>},
        {path: '/step3', element: <Step3/>},
      ]);
}