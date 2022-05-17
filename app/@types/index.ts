export type PickPartial<T, K extends keyof T> = { [P in K]: Partial<T[P]> };

export type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;
