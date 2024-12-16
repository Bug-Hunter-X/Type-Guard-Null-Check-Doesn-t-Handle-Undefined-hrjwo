function printName(name: string | null): void {
  if (name === null) {
    console.log('No name provided.');
    return;
  }
  console.log(`My name is ${name}.`);
}

printName(null); //Correct
printName('John'); // Correct
printName(undefined); // This will throw an error because 'undefined' is not handled.