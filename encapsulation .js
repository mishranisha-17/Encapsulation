class User {
    #password;
    constructor(name, userName, password) {
      this.name = name;
      this.userName = userName;
      this.#password = password;
    }
  
    login(userName, password) {
      if (userName === this.userName && password === this.#password) {
        console.log('Login Successfully');
      } else {
        console.log('Authentication Failed!!');
      }
    }
  
    // setPassword(newPassword) {
    //   this.#password = newPassword;
    // }
  };
  
  const p1 = new User("shakul", "shakul",'password:)');
  const js = new User('JavaScript', 'js', 'python:)');
  
  
  p1.login("shak" ,'password:)'); 
  js.login('javas', 'python:)'); 
  
  console.log(p1.name); 
  console.log(p1.password); 
  //console.logp1.#password); 
  
  