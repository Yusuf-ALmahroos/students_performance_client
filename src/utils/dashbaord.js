function getAverage(values) {
  let avg = 0;
  values.forEach(value => {
    avg += value
  })
  return (avg / values.length).toFixed(2);
}

function calcAverage(students, field) {
  const values = students.map(student => student.records?.[field])
  .filter(value => typeof value === 'number');
   
  if (values.length === 0) return null;
  return getAverage(values)
}

function getRemarksCount(students) {
  const counts = {};
  students.forEach(student => {
    let remark = "No remark";
    if (student.records && student.records.remarks) {
      remark = student.records.remarks;
    }
    if (!counts[remark]) {
      counts[remark] = 0;
    }
    counts[remark] += 1;
  })
  return counts;
}

export function calcCourseMetrics(course) {
  return {
    title: course.title,
    avgMid: calcAverage(course.students, "mid"),
    avgFinal: calcAverage(course.students, "final"),
    avgAssessment: calcAverage(course.students, "assessment"),
    avgAttendance: calcAverage(course.students, "attendance"),
    remarksDist: getRemarksCount(course.students),
    totalStudents: course.students.length,
    students: course.students
  };
}

export function calcOverallMetrics(courses) {
  const allStudents = []
  console.log()
  courses.forEach(course => {
    course.students.forEach(student => {
      allStudents.push(student)
    })
  })
  return {
    avgMid: calcAverage(allStudents, "mid"),
    avgFinal: calcAverage(allStudents, "final"),
    avgAssessment: calcAverage(allStudents, "assessment"),
    avgAttendance: calcAverage(allStudents, "attendance"),
    remarksDist: getRemarksCount(allStudents),
    totalStudents: allStudents.length
  };
}

export function getTotalGrades(course) {
  if (!course) return { usernames: [], totals: [] };

  const usernames = course.students.map((student, index) => `${student.username}#${index + 1}`);
  const totals = course.students.map(student =>
    (student.records?.mid || 0) +
    (student.records?.assessment || 0) +
    (student.records?.final || 0)
  );

  return {
    usernames,
    totals,
  };
}