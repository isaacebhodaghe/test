import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { isUniqueArray } from '../utils/componentUtils';

const AnchorLinks = ({
  heading,
  headingAs = 'div',
  links: linksProp = [],
  onClick = (activeLink, index) => {},
  className = undefined,
  ...rest
}) => {
  const linkIds = linksProp?.map((obj) => obj?.id);
  const [links, setLinks] = useState(isUniqueArray(linkIds) ? linksProp : []);

  useEffect(() => {
    const ids = linksProp?.map((obj) => obj?.id);
    setLinks(isUniqueArray(ids) ? linksProp : []);
  }, [linksProp]);

  const handleActiveLink = (newActiveIndex) => {
    const newLinks = links?.map((link, i) =>
      newActiveIndex !== i
        ? { ...link, active: false }
        : { ...link, active: true }
    );

    setLinks(newLinks);
    // onClick(newLinks[newActiveIndex], newActiveIndex);
  };

  const handleScroll = (e) => {
    for (let index = 0; index < linkIds.length; index++) {
      const linkId = linkIds[index];
      const targetElement = document.getElementById(linkId);

      if (targetElement) {
        const eleRect = targetElement?.getBoundingClientRect();
        const isInView =
          eleRect.top >= 0 && eleRect.bottom <= window.innerHeight;

        if (isInView) {
          handleActiveLink(index);
          break;
        }
      }
    }
  };
  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  const handleLinkClicked = (index) => {
    window?.removeEventListener('scroll', handleScroll);
    handleActiveLink(index);

    // setTimeout(() => {
    //   window.addEventListener('scroll', handleScroll);
    // }, 1000);
  };

  // Styling
  const AnchorHeader = typeof headingAs !== 'string' ? 'div' : headingAs;

  const rootClass = classNames({
    'sl-anchor-links': true,
    [`${className}`]: className || false,
  });

  const [activeId, setActiveId] = React.useState();
  useIntersectionObserver(setActiveId, linkIds);

  console.log(activeId);

  useEffect(() => {
    if (activeId) {
      const index = linkIds.findIndex((id) => id === activeId);
      handleActiveLink(index);
    }
  }, [activeId]);

  if (!isUniqueArray(linkIds)) {
    return null;
  }

  return (
    <aside className={rootClass} {...rest}>
      <nav>
        <AnchorHeader className="anchor-heading">{heading}</AnchorHeader>
        <ul>
          {links?.map(({ label, id, active }, index) => (
            <li key={id} className={`${active ? 'active-anchor' : ''}`}>
              <a href={`#${id}`} onClick={() => handleLinkClicked(index)}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

AnchorLinks.propTypes = {
  /**
   * The heading of the component.
   */
  heading: PropTypes.string.isRequired,
  /**
   * The custom element for the heading (e.g. h1, h2, h3, div etc.). The styling is always set to h5.
   */
  headingAs: PropTypes.string,
  /**
   * <span>The Object containing all link data.</span>
   * * Ensure that all `id` are unique or component won't render links.
   * * `id` represent the element in the page to scroll to when link is clicked.
   */
  links: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      active: PropTypes.bool,
    })
  ),
  /**
   * <span>Callback fired when the link is clicked.</span>
   * `(activeLink, index) => void`
   * * activeLink: The link object from links array.
   * * index: The index of activeLink in links array.
   */
  onClick: PropTypes.func,
  /**
   * Override or extend the styles applied to the component.
   */
  className: PropTypes.string,
};

export default AnchorLinks;

const useIntersectionObserver = (setActiveId, linkIds) => {
  const headingElementsRef = React.useRef({});

  React.useEffect(() => {
    const callback = (headings) => {
      headingElementsRef.current = headings.reduce((map, headingElement) => {
        map[headingElement.target.id] = headingElement;
        return map;
      }, headingElementsRef.current);

      // Get all headings that are currently visible on the page
      const visibleHeadings = [];
      Object.keys(headingElementsRef.current).forEach((key) => {
        const headingElement = headingElementsRef.current[key];
        if (headingElement.isIntersecting) visibleHeadings.push(headingElement);
      });

      const getIndexFromId = (id) =>
        headingElements.findIndex((heading) => heading.id === id);

      // If there is only one visible heading, this is our "active" heading
      if (visibleHeadings.length === 1) {
        setActiveId(visibleHeadings[0].target.id);
        // If there is more than one visible heading,
        // choose the one that is closest to the top of the page
      } else if (visibleHeadings.length > 1) {
        const sortedVisibleHeadings = visibleHeadings.sort(
          (a, b) => getIndexFromId(a.target.id) > getIndexFromId(b.target.id)
        );

        setActiveId(sortedVisibleHeadings[0].target.id);
      }
    };

    // const callback = (entries) => {
    //   entries.forEach((entry) => {
    //     if (entry?.isIntersecting) {
    //       setActiveId(entry.target.id);
    //     }
    //   });
    // };

    const observer = new IntersectionObserver(callback, {
      // root: document.querySelector('body'),
      // rootMargin: '-20% 0% 0% 0%',
      rootMargin: '-20% 0% -35% 0px',
    });

    console.log(observer);

    // const headingElements = Array.from(document.querySelectorAll('h2, h3'));
    const headingElements = linkIds.map((link) =>
      document.querySelector(`#${link}`)
    );

    headingElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [setActiveId]);
};
