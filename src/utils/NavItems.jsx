function NavItem(title, link) {
  this.title = title;
  this.link = link;
}

const NavItems = [
  new NavItem('Home', '/'),
  new NavItem('STAKING', '/walllet'),
  new NavItem('NFT VIEWER', '/Dashboard'),
  new NavItem('MARKET PLACE', '/Dashboard')
];

export { NavItems, NavItem };