class CancelablePromise<T> extends Promise<T> {
  constructor(
    private executor: (
      resolve: (value?: T | PromiseLike<T>) => void,
      reject: (reason?: any) => void
    ) => void,
    private cancelMethod: () => void
  ) {
    super(executor);
  }

  //cancel the operation
  public cancel() {
    if (this.cancelMethod) {
      this.cancelMethod();
    }
  }
}

export const request = <T extends Object>(
  request: RequestInfo
): CancelablePromise<T> => {
  const controller = new AbortController();
  const signal = controller.signal;

  return new CancelablePromise<T>(
    (resolve, reject) => {
      fetch(request, {
        signal
      })
        .then((res) => res.json())
        .then(resolve)
        .catch(reject);
    },
    () => {
      controller.abort();
    }
  );
};
