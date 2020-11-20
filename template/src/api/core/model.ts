export interface Page<T> {
  data: T[];
  paginate: Paginate;
}

export interface Paginate {
  from: number;
  to: number;
  size: number;
  total: number;
  currentPage: number;
  lastPage: number;
}

export function defaultPage(): Paginate {
  return {
    from: 0,
    to: 0,
    total: 0,
    size: 12,
    currentPage: 1,
    lastPage: 1,
  };
}
