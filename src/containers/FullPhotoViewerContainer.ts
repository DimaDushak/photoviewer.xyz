import { connect } from 'react-redux';
import { RootState } from '../store';
import { enableLoadingByScroll } from '../store/loadingByScroll/actions';
import { FullPhotoViewer } from '../components/Main/FullPhotoViewer';

const mapState = (state: RootState) => ({
    photosArray: state.changePhotos.photosArray,
    pageNumber: state.changePhotos.pageNumber,
    scrollPositionY: state.loadingByScroll.scrollPositionY,
    isDesktop: state.resizeWindow.isDesktop
});

const mapDispatch = {
    enableLoadingByScroll
};

interface OwnProps {
    loadPhotos: (pageNumber: number) => void;
    totalPhotos?: number;
}

type StateProps = ReturnType<typeof mapState>;
type DispatchProps = typeof mapDispatch;

export default connect<StateProps, DispatchProps, OwnProps, RootState>(
    mapState,
    mapDispatch
)(FullPhotoViewer);
