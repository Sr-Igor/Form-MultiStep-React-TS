import { ChangeEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FormActions, useForm } from '../../contexts/Contexts'
import * as C from './style'

export const Step3 = () => {

    const {state, dispatch} = useForm()
    const navigate = useNavigate()

    const handlePageBack = () => {
        navigate("/step2")
    }

    useEffect(()=>{
        if(state.name === '') {
            navigate("/")
        }else if(state.level === 0){
            navigate("/step2")
        }else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 3,
            })
        }
    }, [])

    const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setEmail,
            payload: e.target.value,
        })
    }

    const handleGit = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setGitHub,
            payload: e.target.value,
        })
    }

    const sendInfos = (e: any) => {
        e.preventDefault()
        if(state.email !== "" && state.github !== ""){
            alert(`
            nome: ${state.name}
            level: ${state.level}
            email: ${state.email}
            GitHub: ${state.github}
            `)
        }else{
            alert("Preencha os campos corretamente")
        }
    }

    return(
    <C.Container>
        <C.FormStep>
            <label>
                Qual seu e-mail?
                <input type="text" value={state.email} onChange={handleEmail}/>
            </label>

            <label>
                Qual seu GitHub?
                <input type="text" value={state.github} onChange={handleGit}/>
            </label>

            <div className='buttonsArea'>
                    <button className='back' onClick={handlePageBack}>Voltar</button>
                    <button className='next' onClick={sendInfos}>Enviar</button>
            </div>
        </C.FormStep>
    </C.Container>
    )
}