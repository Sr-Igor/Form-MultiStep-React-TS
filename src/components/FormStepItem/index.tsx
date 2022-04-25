import * as C from './style'

type Props = {
    img: string,
    text: string,
    subText: string,
}

export const StepFormItem = ({img, text, subText}: Props) => {
    return(
        <C.Container>
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