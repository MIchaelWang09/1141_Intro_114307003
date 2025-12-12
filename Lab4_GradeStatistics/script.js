let studentGrades=[];
function myFunction(){
	const math=parseFloat(document.getElementById("mathScore").value); 

	const english=parseFloat(document.getElementById("englishScore").value);
	if(isNaN(math)||isNaN(english)||math<0||english<0||math>100||english>100){
		alert("請輸入0到100之間有效分數!");
		return;
	}
	const newGrade={
		math:math,
		english:english,
		average:(math+english)/2
	};
	studentGrades.push(newGrade)
	document.getElementById("mathScore").value='';
	document.getElementById("englishScore").value='';
	updateTable();
	calculateAverages();
}
function updateTable(){
	const tableBody=document.querySelector("#gradeTable tbody");
	tableBody.innerHTML='';
	studentGrades.forEach((grade,index)=>{
	const newRow=document.createElement('tr');
	newRow.innerHTML = `
            <td>${index + 1}</td>
            <td>${grade.math}</td>
            <td>${grade.english}</td>
            <td>${grade.average.toFixed(2)}</td>
        `;
        tableBody.appendChild(newRow);
    });
}
function calculateAverages(){
	if(studentGrades.length===0){
		return;
	}
let totalMath=0;
let totalEnglish=0;
studentGrades.forEach(grade=>{
	totalMath+=grade.math;
	totalEnglish+=grade.english
});
const avgMath=totalMath/studentGrades.length;
const avgEnglish=totalEnglish/studentGrades.length;
const avgOverall=(avgMath+avgEnglish)/2
document.getElementById('avgMath').innerHTML=avgMath.toFixed(2);
document.getElementById('avgEnglish').innerHTML=avgEnglish.toFixed(2);
document.getElementById('avgOverall').innerHTML=avgOverall.toFixed(2);
}
function filterNonDigits(inputElement){
	let value=inputElement.value;
	value=value.replace(/[^0-9.]/g, '');
	const parts=value.split('.');
    if (parts.length > 2) {
        value = parts[0] + '.' + parts.slice(1).join('');
    }
    inputElement.value=value;
}
