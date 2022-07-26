interface Props {
  name: string;
}

const Header = (props: Props) => {
  const { name } = props;
  return <h3>{name}</h3>;
};

export default Header;
