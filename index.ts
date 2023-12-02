// 자바스크립트 변경 방법 -> 터미널에서 'tsc -w' 입력

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

// ------ 12월 1일 금요일 --------

function test(x :number) :number {
  return x * 2
}

test(2)
// test('하이')  -> 파라미터, 리턴값 모두 number 이기 때문에 오류남
// Narrowing -> typeof 연산자 : 변수가 number 이거나 string 일 때 숫자를 계산하고 싶으면 narrowing 하면 된다.
// narrowing은 어떤 변수가 타입이 불확실할때 if문 등으로 narrowing 해줘야 조작이 가능하다.
function test1(x :number | string) {
  if (typeof x === 'string') {
    return x + '1'
  } else {
    return x + 1
  }
}

// ------------ 12월 2일 토요일 (Narrowing, Assertion) ------------ 

function test2(x : number | string) {

  let array :number[] = [];
  // 방법 1
  if(typeof x === 'number') {
    array[0] = x;
  } else {

  }
  // 방법 2 -> assertion 문법 : narrowing 할때 사용, 무슨 타입이 들어올지 확실할 때 사용, 그냥 비상용으로 사용한다.
  array[0] = x as number;
}

// parseFloat -> 문자열을 실수로 바꾸는 함수
function change (x : (number | string) []) {
  let array :number[] = [];

  x.forEach((y) => {
    if (typeof y === 'string') {
      array.push(parseFloat(y))
    } else {
      array.push(y)
    }
  })

  return array
}
console.log(change([123, '3', '2']))

// let 오브젝트 :{a : string|number} = {a : '123'};

function subject (x :{subject : string | string[]}) {
  if (typeof x.subject === 'string') {
    return x.subject
  } else if (Array.isArray(x.subject)) {
    return x.subject[x.subject.length-1]
  } else {
    return '없습니당'
  }
}

console.log(subject({subject : ['english', 'art']}))