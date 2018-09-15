import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'recompose';
import { appActions } from '../../redux/modules/app.module';
import { customerActions } from '../../redux/modules/customer.module';
import { getPageState } from '../../redux/selectors/page.selector';
import { getHeaderText } from '../../redux/selectors/header.selector';
import { getCustomer } from '../../redux/selectors/customer.selector';
import { getAdditionalLoanPurposeCount } from '../../redux/selectors/additionalLoanPurposeCount.selector';
import { MainForm } from '../../components/MainForm';

class ApplicationContainer extends React.Component {
  componentDidMount() {
    const { fetchPageFromPath, loadCustomer, match } = this.props;
    fetchPageFromPath(match.params.page);
    loadCustomer(1);
  }

  componentDidUpdate() {
    const { fetchPageFromPath, match } = this.props;
    fetchPageFromPath(match.params.page);
  }

  render() {
    return <MainForm {...this.props} />;
  }
}

const mapStateToProps = (state, myProps) => ({
  page: getPageState(state, myProps),
  header: getHeaderText(state, myProps),
  customer: getCustomer(state, myProps),
  additionalLoanPurposes: getAdditionalLoanPurposeCount(state, myProps),
});

const mapDispatchToProps = dispatch => ({
  fetchPageFromPath: pathParam => {
    dispatch(appActions.app.page.fetch(pathParam));
  },
  addAdditionalLoanPurpose: () => {
    dispatch(appActions.app.form.pl.loan.addLoanPurpose());
  },
  loadCustomer: id => {
    dispatch(customerActions.app.form.customer.getCustomer(id));
  },
});

const enhance = compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
);

export default enhance(ApplicationContainer);
