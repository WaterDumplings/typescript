// 자바스크립트 변경 방법 -> 터미널에서 'tsc -w' 입력

// 함수와 methods에 type alias 지정하는 방법
type 함수타입 = (a : string) => number
type functionstring = (a : string) => string

let 함수3 : 함수타입 = function () {
  return 10
}

type Member1 = {
  name : string, 
  age : number, 
  plusOne : (x : number) => number
  changeName : () => void
}

let Profile : Member1 = {
  name : 'kim', 
  age : 30,
  plusOne(a : number) :number {
    return a + 1
  },
  changeName(){}
}

Profile.plusOne(1)

// 콜백함수 : 함수 안에 함수가 실행 되도록 하는 것

function 함수5(a) {
  a()
}
function 함수6() {

}

함수5(함수6)
