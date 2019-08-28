import { FindOperator } from "./FindOperator";

/**
 * Used for find operations.
 */
export type FindConditions<T> = {
    // @petter: https://github.com/typeorm/typeorm/issues/4427
    [P in keyof T]?: T[P] extends never
        ? FindConditions<T[P]> | FindOperator<FindConditions<T[P]>>
        : FindConditions<T[P]> | FindOperator<FindConditions<T[P]>>;
};
