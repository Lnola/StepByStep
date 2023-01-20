function requiredValidator() {
  return function required(value) {
    return (value !== undefined && value !== null && value !== '') || 'This field is required';
  };
}

function minLengthValidator(length) {
  return function minLength(value) {
    return value.length >= length || `This field must be at least ${length} letters long`;
  };
}

function maxLengthValidator(length) {
  return function maxLength(value) {
    return value.length <= length || `This field can have a maximum of ${length} letters`;
  };
}

function selectionRequiredValidator(selector) {
  return function selectionRequired(value) {
    return selector.forgive || value.length > 0 || `You need to select at least one ${selector.type}`;
  };
}

function timeRequiredValidator() {
  return function timeRequired({ hours, minutes, seconds }) {
    if (hours === undefined || hours === null || hours === '') return 'Field hours is required';
    if (minutes === undefined || minutes === null || minutes === '') return 'Field minutes is required';
    if (seconds === undefined || seconds === null || seconds === '') return 'Field seconds is required';
    return true;
  };
}

function minValueValidator(min, fieldName) {
  return function minValue(value) {
    let val = fieldName !== undefined ? value[fieldName] : value;
    return val >= min || `Field ${fieldName === undefined ? '' : fieldName} must be greater or equal to ${min}`;
  };
}

function maxValueValidator(max, fieldName) {
  return function maxValue(value) {
    let val = fieldName !== undefined ? value[fieldName] : value;
    return val <= max || `Field ${fieldName} must be less or equal than ${max}`;
  };
}

function autocompleteValidator(source) {
  return function autocomplete(value) {
    return source.find(e => e === value) !== undefined || 'Invalid value';
  };
}

export {
  requiredValidator,
  minLengthValidator,
  maxLengthValidator,
  selectionRequiredValidator,
  timeRequiredValidator,
  minValueValidator,
  maxValueValidator,
  autocompleteValidator
};
