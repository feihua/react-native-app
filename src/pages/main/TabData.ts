import Home from "../home/Home";
import Categories from "../categories/Categories";
import Cart from "../cart/Cart";
import Mine from "../mine/Mine";

export const tabData = [
  {
    "name": "Home",
    "component": Home,
    "label": "首页"
  },
  {
    "name": "Categories",
    "component": Categories,
    "label": "分类"
  },
  {
    "name": "Cart",
    "component": Cart,
    "label": "购物车"
  },
  {
    "name": "Mine",
    "component": Mine,
    "label": "我的"
  }
];
