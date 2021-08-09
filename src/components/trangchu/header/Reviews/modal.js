import React, { useEffect, useState } from "react";
import Form from './form';


function ModalComment({ onSubmit, form }) {


  return (
    <>
      <Form onSubmit={onSubmit} form={form} />
    </>
  );
}

export default ModalComment;