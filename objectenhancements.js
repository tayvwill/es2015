function createInstructor(firstName, lastName){
    return {
      firstName: firstName,
      lastName: lastName
    }
  }

  // ES2015 version

  function createInstructor(firstName, lastName) {
    return {
        firstName,
        lastName
    }
  }

  //computed property names
  let favoriteNumber = 42;
  const instructor = {
    firstName: "Colt",
    [favoriteNumber]: "That is my favorite!"
  }

  // object methods
  let instructors = {
    firstname: "Colt",
    sayHi: function(){
        return "Hi!";
    }
    sayBye: function(){
        return this.firstName  +  "says bye!";
    }
  }

  //object methods ES2015
  const instructor = {
    firstName: "Colt",
    sayHi(){
      return "Hi!";
    },
    sayBye(){
      return this.firstName + " says bye!";
    }
  }

  //create animal function
  const d = createAnimal("dog", "bark", "Woooof!")
  d.bark() 
  
  const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
  s.bleet()
  
  function createAnimal(species, verb, noise){
    return {
      species,
      [verb](){
        return noise;
      }
    }
  }
