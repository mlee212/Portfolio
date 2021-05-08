import { useRouter } from "next/router";
import PropTypes from "prop-types";
import Link from "next/link";
import React, { Children } from "react";

const ActiveLink = ({ children, activeClassName, ...props }) => {
  const { pathname } = useRouter();
  const child = Children.only(children);

  const className =
    pathname === props.href
      ? "text-black dark:text-red-400 nav-link pb-4"
      : child.props.className;

  return <Link {...props}>{React.cloneElement(child, { className })}</Link>;
};

ActiveLink.propTypes = {
  activeClassName: PropTypes.string.isRequired,
};

export default ActiveLink;
