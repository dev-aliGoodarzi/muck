export interface T_Errors {
  [key: string]: {
    expectedType: string;
    errorData: {
      errorKey: string;
      errorMessage: string;
    };
    extraData?: {
      errMessage: string;
    };
  };
}
