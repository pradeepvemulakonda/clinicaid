export default class WizardPage {
  constructor(index, path, next, prev, component) {
    this.index = index;
    this.path = path;
    this.next = next;
    this.prev = prev;
    this.component = component;
  }
}
