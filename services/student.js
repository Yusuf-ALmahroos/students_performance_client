import Client from "./api";


export async function getStudentCourses() {
  try {
    const response = await Client.get('courses/by-student/')
    return response.data
  } catch (error) {
    console.log(error.message)
  }
}