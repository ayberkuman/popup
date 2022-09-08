export interface ITodo {
  content: string;
  id: number;
  isCompleted: boolean;
}

export type TodoProps = {
  todo: ITodo;
};

export type ApiDataType = {
  status: number;
  data: any;
};
