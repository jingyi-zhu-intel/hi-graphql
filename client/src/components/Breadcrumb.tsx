import { Breadcrumb, BreadcrumbItem } from "@spark-design/react";

export const HiBreadcrumb = () => {
  return (
    <Breadcrumb variant="primary">
      <BreadcrumbItem href="#">Home</BreadcrumbItem>
      <BreadcrumbItem href="#">Example</BreadcrumbItem>
      <BreadcrumbItem active href="#">
        Testing Breadcrumb
      </BreadcrumbItem>
    </Breadcrumb>
  );
};
