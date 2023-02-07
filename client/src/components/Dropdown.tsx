/*
 * SPDX-FileCopyrightText: (C) 2023 Intel Corporation
 * SPDX-License-Identifier: LicenseRef-Intel
 */

import React, { useState } from "react";
import { Button, Icon } from "@spark-design/react";
import "./Dropdown.css";

/* eslint-disable no-unused-vars */
export enum Variant {
  Primary = "primary",
  Secondary = "secondary",
  Alert = "alert",
  Action = "action",
  AlertGhost = "alert-ghost",
  Ghost = "ghost",
}

export interface IItem {
  value: string;
  name: string;
}
export interface DropdownProps {
  name?: string;
  items: IItem[];
  onSelect: (value: string) => void;
  variant?: Variant;
}

export interface DropdownOptionsProps {
  items: IItem[];
  setIsOpen: (isOpen: boolean) => void;
  setValue: (arg: string) => void;
  onSelect: (item: string) => void;
}

const DropdownOptions = ({
  items = [],
  setIsOpen,
  onSelect,
  setValue,
}: DropdownOptionsProps) => (
  <div className="spark-list spark-list-size-l spark-list-zebra spark-shadow spark-list-divide dropdown__options">
    <ul style={{ margin: 0, padding: 0 }}>
      {items.map((item, i) => (
        <li
          className="spark-list-item"
          key={i}
          onClick={() => {
            setValue(item.name);
            onSelect(item.value);
            setIsOpen(false);
          }}
        >
          {item.name}
        </li>
      ))}
    </ul>
  </div>
);

export const Dropdown = ({
  name = "Dropdown",
  items,
  onSelect,
  variant = Variant.Primary,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState(null);

  return (
    <div className="dropdown">
      <Button
        variant={variant}
        onPress={() => setIsOpen(!isOpen)}
        endSlot={<Icon icon={isOpen ? "chevron-up" : "chevron-down"} />}
      >
        {value ? value : name}
      </Button>
      {isOpen && (
        <DropdownOptions
          items={items}
          setIsOpen={setIsOpen}
          onSelect={onSelect}
          setValue={() => setValue}
        />
      )}
    </div>
  );
};
