import { connect } from 'react-redux';
import { RootState } from '../store';
import {
    toLikePhoto,
    addPhotos,
    deletePhotos
} from '../store/changePhotos/actions';
import { resizeWindow } from  '../store/resizeWindow/action';
import { App } from '../components/App';

const mapDispatch = {
    addPhotos,
    toLikePhoto,
    resizeWindow,
    deletePhotos
};

type DispatchProps = typeof mapDispatch;

export default connect<{}, DispatchProps, {}, RootState>(
    () => ({}),
    mapDispatch
)(App);
