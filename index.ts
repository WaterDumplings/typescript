// 자바스크립트 변경 방법 -> 터미널에서 'tsc -w' 입력

type Name = string | number

let 이름: Name = 132;

function 함수(x: number): number {
  return x * 2
}

type Member = {
  [key: string]: string
}
let john: Member = { name: 'kim' }

class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

let 회원: number | string = 123;  // union Type

let 회원들: (number | string)[] = [1, '2', 3];
let 오브젝트: { a: string | number } = { a: '123' };

let 이름1: any;  // any는 모든 자료형을 허용한다. -> 타입실드 해제문법 (일반 자바스크립트 처럼 할 수 있는거임)
let 이름2: unknown; // any와 비슷한 친구
let 나이: string | number;
// 나이 + 1   -> 에러남 : string + 1 가능, number + 1 가능, string | number + 1 불가능
let 나이1: unknown = 1;
// 나이1 + 1  -> 에러남 : 타입스크립트는 타입 엄격 숫자타입일때만 연산 가능

//  숙제
let user: string = 'kim';
let age: number = undefined;
let married: boolean = false;
let 철수: (string | number | boolean | undefined)[] = [user, age, married];

let 학교: {
  score: (number | boolean)[],
  teacher: string,
  friend: string | string[]
}

  = {
  score: [100, 97, 84],
  teacher: 'Phil',
  friend: 'John'
}
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher]

// ------ 12월 1일 금요일 --------

function test(x: number): number {
  return x * 2
}

test(2)
// test('하이')  -> 파라미터, 리턴값 모두 number 이기 때문에 오류남
// Narrowing -> typeof 연산자 : 변수가 number 이거나 string 일 때 숫자를 계산하고 싶으면 narrowing 하면 된다.
// narrowing은 어떤 변수가 타입이 불확실할때 if문 등으로 narrowing 해줘야 조작이 가능하다.
function test1(x: number | string) {
  if (typeof x === 'string') {
    return x + '1'
  } else {
    return x + 1
  }
}

// ------------ 12월 2일 토요일 (Narrowing, Assertion) ------------ 

function test2(x: number | string) {

  let array: number[] = [];
  // 방법 1
  if (typeof x === 'number') {
    array[0] = x;
  } else {

  }
  // 방법 2 -> assertion 문법 : narrowing 할때 사용, 무슨 타입이 들어올지 확실할 때 사용, 그냥 비상용으로 사용한다.
  array[0] = x as number;
}

// parseFloat -> 문자열을 실수로 바꾸는 함수
function change(x: (number | string)[]) {
  let array: number[] = [];

  x.forEach((y) => {
    if (typeof y === 'string') {
      array.push(parseFloat(y))
    } else {
      array.push(y)
    }
  })

  return array
}
// console.log(change([123, '3', '2']))

// let 오브젝트 :{a : string|number} = {a : '123'};

function subject(x: { subject: string | string[] }) {
  if (typeof x.subject === 'string') {
    return x.subject
  } else if (Array.isArray(x.subject)) {
    return x.subject[x.subject.length - 1]
  } else {
    return '없습니당'
  }
}

// console.log(subject({ subject: ['english', 'art'] }))

//  ---------- 12월 2일 : 타입도 변수에 담아서 사용하기 -------------- 

// 타입을 변수에 넣기 전
let 동물1: string | number | undefined;

// 타입을 변수에 넣은 후 -> type alias
type Animal = string | number | undefined;

let 동물2: Animal;

// 타입 변수에 넣기 전
let 동물3: { name: string, age: number } = { name: 'kim', age: 20 }

// 타입을 변수에 넣은 후 -> type alias
type Animal1Type = { name: string, age: number }
let 동물4: Animal1Type = { name: 'kim', age: 20 }

// object안의 이름 const
const 출생지역1 = 'seoul';
// 출생지역1 = 'busan' -> 이건 에러남 상수는 이름을 바꿀수 없음

const 출생지역2 = { region: 'seoul' }
출생지역2.region = '부산' // const 오브젝트 하면 안에 있는 내용을 수정할 수 있음.

type Girlfriend = {
  // readonly -> 읽기 전용으로 바꿔서 object여도 수정 불가능으로 할 수 있따.
  readonly name: string
}

const 여자친구: Girlfriend = {
  name: '엠버'
}

// 타입 합치기
type Name2 = string;
type Age = number;
type Person = Name2 | Age;

type PositionX = { x: number };
type PositionY = { y: number };

type NewType = PositionX & PositionY;

let position: NewType = { x: 10, y: 20 };

type a1 = {
  color?: string,
  size: number
  readonly position: number[]
};

let test3: a1 = {
  size: 66,
  position: [1, 2, 3]
}

type User1 = {
  name: string,
  phone: string,
  email: string,
};
type Adult = { adult: boolean };

type NewUser = User1 & Adult;

let 회원정보: NewUser = {
  name: '홍길동',
  adult: true,
  phone: '123',
  email: 'qwe@ewq.com'
};

// console.log(회원정보);

// 특정 글자나 숫자만 가질 수 있게 제한을 두는 탕비 literal type
let john1 : '대머리';
let kim1 : '솔로';

// or 기호도 사용 가능
let 방향 : 'left' | 'right';
방향 = 'left';  
// console.log(방향);

// 함수도 같다.
function 함수1 (a : 'hello') : 1 | 0 | -1 {
  return 1
}

// 
function rock(a : '가위' | '바위' | '보') :('가위' | '바위' | '보')[] {
  return ['가위', '보']
}

// 12월 9일  ------- literal Types
let name4 : 123;
// name4 = 456  -> name4에는 이미 123만 사용할 수 있기 때문에 456은 안됨

let name5 : '대머리' | '솔로';
// name5 = '커플'   -> name5에는 대머리 OR 솔로만 들어갈 수 있음 그래서 오류남
// name5 = ''       -> 이런식으로 두면 자동완성으로 관리 가능

function 함수2(a : 'hello') :1 | 0{
  return 1
}
함수2('hello')

function rock2(a : '가위' | '바위' | '보') : ('가위' | '바위' | '보')[] {
  return ['가위', '보']
}

var 자료 = {
  name : 'kim'
} as const


function 내함수(a : 'kim'){

}

내함수(자료.name)

