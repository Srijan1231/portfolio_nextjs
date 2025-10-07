"use client";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import clsx from "clsx";
import { ReactNode } from "react";

type LinkProps = {
  children: ReactNode;
  className?: string;
  underline?: boolean;
  download?: boolean;
  openAndDownload?: boolean; // 👈 new prop
} & NextLinkProps;

export default function Link(props: LinkProps) {
  const isExternal = !props.href.toString().startsWith("/");
  const { underline, download, openAndDownload, ...rest } = props;

  const className = clsx(
    "underline-offset-4",
    (isExternal || underline) && "underline",
    props.className,
  );

  const handleOpenAndDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    const url = props.href.toString();

    // open in a new tab
    window.open(url, "_blank");

    // create a temporary hidden <a> to trigger download
    const link = document.createElement("a");
    link.href = url;
    link.download = "";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (openAndDownload) {
    return (
      <a
        href={props.href.toString()}
        onClick={handleOpenAndDownload}
        className={className}
      >
        {props.children}
      </a>
    );
  }

  if (download) {
    return (
      <a href={props.href.toString()} className={className} download>
        {props.children}
      </a>
    );
  }

  return (
    <NextLink
      {...rest}
      className={className}
      target={isExternal ? "_blank" : undefined}
    >
      {props.children}
    </NextLink>
  );
}
