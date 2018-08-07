const PubSub = require('../helpers/pub_sub.js');

const FamilyView = function(container) {
  this.container = container;
};

FamilyView.prototype.bindEvents = function() {
  PubSub.subscribe('InstrumentFamilies:selected-family-ready', (evt) => {
    const family = evt.detail;
    this.render(family);
  });
};

FamilyView.prototype.render = function(family) {
  const infoParagraph = document.createElement('p');
  infoParagraph.textContent = `The ${family.name} family: ${family.description}`;
  this.container.innerHTML = '';
  this.container.appendChild(infoParagraph);
};

module.exports = FamilyView;
