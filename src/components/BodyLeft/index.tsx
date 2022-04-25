import * as C from './style'
import { StepFormItem } from '../FormStepItem'

export const BodyLeft = () => {
    return(
        <C.Container>
            <StepFormItem img={'assets/user.png'} text={'Pessoal'} subText={"Identifique-se"} colorStep={1}/>
            <StepFormItem img={'assets/form.png'} text={'Profissional'} subText={"Seu Nível"} colorStep={2}/>
            <StepFormItem img={'assets/letter.png'} text={'Contatos'} subText={'Como te achar'} colorStep={3}/>
        </C.Container>
    )
}