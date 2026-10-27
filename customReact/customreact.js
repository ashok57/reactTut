function customRender(reactElement, container) {
  // const domElement = document.createElement(reactElelement.type);
  // domElement.innerHTML = reactElelement.children;
  // domElement.setAttribute("href", reactElelement.props.href);
  // domElement.setAttribute("target", reactElelement.props.target);

  // container.appendChild(domElement);

  
  // 1. Create the DOM element using the type property
  const domElement = document.createElement(reactElement.type);

  // 2. Set the inner text/html from children

  domElement.innerHTML = reactElement.children;

  // 3. Loop through props and set attributes dynamically

  for (const prop in reactElement.props) {
    if (prop === "children") continue;
    domElement.setAttribute(prop, reactElement.props[prop]);
  }

  // 4. Append to the container (Capital 'C')
  container.appendChild(domElement);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit google",
};

const mainContainer = document.querySelector("#root");

customRender(reactElement, mainContainer);
