import { ChangeEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FormActions, useForm } from '../../contexts/Contexts'
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

    const handleClick = (e: any) => {
        dispatch({
            type: FormActions.setLevel,
            payload: Number(e.target.value),
        })
        e.target.checked = true
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
            <C.FormStep>
                <label htmlFor='NoXp'>  
                    <input type="radio" name='level' id='NoXp' value={1} onClick={handleClick}/>
                    <div className='emoji'>😬</div>
                    <div className='titles'>
                        <span className='titleLabel'>Sou Iniciante</span>
                        <span className='subtitleLabel'>Comecei a programar há menos de 2 anos</span>
                    </div>
                </label>
                
                
                <label htmlFor='Xp'>  
                <input type="radio" name='level' id='Xp' value={2} onClick={handleClick}/>
                    <div className='emoji'>🤑</div>
                    <div className='titles'>
                        <span className='titleLabel'>Sou Experiente</span>
                        <span className='subtitleLabel'>Comecei a programar há mais de 2 anos</span>
                    </div>
                </label>
                
                <div className='buttonsArea'>
                    <button className='back' onClick={handlePageBack}>Voltar</button>
                    <button className='next' onClick={handlePageNext}>Próximo</button>
                </div>
            </C.FormStep>
        </C.Container>
    )
}