import * as C from './style'

export const Step1 = () => {
    return(
        <C.Container>
            <C.FormStep>
                <label>
                    Seu Nome Completo
                    <input type="text" />
                </label>
                <button>Próximo</button>
            </C.FormStep>
        </C.Container>
    )
}