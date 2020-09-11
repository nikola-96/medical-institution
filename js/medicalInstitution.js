const logg = (info, patienName)=>{
        let date = new Date();
        let fullDate = `[${date.getDate()}.${date.getMonth()}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}]`;
        let getFullLogg = `${fullDate} ${info} ${patienName}`;
        console.log(getFullLogg)
    }

class Person {
    constructor(name, surname){
        if (this.constructor == Person) {
            throw new Error("Abstract classes can't be instantiated.");
          }
        this.name = name;
        this.surname = surname;
    }
    getFullName(){
        return `${this.name} ${this.surname}`;
    }
}

class Doctor extends Person {
        constructor(name, surname, speciality){
            super(name, surname);
            this.speciality = speciality;
            this.patients = [];
            logg('Created is doctor', name)
        }
    getspeciality(){
        return this.speciality;
    }
    addPatient(patient){
        this.patients.push(patient)
    }
    assignTheExaminationCheck(Examination, Patient){
        return new Examination('09.11.2020', '16:40', Patient) 
    }
}

class Patient extends  Person{

    constructor(name, surname, jmbg, medicalRecord){
        super(name, surname);
        this.jmbg = jmbg;
        this.medicalRecord = medicalRecord;
        this.doctor = undefined;
        logg('Created is patient', name)

    }
    chooseDoctor(doctor){
        if(this.doctor){
            throw new Error('You aredy have the doctor.');
        }
        this.doctor = doctor;
        logg(`Dr. ${doctor.getFullName()} is chosen by`, this.name)
    }
}

class LaboratoryExamination {
    constructor(date, time, patient){
        if (this.constructor == LaboratoryExamination) {
            throw new Error("Abstract classes can't be instantiated.");
          }
        this.date  = date;
        this.time = time;
        this.patient = patient;
    }
    getDate(){
        return this.date;
    }
    getTime(){
        return this.time;
    }
}

class BloodPreassure extends LaboratoryExamination{
    constructor(date, time, patient){
        super(date, time, patient);
        this.upperValue = undefined;
        this.lowerValue = undefined;
        this.puls = undefined;
    }
    doExamination(){
        this.upperValue = Math.floor(Math.random() * (110 - 220)) + 220;
        this.lowerValue = Math.floor(Math.random() * (110 - 60)) + 60
        this.puls = Math.floor(Math.random() * (60 - 120)) + 120

        console.log(`Examination for ${this.patient.getFullName()} is done. 
        Value: 
            Up preasuer- ${this.upperValue}.
            Down value- ${this.lowerValue}.
            Puls- ${this.puls}.`);
            logg('Examination blood preassure is done for', this.patient.getFullName())

    }
}

class BloodSugarExamination extends LaboratoryExamination{
    constructor(date, time, patient){
        super(date, time, patient);
        this.value = undefined;
        this.lastMeal = undefined;
    }
    doExamination(){
        this.value = Math.floor(Math.random() * (25 - 3)) + 3
        this.lastMeal = '13:24';
        logg('Examination blood sugar is done for', this.patient.getFullName())

        console.log(`Examination for ${this.patient.getFullName()} is done. 
        Value of sugar in your blood is: ${this.value}. Your last meal was in ${this.lastMeal}`);
    }
}

class CholesterolLaboratoryExamination extends LaboratoryExamination{
    constructor(date, time, patient){
        super(date, time, patient);
        this.value = undefined;
        this.lastMeal = undefined;
    }
    doExamination(){
        this.value = Math.floor(Math.random() * (90 - 30)) + 30
        this.lastMeal = '13:24';
        
        console.log(`Examination for ${this.patient.getFullName()} is done. 
        Value of cholesterol in your blood is: ${this.value}. Your last meal was in ${this.lastMeal}`);
        logg('Examination for cholesterol is done for', this.patient.getFullName())

    }

}

