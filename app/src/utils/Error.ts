class ServerOfflineError extends Error {
  constructor(message:string = "") {
    super(message === "" ? "Server is offline" : message);
  }
}

export default ServerOfflineError;