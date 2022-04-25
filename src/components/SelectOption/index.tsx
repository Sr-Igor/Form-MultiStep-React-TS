import * as C from './style'
import { FormActions, useForm } from '../../contexts/Contexts'
import { useEffect, useState } from 'react'

type Props = {
    emoji: string,
    title: string,
    subtitle: string,
    value: number,
    vr: boolean
}

export const Label = ({emoji, title, subtitle, value, vr}: Props) => {

    const {state, dispatch } = useForm()
    const [color, setColor] = useState("")

    console.log(vr)

    const handleClick = (e: any) => {
        e.target.checked = true
        dispatch({
            type: FormActions.setLevel,
            payload: Number(e.target.value),
        })
    }

    useEffect(()=> {
        if(vr){
            setColor("#49926b")
        }else{
            setColor("transparent")
        }
    }, [state])

    return(
        <C.Container color={color}>
            <label>  
                <input type="radio" name='level' value={value} onClick={handleClick}/>
                <div className='emoji'>{emoji}</div>
                <div className='titles'>
                    <span className='titleLabel'>{title}</span>
                    <span className='subtitleLabel'>{subtitle}</span>
                </div>
            </label>
        </C.Container>
    )
}