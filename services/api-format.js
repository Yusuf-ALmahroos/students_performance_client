export function formatRegisterUser (formData) {
  return {
    username: formData.username || formData.email,
    email: formData.email,
    password: formData.password,
    confirm_password: formData.confirmPassword,
    role: formData.role
  }
}