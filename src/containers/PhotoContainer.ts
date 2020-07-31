import { connect } from 'react-redux';
import { RootState } from '../store';
import { showInform, hideInform } from '../store/showingPhotoInform/actions';
import { disableLoadingByScroll } from '../store/loadingByScroll/actions'
import { Photo } from '../components/Main/PhotoGrid/Photo';

const mapState = (state: RootState) => ({
    isTablet: state.resizeWindow.isTablet,
    id: state.showingPhotoInform
});

const mapDispatch = {
    disableLoadingByScroll,
    showInform,
    hideInform
};

interface OwnProps {
    inform: any;
}

type StateProps = ReturnType<typeof mapState>;
type DispatchProps = typeof mapDispatch;

export default connect<StateProps, DispatchProps, OwnProps, RootState>(
    mapState,
    mapDispatch
)(Photo);
