import { FC } from 'react';
import './index.scss'

interface IButtonProps {
    active?: boolean,
}

export const Button: FC<IButtonProps> = (props) => {
    const { active } = props;
    return <div className={`button ${active ? "active" : "inActive"}`}>
        <div>Bid Now</div>
    </div>
}