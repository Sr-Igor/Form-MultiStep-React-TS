import * as C from './style'

type Props ={
    step: number;
    title: string;
    subTitle: string;
    name?: string
}


export const FormHeader = ({step, title, subTitle, name} : Props) => {
    return(
        <C.Container>
            <C.CurrentStep>Passo {step}/3</C.CurrentStep>
            <C.TitleStep>
                <span className='titleStep1'>{title}</span>
                <span className='subTitleStep1'>{subTitle}</span>
            </C.TitleStep>
        </C.Container>
    )
}