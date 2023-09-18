document.addEventListener('DOMContentLoaded', async () => {
    const universities = await fetchUniversities(); 
  
    // Compile a Handlebars template
    const source = document.getElementById('university-template').innerHTML;
    const template = Handlebars.compile(source);
  
    // Render universities using Handlebars
    const universitiesList = document.getElementById('universities-list');
    universitiesList.innerHTML = template({ universities });
  
    // Add event listener for filter button click
    const applyFiltersButton = document.getElementById('apply-filters');
    applyFiltersButton.addEventListener('click', () => {
      applyFilters(universities, universitiesList);
    });
  });
  
  function applyFilters(universities, universitiesList) {
    // Get selected filter values
    const selectedLocations = getSelectedCheckboxes('location');
    const selectedDegrees = getSelectedCheckboxes('degree');
    const selectedFunds = getSelectedCheckboxes('fund');
    const selectedDates = getSelectedCheckboxes('date');
  
    // Filter universities based on selected criteria
    const filteredUniversities = universities.filter((uni) => {
      return (
        (selectedLocations.length === 0 || selectedLocations.includes(uni.location)) &&
        (selectedDegrees.length === 0 || selectedDegrees.includes(uni.degrees)) &&
        (selectedFunds.length === 0 || selectedFunds.includes(uni.funds)) &&
        (selectedDates.length === 0 || selectedDates.includes(uni.date))
      );
    });
  
    // Render filtered universities using Handlebars
    const source = document.getElementById('university-template').innerHTML;
    const template = Handlebars.compile(source);
    universitiesList.innerHTML = template({ universities: filteredUniversities });
  }
  
  function getSelectedCheckboxes(filterName) {
    const checkboxes = document.querySelectorAll(`input[type="checkbox"][id^="${filterName}"]:checked`);
    return Array.from(checkboxes).map((checkbox) => checkbox.value);
  }
  