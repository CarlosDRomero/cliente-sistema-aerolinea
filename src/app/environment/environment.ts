const server_host ='http://localhost:3000' 

export const environment = {
  SIGNUP_URL:server_host+'/users/signup',
  LOGIN_URL: server_host+'/auth/login',
  VERIF_URL_S: server_host+'/users/verification',
  VERIF_URL_L: server_host+'/auth/verification',
}