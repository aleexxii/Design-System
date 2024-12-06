

interface TypographyPropsType{
    name : string,
    tag ?: keyof JSX.IntrinsicElements,
    classes ?: string,
    children ?: React.ReactNode;
}

export default TypographyPropsType;