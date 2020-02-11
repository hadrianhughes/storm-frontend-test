export const createBEM = block => (element, modifiers = []) => {
  const firstClass = element ? `${block}__${element}` : block;
  const modifierClasses = modifiers.reduce((acc, modifier) => [
    ...acc,
    `${block}__${element}--${modifier}`
  ], []);

  return [firstClass, ...modifierClasses].join(' ');
};
