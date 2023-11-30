type Name = string | number

let 이름 :Name = 132;

function 함수(x :number) :number {
  return x * 2 
}

type Member = {
  [key : string] : string
}
let john :Member = { name : 'kim' }

class User {
  name :string;
  constructor(name: string) {
    this.name = name;
  }
}
