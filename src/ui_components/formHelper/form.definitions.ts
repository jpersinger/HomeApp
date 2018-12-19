export interface BaseFormElement {
  key: string;
  header?: string;
  subHeader?: string;
  editOnChange?: boolean; // true -> no save buttons
}

export interface InputFormElement extends BaseFormElement {
  value?: string;
  placeholder: string;
  edit: (newValue: string) => void;
  onDelete?: () => void;
}

export interface TextAreaFormElement extends InputFormElement {
  textarea: boolean;
}

export interface ToggleFormElement extends BaseFormElement {
  selected: boolean;
  toggle: () => void;
}

export interface DropDownFormElement extends BaseFormElement {
  value?: string;
  options: string[];
  select: (value: string) => void;
  searchable?: boolean;
}

export type SingleFormElement =
  | InputFormElement
  | TextAreaFormElement
  | ToggleFormElement
  | DropDownFormElement
  | InlineFormArrayElement;

export interface InlineFormArrayElement extends BaseFormElement {
  elements: SingleFormElement[];
  inline: boolean;
}

export interface FormArrayElement<SingleFormElement> extends BaseFormElement {
  elements: SingleFormElement[];
  add?: (newValue: string) => void;
  addType?: "input" | "textarea";
}

export type FormElement =
  | SingleFormElement
  | FormArrayElement<SingleFormElement>;

export interface Form {
  elements: FormElement[];
}
