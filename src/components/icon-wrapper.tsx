import { ReactElement, cloneElement } from "react";
import {  IconProps } from '@lucide/react';
import { cx } from "@/styled-system/css";

interface IconWrapperProps extends IconProps {
  children: ReactElement;
  className?: string;
}

export const IconWrapper = ({ children, className = '', ...props }:IconWrapperProps) => {
  return cloneElement(children, {
    className: cx('icon', className),
    ...props,
  });
};