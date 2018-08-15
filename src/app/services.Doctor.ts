export class ServiceDoctor {
  leaveList=
  [{
          'week': 1,
          'patient': 18,
          'avalable': 0
      },
      {
          'week': 2,
          'patient': 11,
          'avalable': 4
      },
      {
          'week': 3,
          'patient': 13,
          'avalable': 2
      },
      {
          'week': 4,
          'patient': 14,
          'avalable': 1
      },
      {
          'week': 5,
          'patient': 15,
          'avalable': 0
      },
      {
          'week': 6,
          'patient': 16,
          'avalable': 0
      },
      {
          'week': 7,
          'patient': 8,
          'avalable': 7
      },
      {
          'week': 8,
          'patient': 9,
          'avalable': 6
      },
      {
          'week': 9,
          'patient': 15,
          'avalable': 0
      },
      {
          'week': 10,
          'patient': 17,
          'avalable': 0
      },
      {
          'week': 11,
          'patient': 12,
          'avalable': 3
      },
      {
          'week': 12,
          'patient': 11,
          'avalable': 4
      },
      {
          'week': 13,
          'patient': 13,
          'avalable': 2
      },
      {
          'week': 14,
          'patient': 14,
          'avalable': 1
      },
      {
          'week': 15,
          'patient': 16,
          'avalable': 0
      },
      {
          'week': 16,
          'patient': 10,
          'avalable': 5
      },
      {
          'week': 17,
          'patient': 11,
          'avalable': 4
      },
      {
          'week': 18,
          'patient': 18,
          'avalable': 0
      },
      {
          'week': 19,
          'patient': 17,
          'avalable': 0
      },
      {
          'week': 20,
          'patient': 15,
          'avalable': 0
      }];
  doctors = [
    {
      name: 'Dr.Amal',
      ward: 'Ward 1',
      assingDate: "2013-12-23",
      priority: "30%"

    },
    {
      name: 'Dr.Lasani',
      ward: 'Ward 2',
      assingDate: "2015-10-03",
      priority: "60%"

    },
    {
      name: 'Dr.Damith',
      ward: 'Ward 3',
      assingDate: "2011-03-17",
      priority: "70%"

    }
  ];
  nurses = [
    {
      name: 'Amali',
      ward: 'Ward 1',
      assingDate: "2013-12-23",
      priority: "30%"

    },
    {
      name: 'Lasani',
      ward: 'Ward 2',
      assingDate: "2015-10-03",
      priority: "60%"

    },
    {
      name: 'Damith',
      ward: 'Ward 3',
      assingDate: "2011-03-17",
      priority: "70%"

    }
  ];
  patients = [
    {
      id: "001",
      name: "sadan",
      address: "312/F asd",
      gender: "male",
      distric: "colombo",
      date: "22019-2-23",
      level: "level 1",
      ward: "ward 2",
      priority: "High",
      comments: "comment here"
    },
    {
      id: "002",
      name: "thgh",
      address: "36/F ayutysd",
      gender: "female",
      distric: "gampaha",
      date: "4022-2-23",
      level: "level 2",
      ward: "ward 3",
      priority: "Low",
      comments: "comment here asrwe"
    }
  ];

  onCreateDocter(name: string, ward: string, assingDate: string, priority: string) {
    this.doctors.push({
      name: name,
      ward: ward,
      assingDate: assingDate,
      priority: priority
    });
    console.log(this.doctors);
  }
  onUpdateDoctor(id: number, name: string, ward: string, assingDate: string, priority: string) {
    this.doctors[id].name = name;
    this.doctors[id].ward = ward;
    this.doctors[id].assingDate = assingDate;
    this.doctors[id].priority = priority;
    //   this.doctors[id].name = name;
    //   this.doctors[id].name = name;
  }
  removeDoctor(index: number) {
    this.doctors.splice(index, 1);
  }
  //nurses code
  onCreateNurse(name: string, ward: string, assingDate: string, priority: string) {
    this.nurses.push({
      name: name,
      ward: ward,
      assingDate: assingDate,
      priority: priority
    });
    console.log(this.doctors);
  }
  onUpdateNurse(id: number, name: string, ward: string, assingDate: string, priority: string) {
    this.nurses[id].name = name;
    this.nurses[id].ward = ward;
    this.nurses[id].assingDate = assingDate;
    this.nurses[id].priority = priority;
    //   this.doctors[id].name = name;
    //   this.doctors[id].name = name;
  }
  removeNurse(index: number) {
    this.nurses.splice(index, 1);
  }
  onCreatePatient(id: string, name: string, address: string, gender: string, distric: string, date: string, level: string, ward: string, priority: string, comments: string) {
    this.patients.push({
      id: id,
      name: name,
      address: address,
      gender: gender,
      distric: distric,
      date: date,
      level: level,
      ward: ward,
      priority: priority,
      comments: comments
    });
  }
  onUpdatePatient(id: number, name: string, address: string, gender: string, distric: string, date: string, level: string, ward: string, priority: string, comments: string) {
    this.patients[id].name = name;
    this.patients[id].address = address;
    this.patients[id].gender = gender;
    this.patients[id].priority = priority;
    this.patients[id].distric = distric;
    this.patients[id].date = date;
    this.patients[id].level = level;
    this.patients[id].ward = ward;
    this.patients[id].priority = priority;
    this.patients[id].comments = comments;
  }
  removePatient(index: number) {
    this.patients.splice(index, 1);
  }
  applyLeave(id:any) {
    this.leaveList[id].avalable =  this.leaveList[id].avalable-1;
    // this.doctors[id].ward = ward;
    // this.doctors[id].assingDate = assingDate;
    // this.doctors[id].priority = priority;
    //   this.doctors[id].name = name;
    //   this.doctors[id].name = name;
  }
}