export interface Action<I, O> {
  execute(params: I): Promise<O>;
}