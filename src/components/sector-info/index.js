import { connect } from 'react-redux';

import { getCurrentSector } from 'store/selectors/sector.selectors';
import { editSector } from 'store/actions/sector.actions';
import SectorInfo from './sector-info';

const mapStateToProps = state => ({
  sector: getCurrentSector(state),
});

const mapDispatchToProps = dispatch => ({
  editSectorName: value => {
    dispatch(editSector('name', value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SectorInfo);
