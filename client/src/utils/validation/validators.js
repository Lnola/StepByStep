function requiredValidator() {
  return function required(value) {
    return (value !== undefined && value !== null && value !== '') || 'This field is required';
  };
}

export { requiredValidator };
