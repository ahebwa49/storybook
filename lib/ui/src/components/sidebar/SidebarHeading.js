import React from 'react';
import PropTypes from 'prop-types';
import { styled, withTheme } from '@storybook/theming';
import { StorybookLogo } from '@storybook/components';

import Menu from '../menu/Menu';

const BrandArea = styled.div(({ theme }) => ({
  fontSize: `${theme.typography.size.s2}px`,
  fontWeight: theme.typography.weight.bold,
}));

const Logo = styled(StorybookLogo)({
  width: 'auto',
  height: 22,
  display: 'block',
});

const LogoLink = styled.a({
  display: 'block',
  color: 'inherit',
  textDecoration: 'none',
});

const Head = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const Brand = withTheme(({ theme: { brand } }) => (
  <BrandArea>
    {brand || (
      <LogoLink href="./">
        <Logo />
      </LogoLink>
    )}
  </BrandArea>
));

export default function SidebarHeading({ menuHighlighted, menu, ...props }) {
  return (
    <Head {...props}>
      <Brand />
      <Menu highlighted={menuHighlighted} menuItems={menu} />
    </Head>
  );
}

SidebarHeading.propTypes = {
  menuHighlighted: PropTypes.bool,
  menu: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

SidebarHeading.defaultProps = {
  menuHighlighted: false,
};