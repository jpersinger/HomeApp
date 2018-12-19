import {
  DropDownFormElement,
  FormArrayElement,
  FormElement,
  InlineFormArrayElement,
  InputFormElement,
  SingleFormElement,
  TextAreaFormElement,
  ToggleFormElement
} from "./form.definitions";

export const isInputType = (
  element: FormElement
): element is InputFormElement =>
  (element as InputFormElement).edit !== undefined;

export const isTextAreaType = (
  element: FormElement
): element is TextAreaFormElement =>
  (element as TextAreaFormElement).textarea !== undefined;

export const isToggleType = (
  element: FormElement
): element is ToggleFormElement =>
  (element as ToggleFormElement).toggle !== undefined;

export const isDropDownType = (
  element: FormElement
): element is DropDownFormElement =>
  (element as DropDownFormElement).select !== undefined;

export const isInlineFormArrayElement = (
  element: FormElement
): element is InlineFormArrayElement =>
  (element as InlineFormArrayElement).inline !== undefined;

export const isFormArrayType = (
  element: FormElement
): element is FormArrayElement<SingleFormElement> =>
  (element as FormArrayElement<SingleFormElement>).elements !== undefined &&
  (element as InlineFormArrayElement).inline === undefined;
