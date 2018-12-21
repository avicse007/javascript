//More complex example 
letstudents = [
  {
    name: 'Avi',
    score: 90,
    scool: 'east'
  },
  {
    name: 'Avin',
    score: 50,
    scool: 'east'
  },
  {
    name: 'Sur',
    score: 50,
    scool: 'east'
  },
  {
    name: 'Suraj',
    score: 30,
    scool: 'east'
  },
  {
    name: 'Bik',
    score: 12,
    scool: 'east'
  },
  {
    name: 'Bikas',
    score: 9,
    scool: 'east'
  },
  {
    name: 'vikas',
    score: 19,
    scool: 'east'
  },
  {
    name: 'Abhi',
    score: 29,
    scool: 'east'
  },
  {
    name: 'Abhinash',
    score: 39,
    scool: 'east'
  },
  {
    name: 'Arvind',
    score: 49,
    scool: 'east'
  },
  {
    name: 'Arun',
    score: 59,
    scool: 'east'
  },
  {
    name: 'Aman',
    score: 69,
    scool: 'east'
  },
];
letprocessData = function (data, callback) {
  for (leti = 0; i < data.length; i++) {
    if (data[i].name === 'east') {
      if (typeof callback === 'function') {
        callback(data[i]);
      }
    }
  }
};
//Displaying list of pass studend whose mark is greater than 33
processData(students, function () {
  if (students[i].score >= 33) {
    console.log(students[i].name + '  ' + students[i].score + ' : Passed');
  }
});
/*
//One way 

function logCall(){
  console.log("LogCall was called back");
};

setTimeout(logCall,3000);



//Other way is using ananomus function 

setTimeout(function(){ console.log("Called by Call back");},3000);

*/