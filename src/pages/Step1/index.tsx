import * as C from './style'
import { useNavigate } from 'react-router-dom'
import { FormActions, useForm } from '../../contexts/Contexts'
import { ChangeEvent, MouseEventHandler, useEffect } from 'react'

export const Step1 = () => {

    const {state, dispatch} = useForm()
    const navigate = useNavigate()

    const handlePage = (e: any) => {
        e.preventDefault()
        if(state.name !== ""){
            navigate('/step2')
        }else{
            alert("Preencha todos os campos")
        }
        
    }

    useEffect(()=>{
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 1,
        })
    }, [])

    const handleInputName = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setName,
            payload: e.target.value
        })
    }

    return(
        <C.Container>
            <C.FormStep>
                <label>
                    Seu Nome Completo
                    <input type="text" onChange={handleInputName} value={state.name}/>
                </label>
                <button onClick={handlePage}>Próximo</button>
            </C.FormStep>
        </C.Container>
    )
}