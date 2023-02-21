// DO NOT MODIFY THE say FUNCTION
function say(name) {
  console.log(`${this.message} ${name}!`);
}

helloMessage = { message: 'Hello,' };
heyThereMessage = { message: 'Hey there,' };



say(helloMessage, "John");
say(heyThereMessage, "Michael");


say.call(helloMessage, 'John') //we added .call to helloMessage since 'john' is a str
say.apply(heyThereMessage, ['Michael']) // I wanted to try if putting 'michael' in an array works -- it does
