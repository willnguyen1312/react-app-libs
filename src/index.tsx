import * as React from 'react';

export enum Message {
  Hi = 'hi',
  HELLO = 'hello',
}

function formatField<T>(option: T): T {
  return option;
}

type formFields1 = 'firstName' | 'lastName';

type FormatField1 = {
  name: formFields1;
};

export const actual1 = formatField<FormatField1>({ name: 'firstName' });

const FormFields = {
  First: 'firstName2',
  Last: 'lastName2',
} as const;

type Keys = keyof typeof FormFields;

type FormatField2 = {
  name: typeof FormFields[Keys];
};

export const actual2 = formatField<FormatField2>({ name: FormFields.First });

// Delete me
export const Thing = () => {
  return <div>the snozzberries taste like snozzberries</div>;
};
