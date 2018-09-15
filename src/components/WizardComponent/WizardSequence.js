import WizardPage from './WizardPage';
import LoanDetails from '../LoanDetails/LoanDetails';
import CustomerIncome from '../CustomerIncome/CustomerIncome';
import { CustomerEmployment } from '../CustomerEmployment';
import { CustomerAssets } from '../CustomerAssets';
import { CustomerLiabilities } from '../CustomerLiabilities';
import Loading from '../Loading/Loading';
import BasicCustomerInfo from '../BasicCustomerInfo/BasicCustomerInfo';
import Review from '../Review/Review';

export const headerTextMap = new Map([
  [1, 'Before we get started'],
  [2, 'Loan Details'],
  [3, 'Your Income Details'],
  [4, 'Your Assets'],
  [5, 'Your Liabilities'],
  [6, 'Your Employment Details'],
  [7, 'Review information before you submit']
]);

class WizardSequence {
  constructor() {
    this.pageSequence = [];
    this.pageSequence.push(new WizardPage(0, '', '/', '', Loading));
    this.pageSequence.push(
      new WizardPage(1, 'basic', '/pl/loan', null, BasicCustomerInfo)
    );
    this.pageSequence.push(
      new WizardPage(2, 'loan', '/pl/income', '/pl/basic', LoanDetails)
    );
    this.pageSequence.push(
      new WizardPage(3, 'income', '/pl/assets', '/pl/loan', CustomerIncome)
    );
    this.pageSequence.push(
      new WizardPage(
        4,
        'assets',
        '/pl/liabilities',
        '/pl/income',
        CustomerAssets
      )
    );
    this.pageSequence.push(
      new WizardPage(
        5,
        'liabilities',
        '/pl/employment',
        '/pl/assets',
        CustomerLiabilities
      )
    );
    this.pageSequence.push(
      new WizardPage(
        6,
        'employment',
        '/pl/review',
        '/pl/liabilities',
        CustomerEmployment
      )
    );
    this.pageSequence.push(
      new WizardPage(7, 'review', null, '/pl/employment', Review)
    );
  }

  indexFromPath(path) {
    const index = this.pageSequence.findIndex(seq => seq.path === path);
    return index;
  }

  getComponentFromIndex(index) {
    const component = this.pageSequence.find(seq => seq.index === index);
    return component;
  }
}

const wizardSequence = new WizardSequence();

export default wizardSequence;
