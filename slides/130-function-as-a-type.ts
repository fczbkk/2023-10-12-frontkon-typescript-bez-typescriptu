type StringTransformer = (input: string) => string;

const toUpperCase: StringTransformer = (str) => str.toUpperCase()
const toReversed: StringTransformer = (str) => str.split('').reverse().join('')
