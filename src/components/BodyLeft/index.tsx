import * as C from './style'
import { StepFormItem } from '../FormStepItem'

export const BodyLeft = () => {
    return(
        <C.Container>
            <StepFormItem img={'assets/user.png'} text={'Pessoal'} subText={"Identifique-se"}/>
            <StepFormItem img={'assets/form.png'} text={'Profissional'} subText={"Seu Nível"}/>
            <StepFormItem img={'assets/letter.png'} text={'Contatos'} subText={'Como te achar'}/>
        </C.Container>
    )
}