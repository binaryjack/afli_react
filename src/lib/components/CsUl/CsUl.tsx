
import { FC } from "react";
import { CsLi } from '../CsLi/CsLi';

type CsUlProps = {
    arr: number[];
}
export const CsUl: FC<CsUlProps> = ({ arr }) => {
    return (
        <ul>
            {arr &&
                arr.map((item) =>
                    <CsLi key={item} item={item} />
                )
            }
        </ul>
    );
}
