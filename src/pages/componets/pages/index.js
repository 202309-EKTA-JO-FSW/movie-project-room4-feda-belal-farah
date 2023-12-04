import Dropdown from '../components/Dropdown';

const options = [
  { label: 'Home', path: '/toprated' },
  { label: 'About', path: '/popular' },
  { label: 'Contact', path: '/upcoming' },
  { label: 'Contact', path: '/nowplaying' }
];

const Index = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Dropdown options={options} />
    </div>
  );
};

export default Index;