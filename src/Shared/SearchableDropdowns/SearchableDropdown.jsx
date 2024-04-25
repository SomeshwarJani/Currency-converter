import React, { useState } from "react";
import { Select, Space, Modal } from "antd";
import { Options, getDataFromLs, setDataToLs } from "../../Utils/helper.js";
import "./SearchableDropdown.css";

function SearchableDropdown(props) {
  const {
    isSearchOpen,
    isSource,
    isModalOpen,
    sourceSelectedCurrency: sourceCurrency,
    destinationSelectedCurrency: destinationCurrency,
  } = props;
  const [isOpen, setIsOpen] = useState(isSearchOpen);
  const [sourceSelectedCurrency, setSourceSelectedCurrency] =
    useState(sourceCurrency);
  const [destinationSelectedCurrency, setDestinationSelectedCurrency] =
    useState(destinationCurrency);

  const filterOption = (input, option) => {
    if (option["options"]) return;
    if (option.label) {
      return (
        option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0 ||
        option.desc.toLowerCase().indexOf(input.toLowerCase()) >= 0
      );
    }
  };

  const handleChange = (value) => {
    let selectedCountries = { source: "", destination: "" };
    let { source, destination } = getDataFromLs();

    if (source && destination) {
      selectedCountries = { source, destination };
    }
    if (isSource) {
      setSourceSelectedCurrency(value);
      selectedCountries.source = value;
    } else {
      setDestinationSelectedCurrency(value);
      selectedCountries.destination = value;
    }
    setDataToLs("selectedCountries", selectedCountries);
    isModalOpen(false);
    setIsOpen(false);
  };

  const suffix = (
    <div>
      <svg
        width="24"
        height="24"
        fill="currentColor"
        focusable="false"
        viewBox="0 0 24 24"
      >
        <path d="m20.786 19.543-4.029-4.029c1.072-1.328 1.672-3 1.672-4.8C18.429 6.471 14.957 3 10.714 3S3 6.471 3 10.714s3.471 7.715 7.714 7.715c1.8 0 3.472-.643 4.8-1.672l4.029 4.029 1.243-1.243Zm-10.029-2.829c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6Z"></path>
      </svg>
    </div>
  );

  return (
    <Modal
      open={isOpen}
      footer={null}
      closeIcon={null}
      style={{
        top: "7.5rem",
        left: "25rem",
      }}
      maskClosable={true}
      onCancel={() => {
        isModalOpen(false);
        setIsOpen(false);
      }}
    >
      <Select
        showSearch
        style={{
          width: "348px",
          height: "48px",
        }}
        filterOption={filterOption}
        dropdownStyle={{
          top: "11rem",
          width: "355px",
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          padding: "5px",
        }}
        autoFocus={true}
        defaultOpen={true}
        placeholder={
          <span className="placeholder">{"Type a currency / country"}</span>
        }
        suffixIcon={suffix}
        defaultValue={
          isSource ? sourceSelectedCurrency : destinationSelectedCurrency
        }
        onChange={handleChange}
        optionLabelProp="label"
        options={Options}
        optionRender={(option, index) => {
          return (
            <div>
              {option?.data?.disabled ? (
                <p
                  dangerouslySetInnerHTML={{ __html: option?.data?.label }}
                ></p>
              ) : (
                <Space>
                  <img
                    src={option?.data?.emoji}
                    alt={option?.data?.label}
                    width={24}
                    height={24}
                  />
                  {option.data?.label}
                  {option.data?.desc}
                </Space>
              )}
            </div>
          );
        }}
      />
    </Modal>
  );
}

export default SearchableDropdown;
