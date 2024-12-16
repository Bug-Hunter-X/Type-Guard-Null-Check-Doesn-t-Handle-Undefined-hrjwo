function printName(name: string | null | undefined): void {
  if (name === null || name === undefined) {
    console.log('No name provided.');
    return;
  }
  console.log(`My name is ${name}.`);
}

printName(null); // Correct
printName('John'); // Correct
printName(undefined); // Correct