import * as C from './style'
import { useForm, FormActions } from '../../contexts/Contexts'
import { useEffect } from 'react'


type Props ={
    step: number;
    title: string;
    subTitle: string;
    name?: string
}

export const FormHeader = () => {
    let {state, dispatch} = useForm()


    let objSteps: any = {
        1: {title: "Vamos Começar com seu nome", subTitle: "Preencha o campo abaixo com seu nome",},
        2: {title: `${state.name}, o que melhor descreve você?`, subTitle: "Escolha a opção que condiz com seu nível profissional",},
        3: {title: `Legal ${state.name}. Onde de achamos? `, subTitle: "Preencha com seus contatos",},
    }

    
    return(
        <C.Container>
            <C.CurrentStep>Passo {state.currentStep}/3</C.CurrentStep>
            <C.TitleStep>
                <span className='titleStep1'>{objSteps[state.currentStep].title}</span>
                <span className='subTitleStep1'>{objSteps[state.currentStep].subTitle}</span>
            </C.TitleStep>
        </C.Container>
    )
}