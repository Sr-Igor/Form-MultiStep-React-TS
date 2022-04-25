import * as C from './style'

export const Step3 = () => {
    return(
    <C.Container>
        <C.FormStep>
            <label>
                Qual seu e-mail?
                <input type="email" />
            </label>

            <label>
                Qual seu GitHub?
                <input type="text" />
            </label>

            <div className='buttonsArea'>
                    <button className='back'>Voltar</button>
                    <button className='next'>Próximo</button>
            </div>
        </C.FormStep>
    </C.Container>
    )
}