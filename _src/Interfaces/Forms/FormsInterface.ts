/**
 * 1 : normal input ( done , planned )
 * 2 : textBox ( single textBox )
 * 3 : select-option ( single select-option )
 * 4 : complex input => inputs with ( min - avg - max  )
 */
export type T_FormTypes = "1" | "2" | "3" | "4";

export interface I_FormDataBase<T extends T_FormTypes> {
  formItemId: T;
  title: Record<string, string>;
  description: string;
  cssClass: string;
}

interface I_FormData1 extends I_FormDataBase<"1"> {
  value: {
    done: string;
    planned: string;
  };
}
interface I_FormData2 extends I_FormDataBase<"2"> {
  value: string;
}

interface I_FormData3 extends I_FormDataBase<"3"> {
  value: string;
}

interface I_FormData4 extends I_FormDataBase<"4"> {
  value: {
    min: string;
    ang: string;
    max: string;
  };
}

export type I_ResultFormData =
  | I_FormData1
  | I_FormData2
  | I_FormData3
  | I_FormData4;

export interface I_FormsInterface {
  formId: number;
  formData: I_ResultFormData[];
}
