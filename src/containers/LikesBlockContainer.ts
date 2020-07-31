import { connect } from 'react-redux';
import { RootState } from '../store';
import { toLikePhoto } from '../store/changePhotos/actions';
import { LikesBlock } from '../components/LikesBlock';

const mapDispatch = {
    toLikePhoto
};

interface OwnProps {
    inform: any;
    isPhotoGrid?: boolean;
    showInform?: (id: string) => void; 
}

type DispatchProps = typeof mapDispatch;

export default connect<{}, DispatchProps, OwnProps, RootState>(
    () => ({}),
    mapDispatch
)(LikesBlock);
