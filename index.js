// 자바스크립트 변경 방법 -> 터미널에서 'tsc -w' 입력
var 이름 = 132;
function 함수(x) {
    return x * 2;
}
var john = { name: 'kim' };
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
var 회원 = 123; // union Type
var 회원들 = [1, '2', 3];
var 오브젝트 = { a: '123' };
var 이름1; // any는 모든 자료형을 허용한다. -> 타입실드 해제문법 (일반 자바스크립트 처럼 할 수 있는거임)
var 이름2; // any와 비슷한 친구
var 나이;
// 나이 + 1   -> 에러남 : string + 1 가능, number + 1 가능, string | number + 1 불가능
var 나이1 = 1;
// 나이1 + 1  -> 에러남 : 타입스크립트는 타입 엄격 숫자타입일때만 연산 가능
//  숙제
var user = 'kim';
var age = undefined;
var married = false;
var 철수 = [user, age, married];
var 학교 = {
    score: [100, 97, 84],
    teacher: 'Phil',
    friend: 'John'
};
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher];
// ------ 12월 1일 금요일 --------
function test(x) {
    return x * 2;
}
test(2);
// test('하이')  -> 파라미터, 리턴값 모두 number 이기 때문에 오류남
// Narrowing -> typeof 연산자 : 변수가 number 이거나 string 일 때 숫자를 계산하고 싶으면 narrowing 하면 된다.
// narrowing은 어떤 변수가 타입이 불확실할때 if문 등으로 narrowing 해줘야 조작이 가능하다.
function test1(x) {
    if (typeof x === 'string') {
        return x + '1';
    }
    else {
        return x + 1;
    }
}
// ------------ 12월 2일 토요일 (Narrowing, Assertion) ------------ 
function test2(x) {
    var array = [];
    // 방법 1
    if (typeof x === 'number') {
        array[0] = x;
    }
    else {
    }
    // 방법 2 -> assertion 문법 : narrowing 할때 사용, 무슨 타입이 들어올지 확실할 때 사용, 그냥 비상용으로 사용한다.
    array[0] = x;
}
// parseFloat -> 문자열을 실수로 바꾸는 함수
function change(x) {
    var array = [];
    x.forEach(function (y) {
        if (typeof y === 'string') {
            array.push(parseFloat(y));
        }
        else {
            array.push(y);
        }
    });
    return array;
}
// console.log(change([123, '3', '2']))
// let 오브젝트 :{a : string|number} = {a : '123'};
function subject(x) {
    if (typeof x.subject === 'string') {
        return x.subject;
    }
    else if (Array.isArray(x.subject)) {
        return x.subject[x.subject.length - 1];
    }
    else {
        return '없습니당';
    }
}
// console.log(subject({ subject: ['english', 'art'] }))
//  ---------- 12월 2일 : 타입도 변수에 담아서 사용하기 -------------- 
// 타입을 변수에 넣기 전
var 동물1;
var 동물2;
// 타입 변수에 넣기 전
var 동물3 = { name: 'kim', age: 20 };
var 동물4 = { name: 'kim', age: 20 };
// object안의 이름 const
var 출생지역1 = 'seoul';
// 출생지역1 = 'busan' -> 이건 에러남 상수는 이름을 바꿀수 없음
var 출생지역2 = { region: 'seoul' };
출생지역2.region = '부산'; // const 오브젝트 하면 안에 있는 내용을 수정할 수 있음.
var 여자친구 = {
    name: '엠버'
};
var position = { x: 10, y: 20 };
var test3 = {
    size: 66,
    position: [1, 2, 3]
};
var 회원정보 = {
    name: '홍길동',
    adult: true,
    phone: '123',
    email: 'qwe@ewq.com'
};
// console.log(회원정보);
// 특정 글자나 숫자만 가질 수 있게 제한을 두는 탕비 literal type
var john1;
var kim1;
// or 기호도 사용 가능
var 방향;
방향 = 'left';
// console.log(방향);
// 함수도 같다.
function 함수1(a) {
    return 1;
}
// 
function rock(a) {
    return ['가위', '보'];
}
// 12월 9일  ------- literal Types
var name4;
// name4 = 456  -> name4에는 이미 123만 사용할 수 있기 때문에 456은 안됨
var name5;
// name5 = '커플'   -> name5에는 대머리 OR 솔로만 들어갈 수 있음 그래서 오류남
// name5 = ''       -> 이런식으로 두면 자동완성으로 관리 가능
function 함수2(a) {
    return 1;
}
함수2('hello');
function rock2(a) {
    return ['가위', '보'];
}
var 자료 = {
    name: 'kim'
};
function 내함수(a) {
}
내함수(자료.name);
