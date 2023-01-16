const connectToDatabse = () => {
  const dummyPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });

  return dummyPromise;
};

export default connectToDatabse;
// IF WE NEED TO RUN THAT CODE WITHOUT DOCKER, WE NEED TO INSTALL THE LATEST NODE.JS VERSION!
