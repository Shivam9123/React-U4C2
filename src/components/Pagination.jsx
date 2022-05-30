import { Button, ButtonGroup, Select } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";

const Pagination = ({ pages, setPages, lim, setLim }) => {
  // TODO: Remove below const and instead import them from chakra
  // const Button = () => <div />;
  // const ButtonGroup = () => <div />;
  // const Select = () => <div />;
  const [totalCount, setTotalCount] = useState(0);
  return (
    <ButtonGroup>
      <Button
        disabled={pages == 1}
        data-cy="pagination-first-button"
        onClick={() => setPages(pages - 2)}
      >
        First
      </Button>
      <Button
        disabled={pages == lim}
        data-cy="pagination-previous-button"
        onClick={() => setPages(pages - 1)}
      >
        Previous
      </Button>
      <Select
        data-cy="pagination-limit-select"
        onChange={(e) => setLim(Number(e.target.value))}
      >
        <option data-cy="pagination-limit-3" value="3">
          3
        </option>
        <option data-cy="pagination-limit-6" value="6">
          6
        </option>
        <option data-cy="pagination-limit-9" value="9">
          9
        </option>
      </Select>
      <Button
        data-cy="pagination-next-button"
        // disabled={totalCount < page * limit}
        onClick={() => setPages(pages + 1)}
      >
        Next
      </Button>
      <Button
        data-cy="pagination-last-button"
        onClick={() => setPages(pages + 2)}
      >
        Last
      </Button>
    </ButtonGroup>
  );
};

export default Pagination;
