const drMilan = new Doctor('Milan', 'Milankovic', 'Generalist');
const dragan = new Patient('Dragan', 'Gagic', 112322334, 2233233);
dragan.chooseDoctor(drMilan);
const sugarDragan = drMilan.assignTheExaminationCheck(BloodSugarExamination, dragan);
const bloodDragan = drMilan.assignTheExaminationCheck(BloodPreassure, dragan);
sugarDragan.doExamination();
bloodDragan.doExamination();
