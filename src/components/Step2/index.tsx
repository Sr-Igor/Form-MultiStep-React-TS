import { ChangeEvent, useState } from 'react'
import * as C from './style'


export const Step2 = () => {

    return(
        <C.Container>
            <C.FormStep>
                <label htmlFor='NoXp'>  
                    <input type="radio" name='level' id='NoXp'/>
                    <div className='emoji'>😬</div>
                    <div className='titles'>
                        <span className='titleLabel'>Sou Iniciante</span>
                        <span className='subtitleLabel'>Comecei a programar há menos de 2 anos</span>
                    </div>
                </label>
                
                
                <label htmlFor='Xp'>  
                <input type="radio" name='level' id='Xp'/>
                    <div className='emoji'>🤑</div>
                    <div className='titles'>
                        <span className='titleLabel'>Sou Experiente</span>
                        <span className='subtitleLabel'>Comecei a programar há mais de 2 anos</span>
                    </div>
                </label>
                
                <div className='buttonsArea'>
                    <button className='back'>Voltar</button>
                    <button className='next'>Próximo</button>
                </div>
            </C.FormStep>
        </C.Container>
    )
}