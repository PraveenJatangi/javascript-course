


const reactElement={
  type:"h1",
  props:{
    href:'https://google.com',
    target:'_blank',
    class:'new'
  },
  children:'i am react new element'
}

function reactDom(reactElementProp){
const domElement=document.createElement(reactElementProp.type);
domElement.innerHTML=reactElementProp.childern;
for(const prop in reactElementProp.props){
     domElement.setAttribute(prop,reactElementProp.props[prop])
};
container

}