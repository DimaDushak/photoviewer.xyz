import { connect } from 'react-redux';
import { RootState } from '../store';
import { deletePhotos } from '../store/changePhotos/actions';
import { PhotoGrid } from '../components/Main/PhotoGrid';

const mapState = (state: RootState) => ({
    photosArray: state.changePhotos.photosArray,
    pageNumber: state.changePhotos.pageNumber,
    isTablet: state.resizeWindow.isTablet,
    isDesktop: state.resizeWindow.isDesktop,
    isEnableLoadingByScroll: state.loadingByScroll.isEnableLoadingByScroll
});

const mapDispatch = {
    deletePhotos
};

interface OwnProps {
    loadPhotos: (pageNumber: number) => void;
    totalPhotos?: number;
    keyword?: string;
}

type StateProps = ReturnType<typeof mapState>;
type DispatchProps = typeof mapDispatch;

export default connect<StateProps, DispatchProps, OwnProps, RootState>(
    mapState,
    mapDispatch
)(PhotoGrid);
