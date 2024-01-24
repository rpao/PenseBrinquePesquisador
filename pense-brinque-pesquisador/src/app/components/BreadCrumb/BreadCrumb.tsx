'use client';

import { homeHref } from '@/app/home/startMenu';
import { rootHref } from '@/app/page';
import { findLocatorForString } from '@/app/shared/constants/locator';
import {
  BreadcrumbData,
  BreadcrumbItemData,
} from '@/app/shared/models/breadcrumbData';
import { usePathname } from 'next/navigation';
import { useCallback, useState } from 'react';
import { BreadcrumbItem, Breadcrumb } from 'react-bootstrap';

export default function BreadCrumb() {
  const url: string = usePathname();
  const segments = url !== rootHref && url !== homeHref ? url.split('/') : [];
  const breadcrumbData: BreadcrumbData = [];

  let href = '';
  segments.map((segment: string, index: number) => {
    if (segment) {
      href += '/' + segment;
      const breadcrumbItem: BreadcrumbItemData = {
        href,
        label: findLocatorForString(segment) ?? segment,
        active: index == segments.length - 1,
      };
      breadcrumbData.push(breadcrumbItem);
    }
  });

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
      {breadcrumbData?.map(mapPathSegmentsToBreadcrumbItem)}
    </Breadcrumb>
  );
}
