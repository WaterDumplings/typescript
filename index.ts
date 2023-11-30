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

let 회원 :number | string = 123;  // union Type

let 회원들 :(number | string)[] = [1, '2', 3];
let 오브젝트 :{a : string|number} = {a : '123'};

let 이름1 : any;  // any는 모든 자료형을 허용한다. -> 타입실드 해제문법 (일반 자바스크립트 처럼 할 수 있는거임)
let 이름2 : unknown; // any와 비슷한 친구
let 나이 : string | number;
// 나이 + 1   -> 에러남 : string + 1 가능, number + 1 가능, string | number + 1 불가능
let 나이1 : unknown = 1;
// 나이1 + 1  -> 에러남 : 타입스크립트는 타입 엄격 숫자타입일때만 연산 가능

//  숙제
let user : string = 'kim';
let age : number = undefined;
let married : boolean = false;
let 철수 : (string | number | boolean | undefined)[]= [user, age, married];

let 학교 : {
  score : (number | boolean)[], 
  teacher : string, 
  friend : string | string[]
}

= {
  score : [100, 97, 84],
  teacher : 'Phil',
  friend : 'John'
}
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher]

