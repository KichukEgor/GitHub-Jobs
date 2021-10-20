// TODO: Нейминг нужно уточнить (для файла аналогично). Эндпоинтов может быть много и каждый будет ожидать параметры запроса
// удалить
export type TQueryParams = {
  id?:string | number,
  description?:string,
  type?:string,
  location?:string,
  page?: string | number,
  limit?: string | number
}
