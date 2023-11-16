//  const server_host ='http://localhost:3000'
const server_host ='https://wqb8p1ls-3000.use.devtunnels.ms' 

export const environment = {
  SIGNUP_URL:server_host+'/users/signup',
  LOGIN_URL: server_host+'/auth/login',
  VERIF_URL_S: server_host+'/users/verification',
  VERIF_URL_L: server_host+'/auth/verification',
  FLIGHTSEARCH_URL: server_host+'/odsearch',
  FLIGHTOFFER_URL: server_host+'/amadeus-api/flight-offers',
}