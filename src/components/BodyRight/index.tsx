import * as C from './style'
import { FormHeader } from '../FormHeader'
import { MainRoutes } from '../../routes/MainRoutes'

export const BodyRight = () => {
    return(
        <C.Container>
            <FormHeader/>
            <MainRoutes />
        </C.Container>
    )
}