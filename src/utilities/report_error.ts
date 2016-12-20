export default function (error, header?: string) {
  if (!header) {
    header = 'Ooops, error :( Why? Fix It Now!' 
  }
  console.log(header)

  if (error.response) {
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
    console.log(error.config);
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log(error.message);
  }
}