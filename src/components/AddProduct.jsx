import {
  Button,
  Input,
  Modal,
  ModalBody,
  Radio,
  RadioGroup,
  Select,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

const AddProduct = () => {
  // TODO: Remove below const and instead import them from chakra
  // const Button = () => <div />;
  // const Modal = () => <div />;
  // const ModalBody = () => <div />;
  // const Input = () => <div />;
  // const Select = () => <div />;
  // const RadioGroup = () => <div />;
  // const Radio = () => <div />;
  const { isOpen, onTog } = useDisclosure();
  return (
    <>
      <Button my={4} data-cy="add-product-button" onClick={onTog}>
        Add product
      </Button>
      <Modal>
        <ModalBody pb={6}>
          <Input
            data-cy="add-product-title"
            placeholder="small size"
            size="sm"
          />
          <Select data-cy="add-product-category">
            <option data-cy="add-product-category-shirt">Shirt</option>
            <option data-cy="add-product-category-pant">Pant</option>
            <option data-cy="add-product-category-jeans">Jeans</option>
          </Select>
          <RadioGroup data-cy="add-product-gender">
            <Radio data-cy="add-product-gender-male">Male</Radio>
            <Radio data-cy="add-product-gender-female">Female</Radio>
            <Radio data-cy="add-product-gender-unisex">Unisex</Radio>
          </RadioGroup>
          <Input data-cy="add-product-price" />
          <Button data-cy="add-product-submit-button">Submit</Button>
        </ModalBody>
      </Modal>
    </>
  );
};

export default AddProduct;
