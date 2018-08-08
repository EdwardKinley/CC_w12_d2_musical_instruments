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
  const infoParagraph = document.createElement('h2');
  infoParagraph.textContent = `The ${family.name} family`;

  const description = document.createElement('h6');
  description.textContent = `${family.description}`;
  infoParagraph.appendChild(description);

  const instruments = document.createElement('h6');
  instruments.textContent = `${family.instruments}`;
  infoParagraph.appendChild(instruments);

  this.container.innerHTML = '';
  this.container.appendChild(infoParagraph);
};

module.exports = FamilyView;
