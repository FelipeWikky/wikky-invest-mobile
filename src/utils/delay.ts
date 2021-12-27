const delay = (miliseconds = 2000) => new Promise((resolve, reject) => setTimeout(resolve, miliseconds));

export default delay;