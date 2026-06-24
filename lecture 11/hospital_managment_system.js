function Hospital() {
    let patients = [];

    return {
        addPatient: function(name, age, disease, doctor) {
            patients.push({
                name: name,
                age: age,
                disease: disease,
                doctor: doctor
            });

            console.log(name + " added");
        },

        viewPatients: function() {
            console.log(patients);
        }
    };
}

let hospital = Hospital();

hospital.addPatient("aham", 21, "Mental disorder", "Dr. Sharma");
hospital.addPatient("zoya", 20, "PCOD", "Dr. Gupta");

hospital.viewPatients();