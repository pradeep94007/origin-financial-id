import Link from 'next/link';
import React from 'react';

interface BreadcrumbItem {
  label: string;
  path?: string; // Optional because the last breadcrumb item usually doesn't have a link
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const BreadCrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="list-none p-0 inline-flex cursor-pointer text-md touche">
        {items.map((item, index) => {
          const isLastItem = index === items.length - 1;
          return (
            <li key={index} className={`${isLastItem ? 'text-green font-bold italic mix-blend-multiply' : 'text-dark italic'} ${index !== items.length - 1 ? 'mr-2' : ''}`}>
              {item.path && !isLastItem ? (
                <Link href={item.path}>{item.label}</Link>
              ) : (
                <span>{item.label}</span>
              )}
              {!isLastItem && <span className="mx-2"><span className='text-slate-300'>/</span></span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default BreadCrumbs;
