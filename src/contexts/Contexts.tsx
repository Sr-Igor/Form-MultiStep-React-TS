import { createContext, ReactNode, useContext, useReducer } from 'react'

//Types 

type State = {
    currentStep: number;
    name: string;
    level: number;
    email: string;
    github: string;
}

type Action = {
    type: FormActions;
    payload: any;
}

type ContextType = {
    state: State;
    dispatch: (action: Action) => void;
}

type PropsChildren = {
    children: ReactNode;
}

const initialData: State = {
    currentStep: 1,
    name: "",
    level: 0,
    email: "",
    github: "",
}

//Context 
const FormContext = createContext<ContextType | undefined>(undefined)

// Reducer 

export enum FormActions {
    setCurrentStep,
    setName,
    setLevel,
    setEmail,
    setGitHub,
}

const FormReducer = (state: State, action: Action) => {
    switch(action.type){
        case FormActions.setCurrentStep:
            return {...state, currentStep: action.payload};
        case FormActions.setName: 
            return {...state, name: action.payload};
        case FormActions.setLevel:
            return {...state, level: action.payload};
        case FormActions.setEmail:
            return {...state, email: action.payload};
        case FormActions.setGitHub: 
            return {...state, github: action.payload};
        default:
            return state;
    }
}

// Provider 

export const FormProvider = ({children}: PropsChildren) => {
    const [state, dispatch] = useReducer(FormReducer, initialData)
    const value = {state, dispatch}

    return(
        <FormContext.Provider value={value}>
            {children}
        </FormContext.Provider>
    )
}

// Hook

export const useForm = () => {
    const context = useContext(FormContext)
    if(context == undefined){
        throw new Error ("Use error - call location")
    }
    return context
}