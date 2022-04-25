import * as C from './style'
import { FormHeader } from '../FormHeader'
import { Step1 } from '../Step1'
import { Step2 } from "../Step2"
import { Step3 } from '../Step3'

export const BodyRight = () => {
    return(
        <C.Container>
            <FormHeader
                step={1}
                title={"Vamos começar com seu nome"}
                subTitle={"Preencha o campo abaixo com seu nome completo"}
                name={""}
            />
            {/* <Step1 /> */}
            <Step2 />
            {/* <Step3 /> */}
        </C.Container>
    )
}