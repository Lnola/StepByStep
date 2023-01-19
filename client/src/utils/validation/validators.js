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

export { requiredValidator, minLengthValidator, maxLengthValidator, selectionRequiredValidator };
