// let userName: string = "Alex";
// // userName.isIntager();

// userName = 5;

// '', "", ``, Строка
// 10, 0.5, 0.00001, -50, 4e10 числа
// true, false буливые значения

const isBirthdayData: boolean = true;
let ageData: number = 40;
const userNameData: string = "Alex";

// function logBrtMsg(isBirthday: boolean, userName: string, age: number): string {
//     if (isBirthday) {
//         return `Congrats ${userName.toUpperCase()}, age: ${age + 1}`;
//     } else {
//         return "Sorry"
//     }
// }

const logBrtMsg = (isBirthday: boolean, userName: string, age: number): string => {
	if (isBirthday) {
		return `Congrats ${userName.toUpperCase()}, age: ${age + 1}`;
	} else {
		return "Sorry";
	}
};

logBrtMsg(isBirthdayData, userNameData, ageData);
