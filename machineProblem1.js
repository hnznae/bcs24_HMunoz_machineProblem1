// ITCS227 Source Code Template for 2T AY 2022-2023
/*
	Program: Computation of Grades using Function
	Programmer: Hanzen Nikolai R. Munoz
	Section: BCS24
	Start Date: April 17, 2023
	End Date: April 20, 2023
*/

function studentScore() {
const Table = require('cli-table');
const prompt = require('prompt-sync')();

let table = new Table({
	head: [
		'Name of Student',
		'Class Participation',
		'Summative Assessment',
		'Exam Grade',
		'Letter Grade'
		]
})

const student = [];
const eA = [];
const eA2 = [];
const eA3 = [];
const eA4 = [];
const eA5 = [];
const sA = [];
const sA2 = [];
const sA3 = [];
const mE = [];
const feA = [];
const fsA = [];
const fGS = [];
const lG = [];
const fixedFEA = [];
const fixedFSA = [];



const studentNo = prompt(`How many students?`);


for (let i=0; i<studentNo;i++) {
	student[i] = prompt(`Enter Name: `);
	eA[i] = prompt(`Enter Enabling Assessment 1 Score: `);
	eA2[i] = prompt(`Enter Enabling Assessment 2 Score: `);
	eA3[i] = prompt(`Enter Enabling Assessment 3 Score: `);
	eA4[i] = prompt(`Enter Enabling Assessment 4 Score: `);
	eA5[i] = prompt(`Enter Enabling Assessment 5 Score: `);
	sA[i] = prompt(`Enter Summative Assessment 1 Score: `);
	sA2[i] = prompt(`Enter Summative Assessment 2 Score: `);
	sA3[i] = prompt(`Enter Summative Assessment 3 Score: `);
	mE[i] = prompt(`Enter Major Exam Score: `);
	feA[i] = ((parseInt(eA[i]) + parseInt(eA2[i]) + parseInt(eA3[i]) + parseInt(eA4[i]) + parseInt(eA5[i])) / 5);
	fsA[i] = ((parseInt(sA[i]) + parseInt(sA2[i]) + parseInt(sA3[i])) / 3);
	fGS[i] = ((parseInt(feA[i]) * 0.30) + (parseInt(fsA[i]) * 0.30) + (parseInt(mE[i]) * 0.40));
	fixedFEA[i] = parseInt(feA[i].toFixed(2));
	fixedFSA[i] = parseInt(fsA[i].toFixed(2));


	if (fGS[i] < 60) {
		lG[i] = "F";
	}
	else if(fGS[i] < 70) {
		lG[i] = "D";
	}
	else if(fGS[i] < 80) {
		lG[i] = "C";
	}
	else if(fGS[i] < 90) {
		lG[i] = "B";
	}
	else if(fGS[i] <= 100) {
		lG[i] = "A";
	}
}

let studentTable;

for(let j = 0; j < studentNo; j++) {
	studentTable = [
	student[j], 
	fixedFEA[j],
	fixedFSA[j],
	mE[j],
	lG[j],
]
	table.push(studentTable);
	//console.table([student[j]]);
	//console.table([feA[j]]);
	//console.table([fsA[j]]);
	//console.table([lG[j]]);
}

console.log(table.toString());
}




studentScore();