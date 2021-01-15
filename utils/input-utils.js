exports.simple_check = async (expected, input) => {
  MissingKeys = [];
  for(key of Object.keys(expected)) {
    if(! key in input) {
      MissingKeys.push(key)
    }
  }
  if(MissingKeys.length == 0) return {};
  return { Missing: MissingKeys };
}

exports.complex_check = async (expected, input) => {
  MissingKeys = [];
  InvalidKeys = [];
  for([key, value] of Object.entries(expected)) {
    if(!(key in input)) {
      MissingKeys.push(key)
    }
    else if (typeof(value) != typeof(input[key])) {
      InvalidKeys.push(key)
    }
  }
  if(MissingKeys.length == 0 && InvalidKeys.length == 0) return {};
  return { Missing: MissingKeys, Invalid: InvalidKeys };
}
