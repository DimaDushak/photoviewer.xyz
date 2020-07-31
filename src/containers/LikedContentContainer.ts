import { connect } from 'react-redux';
import { RootState } from '../store';
import { addPhotos } from '../store/changePhotos/actions';
import { LikedContent } from '../components/Main/LikedContent';

const mapState = (state: RootState) => ({
    totalLikes: state.changePhotos.totalLikes
});

const mapDispatch = {
    addPhotos
};

interface OwnProps {
    userName: string;
    loadPhotosCount: number;
}

type StateProps = ReturnType<typeof mapState>;
type DispatchProps = typeof mapDispatch;

export default connect<StateProps, DispatchProps, OwnProps, RootState>(
    mapState,
    mapDispatch
)(LikedContent);
