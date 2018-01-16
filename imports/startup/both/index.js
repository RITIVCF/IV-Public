if(process.env.NODE_ENV=="development"){
  process.env.IVY_ROOT_URL = "http://localhost:3000/";
}
else if(process.env.NODE_ENV=="ivystaging"){
  process.env.IVY_ROOT_URL = "http://ivy.rit.edu:3010/";
}
else {
  process.env.IVY_ROOT_URL = "http://ivy.rit.edu/";
}
