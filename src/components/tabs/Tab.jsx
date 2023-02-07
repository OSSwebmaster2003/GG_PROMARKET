import { Tabs } from 'antd';
import { useSelector } from 'react-redux';
import ResSlider from '../responsiveSlider/ResSlider';
import "./tab.scss";

function Tab(props) {
  const {products} = useSelector(state => state.productslice)
  console.log(products);

  const items = [
    {
      key: '1',
      label: `Все`,
      children: <ResSlider items={products}/>,
    },
    {
      key: '2',
      label: `Раковины`,
      children: <ResSlider items={products.filter((item) => item.type === "Раковины")}/>,
    },
    {
      key: '3',
      label: `Ванны`,
      children: <ResSlider items={products.filter((item) => item.type === "Ванны")}/>,
    },
    {
      key: '4',
      label: `Унитазы`,
      children: <ResSlider items={products.filter((item) => item.type === "Унитазы")}/>,
    },
    {
      key: '5',
      label: `Душевые системы`,
      children: <ResSlider items={products.filter((item) => item.type === "Душевые системы")}/>,
    },
    {
      key: '6',
      label: `Смесители`,
      children: <ResSlider items={products.filter((item) => item.type === "Смесители")}/>,
    },
    {
      key: '7',
      label: `Зеркала`,
      children: <ResSlider items={products.filter((item) => item.type === "Зеркала")}/>,
    },
    {
      key: '8',
      label: `Душевые кабины`,
      children: <ResSlider items={products.filter((item) => item.type === "Душевые кабины")}/>,
    },
    {
      key: '9',
      label: `Стиральные машины`,
      children: <ResSlider items={products.filter((item) => item.type === "Стиральные машины")}/>,
    },
  ];
  return (
    <div className='for_tab'>
      <Tabs defaultActiveKey="1" items={items}  />
    </div>
  );
}

export default Tab;