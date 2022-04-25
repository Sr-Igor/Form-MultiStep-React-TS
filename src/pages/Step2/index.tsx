import { ChangeEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FormActions, useForm } from '../../contexts/Contexts'
import { Label } from '../../components/SelectOption'
import * as C from './style'


export const Step2 = () => {

    const navigate = useNavigate()
    const {state, dispatch } = useForm()

    const handlePageNext = (e: any) => {
        e.preventDefault()
        if(state.level !== 0){
            navigate('/step3')
        }else{
            alert("Selecione uma das opções abaixo")
        }
        
    }

    const handlePageBack = () => {
        navigate('/')
    }

    useEffect(()=>{
        if(state.name === ''){
            navigate("/")
        }else{
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 2,
            })
        }
    }, [])
 
    return(
        <C.Container>
            <Label 
                emoji={"😬"}
                title={"Sou Iniciante"}
                subtitle={"Comecei a programar há menos de 2 anos"}
                value={1}
                vr={state.level == 1}
                
            />

            <Label 
                emoji={"🤑"}
                title={"Sou Experiente"}
                subtitle={"Comecei a programar há mais de 2 anos"}
                value={2}
                vr={state.level == 2}
            />
            <C.FormStep>
                
                <div className='buttonsArea'>
                    <button className='back' onClick={handlePageBack}>Voltar</button>
                    <button className='next' onClick={handlePageNext}>Próximo</button>
                </div>
            </C.FormStep>
        </C.Container>
    )
}