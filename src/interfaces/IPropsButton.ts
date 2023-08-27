export default interface IPropsButton {
    onClickFunc: Function;
    hasBackground?: boolean;
    disabled?: boolean;
    type?: 'button' | 'submit';
    className?: string;
}