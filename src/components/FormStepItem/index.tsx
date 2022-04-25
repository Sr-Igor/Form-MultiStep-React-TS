import { useEffect, useState } from 'react'
import * as C from './style'
import { FormActions, useForm } from '../../contexts/Contexts'
import { useNavigate } from 'react-router-dom' 

type Props = {
    img: string,
    text: string,
    subText: string,
    colorStep: number
}

export const StepFormItem = ({img, text, subText, colorStep}: Props) => {

    const {state, dispatch} = useForm()
    const [color, setColor] = useState("")
    const [colorCirlce, setColorCircle] = useState("")
    const navigate = useNavigate()

    useEffect(()=>{
        if(state.currentStep == colorStep){
            setColor("#49926b")
            setColorCircle("#49926b")
        }else{
            setColor("#691497")
            setColorCircle("#211132")
        }
    },[state])

    return(
        <C.Container color={color} colorCircle={colorCirlce}>
            <div className='left'>
                <span className='title'>{text}</span>
                <span className='subtitle'>{subText}</span>
            </div>
            <div className='right'>
                <div className='bg-right'>
                    <img src={img} alt="photoForm" />   
                </div>
                <div className='point'></div>
            </div>
        </C.Container>
    )
}