'use client';

import {
  BreadcrumbData,
  BreadcrumbItemData,
} from '@/app/shared/models/breadcrumbData';
import { mapUrlToBreadcrumbData } from '@/app/utils';
import { usePathname } from 'next/navigation';
import { BreadcrumbItem, Breadcrumb } from 'react-bootstrap';

export default function BreadCrumb() {
  const url: string = usePathname();
  const breadcrumbData: BreadcrumbData = mapUrlToBreadcrumbData(url);

  const mapPathSegmentsToBreadcrumbItem = (
    item: BreadcrumbItemData,
    index: number,
  ) => {
    if (!item) return;
    return (
      <BreadcrumbItem
        href={item.href}
        active={item.active}
        id={`breadcrumb-item-${index}`}
        key={`breadcrumb-item-${index}`}
      >
        {item.label}
      </BreadcrumbItem>
    );
  };

  return (
    <Breadcrumb>
      {breadcrumbData.map(mapPathSegmentsToBreadcrumbItem)}
    </Breadcrumb>
  );
}
