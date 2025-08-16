import Client from "./api";


export async function getTeacherCourses() {
  try {
    const response = await Client.get('courses/by-teacher/')
    return response.data
  } catch (error) {
    console.log(error.message)
  }
}

export async function createCourseWithCSV (courseTitle, students) {
  try {
    const response = await Client.post('/courses/', { title: courseTitle, students_input: students});
    return response
  } catch (error) {
    console.log(error)
  }
};