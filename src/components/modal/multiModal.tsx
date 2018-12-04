import React from "react";
import Modal from ".";

export interface ModalPageProps {
  title: string;
  content: React.ReactChild;
  footer?: React.ReactChild;
}

interface Props {
  close: () => void;
  pages: ModalPageProps[];
  pageIndex: number;
}

const MultiModal = (props: Props) => {
  const { title, content, footer } = props.pages[props.pageIndex];
  return (
    <Modal
      title={title}
      content={content}
      footer={footer}
      close={props.close}
    />
  );
};

export default MultiModal;
