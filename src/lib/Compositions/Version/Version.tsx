import PTextBox from 'lib/Components/Primal/PTextBox/PTextBox';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { ICommonState } from 'Store/Common/CommonReducer';
const Version: FC = () => {
    const version = useSelector<ICommonState>(state => state.version)
    return <PTextBox text={`Version: ${version}`} />
};

export default Version;