export const    required = value => value ? undefined : '*';
export const validEmail = value => value && !/.+@.+\..{2,}/.test(value) ? 'Invalid Email' : undefined;
