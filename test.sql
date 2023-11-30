use hstest2023;

create table 고객 (
	고객아이디	VARCHAR(20) NOT NULL, 
    고객이름	varchar(10) not null,
    나이		int,
    등급		varchar(10) not null,
    직업		varchar(20),
    적립금	int default 0, 
    primary key(고객아이디)
);

create table 제품 (
	제품번호	char(3)	NOT NULL,
    제품명	varchar(20),
    재고량	int,
    단가		int,
    제조업체	varchar(20), 
    primary key(제품번호), 
    check (재고량 >= 0 and 재고량 <= 재고량 <= 10000)
);

create table 주문 (
	주문번호	char(3)	not null, 
	주문고객	varchar(20), 
    주문제품	char(3),
    수량		int,
    배송지	varchar(30),
	주문일자	date, 
	primary key(주문번호),
    foreign key(주문고객) references 고객1(고객아이디),
    foreign key(주문제품) references 제품(제품번호)
);

create table 배송업체 (
	업체번호	char(3)	not null,
	업체명	varchar(20),
    주소		varchar(20),
    전화번호	varchar(20),
    primary key(업체번호)
);

alter table 고객 add 가입날짜 date;
alter table 고객 drop column 가입날짜;

alter table 고객 add constraint chk_age2 check(나이 >= 70);
alter table 고객 drop constraint chk_age;
alter table 고객 drop constraint chk_age2;

show tables;
show index from 고객;

create table 고객1 (
	고객아이디	VARCHAR(20) NOT NULL, 
    고객이름	varchar(10) not null,
    나이		int,
    등급		varchar(10) not null,
    직업		varchar(20),
    적립금	int default 0, 
    primary key(고객아이디)
);

insert into 고객1 values ('banana', '김선우', 25, 'vip', '간호사', 2500);
insert into 고객1 values ('carrot' '고명석', 28, 'gold', '교사', 4500);
insert into 고객1 values ('orange', '김용욱', 22, 'sliver', '학생', 0);
insert into 고객1 values ('melon', '성원용', 35, 'gold', '회사원', 5000);
insert into 고객1 values ('peach', '오형준', NULL, 'sliver', '의사', 300);
insert into 고객1 values ('pear', '채광주', 31, 'sliver', '회사원', 500);

insert into 제품 values ('p03', '쿵떡파이', 3600, 2600, '한빛제과');
insert into 제품 values ('p04', '맛난초콜릿', 1250, 2500, '한빛제과');
insert into 제품 values ('p05', '얼큰라면', 2200, 1200, '대한식품');
insert into 제품 values ('p06', '통통우동', 1500, 1550, '민국푸드');
insert into 제품 values ('p07', '달콤비스킷', 1650, 1500, '한빛제과');

insert into 주문 values ('o02', 'melon', 'p03', 5, '인천시 계양구', '2022-01-01');
insert into 주문 values ('o03', 'banana', 'p01', 45, '경기도 부천시', '2022-01-10');
insert into 주문 values ('o04', 'carrot', 'p02', 8, '부산시 금청구', '2022-01-11');
insert into 주문 values ('o05', 'melon', 'p06', 36, '경기도 용인시', '2022-02-01');
insert into 주문 values ('o06', 'banana', 'p01', 19, '충청북도 보은군', '2022-02-20');
insert into 주문 values ('o07', 'apple', 'p03', 22, '서울시 영등포구', '2022-03-20');
insert into 주문 values ('o08', 'pear', 'p02', 50, '강원도 춘천시', '2022-04-10');
insert into 주문 values ('o09', 'banana', 'p04', 15, '전라남도 목포시', '2022-04-11');
insert into 주문 values ('o10', 'carrot', 'p03', 20, '경기도 안양시', '2022-05-22');



select * from 주문;

drop table 주문;
select * from 고객1 where 고객이름 like '김%';
select * from 고객1 where 나이 is not null;
select 제조업체, count(*) as 제품수, max(단가) as 최고가 from 제품
	group by 제조업체 having count(*) >= 3;
    
select 제품.제품명 from 제품, 주문
	where 주문.주문고객 = 'banana' and 제품.제품번호 = 주문.주문번호;
    
select 제품명, 단가 from 제품
	where 제조업체 = (select 제조업체 from 제품 where 제품명 = '달콤비스킷');