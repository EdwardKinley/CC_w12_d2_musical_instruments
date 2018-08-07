const InstrumentFamilies = require('./models/instrument_families.js');
const SelectView = require('./views/select_view.js');
const FamilyView = require('./views/family_view.js');

document.addEventListener('DOMContentLoaded', function() {
  console.log('JavaScript Loaded');

  const selectElement = document.querySelector('select#instrument-families');
  console.log(selectElement);
  const selectView = new SelectView(selectElement);
  selectView.bindEvents();
  console.log(selectView);

  const infoDiv = document.querySelector('div#family-info');
  const familyInfoDisplay = new FamilyView(infoDiv);
  familyInfoDisplay.bindEvents();

  const familyDataSource = new InstrumentFamilies();
  familyDataSource.bindEvents();
});
