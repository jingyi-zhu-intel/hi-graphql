import { Breadcrumb, BreadcrumbItem } from "@spark-design/react";

export const HiBreadcrumb = () => {
  return (
    <>
      <Breadcrumb variant="primary">
        <BreadcrumbItem href="#">Home</BreadcrumbItem>
        <BreadcrumbItem href="#">Example</BreadcrumbItem>
        <BreadcrumbItem active href="#">
          I am primary
        </BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb variant="secondary">
        <BreadcrumbItem>Home</BreadcrumbItem>
        <BreadcrumbItem>Example</BreadcrumbItem>
        <BreadcrumbItem>I am secondary</BreadcrumbItem>
      </Breadcrumb>
    </>
  );
};
